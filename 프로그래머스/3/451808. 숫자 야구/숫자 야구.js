function solution(n, submit) {
    // 1~9의 서로 다른 숫자 4개로 만들 수 있는 모든 경우의 수 생성
    function generateCandidates() {
        const candidates = [];
        for (let a = 1; a <= 9; a++) {
            for (let b = 1; b <= 9; b++) {
                if (b === a) continue;
                for (let c = 1; c <= 9; c++) {
                    if (c === a || c === b) continue;
                    for (let d = 1; d <= 9; d++) {
                        if (d === a || d === b || d === c) continue;
                        candidates.push([a, b, c, d]);
                    }
                }
            }
        }
        return candidates;
    }
    
    // 두 숫자를 비교하여 strike, ball 계산
    function checkMatch(secret, guess) {
        let strike = 0;
        let ball = 0;
        
        for (let i = 0; i < 4; i++) {
            if (secret[i] === guess[i]) {
                strike++;
            } else if (secret.includes(guess[i])) {
                ball++;
            }
        }
        
        return [strike, ball];
    }
    
    // 결과 문자열을 파싱 (예: "2S 1B" -> [2, 1])
    function parseResult(result) {
        const parts = result.split(' ');
        const strike = parseInt(parts[0]);
        const ball = parseInt(parts[1]);
        return [strike, ball];
    }
    
    // 배열을 숫자로 변환
    function toNumber(arr) {
        return arr[0] * 1000 + arr[1] * 100 + arr[2] * 10 + arr[3];
    }
    
    let candidates = generateCandidates();
    let queryCount = 0;
    
    while (queryCount < n && candidates.length > 1) {
        // 첫 번째 후보를 쿼리
        const guess = candidates[0];
        const guessNum = toNumber(guess);
        
        const result = submit(guessNum);
        queryCount++;
        
        const [strike, ball] = parseResult(result);
        
        // 4 STRIKE면 정답 찾음
        if (strike === 4) {
            return guessNum;
        }
        
        // 결과와 일치하지 않는 후보들 제거
        candidates = candidates.filter(candidate => {
            const [s, b] = checkMatch(candidate, guess);
            return s === strike && b === ball;
        });
    }
    
    // 마지막 남은 후보 반환
    if (candidates.length > 0) {
        return toNumber(candidates[0]);
    }
    
    return -1; // 오류 상황
}
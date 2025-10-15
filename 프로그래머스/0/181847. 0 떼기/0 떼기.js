function solution(n_str) {
    var answer = '';
    for(let i=0;i<n_str.length;i++){
        if(n_str[i]==='0'&&answer===''){
            continue;
        }
        else{
            answer+=n_str[i]
        }
    }
    return answer;
}
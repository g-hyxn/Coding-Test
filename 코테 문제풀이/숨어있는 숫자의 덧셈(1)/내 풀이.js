function solution(my_string) {
    var answer = 0;
    for(let i of my_string){
        if (!isNaN(i)) {
            answer += +i; 
        }
    }
    return answer;
}
#include <stdio.h>
int main(){
    int n =0;
    scanf("%d",&n);
    switch(n/10){
        case 10: printf("%s","A");
        break;
        case 9: printf("%s","A");
        break;
        case 8: printf("%s","B");
        break;
        case 7: printf("%s","C");
        break;
        case 6: printf("%s","D");
        break;
        default: printf("%s","F");
    }
}
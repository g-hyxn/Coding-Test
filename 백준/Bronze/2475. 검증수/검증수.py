nums =list(map(int,input().split()))
print(sum(n*n for n in nums)%10)
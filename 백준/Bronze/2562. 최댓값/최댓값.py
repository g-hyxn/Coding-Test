num = []
max = 0
n = 0
for i in range(9):
    num.append(int(input()))
for i in range(9):
    if(max<num[i]):
        max=num[i]
        n=i
print(max)
print(n+1)
a=int(input());
b=int(input());
c=int(input());
num = a*b*c
nl = list(map(int, str(num)))
for i in range (10):
    print(nl.count(i))
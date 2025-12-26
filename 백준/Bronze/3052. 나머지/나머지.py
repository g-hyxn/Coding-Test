arr = [int(input()) for i in range(10)]

for i in range(10):
    arr[i]=arr[i]%42
s=set()
for i in range(10):
    s.add(arr[i])
a= len(s)
print(a)

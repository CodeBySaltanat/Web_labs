import math

x = int(input())
count = 0

for i in range(1, int(math.isqrt(x)) + 1):
    if x % i == 0:
        if i * i == x:
            count += 1
        else:
            count += 2  

print(count)

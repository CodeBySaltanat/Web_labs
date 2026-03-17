def xor(x, y):
    return (x or y) and not (x and y)

x, y = map(int, input().split())
result = xor(bool(x), bool(y))  
print(int(result))              

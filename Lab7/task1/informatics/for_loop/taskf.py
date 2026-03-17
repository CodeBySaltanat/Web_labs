x = input()
reversed_x = x[::-1]         
reversed_x = reversed_x.lstrip('0')  

if reversed_x == '':
    print(0)  
else:
    print(reversed_x)

def round_sum(a, b, c):
  if a%10 >= 5:
    a += (10 - a%10)
  else:
    a -= a%10 
    
  if b%10 >= 5:
    b += (10 - b%10)
  else:
    b -= b%10 
    
  if c%10 >= 5:
    c += (10 - c%10)
  else:
    c -= c%10 
    
  return a+b+c
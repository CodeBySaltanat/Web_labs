#Nested lists
students = []

n = int(input())

for _ in range(n):
    name = input()
    score = float(input())
    students.append([name, score])

unique_scores = sorted(set([s[1] for s in students]))

second_lowest = unique_scores[1]

second_lowest_students = [s[0] for s in students if s[1] == second_lowest]

for name in sorted(second_lowest_students):
    print(name)
# 1
# str = 'a:b:c:d'
# list = str.split(':')
# str = ('#').join(list)
# print(str)

# 2
# a = {'A':90, 'B':80}
# a['C'] = 70
# print(a['C'])

# 3
# a = [1, 2, 3]
# a += [4, 5]
# print(a[3])

# b = [1, 2, 3]
# b.extend([4, 5])
# print(b[3])

# 4
# A = [20, 55, 67, 82, 45, 33, 90, 87, 100, 25]
# _sum = 0
# for i in A:
#     if i >= 50:
#         _sum += i
# print(_sum)

# 5
# def pibo(num):
#     if num == 1:
#         print(0)
#         return
#     one = 0
#     two = 1
#     result = 0
#     sum = 1
#     i = 2
#     while i < num:
#         result = one + two
#         if i != num - 1:
#             one, two = two, result
#         sum += result
#         i += 1

#     print(sum)

# pibo()

# 6
# nums = '65, 45, 2, 3, 45, 8'
# sum = 0
# for i in nums.split(','):
#     sum += int(i)

# print(sum)

# 7
# num = 4
# for i in range(1, 10):
#     print(num*i, end=' ')

# 3과 5의 배수 합하기
# num = 10
# sum = 0
# i = 1
# while i < num:
#     if not (i % 3):
#         sum += i
#         i += 1
#         continue
#     if not (i % 5):
#         sum += i
#     i += 1
# print(sum)

# 게시판 페이징하기
# def getTotalPage(m, n):
#     if m % n:
#         total = (m//n)+1
#     else:
#         total = (m//n)
#     return total
# total = getTotalPage(30, 10)
# print(total)

# 간단한 메모장 만들기
import sys

option = sys.argv[1]
memo = sys.argv[2]


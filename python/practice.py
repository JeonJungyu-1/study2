# 입력받은 숫자만큼 반복하기
# num = 5
# i = 0
# while i < num:
#     print(num)
#     i += 1

# 제곱표
# num = 5
# i = 1
# while i <= num:
#     print(i, i*i)
#     i += 1

# 얌체공
# i = 0
# num = 100
# while i < 10:
#     num *= 0.6
#     print(i, round(num, 4))
#     i += 1

# 결과 맞추기
# number = 358

# rem = rev = 0
# while number >= 1:
#     rem = number % 10
#     rev = rev * 10 + rem
#     number = number // 10
# print(rev)

# 숫자 읽기
# num = input()
# if num == '1':
#     print('일')
# elif num == '2':
#     print('투')
# elif num == '3':
#     print('삼')


# 양수만 덧셈하기
# sum = 0
# while True:
#     num = int(input())
#     if num < 0:
#         break
#     sum += num
# print(sum)

# 윤년 판별하기
# year = int(input('연도를 입력해주세요.'))
# if (year % 4) != 0:
#     print('평년')
# elif (year % 100) != 0:
#     print('윤년')
# elif (year % 400) != 0:
#     print('평년')
# elif (year % 400) == 0:
#     print('윤년')

# 입력받은 숫자만큼 반복하기
# num = int(input())

# for i in range(0, num):
#     print('', num)

# 제곱표
# num = int(input())

# for i in range(1, num+1):
#     print(i, i*i)

# 화학 실험실
# tem = input()
# low, high = tem.split()
# while True:
#     num = int(input())
#     if num < int(low) or num > int(high) or num == -999:
#         print('Alert!')
#         break
#     print('Nothing to report')

# 구구단
# def gugudan(num):
#     for i in range(1, 10):
#         print(num, '*',  i, '=', num*i)
#         print(f'{m} * {n} = {m*n:2d}')

# for i in range(1, 10):
#     gugudan(i)

# 숫자 읽기 함수
# def korean_number(num):
#     if num == 1:
#         print('일')
#     elif num == 2:
#         print('이')
#     elif num == 3:
#         print('삼')

# 함수 정의하기
# def triple(x):
#     sum = x
#     for i in range(0, 2):
#         sum += x
#     print(sum)
# triple('x')

# def age(x):
#     from datetime import datetime
#     todayYear = datetime.today().year
#     return todayYear - x + 1

# birthYear = int(input('태어난 해 '))
# print(age(birthYear))

# 단리 이자 계산
# def simple_interest(p, r, t):
#     return p * r * t
# print(simple_interest(10000000, 0.03875, 5))
# def simple_interest_amount(p, r, t):
#     return p * (1 + r * t)

# 복리 이자 계산
# def compound_interest_amount(p, r, t, n):
#     return p * (1 + r / n) ** (n * t)
# print(compound_interest_amount(1500000, 0.043, 6, 4))

# 회문 판별 함수
# def palindrome(x):
#     x = x.lower()
#     x = x.replace(' ', '')
#     if x == x[::-1]:
#         return True
#     else:
#         return False
# print(palindrome('my Gym'))

# 각 자리 숫자의 합
# def sumOfDigits():
#     num = input()
#     sum = 0
#     for i in num:
#         sum += int(i)
#     return sum
# print(sumOfDigits())

# 줄기와 잎 그림
# score = [0, 0, 2, 4, 7, 7, 9]
# score += [11, 11 ,13, 18]
# score += [20]

# stem_leaf = [[], [], []]
# for i in score:
#     d, m = divmod(i, 10)
#     stem_leaf[d].append(m)
# print(stem_leaf)

# 소수 구하기
# def primeNumber():
#     num = 10
#     L = list(range(2, num + 1))
#     i = 2
#     while i < num + 1:
#         for j in range(2, i + 1):
#             if i % j == 0:
#                 break
#             L.remove(i)
#         i += 1
# print(primeNumber())

# 진법 변환
# num = int(input())
# bi = bin(13).split()
# print(bi)

# 주사위 눈의 합
# dice1 = (1, 2, 3, 4, 5, 6)
# dice2 = (2, 3, 5, 7, 11, 13)

# _sum = set()

# for i in dice1:
#     for j in dice2:
#         _sum.add(i + j)
# print(_sum)

# 모듈
# import calendar
# print(dir(calendar))

# a = [x for x in dir(calendar) if 'leap' in x]
# print(a)

# 직각삼각형의 빗변 길이
# import math
# print(math.sqrt(3 ** 2 + 4 ** 2))

# def hypotenuse(a, b):
#     return round(math.sqrt(a ** 2 + b ** 2), 2)

# print(hypotenuse(3, 4))

# calendar, tkinter
# import calendar
# c = calendar.TextCalendar()
# m = c.formatmonth(2021, 2)
# print(m)

# 랜덤 모듈
# import random
# print(random.random())



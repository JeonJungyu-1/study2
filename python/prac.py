# 130
# import requests
# btc = requests.get("https://api.bithumb.com/public/ticker/").json()['data']
# if (int(btc['max_price']) - int(btc['min_price'])) + int(btc['opening_price']) > int(btc['max_price']):
#     print('상승장')
# else:
#     print('하락장')
# 136
# for i in [10, 20, 30]:
#     print(i)




# class Human:
#     def __init__(self, name, age, gender):
#         self.name = name
#         self.age = age
#         self.gender = gender
#         print('응애응애')
#     def voice(self):
#         print('응애응애')
# 253
# areum = Human()
# 255
# areum = Human('아름', 25, '여자')
# 256
# class OMG:
#     def print(self):
#         print('Oh my god')
# mystock = OMG()
# mystock.print()
# 261
# class Stock:
#     def __init__(self, name, code, per, pbr, revenue):
#         self.name = name
#         self.code = code
#         self.per = per
#         self.pbr = pbr
#         self.revenue = revenue
    
#     def set_name(self, name):
#         self.name = name
    
#     def set_code(self, code):
#         self.code = code

#     def get_name(self):
#         return self.name
    
#     def get_code(self):
#         return self.code

# samsung = Stock('sam', '005930', 15.79, 1.33, 2.83)
# hyunda = Stock('hyunda', '005380', 8.70, 0.35, 4.27)
# lg = Stock('lg', '066570', 317.34, 0.69, 1.37)

# list = []
# list.append(samsung)
# list.append(hyunda)
# list.append(lg)

# print(list)

# for i in list:
#     print(i.code, i.per)

# 271
# import random
# class Account:
#     # class variable
#     account_count = 0

#     def __init__(self, name, money):
#         self.name = name
#         self.money = money
#         self.bank = 'SC은행'
#         num1 = random.randint(0, 999)
#         num2 = random.randint(0, 99)
#         num3 = random.randint(0, 999999)

#         num1 = str(num1).zfill(3)
#         num2 = str(num2).zfill(2)
#         num3 = str(num3).zfill(6)
#         self.num = num1 + '-' + num2 + '-' + num3

#         Account.account_count += 1

#     @classmethod
#     def get_account_num(self):
#         print(self.account_count)

#     def deposit(self, money):
#         if money >= 1:
#             self.money += money
#         else:
#             print("1원이상 입금해주세요")

# kim = Account('kim', 100)
# lee = Account('lee', 100)
# Account.get_account_num()
# kim.deposit(1)
# print(kim.money)

# 281
class Car:
    def __init__(self, wheel, price):
        self.wheel = wheel
        self.price = price
    
class Bicycle(Car):
    def __init__(self, wheel, price, run):
        super().__init__(wheel, price)
        self.run = run

    def info(self):
        print(f'바퀴수 : {self.wheel}')
        print(f'가격 : {self.price}')
    

bi = Bicycle(2, 100, 1)
bi.info()

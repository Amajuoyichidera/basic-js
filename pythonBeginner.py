import random
# def sum(a,b):
#     return a + b

# print(sum(1,3))

# guessing game in python
# randomNum = random.randint(1, 50)
# score = 0
# while(True):
#     guessedNum = int(input('Guess a number between 1 and 50, enter 0 to stop the game: '))
#     if(guessedNum == 0):
#         print('Game Over: your score is ' + str(score))
#         break

#     if(guessedNum == randomNum):
#         print('Correct')
#         score = score + 1
#         randomNum = random.randint(1, 50)
#     elif(guessedNum > randomNum):
#         print('Number guessed is greater')
#     else:
#         print('Number too low')

# def calculator(num1,num2,operator):
#     if(operator == '+'):
#         return num1 + num2
#     elif(operator == '-'):
#         return num1 - num2
#     elif(operator == '*'):
#         return num1 * num2
#     elif(operator == '/'):
#         return num1 / num2
#     else:
#         return 'Invalid Operator'
    
# num1 = int(input('enter num1: '))
# num2 = int(input('enter num2: '))
# operator = input('enter operator: ')
# print(calculator(num1, num2,operator))

# Task 1
# The number of confirmed COVID-19 cases in selected countries is shown in the table below:

# Burundi	694
# Ethiopia	113295
# Ghana	52198
# Kenya	88380
# Nigeria	68937
# Rwanda	6129
# Somalia	4525
# South Sudan	3166
# Sudan	19196
# Uganda	22499
# In this task, we are going to practice using and manipulating dictionaries.

# Create a dictionary for the given data and name it COVID_19

# How many keys are in the data? assign your answer to a variable called num_keys.

# Remove Nigeria from the data

# Add Tanzania with the value  509


# solution
# COVID_19 = {'Burundi': 694,
#     'Ethiopia': 113295, 'Ghana': 52198, 'Kenya': 88380,
#     'Nigeria' :68937, 'Rwanda':	6129, 'Somalia': 4525, 
#     'South Sudan': 3166, 'Sudan': 19196,'Uganda': 22499    }

# num_keys = len(COVID_19)
# print(COVID_19.keys())
# del COVID_19['Nigeria']
# print(COVID_19.keys())
# COVID_19.update({'Tanzania': 509})
# print(COVID_19.keys())

# Task 2
# Consider the dictionary:

food = {
    "fruits": ["apples", "oranges", "pears", "mangoes"],
    "vegetables": ["tomatoes", "lettuce", "spinach", "green peppers"],
    "meat": ["chicken", "fish", "beef", "ostrich"],
    "dairy": ["yogurt", "milk", "cheese", "ice-cream"]
}

# Question 1: How many keys does the dictionary food have?
# Question 2: List the values in food
# Question 3: How do you access "spinach" from food?
# Question 4: How do you add "grapes" to the list of fruits in food?

# solutions
# dict_key = len(food)
# print(dict_key)
# print(food.values())
# print(food['vegetables'][2])
# food["fruits"].append('grapes')
# print(food["fruits"])

# for item in food["fruits"]:
#     print(item)

# for count in range(1, 11):
#     print(count)

# num = int(input('Enter number: '))
# for count in range(1, 13):
#     result = num * count
#     print(f'{num} x {count} = {result}')

combo = 0
for count in range(1, 100):
    combo = combo + count
print(f'{combo}')
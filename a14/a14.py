# Part A: Create a function that can check If a number is Prime, if it’s a prime
# numer, return Ture, if not return False
inputNumber = int(input("Enter a number: "))
def checkIfPrime(inputNumber):
  if inputNumber > 1:
      for i in range(2, inputNumber):
          if (inputNumber % i) == 0:
              return False
              break
      else:
          return True
  else:
      return False
print(checkIfPrime(inputNumber))

# Part B: define a function as below
# Note:
# shoolId can be any number
# *firstName is a list for First Name values, **last_Email is a dictionary for Last
# name and Email values.
# Users can pass any length of list to *firstName, and any length of dictionary to
# **last_Email. Expected result (you can also create different way to print all the
# values, as long as they make senses to users):
def someFunction(schoolId = 10001,*firstName, **last_Email):
  # print(schoolId)
  for i,j in last_Email.items():
    print(schoolId,"Name= %s, Email= %s"%(i,j))

someFunction(John="wjohn@gmail.com", Brad="BB email", Crag ="CC CCemail" )
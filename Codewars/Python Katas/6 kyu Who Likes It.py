"""
Description:

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

Note: For 4 or more names, the number in "and 2 others" simply increases.

"""

# Revised Solution
def likes(names):
    d = {
        0: 'no one likes this',
        1: '{} likes this',
        2: '{} and {} like this',
        3: '{}, {} and {} like this',
        4: '{}, {} and {other} others like this'
    }
    
    length = len(names)
    
    return d[min(4, length)].format(*names, other= length - 2)


# First Solution
def likes(names):
    length = len(names)
    
    if length == 0:
        return 'no one likes this'
    elif length >= 4:
        return f'{names[0]}, {names[1]} and {length - 2} others like this'
    elif length == 3:
        return f'{names[0]}, {names[1]} and {names[2]} like this'
    elif length == 2:
        return f'{names[0]} and {names[1]} like this'
    elif length == 1:
        return f'{names[0]} likes this'



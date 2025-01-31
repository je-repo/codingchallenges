=begin
Description:

Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
Examples:

Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

=end

# Revised solution
def descending_order(n)
    n.digits.sort.reverse.join.to_i
  end


# First Solution
def descending_order(n)
    puts n.digits.reverse.join.to_i
    n.digits.sort { |a, b| b <=> a }.join.to_i
  end



/*
Description:

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

*/

// Revised solution
function abbrevName(name){

    const lst = name.split(" ").map(name => name[0].toUpperCase());
    return lst.join(".");
  
  }


// First solution
function abbrevName(name){

    const lst = name.split(" ").map(name => name[0].toUpperCase());
    let result = lst.join(".");
    
    return result;
  }


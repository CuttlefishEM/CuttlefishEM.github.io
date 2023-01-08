/* 'Console' is a keyword that refers to an object, i.e. a collection of data and actions, that we can use in our code. Keywords are words that are built into the Javascript language, so the computer recognises them and treats them specially. Methods, or actions, consist of a dot operator followed by a word and then parentheses. There are built in objects but you can also make your own */

console.log()

console.log(Math.random()); // Prints a random number between 0 and 1 

/* The arithmetic operators include : */

Add : +
Subtract : -
Multiply : *
Divide : /
Remainder (or Modulo) : %

console.log(11 % 3); //prints 2

/* String concatenation uses the '+' arithmetic operator to append strings to one another */

console.log('hi' + ' ' + 'ya'); //prints 'hi ya'

/* Properties can be used by appending a dot operator and property name to retrieve property information about data */

console.log('Hello'.length); //Prints 5

/* Variables can be stored using 'let' or 'const'. Use 'let' if the variable can change and use 'const' if the variable can't change. If using 'let' the variable can be created without an initialising value. If using 'const' the initialising value must be set. Examples include : */

let variable1;
let variable1 = 'Value';

const variable2 = 'Value';

/* A conditional statement checks a specific condition and performs a task based on the condition. With an 'if' statement a task will be performed if a condition is met. The 'if' keyword is followed by a set of parentheses which is followed by a 'code block', also known as a 'code statement', indicated by a set of curly braces. Inside the parentheses a condition is provided that evaluates to true or false. If the condition evaluates to true the code inside the curly braces executes. If the condition evaluates to false the code inside the curly braces does NOT execute.*/

if(true) {
    console.log('This message will print');
}

/* In the case of an 'if-else' statement a block of code will execute if the condition evaluates to true and a different block of code will execute if the condition evaluates to false.*/

if (false) {
        console.log('The code in this block will not run');
    } else {
        console.log('But the code in this block will run');
    }   

/* When using conditional statements, we may need to use different types of operators to compare values. These are called 'Comparison Operators'. All comparison statements will evaluate to true or false and they compare the right value to the left value. Some examples include */

- Less than : <
- Greater than : >
- Less than or equal to : <=
- Greater than or equal to : >=
- Is equal to : ===
- Is not equal to : !==

/* Logical operators work with Boolean values. There are three logical operators. */

The and operator : &&
The or operator : ||
The not operator (otherwise known as the bang operator) : !

/* When using the and operator, both conditions must evaluate to true for the entire condition to evaluate to true and for the code to therefore execute. If we only care about either condition being true for the entire condition to evaluate to true then we can use an or operator. */

if (stopLight === 'green' && pedestrians === 0) {
    console.log('Go!');
} else {
    console.log('Stop!');
}

if (day === 'Saturday' || day === 'Sunday') {
    console.log('Enjoy the weekend!');
} else {
    console.log('Do some work!');
}

/* The not operator reverses, or negates, the value of a boolean. Essentially it will take a true value and pass back false, or vice versa. For example: */

let excited = true
console.log(!excited); // Prints False

/* mathematical assignment operators can be used to rewrite equations such as : */

let w = 4;
w = w + 1;

// this can be rewritten as 

let w = 4;
w += 1;

console.log(w); // Prints 5

// This can be used with the other arithmetic operators

/* The increment and decrement operator can increase or decrease the value of the variable by 1 */

let a = 10;
a++;
console.log(a); // Prints 11

/* You can concatenate variables into a string */

let myPet = 'Armadillo';
console.log('I own a pet ' + myPet + '.');  // Prints 'I own a pet Armadillo.'

/* Alternatively you can interpolate a variable into a string using template literals with a back tick around the string */

const myPet = 'Armadillo';
console.log(`I own a pet ${myPet}.`); // Prints 'I own a pet Armadillo.'

/* The typeof operator checks the value to its right and returns, or passes back, a string of the data type. */

const unknown1 = 'foo';
console.log(typeof unknown1); // Prints 'string'

/* Sometimes, you’ll want to check if a variable exists and you won’t necessarily want it to equal a specific value — you’ll only check to see if the variable has been assigned a value. The code block in the if statement will run because myVariable has a truthy value; even though the value of myVariable is not explicitly the value true, when used in a boolean or conditional context, it evaluates to true because it has been assigned a non-falsy value. */

let myVariable = 'I exist';

if (myVariable) {
    console.log(myVariable);
} else {
    console.log('The variable does not exist');
}

/* The list of falsy values includes */

0
Empty strings like "" or ''
null
undefined
NaN

/* Truthy and falsy evaluations can be used to create shorthands. */

let username = '';
let defaultName;

if (username) {
    defaultName=username;
} else {
    defaultName="stranger";
}

console.log(defaultName); // Prints : Stranger

/* This can be shortened using logical operators as follows. This is called a 'Short Circuit Evaluation' */

let username = '';
let defaultName = username || 'Stranger';

console.log(defaultName); // Prints : Stranger


/* A 'Ternary Operator' can also be used to simplify an 'if-else' statement, as follows */

let isNightTime = true;

if(isNightTime) {
    console.log('Turn on the lights');
} else {
    console.log('Turn off the lights');
}

/* This can be converted to the following. The condition 'isNightTime' is provided before the '?'. Two seperate expressions then follow and are seperated by a colon. If the condition evaluates to 'true' the first expression executes. If the condition evaluates to 'false' the second expression executes.*/

isNightTime ? console.log('Turn on the lights') : console.log('Turn off the lights');

/* Instead of an 'if-else' statement we can use an 'else-if' statement. This allows for more than two possible outcomes. You can add as many 'else-if' statements as you like to make more complex conditionals. It is added between an 'if' and an 'else' statement. */

let groceryItem = 'papaya';
 
if (groceryItem === 'tomato') {
  console.log('Tomatoes are $0.49');
} else if (groceryItem === 'papaya'){
  console.log('Papayas are $1.29');
} else {
  console.log('Invalid item');
}

/* A 'switch statement' provides an alternative to 'else-if' statements that is easier to read and write if there are large numbers of values needing to be checked. The 'switch' keyword initiates the statement and is followed by parentheses containing the value that each case will compare. Inside the curly braves block there are multiple 'case's. The 'case' keyword checks if the expression matches the specified value that comes after it. The 'break' keyword tells the computer to exit the block and not execute any more code. At the end of the 'switch' statement there is a 'default' statement. If none of the cases are true, then the code in the default statement will run. */

let groceryItem = 'papaya';
 
switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}
 
// Prints 'Papayas are $1.29'

/* In programming, we often use code to perform a specific task multiple times. Instead of rewriting the same code, we can group a block of code together and associate it with one task, then we can reuse that block of code whenever we need to perform the task again. We achieve this by creating a function. A function is a reusable block of code that groups together a sequence of statements to perform a specific task. */

/* One way to create a function is by using a 'function declaration'. A 'function declaration' binds a function to a name, aka an identifier. A 'function declaration' consists of a 'function' keyword followed by the name / identifier of the function followed by parentheses. This is all followed by a function body enclosed by curly braces which contains the block of statements required to perform a task. 

We should also be aware of the hoisting feature in JavaScript which allows access to function declarations before they’re defined. Notice how hoisting allowed greetWorld() to be called before the greetWorld() function was defined! Since hoisting isn’t considered good practice, we simply want you to be aware of this feature.*/


greetWorld(); // Output: Hello, World!
 
function greetWorld() {
  console.log('Hello, World!');
}

/* To call a function in your code, you type the function name followed by parentheses. This function call executes the function body, or all of the statements between the curly braces in the function declaration. */

greetWorld();

/* So far, the functions we’ve created execute a task without an input. However, some functions can take inputs and use the inputs to perform a task. When declaring a function, we can specify its parameters. Parameters allow functions to accept input(s) and perform a task using the input(s). We use parameters as placeholders for information that will be passed to the function when it is called.

The parameters go in between the parentheses of the function name / identifier and they are then applied as if they are variables within the function body */

function calculateArea (width, height) {
    console.log(width * height)
}

/* When calling a function that has parameters, we specify the values in the parentheses that follow the function name. The values that are passed to the function when it is called are called arguments. Arguments can be passed to the function as values or variables. Notice that the order in which arguments are passed and assigned follows the order that the parameters are declared. */

calculateArea(10,6);

// or

const rootWidth = 10;
const rootHeight = 6;

calculateArea(rootWidth, rootHeight);

/* One of the features added in ES6 is the ability to use default parameters. Default parameters allow parameters to have a predetermined value in case there is no argument passed into the function or if the argument is undefined when called. In the example below we used the = operator to assign the parameter name a default value of 'stranger'. This is useful to have in case we ever want to include a non-personalized default greeting! 

When the code calls greeting('Nick') the value of the argument is passed in and, 'Nick', will override the default parameter of 'stranger' to log 'Hello, Nick!' to the console.

When there isn’t an argument passed into greeting(), the default value of 'stranger' is used, and 'Hello, stranger!' is logged to the console.*/

function greeting (name = 'stranger') {
    console.log(`Hello, ${name}!`)
  }
   
  greeting('Nick') // Output: Hello, Nick!
  greeting() // Output: Hello, stranger!

/* When a function is called, the computer will run through the function’s code and evaluate the result of calling the function. By default that resulting value is undefined.

To pass back information from the function call, we use a return statement. To create a return statement, we use the return keyword followed by the value that we wish to return. If the value is omitted, undefined is returned instead. 

When a return statement is used in a function body, the execution of the function is stopped and the code that follows it will not be executed. Look at the example below.

If an argument for width or height is less than 0, then rectangleArea() will return 'You need positive integers to calculate area!'. The second return statement width * height will not run.

The return keyword is powerful because it allows functions to produce an output. We can then save the output to a variable for later use. */

function rectangleArea(width, height) {
    if (width < 0 || height < 0) {
      return 'You need positive integers to calculate area!';
    }
    return width * height;
  }

  // to save this to a variable 

  function monitorCount (rows, columns) {
    return (rows * columns);
  };
  
  const numOfMonitors = monitorCount (5,4);
  
  console.log(numOfMonitors);

/* We can also use the return value of a function inside another function. These functions being called within another function are often referred to as helper functions. Since each function is carrying out a specific task, it makes our code easier to read and debug if necessary.

For example, if we wanted to define a function that converts the temperature from Celsius to Fahrenheit, we could write two functions as follows 

In the example below :

1. getFahrenheit() is called and 15 is passed as an argument.

2. The code block inside of getFahrenheit() calls multiplyByNineFifths() and passes 15 as an argument.

3. multiplyByNineFifths() takes the argument of 15 for the number parameter.

4. The code block inside of multiplyByNineFifths() function multiplies 15 by (9/5), which evaluates to 27.

5. 27 is returned back to the function call in getFahrenheit().

6. getFahrenheit() continues to execute. It adds 32 to 27, which evaluates to 59.

7. Finally, 59 is returned back to the function call getFahrenheit(15).

We can use functions to section off small bits of logic or tasks, then use them when we need to. Writing helper functions can help take large and difficult tasks and break them into smaller and more manageable tasks.*/

function multiplyByNineFifths(number) {
    return number * (9/5);
  };
   
  function getFahrenheit(celsius) {
    return multiplyByNineFifths(celsius) + 32;
  };
   
  getFahrenheit(15); // Returns 59

/* Another way to define a function is to use a function expression. To define a function inside an expression, we can use the function keyword. In a function expression, the function name is usually omitted. A function with no name is called an anonymous function. A function expression is often stored in a variable in order to refer to it.

To declare a function expression:

1. Declare a variable to make the variable’s name be the name, or identifier, of your function. Since the release of ES6, it is common practice to use const as the keyword to declare the variable.

2. Assign as that variable’s value an anonymous function created by using the function keyword followed by a set of parentheses with possible parameters. Then a set of curly braces that contain the function body. */

const calculateArea = function (width, height) {
    const area = width * height;
    return area;
}

/* To invoke a function expression, write the name of the variable in which the function is stored followed by parentheses enclosing any arguments being passed into the function.

Unlike function declarations, function expressions are not hoisted so they cannot be called before they are defined.*/

variableName (argument1, argument2);

/* Arrow functions remove the need to type out the keyword function every time you need to create a function. Instead, you first include the parameters inside the ( ) and then add an arrow => that points to the function body surrounded in { } like this: */

const rectangleArea = (width, height) => {
    let area = width * height;
    return area;
  };

/* JavaScript also provides several ways to refactor arrow function syntax. The most condensed form of the function is known as concise body. We’ll explore a few of these techniques below:

Functions that take only a single parameter do not need that parameter to be enclosed in parentheses. However, if a function takes zero or multiple parameters, parentheses are required. */

const squareNum = (num) => {
    return num * num;
  };

// Can be refactored to 

const squareNum = num => num * num;

/* The parentheses around num have been removed, since it has a single parameter.
The curly braces { } have been removed since the function consists of a single-line block.
The return keyword has been removed since the function consists of a single-line block. */


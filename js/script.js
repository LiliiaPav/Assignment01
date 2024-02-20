// STEP 1
// let someMonth
// function theMonth(){}
// let currentMonth
// let summerMonth
// let MyLibraryFunction


// STEP 2 Give me an example of a numeric literal expression, a string literal expression, a Boolean literal expression, and a null literal expression.
// let pi=3.14; //a numeric literal expression: 3.14
// let hello='Hello World!'; //a string literal expression: 'Hello World!'
// let isStudent=true; //a Boolean literal expression: true, false
// let score = null; //a null literal expression: null


// STEP 3 Give me two examples of complex / variable expressions.
// let circle4 = 2 * Math.PI * 4;
// let myExpr = circle4 / 2; 


// STEP 4 Declare (but do not assign) 9 variables for the following identifiers: First Name, Last Name, Address, City, State, Zip Code, Your Age, Referral Source, May We Contact You. 
// let firstName, lastName, address, city, state, zipCode;
// let yourAge;
// let strReferralSource
// let boolMayWeContactYou;


// STEP 5 Take the 3 of the 9 variables that you created above and demonstrate 3 ways for declaring and assigning values to those variables.
// let firstName = 'Tom', lastName = 'Sawyer';
// let yourAge;
// yourAge= 12;
// let boolMayWeContactYou = false;


// STEP 6 Create a variable. Add a number and a string and display the coerced result in the browser’s console window.
// let coercedStr;
// coercedStr = 12 + '12'
// document.write(coercedStr);


// STEP 7 Create two variables. For the first variable, add a Boolean and a string and display the coerced result. For the second variable, add a number and a Boolean and display the coerced result.
// let first;
// let second;
// first=true + "String";
// document.write("First: ", first, "\n" );
// second=1 + true;
// document.write("Second: ", second);


// STEP 8 Is the following string literal valid? If not, how would you fix it? 
// it's not valid because a quote in "I'm" will close the string but we can fix ot using `` OR I\'m
// let someString = `Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."`
// let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."'
// console.log(someString)


// STEP 9 Create a variable that produces a null value in the console window. Then, create a variable that produces an undefined value in the console window.
// const a = null;
// console.log(a);
// let myObj={};
// console.log(myObj.name);


// STEP 10 Use the unary typeof operator on various literals to return the following types within the console window: string, number, Boolean, object, and undefined.
// console.log(typeof("Hello, World!"));//string
// console.log(typeof(84));//number
// console.log(typeof(true));//Boolean
// console.log(typeof({}));//object
// console.log(typeof(someVar));//undefined


// STEP 11 Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows: Hello Zak Ruvalcaba, welcome to the JavaScript class!
// alert('Hello '+ "Liliia Pavliuchenkova"+ ', welcome to the JavaScript class!')


// STEP 12 Declare a variable called name and set it equal to your name. Substitute your name in the previous alert string with the variable instead.
// const name='Liliia';
// window.alert('Hello '+ name +", welcome to the JavaScript class! ");


// STEP 13 Declare a variable called course and set it equal to “JavaScript”. Rework your alert string so that it displays the string of text but using the variables as opposed to hard coded text.
// const course='JavaScript';
// window.alert('Hello Liliia, welcome to the ' +  course + " class! ");


// STEP 14 Rework the above string so that a line break is added right before the word “Welcome”. 
// const course='JavaScript';
// window.alert('Hello Liliia.\nWelcome to the ' +  course + " class! ");

// STEP 15 Replace the hardcoded string of your name with a prompt that asks the user for their name. The prompt’s response will now be captured in the name variable.
// const course='JavaScript';
// let userName=prompt("What is your name? ");
// window.alert(`Hello ${userName}.\nWelcome to the ${course} class! `);


// STEP 16 Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are taking. The prompt’s response will now be captured in the course variable.
// const course=prompt("What class are you taken? ");
// window.alert(`Hello Liliia.\nWelcome to the ${course} class! `);


// STEP 17 Declare a variable called x and assign it a value of 10. Declare a variable called y and assign it a value of 20. Display the sum of those two numbers in the console window.
// const x = 10;
// const y = 20;
// console.log('The sum of two numbers is' , x+y);


// STEP 18 Declare a variable called x and assign it a value of 20. Add and assign 20 to that variable and display the result in the console window. The result should be 40.
// let x =20;
// x+=20;
// console.log(x);


// STEP 19 Declare a variable called x and assign it a value of 20. Multiply and assign 5 to that variable and display the result in the console window. The result should be 100.
// let x=20;
// console.log(x*5);


// STEP 20 Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3. Divide and assign 1 to that variable and display the result in the console window. The result should be 2. If you got 6.66 try again.
// let x = 20 % 3 ;
// x/=1;
// console.log(x);


// STEP 21 Using a set of Comparison and Logical operators, write an application that evaluates to true and displays the result within the console window.
// let myObj=['a', 'b', 'c' ];
// console.log(myObj.length===3 || myObj===0);


// STEP 22 Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result within the console window. The application cannot use the same operators used in the previous application.
// let myObj=[1, 2, 3 ];
// console.log(myObj.length>3 && ar[0]<1);

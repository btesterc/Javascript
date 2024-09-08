// ---------------- Primitive Variables -----------------

// const monthlyRent = 500;

// let yearlyRent = monthlyRent * 12;

// console.log(yearlyRent, monthlyRent);


// yearlyRent = 1;

// console.log(yearlyRent);


// const firstName = "Brian";
// const lastName = "Holt";

// const sentence = `Hello ${firstName} ${lastName}! How are you !?`;

// console.log(sentence);


// const isTheSkyBlue = true;

// console.log(isTheSkyBlue);

// let myName = "Brian";
// myName= 15;

// myName = true;

// console.log(myName);

// const num = 5.0000001;

// console.log(num + 1.123 / 2);


// --------------Konditions----------------

// const isSkyBlue = false;

// if (isSkyBlue) {
//     console.log("the sky is blue!");
// }   else {
//     console.log("the sky is .. not blue?");
// }

// let greeding ;

// if (isSkyBlue) {
//     greeding = "it must be nice weather";
// } else {
//     greeding = "it must be bad weather";
// }
 
// console.log(greeding);


// if (2 + 2 === 4) {
//     console.log ("hooray! Math still works") 
// } else {
//     console.log("uh.panic?");
// }



// const frinendsatYourParty = 3;

// if (frinendsatYourParty === 0) {
//     console.log("Cool. now I have all the nachos to myself");
// } else if (frinendsatYourParty <= 4) {
//     console.log("Amount to play some Mario Kart");
// } else {
//     console.log("Woooooo. play the dance  music");
// }

// -------------- Loops --------------


// let friendsAtYourParty = 0;

// // while (friendsAtYourParty < 10) {

// //     // this is commet linne

// //     /* everthing is here will be commented */

// //     console.log(friendsAtYourParty);
// //     // friendsAtYourParty = friendsAtYourParty + 1;
// //     friendsAtYourParty += 1;
// //     friendsAtYourParty++;
// //     ++friendsAtYourParty;

// // }

// // console.log(friendsAtYourParty);

// for (let i = 0; i<10; i++) {
//     console.log(i)
//     friendsAtYourParty++;
// }
// console.log(friendsAtYourParty)


// ------------------FUnctions and Parameters -------------------------

// function add(num1, num2) {
//     return num1 + num2;
// }

// console.log(add(5,10));
// const finalAnswer = add(7,12);
// console.log(finalAnswer);


// function giveMeFive() {
//     return 5
// }

// console.log(giveMeFive());


// function greet(firstName, lastName, honorific, greeting) {
//     return `${greeting} ${honorific} ${lastName}! I’m extremely pleased you could join us, ${firstName}! I hope you enjoy your stay, ${honorific} ${lastName}.`;
//   }
  
//   console.log(greet("Brian", "Holt", "Lord", "Salutations"));
//   console.log(greet("Jack", "Sparrow", "Captain", "A-hoy"));



//   function addFive(number) {
//     const someVariable = "you can't see me outside this function";
//     return number + 5;
//   }
  
// addFive(10);
// console.log(someVariable);


// const myHomeCity = "Salt Lake City";
// const myHomeState = "Utah";
// const myHomeCountry = "USA";

// function logOutYourHome(city, state, country) {
//   console.log(`You are from ${city}, ${state} ${country}.`);
// }

// logOutYourHome(myHomeCity, myHomeState, myHomeCountry);


// const A = "A";
// let F;

// function doStuff(B) {
//   console.log(B); // works, B parameter is still in scope
//   const C = "C";
//   let H = "H";
//   if (1 + 1 === 2) {
//     const D = "D";
//     H = "something else";
//   }
//   console.log(D); // does not work, D was declared in that if statement block
//   console.log(H); // works, H was declared outside the if statement
//   F = "F";
// }

// let E = 0;
// while (E < 3) {
//   E++;
//   console.log(A); // works, the outter block (called the global scope) is still in scope
//   const G = "G";
// }
// console.log(E); // works, E was declared outside the whie loop
// console.log(G); // does not work, declared inside the while loop and it's over

// doStuff("B");
// console.log(B); // does not work, the B parameter expires after the function call
// console.log(C); // does not work, C was declared inside the function and the function is over
// console.log(F); // works, F was declared in the global scope


// ------------- Built in Functions ---------------

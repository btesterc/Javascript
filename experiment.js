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


// -------------- Objects ---------------- 

// const person = {
//     name: "Burak Celik",
//     city: "Seattle",
//     state: "WA",
//     favoriteFood: "🌮",
//     wantsTacosRightNow: true,
//     numberOfTacosWanted: 100
//   };
//   console.log(person);
//   console.log(person.name);
//   console.log(person["name"]); // same as the line above; definitely prefer using the other one

// ----------------------------------------------------

//   const person1 = {
//     name: "burak",
//     ageRange: "25-35"
//   };
//   const person2 = {
//     name: "seda",
//     ageRange: "65-75"
//   };
  
//   function suggestMusic(person) {
//     if (person.ageRange === "25-35") {
//       console.log("We think you'll like Daft Punk you crazy millenial.");
//     } else if (person.ageRange === "65-75") {
//       console.log(
//         "You're obviously going to like Johnny Cash. He walks the line."
//       );
//     } else {
//       console.log(
//         "Uh, maybe try David Bowie? Everyone likes David Bowie, right?"
//       );
//     }
//   }
  
//   suggestMusic(person1);
//   suggestMusic(person2);

//   --------------------------------------------------

//   const dog = {
//     name: "dog",
//     speak() {
//       console.log("woof woof");
//     }
//   };
  
//   dog.speak();

//   ----------------------------------------------------

// const mee = {
//     name: {
//       first: "Brian",
//       last: "Holt"
//     },
//     location: {
//       city: "Seattle",
//       state: "WA",
//       country: "USA"
//     }
//   };
  
//   console.log(mee);


//   ---------------------------------------------------

// const me = {
//     name: {
//       first: "Brian",
//       last: "Holt"
//     },
//     location: {
//       streetNumber: 500,
//       street: "Fakestreet",
//       city: "Seattle",
//       state: "WA",
//       zipCode: 55555,
//       country: "USA"
//     },
//     getAddress() {
//       return `${this.name.first} ${this.name.last}
//   ${this.location.streetNumber} ${this.location.street}
//   ${this.location.city}, ${this.location.state} ${this.location.zipCode}
//   ${this.location.country}`;
//     }
//   };
  
//   console.log(me.getAddress());

//   me.name.first = "niki"

//   console.log(me.name)

//   ------------------- Arrays ---------------------------

// const daysOfTheWeek = [
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//     "Sunday"
//   ];
//   console.log(daysOfTheWeek);
//   console.log(daysOfTheWeek[0]);
//   console.log(daysOfTheWeek[1]);
//   console.log(daysOfTheWeek[6]);


//   const primeNumbers = [1, 2, 3, 5, 7, 11, 13, 17];
// console.log(primeNumbers.length);
// console.log(primeNumbers.join(" Hello "));



// const courses = [
//     { teacher: "Kyle Simpson", course: "JS Function Lite" },
//     { teacher: "Sarah Drasner", course: "Intro to Vue" },
//     { teacher: "Brian Holt", course: "Complete Intro to React v5" },
//     { teacher: "Steve Kinney", course: "State Management" }
//   ];
  
//   courses.push({ teacher: "Sean Larkin", course: "Webpack" });

//   const course = courses.pop();
//   console.log(course);


  
//   console.log(courses);
  
//   courses[2] = { teacher: "Brian Holt", course: "Complete Intro to React v4" };
  
//   console.log(courses);

// const subarray = courses.splice(2, 2, {course: "intro to geometry"});

// console.log(subarray);
// console.log(courses);

// courses[0].courseTime = 17;

// console.log(courses);
// courses[4] = true;
// console.log(courses);

// courses.pop();
// console.log(courses);

// console.log(Object.keys(courses[1]));

// console.log(Object.keys(courses[0]));


// --------------------------------------- Foreach --------

// const cities = [
//     "Seattle",
//     "San Francisco",
//     "Salt Lake City",
//     "Amsterdam",
//     "Hong Kong"
//   ];
  
// //   // method 1
// //   for (let i = 0; i < cities.length; i++) {
// //     console.log(cities[i]);
// //   }
  
//   // method 2
//   cities.forEach(function(i) {
//     console.log(i);
//   });

//   const someFunction = function() { return 5 };
//   const someOtherFunction = function(lol) {return lol() };

//   console.log(someOtherFunction(someFunction));


// const primeNumbers = [10, 1, 2, 4, 5,3, 33,11, 17];

// console.log(primeNumbers.sort(function(num1, num2) {
//     if (num1 < num2) {
//         return 1;
//     } else if (num2 < num1) {
//         return -1;
//     }
//     return 0;
//    }
// ));


// const alphabets = ["a", "z", "d","t", "P" ]

// // console.log(alphabets.map(function(i) {return i.toLowerCase()}).sort());

// console.log(alphabets.map(i => i.toUpperCase()).sort());


// ----------------------- and or statement ------------------

const x = 5;
const y = 10;
const z = 11;

const isTrue = true;


if (x !== y) {
    console.log("these are not equal");
}

if (x === y && (y === z)) {
    console.log("these are all equal");
}

if (isTrue || (x===z && y === z)) {
    console.log("this is an or statement")
}

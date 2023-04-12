// 1.  
for (i=1; i<8; i++){
    console.log(i);
}

// 2.
for (i=5; i < 26; i=i+4) {
    console.log(i);
}

// 3a.
const wizards = [`Harry Potter`, `Hermione Granger`, `Ron Weasley`];

// 3b.
// for (i=0; i<3; i++) {         Did not use a For Of loop
//     console.log(wizards[i]);
// }
for (wiz of wizards) {
    console.log(wiz);
};

// 4a. 
let harryPotterMovies = 0;

// 4b. 
while (harryPotterMovies < 8) {
    harryPotterMovies++;
};

// 4c.
console.log(harryPotterMovies);

// BONUS

// 5a.
const hogwartsHouses = [`Gryffindor`, `Hufflepuff`, `Ravenclaw`, `Slytherin`];

// 5b.
// for(i=0; i<4; i++ ){      once again did not use For Of loops
//  if (i<2) {
//     for(n=0; n<=9; n++){
// console.log(hogwartsHouses[i][n]);
// }}
//  else {
//     for(n=0; n<=8; n++){
//         console.log(hogwartsHouses[i][n]);
//         }
// }
// }

for (house of hogwartsHouses) {
    for(i of house){
        console.log(i);
    }
}

// 6a.
const quote = [`Yer`,`A`,`Wizard`,`Harry`]; 

// 6b.
let completeQuote = ` `;
for (i=0; i< 4; i++) {
  //  completeQuote = quote[i].concat(completeQuote);
    completeQuote += quote[i] + ` `;
   // console.log(completeQuote);
}
console.log(completeQuote);

// 7. Inspired by FizzBuzz
for (i=1; i<26; i++) {
    let div3 = i%3;
    let div5 = i%5;
    if (div3 == 0 && div5 == 0) {
        console.log(`Expecto Patronum`);
    }
    else if (div5 == 0) {
        console.log(`Patronum`);
    }
    else if (div3 == 0) {
        console.log(`Expecto`);
    }
    else {
        console.log(i);
    }

    }



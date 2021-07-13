// - Ask the user for their age and how far they are travelling (in km)
// - The price per travelled km will be £0.21
// - Junior passengers (under 18) get a 20% discount
// - Senior passengers (over 65) get a 40% discount

alert(`Hello!`)

const userAge = prompt(`Please fill in your age`);
console.log(userAge)

const over65 = userAge >= 65;
const over18under65 = userAge >= 18 && userAge < 65;
const under18 = userAge < 18;

const pricePerKM = 0.21;

let journey = prompt(
    `
      What jounrey are you planning?
  
      1 - Victoria to Paddington (20km)
      2 - Victoria to Euston (43km)
      3 - victoria to Manchester (240km)
  
      Please type in the number for your jounrey.
    `
  );

if (journey = 1) {
    let distance = 20;
}

if (journey = 2) {
    let distance = 43;
}

if (journey = 3) {
    let distance = 240;
}




// let distance = prompt(`How far are you going in KM?`)

const price = journey * pricePerKM;

// const price = distance * pricePerKM;
// console.log(price)

if (under18) {
    console.log("under18: ", userAge);
    const discount = price * 0.20;
    console.log(price - discount)
}

if (over65) {
    console.log("over65: ", userAge);
    const discount = price * 0.20;
    console.log(price - discount)
}

if (over18under65) {
    console.log("over18: ", userAge);
    console.log(price)
}


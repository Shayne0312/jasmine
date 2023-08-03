function calculateTaxes(income) {
    if (income > 30000) {
      return income * 0.25;
    } else {
      return income * 0.15;
    }
  }
  
  console.log(calculateTaxes(500))


// let random = Math.floor(Math.random() * 10)
// let i = 1;
// let O = 0;
// while (i <= 100) {
//   if (i % 2 === 0) {
//     if (i === random) {
//       console.log("oh no");
//   }
//   else if (i % 2 !== 0) {
//     console.log("nah");
//   }
//   i++;
//   }
// }
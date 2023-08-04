function calculateTaxes(income) {
    if (income > 30000) {
      return income * 0.25;
    } else {
      return income * 0.15;
    }
  }
  
  console.log(calculateTaxes(500));

  function removeDupes(values){
    return [...new Set(values)]
  }

  function remove(arr, val) {
    return arr.filter((el) => {
      return el !== val
    })
  }

  const usernames = [];
  let input = document.getElementById('username');

  function submitForm() {
    usernames.push(input.value)
  }

// // impure function
//   function append(arr, val) {
//     arr.push(val);
//   }

// // pure function
//   function appendPure(arr, val) {
//     return [...arr, val]
//   }
  
let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// Your Code Here
// let answer = window.prompt(weeklyExpenseQuestions[0])
// console.log(answer)

// for (let i = 0; i < weeklyExpenseQuestions.length; i++) {
//     const answer = window.prompt(weeklyExpenseQuestions[i]);
//     weeklyExpenses += parseFloat(answer);
//   }
  
//   for (let i = 0; i < monthlyExpenseQuestions.length; i++) {
//     const answer = window.prompt(monthlyExpenseQuestions[i]);
//     monthlyExpenses += parseFloat(answer);
//   }
  
//   for (let i = 0; i < annualExpenseQuestions.length; i++) {
//     const answer = window.prompt(annualExpenseQuestions[i]);
//     annualExpenses += parseFloat(answer);
//   }
  
for(let Q = 0; Q<weeklyExpenseQuestions.length;Q++){
let answer = parseFloat(window.prompt(weeklyExpenseQuestions[Q]))
console.log(answer)
weeklyExpenses += answer
}

for(let Q = 0; Q<monthlyExpenseQuestions.length;Q++){
  let answer = parseFloat(window.prompt(monthlyExpenseQuestions[Q]))
  console.log(answer)
  monthlyExpenses += answer
  }
  
  for(let Q = 0; Q<annualExpenseQuestions.length;Q++){
    let answer = parseFloat(window.prompt(annualExpenseQuestions[Q]))
    console.log(answer)
    annualExpenses += answer
    }
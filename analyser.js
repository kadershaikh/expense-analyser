
// analyser.js - Expense Analyser

const fs = require('fs');
const _ = require('lodash');

// GIVEN: Convert text file into an array of expense objects
const parseExpenses = (text) => {
  return text.trim().split('\n').map((line) => {
    const parts = line.trim().split(',');

    return {
      category: parts[0],
      amount: Number(parts[1])
    };
  });
};

// ---------- Step 3: Read the file synchronously ----------

console.time('sync read');

const text = fs.readFileSync('expenses.txt', 'utf8');

console.timeEnd('sync read');

const expenses = parseExpenses(text);

console.log('First expense:', expenses[0]);

// ---------- Step 4: Higher-order functions ----------

// Calculate total spending using reduce()
const totalSpent = expenses.reduce((total, expense) => {
  return total + expense.amount;
}, 0);

console.log('Total spent:', totalSpent);

// Filter expenses above Rs 500
const bigExpenses = expenses.filter((expense) => {
  return expense.amount > 500;
});

console.log('Big expenses:', bigExpenses);

// Add Rs 50 delivery fee using map()
const withFee = expenses.map((expense) => {
  return {
    ...expense,
    amount: expense.amount + 50
  };
});

console.log('Expenses with delivery fee:', withFee);

// Verify original data is unchanged
console.log('Original first expense:', expenses[0]);

// ---------- Step 5: Totals per category ----------

const totalsByCategory = {};

for (const e of expenses) {

  if (totalsByCategory[e.category] === undefined) {
    totalsByCategory[e.category] = 0;
  }

  totalsByCategory[e.category] += e.amount;
}

console.log('Totals by category:', totalsByCategory);

// ---------- Step 6: Switch and ternary ----------

function budgetNote(category) {

  switch (category) {

    case 'food':
      return 'Daily need';

    case 'travel':
      return 'Commute';

    case 'books':
      return 'Study';

    default:
      return 'Other';
  }
}

const categories = ['food', 'travel', 'books', 'entertainment'];

categories.forEach((category) => {

  const total = totalsByCategory[category];

  const status = total > 1500 ? 'OVER 1500' : 'OK';

  console.log(
    `${category} (${budgetNote(category)}): Rs ${total} - ${status}`
  );

});

// ---------- Step 7: Closure - Budget tracker ----------

function createBudgetTracker(limit) {

  let spent = 0;

  return function spend(amount) {

    spent += amount;

    if (spent <= limit) {
      return `Remaining: ${limit - spent}`;
    } else {
      return `Over budget by ${spent - limit}`;
    }

  };
}

const tracker = createBudgetTracker(1000);

console.log(tracker(300));
console.log(tracker(500));
console.log(tracker(400));

// ---------- Step 8: Asynchronous file reading ----------

console.log('Async read started');

fs.readFile('expenses.txt', 'utf8', (err, data) => {

  if (err) {
    console.log(err);
    return;
  }

  console.log('Async read finished');

});

for (let i = 0; i < 1000000; i++) {
  // Loop running while asynchronous file read is pending
}

console.log('Loop finished');

import { budget } from './budget.js';
import { totalExpenses } from './expenses.js';

export const calculateNewBalance = () => {
  let cost = setExpenseCost.value;
  let currentBalanceValue = parseFloat(balance);
  if (cost) {
    cost = parseFloat(cost);
  } else {
    cost = 0;
  }
  let balanceValue = currentBalanceValue - cost;
  if (balanceValue < 0) {
    alert('Balance cannot be less than 0 -- Set a higher budget to continue');
    return;
  } else {
    balanceValue = balanceValue.toFixed(2);
    return balanceValue;
  }
};

// Save to local storage

export let balance = localStorage.getItem('balance');

const currentBalance = document.querySelector('#currentBalance');

export const calculateCurrentBalance = () => {
  const budgetValue = parseFloat(budget);
  const totalExpenseValue = parseFloat(totalExpenses);
  let balanceValue = budgetValue - totalExpenseValue;
  if (balanceValue < 0) {
    alert('Balance cannot be less than 0 -- Set a higher budget to continue');
    return;
  } else {
    balance = balanceValue.toFixed(2);

    currentBalance.textContent = `$${balance}`;
  }
};

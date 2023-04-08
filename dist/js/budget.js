import { totalExpenses } from './expenses.js';

const budgetForm = document.querySelector('#budgetForm');
const setBudgetAmount = document.querySelector('#setBudgetAmount');

// Save to local storage
const localStorageBudget = JSON.parse(localStorage.getItem('budget'));
export let budget =
  localStorage.getItem('budget') !== null ? localStorageBudget : '0.00';

//* Set Budget

export const newBudgetAmount = () => {
  let currentBudgetValue = setBudgetAmount.value;
  const regex = /\d/g;

  // Err if input empty
  if (currentBudgetValue === '') {
    alert('Enter a budget');
    return budgetForm.reset();

    // Err if budget isn't only digits
  } else if (!regex.test(currentBudgetValue)) {
    alert('Budget must be digits only');
    return budgetForm.reset();

    // Calculate balance
  } else {
    currentBudgetValue = parseFloat(currentBudgetValue);
    const balance = currentBudgetValue - totalExpenses;

    // Err if budget less than 0 or greater than 200,000
    if (currentBudgetValue < 0 || currentBudgetValue >= 200000) {
      alert('Budget must be greater than 0 and less than 200,000');
      return budgetForm.reset();

      // Err if balance less than 0
    } else if (balance < 0) {
      alert(
        'Balance must be greater than 0 - Set a higher budget or remove expenses to continue'
      );
      return budgetForm.reset();

      // Update budget
    } else {
      budget = currentBudgetValue.toFixed(2);
      return budget;
    }
  }
};

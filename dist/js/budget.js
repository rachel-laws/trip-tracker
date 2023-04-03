//* Set Budget

const budgetForm = document.querySelector('#budgetForm');
const setBudgetAmount = document.querySelector('#setBudgetAmount');
const currentBudget = document.querySelector('#currentBudget');

// Save to local storage
let localStorageBudget = JSON.parse(localStorage.getItem('budget'));

export let budget =
  localStorage.getItem('budget') !== null ? localStorageBudget : '0.00';

// Enter new budget
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
  } else {
    // Budget --> Number
    currentBudgetValue = parseFloat(currentBudgetValue);
    // Err if budget less than 0 or greater than 200,000
    if (currentBudgetValue < 0 || currentBudgetValue >= 200000) {
      alert('Budget must be greater than 0 and less than 200,000');
      return budgetForm.reset();
      // Update budget
    } else {
      budget = currentBudgetValue.toFixed(2);
      currentBudget.textContent = `$${budget}`;
      return budgetForm.reset();
    }
  }
};

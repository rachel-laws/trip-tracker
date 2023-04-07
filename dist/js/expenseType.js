// Filter by expense type
const filterContainer = document.querySelector('#expenseFilterContainer');
const filterBtn = document.querySelector('#expenseFilterBtn');
const filterSelect = document.querySelector('#expenseFilterSelect');
const expenseItems = document.querySelectorAll('.expense__item');

// Toggle filter options
export const toggleElement = (element, button) => {
  if (element.classList.contains('hidden')) {
    element.classList.remove('hidden');
    element.classList.add('visible__block');
    button.setAttribute('aria-expanded', 'true');
  } else if (element.classList.contains('visible__block')) {
    element.classList.remove('visible__block');
    element.classList.add('hidden');
    button.setAttribute('aria-expanded', 'false');
  }
};

// Filter expenses
export const filterExpenses = () => {
  const selectedValue = filterSelect.value;
  // No filter --> Show all
  if (selectedValue === 'none') {
    expenseItems.forEach(expenseItem => {
      if (expenseItem.classList.contains('hidden')) {
        showExpense(expenseItem);
      }
    });
  } else {
    // Filter by expense type
    expenseItems.forEach(expenseItem => {
      if (expenseItem.classList.contains(selectedValue)) {
        showExpense(expenseItem);
      } else {
        hideExpense(expenseItem);
      }
    });
  } // Hide filter options
  if (filterContainer.classList.contains('visible__block')) {
    toggleElement(filterContainer, filterBtn);
  }
};

const showExpense = expense => {
  expense.classList.remove('hidden');
  expense.classList.add('visible__flex');
  expense.setAttribute('aria-hidden', 'false');
};

const hideExpense = expense => {
  expense.classList.remove('visible__flex');
  expense.classList.add('hidden');
  expense.setAttribute('aria-hidden', 'true');
};

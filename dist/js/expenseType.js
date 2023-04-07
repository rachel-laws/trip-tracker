// Filter by expense type
const filterContainer = document.querySelector('#expenseFilterContainer');
const filterBtn = document.querySelector('#expenseFilterBtn');
const filterSelect = document.querySelector('#expenseFilterSelect');
const expenseItems = document.querySelectorAll('.expense__item');

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

export const filterExpenses = () => {
  const selectedValue = filterSelect.value;
  if (selectedValue === 'none') {
    expenseItems.forEach(expenseItem => {
      if (expenseItem.classList.contains('hidden')) {
        expenseItem.classList.remove('hidden');
        expenseItem.classList.add('visible__flex');
        expenseItem.setAttribute('aria-hidden', 'false');
      }
    });
  } else {
    expenseItems.forEach(expenseItem => {
      if (expenseItem.classList.contains(selectedValue)) {
        expenseItem.classList.remove('hidden');
        expenseItem.classList.add('visible__flex');
        expenseItem.setAttribute('aria-hidden', 'false');
      } else {
        expenseItem.classList.remove('visible__flex');
        expenseItem.classList.add('hidden');
        expenseItem.setAttribute('aria-hidden', 'true');
      }
    });
  }
  if (filterContainer.classList.contains('visible__block')) {
    toggleElement(filterContainer, filterBtn);
  }
};

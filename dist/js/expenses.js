import { budget } from './budget.js';

//* Add expenses

const expenseForm = document.querySelector('#newExpense');
const expenseItems = document.querySelector('#expenseItems');
const setExpenseTitle = document.querySelector('#setExpenseTitle');
const setExpenseCost = document.querySelector('#setExpenseCost');

//* Create element

export const createNewElement = (element, classTitle, text) => {
  const newElement = document.createElement(element);
  newElement.classList.add(classTitle);
  newElement.textContent = text;
  return newElement;
};

//* Save to local storage

const localStorageTransactions = JSON.parse(
  localStorage.getItem('transactions')
);
export const transactions =
  localStorage.getItem('transactions') !== null ? localStorageTransactions : [];

//* Generate random ID

const generateID = () => {
  return Math.floor(Math.random() * 1000000000);
};

//* Get expense type

const getExpenseType = () => {
  const selectedExpenseType = document.querySelector(
    'input[name = "expenseType"]:checked'
  );
  const type = selectedExpenseType.id;
  return type;
};

//* New date

const getExpenseDate = () => {
  const currentDate = new Date();

  // Month
  const currentMonth = currentDate.getMonth();
  // Day
  const currentDay = currentDate.getDate();
  currentDay.toString().length < 2 ? `0${currentDay}` : currentDay;
  // Year
  const currentYear = currentDate.getFullYear().toString().slice(-2);

  return `${currentMonth + 1}/${currentDay}/${currentYear}`;
};

// Calculate total expenses
const expenses = transactions.map(transaction => parseFloat(transaction.cost));
export let totalExpenses = expenses.reduce(
  (total, expense) => (total += expense),
  0
);

//* Create new transaction

export const addTransaction = () => {
  let titleValue = setExpenseTitle.value;
  let costValue = setExpenseCost.value;

  // Create transaction object
  const transaction = {
    id: generateID(),
    title: formatExpenseTitle(titleValue),
    cost: formatExpenseCost(costValue),
    date: getExpenseDate(),
    balance: calculateNewBalance(),
    type: getExpenseType(),
  };

  // Validate and push transaction to localStorage
  if (validateExpenseTitle(titleValue) && validateExpenseCost(costValue)) {
    transactions.push(transaction);
    addExpense(transaction);
    // TODO: Find a better way
    window.location.reload();
  }
};

//* Get new balance

//! BUG: Won't calculate correctly unless page refreshed
const calculateNewBalance = () => {
  let balance = parseFloat(budget) - parseFloat(totalExpenses);

  // Include cost of current transaction expense
  let costValue = setExpenseCost.value;
  costValue = parseFloat(costValue);
  const newBalance = (balance - costValue).toFixed(2);

  // Err if new balance less than 0
  if (newBalance < 0) {
    alert('Balance cannot be negative -- Set a higher budget to continue');
    return expenseForm.reset();
    // Update balance
  } else {
    currentBalance.textContent = `$${newBalance}`;
    return newBalance;
  }
};

//* Formatting and input validations

const formatExpenseTitle = title => {
  title.trim();
  return title;
};

const formatExpenseCost = cost => {
  cost.trim();
  cost = parseFloat(cost).toFixed(2);
  return cost;
};

const validateExpenseTitle = title => {
  title = title.trim();

  // Err if input is empty
  if (title === '') {
    alert('Expense title and cost are both required');
    return expenseForm.reset();

    // Err if title is more than 12 chars
  } else if (title.length > 12) {
    alert('Title must be less than 12 characters');
    return expenseForm.reset();
  }
  return true;
};

const validateExpenseCost = cost => {
  cost = cost.trim();
  const regex = /\d/g;

  // Err if input is empty
  if (cost === '') {
    alert('Expense title and cost are both required');
    return expenseForm.reset();

    // Err if cost isn't digits
  } else if (!regex.test(cost)) {
    alert('Cost must be digits only');
    return expenseForm.reset();
  } else {
    cost = parseFloat(cost);
  }

  // Err if cost is less than 0 or greater than 10,000
  if (cost < 0 || cost >= 10000) {
    alert('Expense must be above 0 and less than 10,000');
    return expenseForm.reset();
  }
  return true;
};

//* Add expense to DOM

// Create transaction for localStorage
const addExpense = transaction => {
  const expenseID = transaction.id;
  const expenseType = transaction.type;
  const titleValue = transaction.title;
  const costValue = transaction.cost;
  const dateValue = transaction.date;
  const balanceValue = transaction.balance;

  // Create expense elements
  const newExpenseItem = createNewElement('ul', 'expense__item');
  newExpenseItem.classList.add(`${expenseType}`);
  newExpenseItem.classList.add('visible__flex');
  newExpenseItem.id = expenseID;

  // Title / Cost / Date / Balance
  const newExpenseTitle = createNewElement(
    'li',
    'expense__title',
    `${titleValue}`
  );
  const newExpenseCost = createNewElement(
    'li',
    'expense__cost',
    `$${costValue}`
  );
  const newExpenseDate = createNewElement(
    'li',
    'expense__date',
    `${dateValue}`
  );
  const newExpenseBalance = createNewElement(
    'li',
    'new__balance',
    `$${balanceValue}`
  );
  newExpenseBalance.classList.add('mobile-hidden');

  // Show controls button
  const expenseControlsBtn = createNewElement(
    'button',
    'expense__controls-btn'
  );
  expenseControlsBtn.title = 'Options';
  // Icon
  const expenseControlsIcon = createNewElement('i', 'bi');
  expenseControlsIcon.classList.add('bi-three-dots-vertical');
  expenseControlsBtn.appendChild(expenseControlsIcon);

  //* Add to DOM

  // Expense item
  expenseItems.prepend(newExpenseItem);
  newExpenseItem.setAttribute('aria-live', 'assertive');

  // Expense data
  newExpenseItem.appendChild(newExpenseTitle);
  newExpenseItem.appendChild(newExpenseCost);
  newExpenseItem.appendChild(newExpenseDate);
  newExpenseItem.appendChild(newExpenseBalance);

  // Expense controls button
  newExpenseItem.appendChild(expenseControlsBtn);

  // Reset form
  expenseForm.reset();
};

const init = () => {
  transactions.forEach(addExpense);
};

init();

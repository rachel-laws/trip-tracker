import { newBudgetAmount, budget } from './budget.js';
import { addTransaction, totalExpenses, transactions } from './expenses.js';
import { toggleElement, filterExpenses } from './expenseFilter.js';
import { createControls } from './expenseEdit.js';
import { toggleNav, closeNavBar } from './nav.js';
import {
  //! operateTripsModal,
  operateCurrencyModal,
  operateBudgetModal,
} from './modals.js';

const toggleMobileNav = document.querySelector('#toggleMobileNav');

const budgetForm = document.querySelector('#budgetForm');
const currentBudget = document.querySelector('#currentBudget');
const currentBalance = document.querySelector('#currentBalance');

const expenseForm = document.querySelector('#newExpense');
const filterBtn = document.querySelector('#expenseFilterBtn');
const filterContainer = document.querySelector('#expenseFilterContainer');
const filterSelect = document.querySelector('#expenseFilterSelect');

const controlsBtn = document.querySelectorAll('.expense__controls-btn');
const editBtn = document.querySelector('#editExpenseBtn');
const deleteBtn = document.querySelector('#deleteExpenseBtn');

const initApp = () => {
  // Mobile Navigation
  toggleMobileNav.addEventListener('click', () => {
    toggleNav();
  });

  // Add expenses
  expenseForm.addEventListener('submit', event => {
    event.preventDefault();

    addTransaction();
    updateLocalStorage();
  });

  // Filter expenses
  filterBtn.addEventListener('click', () => {
    toggleElement(filterContainer, filterBtn);
  });
  filterSelect.addEventListener('change', filterExpenses);

  // Expense controls
  controlsBtn.forEach(button => {
    button.addEventListener('click', event => {
      createControls(event);
    });
  });

  // Set new budget
  budgetForm.addEventListener('submit', event => {
    const budgetModal = document.querySelector('#budgetModal');
    event.preventDefault();

    newBudgetAmount();
    updateLocalStorage();
    updateValues();

    budgetModal.close();
    closeNavBar();
  });

  // Modals
  //! operateTripsModal();
  operateCurrencyModal();
  operateBudgetModal();

  // Load data
  updateLocalStorage();
  updateValues();
};

const updateLocalStorage = () => {
  localStorage.setItem('budget', JSON.stringify(budget));
  localStorage.setItem('transactions', JSON.stringify(transactions));
};

const updateValues = () => {
  currentBudget.textContent = `$${budget}`;
  const transactionsArr = localStorage.getItem('transactions');
  if (transactionsArr === null || JSON.parse(transactionsArr).length === 0) {
    currentBalance.textContent = `$${budget}`;
  } else {
    let balance = parseFloat(budget) - parseFloat(totalExpenses);
    balance = balance.toFixed(2);
    currentBalance.textContent = `$${balance}`;
  }
};

document.addEventListener('DOMContentLoaded', initApp);

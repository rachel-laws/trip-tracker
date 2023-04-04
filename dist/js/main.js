import { newBudgetAmount, budget } from './budget.js';
import { addTransaction, transactions } from './expenses.js';
import { toggleNav, closeNavBar } from './nav.js';
import {
  operateTripsModal,
  operateCurrencyModal,
  operateBudgetModal,
} from './modals.js';

const expenseForm = document.querySelector('#newExpense');
const currentBudget = document.querySelector('#currentBudget');
const currentBalance = document.querySelector('#currentBalance');
const budgetForm = document.querySelector('#budgetForm');

const initApp = () => {
  // Mobile Navigation
  toggleMobileNav.addEventListener('click', event => {
    toggleNav();
  });

  // New expense
  expenseForm.addEventListener('submit', event => {
    event.preventDefault();

    addTransaction();
    updateLocalStorage();
    updateValues();
  });

  // New budget
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
  operateTripsModal();
  operateCurrencyModal();
  operateBudgetModal();

  // Load saved content
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
    const transactions = JSON.parse(transactionsArr);
    currentBalance.textContent = `$${
      transactions[transactions.length - 1].balance
    }`;
  }
};

document.addEventListener('DOMContentLoaded', initApp);

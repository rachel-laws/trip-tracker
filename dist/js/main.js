import { newBudgetAmount, budget } from './budget.js';
import { addTransaction, transactions } from './expenses.js';
import { calculateCurrentBalance, balance } from './balance.js';
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
    calculateCurrentBalance();
    updateLocalBalance();
    updateValues();
  });

  // New budget
  budgetForm.addEventListener('submit', event => {
    const budgetModal = document.querySelector('#budgetModal');
    event.preventDefault();

    newBudgetAmount();
    updateLocalStorage();
    calculateCurrentBalance();
    updateLocalBalance();
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
  calculateCurrentBalance();
  updateLocalBalance();
  updateValues();
};

const updateLocalStorage = () => {
  localStorage.setItem('budget', JSON.stringify(budget));
  localStorage.setItem('transactions', JSON.stringify(transactions));
};

const updateLocalBalance = () => {
  localStorage.setItem('balance', JSON.stringify(balance));
};

const updateValues = () => {
  currentBudget.textContent = `$${budget}`;
  currentBalance.textContent = `$${balance}`;
};

document.addEventListener('DOMContentLoaded', initApp);

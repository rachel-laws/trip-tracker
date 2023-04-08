import { createNewElement } from './expenses.js';

const expenseItem = document.querySelector('.expense__item');
const controlsBtn = document.querySelectorAll('.expense__controls-btn');
const expenseTitle = document.querySelector('.expense__title');

const editBtn = document.querySelector('#editExpenseBtn');

//* Create expense control options (Edit/Delete)

export const createControls = event => {
  const button = event.target;
  const parent = button.parentNode;

  // Existing control options
  const localControlOptions = parent.querySelector(
    '.expense__controls-options'
  );
  const controlOptions = document.querySelector('.expense__controls-options');

  // Same button clicked --> Remove existing control options
  if (localControlOptions) {
    return localControlOptions.remove();

    // Different button clicked --> Remove existing, add new
  } else if (controlOptions) {
    controlOptions.remove();
  }

  // Add expense controls
  const expenseControlsOptions = createNewElement(
    'div',
    'expense__controls-options'
  );

  // Container for edit/delete buttons
  const expenseControls = createNewElement('div', 'expense__controls');

  // Edit button
  const expenseEdit = createNewElement('button', 'expense__controls-edit');
  expenseEdit.title = 'Edit';
  expenseEdit.id = 'editExpenseBtn';
  // Icon
  const expenseEditIcon = createNewElement('i', 'fa-solid');
  expenseEditIcon.classList.add('fa-pencil');
  expenseEdit.appendChild(expenseEditIcon);

  // Delete button
  const expenseDelete = createNewElement('button', 'expense__controls-delete');
  expenseDelete.title = 'Delete';
  expenseDelete.id = 'deleteExpenseBtn';
  // Icon
  const expenseDeleteIcon = createNewElement('i', 'fa-solid');
  expenseDeleteIcon.classList.add('fa-trash-can');
  expenseDelete.appendChild(expenseDeleteIcon);

  // Add to DOM
  parent.appendChild(expenseControlsOptions);
  expenseControlsOptions.appendChild(expenseControls);
  expenseControls.appendChild(expenseEdit);
  expenseControls.appendChild(expenseDelete);

  // Delete button
  expenseDelete.addEventListener('click', () => {
    deleteExpense(expenseDelete);
  });

  // Edit button
  //   expenseEdit.addEventListener('click', () => {
  //     editExpense(expenseEdit);
  //   });
};

// Delete expense
export const deleteExpense = deleteBtn => {
  const transactions = JSON.parse(localStorage.getItem('transactions'));
  let expenseItem = deleteBtn.parentElement;
  while (!expenseItem.classList.contains('expense__item')) {
    expenseItem = expenseItem.parentElement;
  }
  const id = parseFloat(expenseItem.id);
  const filteredTransactions = transactions.filter(transaction => {
    return transaction.id !== id;
  });

  localStorage.setItem('transactions', JSON.stringify(filteredTransactions));
  //! Find a better way
  window.location.reload();
};

// Edit expense

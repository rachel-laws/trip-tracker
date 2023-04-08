import { createNewElement } from './expenses.js';

const expenseItem = document.querySelector('.expense__item');
const controlsBtn = document.querySelectorAll('.expense__controls-btn');
const expenseTitle = document.querySelector('.expense__title');

export const createControls = event => {
  const button = event.target;
  const parent = button.parentNode;

  // To show/hide expenseControls
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
};

import { createNewElement } from './expenses.js';

// TODO

//* Create expense control options

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

  // // Edit button
  // const expenseEdit = createNewElement('button', 'expense__controls-edit');
  // expenseEdit.title = 'Edit';
  // expenseEdit.id = 'editExpenseBtn';
  // // Icon
  // const expenseEditIcon = createNewElement('i', 'fa-solid');
  // expenseEditIcon.classList.add('fa-pencil');
  // expenseEdit.appendChild(expenseEditIcon);

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
  // expenseControls.appendChild(expenseEdit);
  expenseControls.appendChild(expenseDelete);

  // Delete button
  expenseDelete.addEventListener('click', () => {
    deleteExpense(expenseDelete);
  });

  // // Edit button
  // expenseEdit.addEventListener('click', () => {
  //   editExpense(expenseEdit);
  // });
};

//* Delete expenses

export const deleteExpense = deleteBtn => {
  const transactions = JSON.parse(localStorage.getItem('transactions'));
  // Get selected expense item
  let expenseItem = deleteBtn.parentElement;
  while (!expenseItem.classList.contains('expense__item')) {
    expenseItem = expenseItem.parentElement;
  }
  // Delete expense by ID
  const id = parseFloat(expenseItem.id);
  const filteredTransactions = transactions.filter(transaction => {
    return transaction.id !== id;
  });

  // Update localStorage
  localStorage.setItem('transactions', JSON.stringify(filteredTransactions));
  // TODO: Find a better way
  window.location.reload();
};

//* Edit expenses

// const editExpense = editBtn => {
//   const transactions = JSON.parse(localStorage.getItem('transactions'));
//   // Get selected expense item
//   let expenseItem = editBtn.parentElement;
//   while (!expenseItem.classList.contains('expense__item')) {
//     expenseItem = expenseItem.parentElement;
//   }
//   const existingTitleForm = expenseItem.querySelector(
//     '.expense__new-title-form'
//   );
//   // Same button clicked --> Remove existing control options
//   if (existingTitleForm) {
//     return existingTitleForm.remove();
//   }

//   // Create new expense title form
//   const newTitleForm = createNewElement('form', 'expense__new-title-form');
//   // Create edit title input
//   const titleInput = createNewElement('input', 'expense__new-title-input');
//   titleInput.type = 'text';
//   titleInput.setAttribute('minlength', '1');
//   titleInput.setAttribute('maxlength', '12');
//   titleInput.setAttribute('autocomplete', 'off');

//   // titleInput.setAttribute('required');
//   titleInput.id = 'newExpenseTitle';
//   titleInput.placeholder = 'Enter New Title';
//   titleInput.required = true;
//   newTitleForm.appendChild(titleInput);
//   // Create submit button
//   const titleSubmit = createNewElement('input', 'expense__new-title-submit');
//   titleSubmit.type = 'submit';
//   titleSubmit.id = 'submitExpenseTitle';
//   titleSubmit.value = 'Go';
//   newTitleForm.appendChild(titleSubmit);
//   // Add to DOM
//   expenseItem.appendChild(newTitleForm);
//   // Enter new expense title
//   newTitleForm.addEventListener('submit', event => {
//     event.preventDefault();
//     // Change expense title
//     const id = parseFloat(expenseItem.id);
//     const newTitle = titleInput.value;
//     if (newTitle.trim() === '') {
//       alert('Enter an expense title');
//       newTitleForm.reset();
//       return newTitleForm.remove();
//     }
//     transactions
//       .filter(transaction => transaction.id === id)
//       .forEach(transaction => {
//         transaction.title = newTitle;
//         localStorage.setItem('transactions', JSON.stringify(transactions));
//         newTitleForm.reset();
//         newTitleForm.remove();
//         // TODO: Find a better way
//         window.location.reload();
//       });
//   });
// };

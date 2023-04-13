//* Operate Modals

// Open Modal
const openModal = (modalBtn, modal) => {
  modalBtn.addEventListener('click', () => {
    modal.showModal();
  });
};

// Close Modal
const closeModal = (modalBtn, modal, form) => {
  modalBtn.addEventListener('click', () => {
    modal.close();
    if (form) {
      form.reset();
    }
  });
};

//* Modals

// Currency Modal
export const operateCurrencyModal = () => {
  const currencyModal = document.querySelector('#currencyModal');
  const openCurrencyModal = document.querySelector('#nav__btn-currency');
  const closeCurrencyModal = document.querySelector('#closeCurrencyModal');
  const currencyForm = document.querySelector('#currencyForm');

  openModal(openCurrencyModal, currencyModal);
  closeModal(closeCurrencyModal, currencyModal, currencyForm);
};

// Budget Modal
export const operateBudgetModal = () => {
  const budgetModal = document.querySelector('#budgetModal');
  const openBudgetModal = document.querySelector('#nav__btn-budget');
  const closeBudgetModal = document.querySelector('#closeBudgetModal');
  const budgetForm = document.querySelector('#budgetForm');

  openModal(openBudgetModal, budgetModal);
  closeModal(closeBudgetModal, budgetModal, budgetForm);
};

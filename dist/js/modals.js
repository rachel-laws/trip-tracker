//* Operate Modals

// Open Modal
const openModal = (modalBtn, modal) => {
  modalBtn.addEventListener('click', () => {
    modal.showModal();
  });
};

// Close Modal
const closeModal = (modalBtn, modal) => {
  modalBtn.addEventListener('click', () => {
    modal.close();
  });
};

//* Modals

// Trips Modal
export const operateTripsModal = () => {
  const tripsModal = document.querySelector('#tripsModal');
  const openTripsModal = document.querySelector('#viewTripsBtn');
  const closeTripsModal = document.querySelector('#closeTripsModal');

  openModal(openTripsModal, tripsModal);
  closeModal(closeTripsModal, tripsModal);
};

// Currency Modal
export const operateCurrencyModal = () => {
  const currencyModal = document.querySelector('#currencyModal');
  const openCurrencyModal = document.querySelector('#changeCurrencyBtn');
  const closeCurrencyModal = document.querySelector('#closeCurrencyModal');

  openModal(openCurrencyModal, currencyModal);
  closeModal(closeCurrencyModal, currencyModal);
};

// Budget Modal
export const operateBudgetModal = () => {
  const budgetModal = document.querySelector('#budgetModal');
  const openBudgetModal = document.querySelector('#changeBudgetBtn');
  const closeBudgetModal = document.querySelector('#closeBudgetModal');

  openModal(openBudgetModal, budgetModal);
  closeModal(closeBudgetModal, budgetModal);
};

// import { showExpense, hideExpense } from './expenseType.js';

const nextBtn = document.querySelector('#nextPageBtn');
const previousBtn = document.querySelector('#previousPageBtn');
const expenseItems = document.querySelectorAll('.expense__item');

const itemsPerPage = 10;
let currentPage = 1;
let numberOfPages = getNumberOfPages();

const getNumberOfPages = () => {
  return Math.ceil(items.length / itemsPerPage);
};

const nextPage = () => {
  if (currentPage < numberOfPages) {
    currentPage += 1;
    showPage();
  }
};

const previousPage = () => {
  if (currentPage > 0) {
    currentPage -= 1;
    showPage();
  }
};

nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);

const showPage = () => {
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  pageItems = items.slice(start, end);
  updatePages();
  checkButtons();
};

const checkButtons = () => {
  nextBtn.disabled = currentPage === numberOfPages ? true : false;
  previousBtn.disabled = currentPage === 1 ? true : false;
};

// const updatePages = () => {
//   expenseItems.forEach(expenseItem => {
//     hideExpense(expenseItem);
//   });
//   pageItems.forEach(pageItem => {
//     showExpense(pageItem);
//   });
// };

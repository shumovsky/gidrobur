const removeSelectLink = (selector, param) => {
  const elem = document.querySelectorAll(`.${selector}`);
  elem.forEach((link) => {
    link.classList.remove(param);
  });
};

const selectClickedLink = (selectLink, param) => {
  selectLink.classList.add(param);
};

// Navigation
const navigation = () => {
  const navList = document.querySelector('.header__navigation_list');
  navList.addEventListener('click', (e) => {
    if (e.target.classList.contains('header__navigation_link')) {
      let selectLink = e.target;
      removeSelectLink(`header__navigation_link`, `active_link`);
      selectClickedLink(selectLink, `active_link`);
    }
  });
};
navigation();

// Accordion
const accordion = () => {
  const futureLinkElems = document.querySelectorAll('.question__accordion_img');
  const futureSubElems = document.querySelectorAll('.question__accordion_text');

  futureLinkElems.forEach((elem, index) => {
    elem.addEventListener('click', () => {
      if (elem.classList.contains('question_select')) {
        elem.classList.remove('question_select');
        futureSubElems[index].classList.add('accordion-hidden');
      } else {
        futureLinkElems.forEach((futureLinkElem) => {
          futureLinkElem.classList.remove('question_select');
        });

        futureSubElems.forEach((futureSubElem) => {
          futureSubElem.classList.add('accordion-hidden');
        });

        futureSubElems[index].classList.remove('accordion-hidden');
        elem.classList.add('question_select');
      }
    });
  });
};
accordion();

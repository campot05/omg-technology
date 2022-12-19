(() => {
  //------- Order modal -------
  const openModalBtn = document.querySelector('[store-open]');
  const closeModalBtn = document.querySelector('[shop-close]');
  const orderModal = document.querySelector('[shop-backdrop]');
  const openOrderFromHeroBtn = document.querySelector('[shop-open]');
  const orderForm = document.querySelector('[shop-form]');

  openModalBtn.addEventListener('click', () => toggleIsHidden(orderModal));
  closeModalBtn.addEventListener('click', () => toggleIsHidden(orderModal));
  openOrderFromHeroBtn.addEventListener('click', () =>
    toggleIsHidden(orderModal)
  );
  const modalThanks = document.querySelector('[thanks-modal]');
  const closeThanksModalBtn = document.querySelector('[thank-close]');
  const continueThanksModalBtn = document.querySelector('[thank-continue]');

  closeThanksModalBtn.addEventListener('click', () =>
    toggleIsHidden(modalThanks)
  );
  continueThanksModalBtn.addEventListener('click', () =>
    toggleIsHidden(modalThanks)
  );

  function toggleIsHidden(object) {
    object.classList.toggle('is-hidden');
  }

  function toggleIsHidden(object, shoudDisableScroll = false) {
    object.classList.toggle('is-hidden');
    if (shoudDisableScroll) {
      document.body.style.overflowY = 'hidden';
      return;
    }
    document.body.style.overflowY = null;
  }

  orderForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var checkValid = validatInputs(orderForm.getElementsByTagName('input'));
    if (checkValid) {
      toggleIsHidden(modalThanks);
      toggleIsHidden(orderModal);
      clearInputs(orderForm.getElementsByTagName('input'));
    }
  });

  function validatInputs(inputs) {
    for (let element of inputs) {
      if (!element.validity.valid) {
        return false;
      }
    }

    return true;
  }

  function clearInputs(inputs) {
    for (let element of inputs) {
      element.value = null;
    }
  }
})();

// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-open]'),
//     closeModalBtn: document.querySelector('[data-modal-close]'),
//     modal: document.querySelector('[data-modal]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     document.body.classList.toggle('modal-open');
//     refs.modal.classList.toggle('is-hidden');
//   }
// })();
// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[thanks-modal-open]'),
//     closeModalBtn: document.querySelector('[thanks-modal-close]'),
//     modal: document.querySelector('[thanks-modal]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     document.body.classList.toggle('modal-open');
//     refs.modal.classList.toggle('thanks__is-hidden');
//   }
// })();
// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[contact-modal-open]'),
//     closeModalBtn: document.querySelector('[contact-modal-close]'),
//     modal: document.querySelector('[contact-modal]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     document.body.classList.toggle('contact-open');
//     refs.modal.classList.toggle('contact__is-hidden');
//   }
// })();

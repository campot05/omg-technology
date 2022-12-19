(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]' ),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();
(() => {
  const refs = {
    openModalBtn: document.querySelector('[thanks-modal-open]'),
    closeModalBtn: document.querySelector('[thanks-modal-close]'),
    modal: document.querySelector('[thanks-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('thanks__is-hidden');
    
  }
})();
(() => {
  const refs = {
    openModalBtn: document.querySelector('[contact-modal-open]'),
    closeModalBtn: document.querySelector('[contact-modal-close]'),
    modal: document.querySelector('[contact-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('contact-open');
    refs.modal.classList.toggle('contact__is-hidden');
  }
})();
const phone = document.querySelectorAll('.phone');
const phoneForm = document.querySelectorAll('.phone__form');
const questionFormError = document.querySelectorAll('.form-error');

const pattern = new RegExp('^[+]375 [0-9]{2} *[0-9]{3} *[0-9]{2} *[0-9]{2}$');

const addErrorStyles = () => {
  questionFormError.forEach((error) => error.innerText = 'Номер телефона введен некорректно');
};

const checkCorrectPhone = () => {
  phone.forEach((input) => {
    input.addEventListener('focus', () => {
      input.value = '+375 '
    });

    input.addEventListener('change', () => {
      const check = pattern.test(input.value);
      if (!check) {
        input.style.borderBottomColor = '#F44D34'
        addErrorStyles();
      } else {
        ''
      }
    });
  });
};

checkCorrectPhone();

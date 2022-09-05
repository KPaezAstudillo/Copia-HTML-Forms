let PaymentForm = document.getElementById('PaymentForm');

PaymentForm.addEventListener('submit', (evento) => {
    evento.preventDefault();

    let errors = {}

    let rgxValidCard = /^\d{16}$/;
    let rgxValidCVC = /^\d{3}$/;
    let rgxValidAmount = /[1-9][0-9]*$/;;
    let rgxValidFirstName = /[a-zA-Z]+/;
    let rgxValidLastName = /[a-zA-Z]+/;
    let rgxValidCity = /[a-zA-Z]+/;
    let rgxValidPostalCode = /(^\d{5}$)/;
    let rgxValidMessage = /[\w\[\]`!@#$%\^&*()={}:;<>+'-]*/;

    let cardFeedback = document.querySelector('#cardFeedback');
    let cvcFeedback = document.querySelector('#cvcFeedback');
    let amountFeedback = document.querySelector('#amountFeedback');
    let firstnameFeedback = document.querySelector('#firstnameFeedback');
    let lastnameFeedback = document.querySelector('#lastnameFeedback');
    let cityFeedback = document.querySelector('#cityFeedback');
    let stateFeedback = document.querySelector('#stateFeedback');
    let postalcodeFeedback = document.querySelector('#postalcodeFeedback');
    let messageFeedback = document.querySelector('#messageFeedback');


    let { card, cvc, amount, firstname, lastname, city, state, postalcode, message } = evento.target;

    if (card.value == '') {
        errors['card'] = 'Card no puede estar vacio';
        card.classList.add('is-invalid');
        card.style.background = '#f8d7da';
    }
    else if (!rgxValidCard.test(card.value)) {
        errors['card'] = 'Card # debe contener 16 numeros';
        card.classList.add('is-invalid');
        card.style.background = '#f8d7da';
    }
    else {
        card.classList.remove('is-invalid');
        delete errors['card'];
        card.style.background = '#FFFFFF';
    }

    if (cvc.value == '') {
        errors['cvc'] = 'CVC no puede estar vacio';
        cvc.classList.add('is-invalid');
        cvc.style.background = '#f8d7da';
    }
    else if (!rgxValidCVC.test(cvc.value)) {
        errors['cvc'] = 'CVC debe contener 3 numeros';
        cvc.classList.add('is-invalid');
        cvc.style.background = '#f8d7da';
    } else {
        cvc.classList.remove('is-invalid');
        delete errors['cvc'];
        cvc.style.background = '#FFFFFF';
    }

    if (amount.value == '') {
        errors['amount'] = 'Amount no puede estar vacio';
        amount.classList.add('is-invalid');
        amount.style.background = '#f8d7da';
    }
    else if (!rgxValidAmount.test(amount.value)) {
        errors['amount'] = 'Amount debe ser una cantidad numerica de 1 hacia arriba';
        amount.classList.add('is-invalid');
        amount.style.background = '#f8d7da';
    }
    else {
        amount.classList.remove('is-invalid');
        delete errors['amount'];
        amount.style.background = '#FFFFFF';
    }

    if (firstname.value == '') {
        errors['firstname'] = 'First name no puede estar vacio';
        firstname.classList.add('is-invalid');
        firstname.style.background = '#f8d7da';
    }
    else if (!rgxValidFirstName.test(firstname.value)) {
        errors['firstname'] = 'First name debe tener un nombre válido (sin números o caracteres especiales)';
        firstname.classList.add('is-invalid');
        firstname.style.background = '#f8d7da';
    }
    else {
        firstname.classList.remove('is-invalid');
        delete errors['firstname'];
        firstname.style.background = '#FFFFFF';
    }

    if (lastname.value == '') {
        errors['lastname'] = 'Last name no puede estar vacio';
        lastname.classList.add('is-invalid');
        lastname.style.background = '#f8d7da';
    }
    else if (!rgxValidLastName.test(lastname.value)) {
        errors['lastname'] = 'Last name debe tener un nombre válido (sin números o caracteres especiales)';
        lastname.classList.add('is-invalid');
        lastname.style.background = '#f8d7da';
    } 
    else {
        lastname.classList.remove('is-invalid');
        delete errors['lastname'];
        lastname.style.background = '#FFFFFF';
    }

    if (city.value == '') {
        errors['city'] = 'City no puede estar vacio';
        city.classList.add('is-invalid');
        city.style.background = '#f8d7da';
    }
    else if (!rgxValidCity.test(city.value)) {
        errors['city'] = 'City debe tener un nombre válido (sin números o caracteres especiales)';
        city.classList.add('is-invalid');
        city.style.background = '#f8d7da';
    } 
    else {
        city.classList.remove('is-invalid');
        delete errors['city'];
        city.style.background = '#FFFFFF';
    }

    if (state.value == 'Pick a State') {
        errors['state'] = 'State no puede estar vacio';
        state.classList.add('is-invalid');
        state.style.background = '#f8d7da';
    } 
    else {
        state.classList.remove('is-invalid');
        delete errors['state'];
        state.style.background = '#FFFFFF';
    }

    if (postalcode.value == '') {
        errors['postalcode'] = 'Postal code no puede estar vacio';
        postalcode.classList.add('is-invalid');
        postalcode.style.background = '#f8d7da';
    }
    else if (!rgxValidPostalCode.test(postalcode.value)) {
        errors['postalcode'] = 'Postal code debe contener 5 dígitos';
        postalcode.classList.add('is-invalid');
        postalcode.style.background = '#f8d7da';
    } 
    else {
        postalcode.classList.remove('is-invalid');
        delete errors['postalcode'];
        postalcode.style.background = '#FFFFFF';
    }

    if (message.value == '') {
        errors['message'] = 'Message no puede estar vacio';
        message.classList.add('is-invalid');
        message.style.background = '#f8d7da';
    } 
    else if (!rgxValidMessage.test(message.value)) {
        errors['message'] = 'Debe escribir un mensaje válido';
        message.classList.add('is-invalid');
        message.style.background = '#f8d7da';
    } 
    else {
        message.classList.remove('is-invalid');
        delete errors['message'];
        message.style.background = '#FFFFFF';
    }


    if (errors['card'] || errors['cvc'] || errors['amount'] || errors['firstname'] || errors['lastname'] || errors['city'] || errors['state'] || errors['postalcode'] || errors['message']) {
        console.log(errors);
        const alertPlaceholder = document.getElementById('general')
        const wrapper = document.createElement('div')
        if (card.value == '' || cvc.value == '' || amount.value == '' || firstname.value == '' || lastname.value == '' || city.value == '' || state.value == 'Pick a State' || postalcode.value == '' || message.value == '') {
            wrapper.innerHTML = [
                `<div class="alert alert-danger" role="alert">`,
                `Some fields are missing`,
                '</div>'
            ].join('')
            alertPlaceholder.append(wrapper)
        }
        else {
            alertPlaceholder.remove(wrapper)
        }


        if (errors['card']) cardFeedback.innerHTML = errors['card'];
        if (errors['cvc']) cvcFeedback.innerHTML = errors['cvc'];
        if (errors['amount']) amountFeedback.innerHTML = errors['amount'];
        if (errors['firstname']) firstnameFeedback.innerHTML = errors['firstname'];
        if (errors['lastname']) lastnameFeedback.innerHTML = errors['lastname'];
        if (errors['city']) cityFeedback.innerHTML = errors['city'];
        if (errors['state']) stateFeedback.innerHTML = errors['state'];
        if (errors['postalcode']) postalcodeFeedback.innerHTML = errors['postalcode'];
        if (errors['message']) messageFeedback.innerHTML = errors['message'];

    } else {
        evento.target.submit();
    }
})

/* ***The "Name" Field*** */
/* first text field focus state on page load */
const nameField = document.getElementById('name');
nameField.focus();

/* *** "Job Role" section *** */
/* hide "other-job-role" when form first loads */
const otherJobRole = document.getElementById('other-job-role');
otherJobRole.style.display = 'none';

/* "T-Shirt Info" section */
/* display/hide "text field" based on user selection */
function otherJobTextField() {
    const jobTitle = document.getElementById('title');
    jobTitle.addEventListener('change', (e) => {
        if(e.target.value == 'other') {
            otherJobRole.style.display = 'block';
        } else {
            otherJobRole.style.display = 'none';
        }
    });
}

otherJobTextField();

/* disable the "color" select element */
const colorSelect = document.getElementById('color');
colorSelect.disabled = true;

/* program "design" select element to listen for user changes */
const shirtDesign = document.getElementById('design');
const colorOptions = colorSelect.children;
shirtDesign.addEventListener('change', (e) => {
    /* enable the "color" select element */
    colorSelect.disabled = false;
    for (let i = 0; colorOptions.length; i++) {
        const themeOfChoice = e.target.value;
        const dataTheme = colorOptions[i].getAttribute('data-theme');
        /* assign color options for Theme - "JS Puns" */
        /* assign color options forTheme - "I <3 JS" */
        if (themeOfChoice === dataTheme) {
            colorOptions[i].hidden = false;
        } else {
            colorOptions[i].hidden = true;
            colorOptions[i].removeAttribute = ('selected', false);
        }
    }
    /* disply proper color options of selected design */
    if (shirtDesign.value == 'js puns') {
        colorOption[1].selected = true;
    } else if (shirtDesign.value == 'heart js') {
        colorOption[4].selected = true;
    }
});

/* ***"Register for Activities" Section*** */
/* program fieldset element to listen for user changes */
const registerForActivities = document.getElementById('activities')
let totalCost = 0;
let boxesChecked = 0;

const checkBoxOptions = document.querySelectorAll('#activities input');

registerForActivities.addEventListener('change', (e) => {
    
    let selectedActivityCost = e.target.getAttribute('data-cost');
    selectedActivityCost = +selectedActivityCost;

     /* if checked total cost chould increase by value in attribute of element */
     if (e.target.checked === true) {
         totalCost += selectedActivityCost;
         boxesChecked++;
     } else {
         totalCost -= selectedActivityCost;
         boxesChecked--;
    } 
    
     /* update <p> element */
     let displayTotal = document.getElementById('activities-cost');
     displayTotal.innerHTML = `Total: $${totalCost}`;
    
     /* when user selects activity, loop over all activities */
    for (let i = 0; i < checkBoxOptions.length; i++)
     /* check if same day and time */
    if (
        e.target.getAttribute('data-day-and-time') === 
            checkBoxOptions[i].getAttribute('data-day-and-time') && 
        e.target !== checkBoxOptions[i]
    ) {
         /* disable/enable accordingly */
        if (e.target.checked) {
            checkBoxOptions[i].disabled = true;
            checkBoxOptions[i].parentElement.className = 'disabled';
        } else {
            checkBoxOptions[i].disabled = false;
            checkBoxOptions[i].parentElement.className =  '';
        }
    }
});

/* ***Payment Info Section*** */
const paymentSelection = document.getElementById('payment');
const paymentOption = paymentSelection.children;

const creditCard = document.getElementById('credit-card');
const payPal = document.getElementById('paypal');
const bitCoin = document.getElementById('bitcoin');

const creditCardNumber = document.getElementById('cc-num');
const zipCode = document.getElementById('zip');
const cvvCode = document.getElementById('cvv');

/* credit card payment option selected for user by default */
paymentSelection.children[1].setAttribute("selected", true);
payPal.style.display = 'none';
bitCoin.style.display = 'none';

/* update form display chosen payment method section */

/*  listen for changes */
paymentSelection.addEventListener('change', () => {
    /* hide all payment sections in form's UI except selected */
    if (paymentSelection.value === 'paypal') {
        payPal.style.display = 'block'
        creditCard.style.display = 'none';
        bitCoin.style.display = 'none';
    } else if (paymentSelection.value === 'credit-card') {
        payPal.style.display = 'none';
        creditCard.style.display = 'block';
        bitCoin.style.display = 'none'; 
    } else {
        payPal.style.display = 'none';
        creditCard.style.display = 'none';
        bitCoin.style.display = 'block'; 
    }
});

/* *** Form Validation *** */

/* program form element to listen for submit event */

/* "Name" field cannot be blank or empty

/* "Email Address" field must be valid format */

/* "Register for Activities" section must have at least on activity selected */

/* if and only if credit card is selected pament method */

/* "Card number" field must contain 13 - 16 digit w/o dashes or spaces */

/* "Zip code" field must contain a 5 digit number */ 

/* "CVV" field must contain a 3 digit number */ 




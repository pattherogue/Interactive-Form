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

/* ***Register for Activities" Section*** */
/* program fieldset element to listen for user changes */
const registerForActivities = document.getElementById('activites');
registerForActivities.addEventListener('change', (e) => {

    let selectedActivityCost = e.target.getAttribute('data-cost');
    selectedActivityCost = +selectedActivityCost;
    let totalCost = 0;
     /* if checked total cost chould increase by value in attribute of element */
     if (e.target.checked) {
         totalCost += selectedActivityCost;
     } else {
         totalCost -= selectedActivityCost;
     } 
    
     /* update <p> element */
     const displayTotal = document.getElementById('activites-cost');
     displayTotal.innerHTML = `$${totalCost}`;
     const checkBoxes = document.querySelectorAll('#activities input');
     for (let i = 0; i < checkBoxes.length; i++ ) {
        if (
            e.target.getAttribute('date-day-and-time') === 
            checkBoxes[i].getAttribute('day-date-and-time') && 
            e.target !== checkBoxes[i]
        ) {
            if (e.target.checked) {
                checkBoxes[i].disabled = true;
                checkBoxes[i].parentElement.className = 'disabled';
            } else {
                checkBoxes[i].disabled = false;
                checkBoxes[i].parentElement.className = '';
            }
        }
     }
 
});
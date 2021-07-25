/* first text field focus state on page load */
const nameField = document.getElementById('name');
nameField.focus();

/* hide "other-job-role" when form first loads */
const otherJobRole = document.getElementById('other-job-role');
otherJobRole.style.display = 'none';


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
    for (let i = 0; colorOptions.length; i++) {
        const themeOfChoice = e.target.value;
        const dataTheme = coloroptions[i].getAttribute('data-theme');
        /* color options for Theme - "JS Puns" */
        /* color options fo rTheme - "I <3 JS" */
        if (themeOfChoice === dataTheme) {
            colorOptions[i].hidden = false;
        } else {
            colorOptions[i].hidden = true;
            colorOptions[i].removeAttribute = ('selected', false);
        }
    }
})
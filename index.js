// === State ===

/* 
I need a number bank that should display all the numbers user has created.
*/
const bank = [];

/*
I need an even container.
*/
const even = [];

/*
I need an odd container.
*/
const odd = [];

// === Components ===

/*
I need a form that allows input in the form of a number:
*/
const $form = document.createElement("form");

$form.innerHTML = `
<label>
    Add a number to the bank
    <input type="number" name="bank" />
</label>
`;
/*
I need an "Add number" button to move number entered in form input to the number bank.

I need a "Sort 1" button to remove first number from number bank and add it to either the odd or even category.

I need a "Sort All" button to remove all the numbers from number bank, and add them to either the odd or even category.

Numbers are sorted into the correct category based on even or odd.
*/

// === Render ===

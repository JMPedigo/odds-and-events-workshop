// === State ===

/* 
I need a number bank that should display all the numbers user has created.
*/
const bank = [];

/*
I need an even container.
*/
const evens = [];

/*
I need an odd container.
*/
const odds = [];
/**
 * adds `n` to `bank`
 * @param {number} number - the number to add to the bank
 */
let n = 0;
/* adds number to number bank*/
function addToBank(number) {
  bank.push(number);
  render();
}
/**
 * sort number into correct container (odd or even)
 */
function sort() {
  const number = bank.shift();
  if (number % 2 === 0) {
    evens.push(number);
  } else {
    odds.push(number);
  }
}

function sortOne () {
    sort();
    render();
}

function sortAll () {
    while bank.length > 1) {
        sort();
    } 
    render();
}
// === Components ===

/*
I need a form that allows input in the form of a number:

I need an "Add number" button to move number entered in form input to the number bank.

I need a "Sort 1" button to remove first number from number bank and add it to either the odd or even category.

I need a "Sort All" button to remove all the numbers from number bank, and add them to either the odd or even category.
*/
function BankForm() {
  const $form = document.createElement("form");

  $form.innerHTML = `
    <label>
        Add a number to the bank
        <input type="number" name="number" />
    </label>
    <button type="submit" data-action="add">Add Number</button>
    <button type="submit" data-action="sortOne">Sort 1</button>
    <button type="submit" data-action="sortAll">Sort All</button>
  `;  

  $form.addEventListener("submit", (event) => {
    event.preventDefault();
    const action = event.submitter.dataset.action;
    if (action === "add") {
      const data = new FormData($form);
      const number = data.get("number");
      if (number === null || number === "") return;
      addToBank(+number);
    } else if (action === "sortOne") {
      sortOne();
    } else if (action === "sortAll") {
      sortAll();
    }
  });
  return $form;
}
/**
 * A single number
 * @param {number} n 
 */
function NumberInBank(n) {
    const $span = document.createElement("span");
    $span.textContent = n;
    return $span;
}
/*
Numbers are sorted into the correct category based on even or odd.
*/


// === Render ===

/* need to initialize a render function
 */
function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
        <h1>Odds & Events</h1>
        <BankForm></BankForm>
        <addNumberToBank></addNumberToBank>
        <AddOdd></AddOdd>
        <AddEven></AddEven>
    `;

  $app.querySelector("BankForm").replaceWith(BankForm());
  $app.querySelector("AddOdd").replaceWith(AddOdd());
  $app.querySelector("AddEven").replaceWith(AddEven());
}
render();

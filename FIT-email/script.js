/*
function generateEmail () {
    const firstName = prompt("Please enter your first name", "Jindrich"   
    )
    const lastName = prompt("Please enter your last name", "Hrncir")
    if (firstName != null) {
        document.body.innerHTML += "hello" + firstName + lastName 
    }
}
*/

// ukol
const jmeno = prompt('Zadej jméno bez diakritiky')
    .trim()
    .slice(0, 3)
    .normalize('NFKD')
    .replace(/[^\w]/g, '')
    .toLowerCase();
const prijmeni = prompt('Zadej příjmení bez diakritiky')
    .trim()
    .slice(0, 5)
    .normalize('NFKD')
    .replace(/[^\w]/g, '')
    .toLowerCase();
const email = `${prijmeni}${jmeno}@fit.cvut.cz`;

document.body.innerHTML += `<p>${email} </p>`;
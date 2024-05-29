



let countLessThan20 = 0;
let countMoreThan40 = 0;
let countBetween20And40 = 0;

function startCounting() {

let age;
while (true) {
      age =prompt("Entrez un âge (ou un centenaire pour arrêter) :");
      age = parseInt(age, 10);

    if (isNaN(age)) {
        alert("Veuillez entrer un nombre valide.");
        continue;
    }

    if (age < 20) {
        countLessThan20++;
    } else if (age >= 20 && age <= 40) {
        countBetween20And40++;
    } else if(age < 40) {
        countMoreThan40++;
    }

    if (age === 100) {
        break;
    }
}
displayResults();
}
 function displayResults() {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `
    <p> Nombre de moins de 20 ans : ${countLessThan20}</p>
    <p> Nombre de plus  de 40 ans : ${countMoreThan40}</p>
    <p> Nombre entre 20 et 40 ans : ${countBetween20And40}</p>

    `;
 }
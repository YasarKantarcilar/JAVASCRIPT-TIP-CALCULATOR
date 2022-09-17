
const resultTotal = document.getElementById("result-total");
const resultForEach = document.getElementById("result-for-each");

const calculateButton = document.getElementById("calculate-button");

calculateButton.addEventListener("click", function(){ /* CALCULATES THE INPUT */

    const billAmount = document.getElementById("bill-input").value;
    const tip = document.getElementById("tip-input").value;
    const peopleCount = document.getElementById("people-count-input").value;

    resultTotal.innerHTML = `${Math.ceil(
        parseInt(billAmount) + 
        parseInt(billAmount)/
        100*
        parseInt(tip)
    )}
        `;

    resultForEach.innerHTML = `${Math.ceil(
        (
        parseInt(billAmount) + 
        parseInt(billAmount)/
        100*
        parseInt(tip)
        )/
        parseInt(peopleCount)
    )}
        `;
})


function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = '';
}

function calculateResult() {
    let expression = document.getElementById("display").value;
    
    // Replace x with * for multiplication and handle ÷
    const formattedExpression = expression.replace(/x/g, '*').replace(/÷/g, '/');

    try {
        let result = eval(formattedExpression);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = 'Error';
    }
}

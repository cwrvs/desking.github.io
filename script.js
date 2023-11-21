function calculatePayment() {
  // Get the values from the form, with fallbacks to 0 if the input is empty
  var salesPrice = parseFloat(document.getElementById('salesPrice').value) || 0;
  var downPayment = parseFloat(document.getElementById('downPayment').value) || 0;
  var taxRates = (parseFloat(document.getElementById('taxRate').value) || 0) / 100;
  var licenseFee = parseFloat(document.getElementById('licenseFee').value) || 0;
  var docFee = parseFloat(document.getElementById('docFee').value) || 0;
  
  // Calculate the tax amount and total cost
  var taxAmount = salesPrice * taxRate;
  var totalCost = salesPrice - downPayment + taxAmount + licenseFee + docFee;
  
  // For simplicity, let's assume you offer a fixed interest rate and a fixed term
  // These could be inputs from the user, if you want to provide more flexibility
  var interestRate = 0.05 / 12; // 5% annual interest rate, converted to monthly
  var term = 60; // 60 months term

  // Monthly payment calculation using the formula for an amortizing loan
  var monthlyPayment = totalCost * (interestRate * Math.pow(1 + interestRate, term)) / (Math.pow(1 + interestRate, term) - 1);
  
  // Check if the result is a finite number to avoid displaying Infinity or NaN
  if (isFinite(monthlyPayment)) {
    document.getElementById('monthlyPayment').innerHTML = 'Monthly Payment: <span>$' + monthlyPayment.toFixed(2) + '</span>';
    document.getElementById('totalCost').innerHTML = 'Total Cost: <span>$' + totalCost.toFixed(2) + '</span>';
  } else {
    document.getElementById('monthlyPayment').innerHTML = 'Monthly Payment: <span>---</span>';
    document.getElementById('totalCost').innerHTML = 'Total Cost: <span>---</span>';
  }
}


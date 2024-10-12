

function calculateTax(income, expense) {
    if (typeof income !== 'number' || typeof expense !== 'number' || income < 0 || expense < 0 || income < expense) {
        return "Invalid Input";
    }else{
        
    let difference = income - expense;
    let tax = difference * 0.2;
    return tax;
    }
}


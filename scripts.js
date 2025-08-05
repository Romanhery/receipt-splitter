function calculateSplit() {
    const subtotal = parseFloat(document.getElementById('subtotal').value);
    const tipPercent = parseFloat(document.getElementById('tip').value) || 0;
    const numPeople = parseInt(document.getElementById('people').value);

    // Validation
    if (!subtotal || subtotal <= 0) {
        alert('Please enter a valid subtotal amount');
        return;
    }

    if (!numPeople || numPeople <= 0) {
        alert('Please enter a valid number of people');
        return;
    }

    if (tipPercent < 0 || tipPercent > 100) {
        alert('Tip percentage must be between 0 and 100');
        return;
    }

    // Calculate
    const tipAmount = (subtotal * tipPercent) / 100;
    const totalWithTip = subtotal + tipAmount;
    const perPerson = totalWithTip / numPeople;

    // Display results
    document.getElementById('result-subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('result-tip').textContent = `$${tipAmount.toFixed(2)}`;
    document.getElementById('result-total').textContent = `$${totalWithTip.toFixed(2)}`;
    document.getElementById('result-per-person').textContent = `$${perPerson.toFixed(2)}`;

    // Show results
    document.getElementById('results').style.display = 'block';
    document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
}

// Allow Enter key to calculate
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        calculateSplit();
    }
});

// Auto-calculate on input change
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', function() {
        const subtotal = document.getElementById('subtotal').value;
        const people = document.getElementById('people').value;
        
        if (subtotal && people) {
            setTimeout(calculateSplit, 500);
        }
    });
});

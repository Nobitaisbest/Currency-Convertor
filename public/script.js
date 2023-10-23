document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.content');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const amount = parseFloat(document.getElementById('amount').value);
        const fromCurrency = document.getElementById('fromCurrency').value;
        const toCurrency = document.getElementById('toCurrency').value;

        console.log(`Amount: ${amount}`);
        console.log(`From Currency: ${fromCurrency}`);
        console.log(`To Currency: ${toCurrency}`);
    });
});

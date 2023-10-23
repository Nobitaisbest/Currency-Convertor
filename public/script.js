function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
   const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    let KEY = "cur_live_ndJxOdd0ouCdScGQCklFSZUtlzcsqTrTKLzrMa0R";
    console.log(`Amount: ${amount}`);
    console.log(`From Currency: ${fromCurrency}`);
    console.log(`To Currency: ${toCurrency}`);
    // console.log(KEY)
    let url = `https://api.currencyapi.com/v3/latest?apikey=${KEY}`
    // console.log(url)
    Hello(fromCurrency)  
}
function Hello(ch) {
    let KEY = "cur_live_ndJxOdd0ouCdScGQCklFSZUtlzcsqTrTKLzrMa0R";
    let url = `https://api.currencyapi.com/v3/latest?apikey=${KEY}`;

    axios.get(`${url}&currencies=${ch}`)
        .then(function (response) {
            let data = response.data.data;
            const content = document.querySelector('.content');

            for (const currency in data) {
                const currencyElement = document.createElement('div');
                currencyElement.classList.add('currency-info');
                currencyElement.innerHTML = `<strong>${currency}:</strong> ${data[currency]}`;

                content.appendChild(currencyElement);
            }
        })
        .catch(function (error) {
            console.error(error);
        });
};

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
    console.log(ch)
    let KEY = "cur_live_ndJxOdd0ouCdScGQCklFSZUtlzcsqTrTKLzrMa0R";
    // console.log(KEY)
    let url = `https://api.currencyapi.com/v3/latest?apikey=${KEY}`
    // console.log(url)
    axios.get(`${url}&currencies=${ch}`)
    .then(function (response) {
        let data = response.data.data;
        console.table(data);
    })
    .catch(function (error) {
        console.error(error);
    });
};
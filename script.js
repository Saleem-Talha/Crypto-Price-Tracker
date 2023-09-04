
var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd%2Cpkr",
    "method": "GET",
    "headers": {},
}

$.ajax(settings).done(function (response) {
    console.log(response);
    btc.innerHTML = "$" + response.bitcoin.usd + " / ₨" + response.bitcoin.pkr;
            eth.innerHTML = "$" + response.ethereum.usd + " / ₨" + response.ethereum.pkr;
            doge.innerHTML = "$" + response.dogecoin.usd + " / ₨" + response.dogecoin.pkr;
});

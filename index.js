let last;

function getBitcoinPrice () {
  const xhr = new XMLHttpRequest();
  const url = 'https://api.gdax.com/products/BTC-USD/stats';
  xhr.responseType = 'json';
  xhr.contentType = 'application/json';
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      console.log(xhr.response);
      document.getElementById("last").innerHTML = xhr.response.last;
      last = xhr.response.last;
    }
  };
  xhr.open('GET', url);
  xhr.send();
}

getBitcoinPrice();
console.log(last);

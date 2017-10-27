// no API key required for this API
const API_URL = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?'

const button = document.querySelector('button')

function getQuote() {
    $.ajax({
        url: API_URL,
        dataType: 'json'
    })
    .done(function (response) {
        console.log(response);

        
    })
}

getQuote()



button.addEventListener('click', function (e){
    if 
}
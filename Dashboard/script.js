function loadDate() {
    var currentDate = new Date()
    var dateString = currentDate
        .toString()
        .split(' ')
        .splice(0, 4) //making string contain only 1st 4 words to cut out time
        .join(' ')
    
    $('#date').text(dateString)
}

function loadWeather() {
    
    var weather = $('#weather')
    var weatherDescription = $('#weatherDescription')
    var city = $('#city')

    
    var url = 'https://api.openweathermap.org/data/2.5/weather' // OpenWeather API url
    var apiKey = '3b3595265b3abf6a4e7644bc4627b6c0'


    function success(position) {
        //get latitude and longitude using HTML5's geolocation API
        var latitude = position.coords.latitude 
        var longitude = position.coords.longitude
    
        //API request to OpenWeather URL:
        $.getJSON(
            url + 
                '?units=metric&lat=' +
                latitude +
                '&lon=' +
                longitude +
                '&appid=' +               
                apiKey,
            function (data) {
                city.text(
                    data.name
                )
                weather.text(
                  data.main.temp + '° C'
                )
                weatherDescription.text(
                    data.weather[0].main
                )
            }
        )
    }
    
    //This message is displayed if there is a geolocation error:
    function error() {
        alert('Unable to retrieve your location for weather')
    }
    //caling the geolocation API
    navigator.geolocation.getCurrentPosition(success, error)

    //the text that will be displayed while the function is making the request
    weather.text('fetching weather...')
}


function loadNews() {
    var news = $('#news')
    var url = 'https://newsapi.org/v2/top-headlines?sources=the-next-web&apiKey=' //News API url
    var apiKey = 'd786390cc9ae41269c186690d8254d5d'
    //we will get multiples sets of data: title and url of articles

    $.getJSON(url + apiKey, function (data) {
        //map method to call every element in data set (urls and titles)

        var titles = data.articles.map(function (articles) {
            return "<a href ='" + articles.url + "'>" + articles.title + '</a>'
        })

        //joining the titles with two line breaks
        news.html(titles.join('<br><br>'))
    })

    //the text that will be displayed while the function is making the request
    news.text('fetching news...')
}


loadDate()
loadWeather()
loadNews()


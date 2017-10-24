console.log('heloooo');

var command = process.argv[2];
var title = process.argv[3];
var keys = require('./keys');

var Twitter = require('twitter');
var client = new Twitter(keys.twitterKeys);

var Spotify = require('spotify-web-api-node');
var spotify = new Spotify(keys.spotifyKeys);


var request = require('request');
var fs = require("fs");

var params = {
	q: 'john74557298',
	count: 20
}

if (command === "my-tweets") {
client.get('search/tweets', params, callback);

	function callback(error, data, response) {
		var tweets = data.statuses;
		for (var i = 0; i < tweets.length; i++) {
		console.log(tweets[i].text);
		console.log('Created on: ' + tweets[i].created_at);

	    	fs.appendFile("log.txt", ('===========================================\n' + 
	    		'Tweets: ' + tweets[i].text + 
	    		'\nCreated on: ' + tweets[i].created_at + 
	    		'\n===========================================\n'), function(err) {
			if (err) {
			return console.log(err);
			}
			console.log("log.txt was updated!");
			});

		}
	}
}


if (command === "spotify-this-song") {

    spotify.clientCredentialsGrant()
      .then(function(data) {
        console.log('The access token expires in ' + data.body['expires_in']);
        console.log('The access token is ' + data.body['access_token']);

        // Save the access token so that it's used in future calls
        spotify.setAccessToken(data.body['access_token']);

        spotify.searchTracks('Love')
          .then(function(data) {
            console.log('Search by "Love"', data.body);
          }, function(err) {
            console.error(err);
          });

      }, function(err) {
        console.log('Something went wrong when retrieving an access token', err.message);
      });
}







if (command === "movie-this") {

	if (title == null) {
		request('http://www.omdbapi.com/?apikey=40e9cece&t=' + 'mr nobody' + '&tomatoes=true&r=json', movie);
		function movie (error, response, body) {
        jsonBody = JSON.parse(body);
        console.log(' ');
        console.log('Title: ' + jsonBody.Title);
        console.log('Year: ' + jsonBody.Year);
        console.log('IMDb Rating: ' + jsonBody.imdbRating);
        console.log('Country: ' + jsonBody.Country);
        console.log('Language: ' + jsonBody.Language);
        console.log('Plot: ' + jsonBody.Plot);
        console.log('Actors: ' + jsonBody.Actors);
        console.log('Rotten Tomatoes Rating: ' + jsonBody.tomatoRating);
        console.log('Rotten Tomatoes URL: ' + jsonBody.tomatoURL);
        console.log(' ');
    	};
	} else {
    	request('http://www.omdbapi.com/?apikey=40e9cece&t=' + title + '&tomatoes=true&r=json', movie);
    	function movie (error, response, body) {
            jsonBody = JSON.parse(body);
            console.log(' ');
            console.log('Title: ' + jsonBody.Title);
            console.log('Year: ' + jsonBody.Year);
            console.log('IMDb Rating: ' + jsonBody.imdbRating);
            console.log('Country: ' + jsonBody.Country);
            console.log('Language: ' + jsonBody.Language);
            console.log('Plot: ' + jsonBody.Plot);
            console.log('Actors: ' + jsonBody.Actors);
            console.log('Rotten Tomatoes Rating: ' + jsonBody.tomatoRating);
            console.log('Rotten Tomatoes URL: ' + jsonBody.tomatoURL);
            console.log(' ');

        	fs.appendFile("log.txt", ('===========================================\n' + 
        		'Title: ' + jsonBody.Title + 
        		'\nYear: ' + jsonBody.Year + 
        		'\nIMDb Rating: ' + jsonBody.imdbRating + 
        		'\nCountry: ' + jsonBody.Country + 
        		'\nLanguage: ' + jsonBody.Language + 
        		'\nPlot: ' + jsonBody.Plot + 
        		'\nActors: ' + jsonBody.Actors + 
        		'\nRotten Tomatoes Rating: ' + jsonBody.tomatoRating + 
        		'\nRotten Tomatoes URL: ' + jsonBody.tomatoURL + 
        		'\n===========================================\n'), function(err) {
    		if (err) {
    		return console.log(err);
    		}
    		console.log("log.txt was updated!");
    		});
        };
    };
}

if (command === "do-what-it-says") {
	fs.readFile("random.txt", "utf8", function(error, data) {
		if (error) {
		return console.log(error);
		}

		var dataArr = data.split(",");
		if (dataArr[0] === 'movie-this') {
		request('http://www.omdbapi.com/?apikey=40e9cece&t=' + dataArr[1] + '&tomatoes=true&r=json', movie);

			function movie (error, response, body) {
			jsonBody = JSON.parse(body);
			console.log(' ');
			console.log('Title: ' + jsonBody.Title);
			console.log('Year: ' + jsonBody.Year);
			console.log('IMDb Rating: ' + jsonBody.imdbRating);
			console.log('Country: ' + jsonBody.Country);
			console.log('Language: ' + jsonBody.Language);
			console.log('Plot: ' + jsonBody.Plot);
			console.log('Actors: ' + jsonBody.Actors);
			console.log('Rotten Tomatoes Rating: ' + jsonBody.tomatoRating);
			console.log('Rotten Tomatoes URL: ' + jsonBody.tomatoURL);
			console.log(' ');

				fs.appendFile("log.txt", ('===========================================\n' + 
	    		'Title: ' + jsonBody.Title + 
	    		'\nYear: ' + jsonBody.Year + 
	    		'\nIMDb Rating: ' + jsonBody.imdbRating + 
	    		'\nCountry: ' + jsonBody.Country + 
	    		'\nLanguage: ' + jsonBody.Language + 
	    		'\nPlot: ' + jsonBody.Plot + 
	    		'\nActors: ' + jsonBody.Actors + 
	    		'\nRotten Tomatoes Rating: ' + jsonBody.tomatoRating + 
	    		'\nRotten Tomatoes URL: ' + jsonBody.tomatoURL + 
	    		'\n===========================================\n'), function(err) {
				if (err) {
				return console.log(err);
				}
				console.log("log.txt was updated!");
				});

			};
		}

	});
}



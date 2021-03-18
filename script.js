/*
/**
 * Return zodiac sugn by month and day
 *
 * @param day
 * @param month
 * @return {string} name of zodiac sign

 function getZodiacSign(day, month) {
    var zodiacSigns = {
      'capricorn':'capricorn',
      'aquarius':'aquarius',
      'pisces':'pisces',
      'aries':'aries',
      'taurus':'taurus',
      'gemini':'gemini',
      'cancer':'cancer',
      'leo':'leo',
      'virgo':'virgo',
      'libra':'libra',
      'scorpio':'scorpio',
      'sagittarius':'sagittarius'
    }
    if((month == 1 && day <= 20) || (month == 12 && day >=22)) {
      return zodiacSigns.capricorn;
    } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
      return zodiacSigns.aquarius;
    } else if((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
      return zodiacSigns.pisces;
    } else if((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
      return zodiacSigns.aries;
    } else if((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
      return zodiacSigns.taurus;
    } else if((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
      return zodiacSigns.gemini;
    } else if((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
      return zodiacSigns.cancer;
    } else if((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
      return zodiacSigns.leo;
    } else if((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
      return zodiacSigns.virgo;
    } else if((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
      return zodiacSigns.libra;
    } else if((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
      return zodiacSigns.scorpio;
    } else if((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
      return zodiacSigns.sagittarius;
    }
  }
var respSign = getZodiacSign(19, 9)
console.log(respSign)
function getDaily(sign) {
  fetch("https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=" + sign + "&day=today", {
	"method": "POST",
	"headers": {
		"x-rapidapi-key": "39f44714f4mshfeb6e4d795b7955p1c3112jsn82a3035351ec",
		"x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com"
	}
    })
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data.description)
    })
    .catch(err => {
	console.error(err);
});
}
console.log(getDaily(respSign))
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems);
  }); */
 
  var today = moment();
  $("#today").text(today.format("MMM Do, YYYY"));

  var api = 'horo_chart';
var userId = '616022';
var apiKey = 'fb8fc7a6f52e3ead803439d5b9515f89';
var data = {
day:12,
month:3,
year:1992,
hour:2,
min:23,
lat:19.132,
lon:72.342,
tzone:5.5
};
var request = $.ajax({
url: "https://json.astrologyapi.com/v1/"+api,
method: "POST",
dataType:'json',
headers: {
"authorization": "Basic " + btoa(userId+":"+apiKey),
"Content-Type":'application/json'
},
data:JSON.stringify(data)
});

request.then( function(resp){
    let userSign = resp.map( item => item.sign_name);
    let signName = getZodiacSign (1, 6, userSign)
    console.log(getDaily(signName))
console.log(signName);
}, function(err){
console.log(err);
});


function getZodiacSign(day, month, zodiacSigns) {


    if((month == 1 && day <= 20) || (month == 12 && day >=22)) {
        return zodiacSigns[0];
      } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
        return zodiacSigns[1];
      } else if((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        return zodiacSigns[2];
      } else if((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
        return zodiacSigns[3];
      } else if((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
        return zodiacSigns[4];
      } else if((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        return zodiacSigns[5];
      } else if((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
        return zodiacSigns[6];
      } else if((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
        return zodiacSigns[7];
      } else if((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
        return zodiacSigns[8];
      } else if((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
        return zodiacSigns[9];
      } else if((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
        return zodiacSigns[10];
      } else if((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
        return zodiacSigns[11];
      }
}


function getDaily(sign) {
    fetch("https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=" + sign + "&day=today", {
      "method": "POST",
      "headers": {
          "x-rapidapi-key": "39f44714f4mshfeb6e4d795b7955p1c3112jsn82a3035351ec",
          "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com"
      }
      })
      .then(function (response) {
          return response.json();
      })
      .then(function(data) {
          console.log(data.description)
      })
      .catch(err => {
      console.error(err);
  });
  }

fetch("https://astronomy.p.rapidapi.com/api/v2/studio/moon-phase", {
	"method": "POST",
	"headers": {
		"content-type": "application/json",
		"x-rapidapi-key": "b890f9b560msh2af90e884d642d5p1d7567jsn62bd8cb09e5b",
		"x-rapidapi-host": "astronomy.p.rapidapi.com"
	},
	"body": {
		"format": "png",
		"observer": {
			"date": "2020-11-01",
			"latitude": 6.56774,
			"longitude": 79.88956
		},
		"style": {
			"backgroundColor": "red",
			"backgroundStyle": "stars",
			"headingColor": "white",
			"moonStyle": "sketch",
			"textColor": "red"
		},
		"view": {
			"type": "portrait-simple"
		}
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
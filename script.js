//Select date from Calendar
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems,)
    console.log(elems)
  });
//========================

  

/**
 * Return zodiac sugn by month and day
 *
 * @param day
 * @param month
 * @return {string} name of zodiac sign
 */
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
  });
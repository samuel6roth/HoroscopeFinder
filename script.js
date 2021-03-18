
//declare global variables
var parentEL = document.querySelector('.parentDiv');
var parentEL2 = document.querySelector('.parentDiv2');
// var dailyEL = document.querySelector()
parentEL.addEventListener('click', runFn);
parentEL2.addEventListener('click', runFn);
//validate the target is not parent and parse the the element id
function runFn(e){
  if(e.target !== e.currentTarget) {
    var clickedItem = e.target.dataset.id;
    console.log(e.target);
    console.log('you clicked ', clickedItem )
    getDaily(clickedItem)
  }
  e.stopPropagation();
}





//---------------------------------------------
var today = moment();
$("#today").text(today.format("MMM Do, YYYY"));


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
    .then(function (data) {
      console.log(data.description)
    })
    .catch(err => {
      console.error(err);
    });
}

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.datepicker');
  var instances = M.Datepicker.init(elems);
});



// funtion getQuote() 

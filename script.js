  
//declare global variables
var parentEL = document.querySelector('.parentDiv');
var parentEL2 = document.querySelector('.parentDiv2');
var newDiv = document.querySelector('#newDiv')
var dailyDiv = document.querySelector('#dailyDiv')
// var dailyEL = document.querySelector()
parentEL.addEventListener('click', runFn);
parentEL2.addEventListener('click', runFn);
//validate the target is not parent and parse the the element id
function runFn(e) {
  if (e.target !== e.currentTarget) {
    var clickedItem = e.target.dataset.id;
    console.log(e.target);
    console.log('you clicked ', clickedItem)
    getDaily(clickedItem)
    getQuote()
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
      dailyDiv.innerHTML = data.description
      document.getElementById("dailyDiv").style.display = "block";
      document.getElementById("bottomTitle1").style.display = "block";
    })
    .catch(err => {
      console.error(err);
    });
}


function getQuote() {

  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data);
      var j = Math.floor(Math.random() * 1643);
      if (data[j].author==null){
        newDiv.innerHTML = '"' + data[j].text + '"' + "-Anonymous"
        console.log(data[j].author)
       }else{
      newDiv.innerHTML = '"' + data[j].text + '"' + "-" + data[j].author
      document.getElementById("newDiv").style.display = "block";
      document.getElementById("bottomTitle2").style.display = "block";
      console.log(data[j].author)
       }
    })

}
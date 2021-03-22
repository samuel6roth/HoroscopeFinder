  
//declare global variables
var parentEL = document.querySelector('.parentDiv');
var parentEL2 = document.querySelector('.parentDiv2');
var newDiv = document.querySelector('#newDiv')
var dailyDiv = document.querySelector('#dailyDiv')
var clickedItem= "";
//===========================================================
let quoteArray=[
  {"sign": "Capricorn","quote": 0},
  {"sign": "Aquarius","quote": 0},
  {"sign": "Pisces","quote": 0},
  {"sign": "Aries","quote": 0},
  {"sign": "Taurus","quote": 0},
  {"sign": "Gemini","quote": 0},
  {"sign": "Cancer","quote": 0},
  {"sign": "Leo","quote": 0},
  {"sign": "Virgo","quote": 0},
  {"sign": "Libra","quote": 0},
  {"sign": "Scorpio","quote": 0},
  {"sign": "Sagittarius","quote": 0}
  ]
  
  for (x=0;x<quoteArray.length;x++)
  {let j = Math.floor(Math.random() * 1643);
  quoteArray[x].quote=j}
  console.log(quoteArray)
  //=============================================================


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
//===================

      if (sign=="Capricorn"){
      j=quoteArray[0].quote
      }
      if (sign=="Aquarius"){
      j=quoteArray[1].quote
      }
      if (sign=="Pisces"){
      j=quoteArray[2].quote
      }
      if (sign=="Aries"){
      j=quoteArray[3].quote
      }
      if (sign=="Taurus"){
        j=quoteArray[4].quote
      }
      if (sign=="Gemini"){
        j=quoteArray[5].quote
      }
      if (sign=="Cancer"){
         j=quoteArray[6].quote
      }  
      if (sign=="Leo"){
         j=quoteArray[7].quote
      }
      if (sign=="Virgo"){
         j=quoteArray[8].quote
      }
      if (sign=="Libra"){
        j=quoteArray[9].quote
      }
      if (sign=="Scorpio"){
       j=quoteArray[10].quote
      }
      if (sign=="Sagittarius"){
        j=quoteArray[11].quote
      }


//===================
  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data);
      if (data[j].author==null){
        newDiv.innerHTML = '"' + data[j].text + '"' + "-Anonymous"
       }else{
      newDiv.innerHTML = '"' + data[j].text + '"' + "-" + data[j].author}
      document.getElementById("newDiv").style.display = "block";
      document.getElementById("bottomTitle2").style.display = "block";
    })
}

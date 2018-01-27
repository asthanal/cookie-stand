'use strict';
//create an array of open store hours
var hours = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
];

var allLocations = [];

//function called MakeLocation will be a template to create new objects that represent other locations
function MakeLocation(
  name,
  minCustPerHour,
  maxCustPerHour,
  avgCookiesPerCust
) {
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust =avgCookiesPerCust;
  this.randCustPerHour = [];
  this.cookiesSoldPerHour = [];
  this.totalCookies = 0;

  this.calcRandCustPerHour = function() {
    for (var i=0; i<hours.length; i++){
      this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustPerHour[i]);
    }
  };

  this.calcCookiesSoldPerHour = function() {
    for (var j=0; j<hours.length; j++) {
      var cookiesSold = (Math.round(this.avgCookiesPerCust * this.randCustPerHour[j]));
      this.cookiesSoldPerHour.push(cookiesSold);
      this.totalCookies += cookiesSold;
      console.log(this.cookiesSoldPerHour[j]);
    }
  };

  this.calcRandCustPerHour();
  this.calcCookiesSoldPerHour();

  allLocations.push(this);
}

function makeStands() {
  new MakeLocation('First and Pike', 23, 65, 6.3);
  new MakeLocation('SeaTac Airport', 3, 24, 1.2);
  new MakeLocation('Seattle Center', 11, 38, 3.7);
  new MakeLocation('Capitol Hill', 20, 38, 2.3);
  new MakeLocation('Alki', 2, 16, 4.6);
}

function makeHeaderRow(cookiestands) {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = '';
  trEl.appendChild(thEl);

  for(var j=0; j<hours.length; j++){
    thEl = document.createElement('th');
    thEl.textContent = hours[j];
    trEl.appendChild(thEl);
  }

  thEl = document.createElement('th');
  thEl.textContent = 'Daily Location Total';
  trEl.appendChild(thEl);

  cookiestands.appendChild(trEl);
}

function showLocations(cookiestands) {
//each location
  for (var i=0; i<allLocations.length; i++) {
    //add a row
    var trEl = document.createElement('tr');
    var location = allLocations[i];

    //add location name header
    var thEl = document.createElement('th');
    thEl.textContent = location.name;
    trEl.appendChild(thEl);

    //add cookies per hour
    for (var j=0; j<hours.length; j++){
      thEl = document.createElement('th');
      thEl.textContent = location.cookiesSoldPerHour[j];
      trEl.appendChild(thEl);
    }

    //total cookies
    thEl = document.createElement('th');
    thEl.textContent = location.totalCookies;
    trEl.appendChild(thEl);
    cookiestands.appendChild(trEl);
  }
}

function showLocationTotal() {
  //add a row
  var trEL = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Total';
  trEL.appendChild(thEl);

  //each hour
  for(var i=0; i<hours.length; i++){
    var totalPerHour = 0;
    var totalAllLocations = 0;
    thEl = document.createElement('th');

    for(var j=0; j<allLocations.length; j++){
      totalPerHour += allLocations[j].cookiesSoldPerHour[i];
    }

    thEl.textContent = totalPerHour;
    trEL.appendChild(thEl);
  }

  for(var j=0; j<allLocations.length; j++){
    totalAllLocations += allLocations[j].totalCookies;
  }

  thEl = document.createElement('th');
  thEl.textContent = totalAllLocations;
  trEL.appendChild(thEl);

  cookiestands.appendChild(trEL);
}

function showTable() {
  var cookiestands = document.getElementById('cookiestands');
  makeHeaderRow(cookiestands);
  showLocations(cookiestands);
  showLocationTotal(cookiestands);
}

makeStands();
showTable();

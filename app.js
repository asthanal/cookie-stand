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

var firstAndPike = {
  name: 'First and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  randCustPerHour: [],
  cookiesSoldPerHour: [],
  totalCookies: 0,
  
  calcRandCustPerHour: function() {
    for (var i=0; i<hours.length; i++){
      this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    }
    console.log(this.randCustPerHour[i]);
  },
  calcCookiesSoldPerHour: function() {
    for (var j=0; j<hours.length; j++) {
      this.cookiesSoldPerHour.push(Math.round(this.avgCookiesPerCust * this.randCustPerHour[j]));
      console.log(this.cookiesSoldPerHour[j]);
    }
  },

  show: function() {
    var firstandpike = document.getElementById('fnp');
    var fandplist = document.getElementById('fnp-list');
    this.calcRandCustPerHour();
    this.calcCookiesSoldPerHour();
    var h3El= document.createElement('h3');
    h3El.textContent = this.name;
    firstandpike.appendChild(h3El);
    for (var k=0; k<hours.length; k++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldPerHour[k] + ' cookies';
      this.totalCookies += this.cookiesSoldPerHour[k];
      console.log(liEl);
      fandplist.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: '+ this.totalCookies + ' cookies';
    fandplist.appendChild(liEl);
  }
};
firstAndPike.show();

var seaTacAirport = {
  name: 'SeaTac Airport',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesPerCust: 1.2,
  randCustPerHour: [],
  cookiesSoldPerHour: [],
  totalCookies: 0,

  calcRandCustPerHour: function() {
    for (var i=0; i<hours.length; i++){
      this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    }
    console.log(this.randCustPerHour[i]);
  },
  calcCookiesSoldPerHour: function() {
    for (var j=0; j<hours.length; j++) {
      this.cookiesSoldPerHour.push(Math.round(this.avgCookiesPerCust * this.randCustPerHour[j]));
      console.log(this.cookiesSoldPerHour[j]);
    }
  },

  show: function() {
    var seatac = document.getElementById('seatac');
    var seataclist = document.getElementById('seatac-list');
    this.calcRandCustPerHour();
    this.calcCookiesSoldPerHour();
    var h3El= document.createElement('h3');
    h3El.textContent = this.name;
    seatac.appendChild(h3El);
    for (var k=0; k<hours.length; k++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldPerHour[k] + ' cookies';
      this.totalCookies += this.cookiesSoldPerHour[k];
      console.log(liEl);
      seataclist.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: '+ this.totalCookies + ' cookies';
    seataclist.appendChild(liEl);
  }
};
seaTacAirport.show();

var seattleCenter = {
  name: 'Seattle Center',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesPerCust: 3.7,
  randCustPerHour: [],
  cookiesSoldPerHour: [],
  totalCookies: 0,

  calcRandCustPerHour: function() {
    for (var i=0; i<hours.length; i++){
      this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    }
    console.log(this.randCustPerHour[i]);
  },
  calcCookiesSoldPerHour: function() {
    for (var j=0; j<hours.length; j++) {
      this.cookiesSoldPerHour.push(Math.round(this.avgCookiesPerCust * this.randCustPerHour[j]));
      console.log(this.cookiesSoldPerHour[j]);
    }
  },

  show: function() {
    var seattlecen = document.getElementById('seacenter');
    var seattlecenlist = document.getElementById('seacenter-list');
    this.calcRandCustPerHour();
    this.calcCookiesSoldPerHour();
    var h3El= document.createElement('h3');
    h3El.textContent = this.name;
    seattlecen.appendChild(h3El);
    for (var k=0; k<hours.length; k++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldPerHour[k] + ' cookies';
      this.totalCookies += this.cookiesSoldPerHour[k];
      console.log(liEl);
      seattlecenlist.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: '+ this.totalCookies + ' cookies';
    seattlecenlist.appendChild(liEl);
  }
};
seattleCenter.show();

var capitolHill = {
  name: 'Capitol Hill',
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiesPerCust: 2.3,
  randCustPerHour: [],
  cookiesSoldPerHour: [],
  totalCookies: 0,

  calcRandCustPerHour: function() {
    for (var i=0; i<hours.length; i++){
      this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    }
    console.log(this.randCustPerHour[i]);
  },
  calcCookiesSoldPerHour: function() {
    for (var j=0; j<hours.length; j++) {
      this.cookiesSoldPerHour.push(Math.round(this.avgCookiesPerCust * this.randCustPerHour[j]));
      console.log(this.cookiesSoldPerHour[j]);
    }
  },

  show: function() {
    var capitolhill = document.getElementById('caphill');
    var capitolhilllist = document.getElementById('caphill-list');
    this.calcRandCustPerHour();
    this.calcCookiesSoldPerHour();
    var h3El= document.createElement('h3');
    h3El.textContent = this.name;
    capitolhill.appendChild(h3El);
    for (var k=0; k<hours.length; k++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldPerHour[k] + ' cookies';
      this.totalCookies += this.cookiesSoldPerHour[k];
      console.log(liEl);
      capitolhilllist.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: '+ this.totalCookies + ' cookies';
    capitolhilllist.appendChild(liEl);
  }
};
capitolHill.show();

var alki = {
  name: 'Alki',
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiesPerCust: 4.6,
  randCustPerHour: [],
  cookiesSoldPerHour: [],
  totalCookies: 0,

  calcRandCustPerHour: function() {
    for (var i=0; i<hours.length; i++){
      this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    }
    console.log(this.randCustPerHour[i]);
  },
  calcCookiesSoldPerHour: function() {
    for (var j=0; j<hours.length; j++) {
      this.cookiesSoldPerHour.push(Math.round(this.avgCookiesPerCust * this.randCustPerHour[j]));
      console.log(this.cookiesSoldPerHour[j]);
    }
  },

  show: function() {
    var alkii= document.getElementById('alk');
    var alkiilist = document.getElementById('alk-list');
    this.calcRandCustPerHour();
    this.calcCookiesSoldPerHour();
    var h3El= document.createElement('h3');
    h3El.textContent = this.name;
    alkii.appendChild(h3El);
    for (var k=0; k<hours.length; k++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldPerHour[k] + ' cookies';
      this.totalCookies += this.cookiesSoldPerHour[k];
      console.log(liEl);
      alkiilist.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: '+ this.totalCookies + ' cookies';
    alkiilist.appendChild(liEl);
  }
};
alki.show();


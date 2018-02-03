'use strict';
var hours = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

var allLocations =[];

function MakeLocation(name, minCustPerHour, maxCustPerHour, avgCookiesPerCust)
{
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.randCustPerHour = [];
  this.cookiesSoldPerHour = [];
  this.totalCookies = 0;

  this.calcRandCustPerHour = function() {
    for(var i=0; i<hours.length; i++){
      this.randCustPerHour.push(Math.floor(Math.random()* (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour));
      console.log('Inside the function calcRandCustPerHour');
    }
  };

  this.calcCookiesSoldPerHour = function() {
    for(var j=0; j<hours.length; j++){
      var cookiesSold = (Math.round(this.randCustPerHour[j] * this.avgCookiesPerCust));
      this.cookiesSoldPerHour.push(cookiesSold);
      this.totalCookies += cookiesSold;
      console.log('Inside the function calcCookiesSoldPerHour');
    }
  };

  this.calcRandCustPerHour();
  this.calcCookiesSoldPerHour();

  allLocations.push(this);
  console.log('All locations push');
}

function makeStands() {
  new MakeLocation('First and Pike', 23, 65, 6.3);
  new MakeLocation('SeaTac Airport', 3, 24, 1.2);
  new MakeLocation('Seattle Center', 11, 38, 3.7);
  new MakeLocation('Capitol Hill', 20, 38, 2.3);
  new MakeLocation('Alki', 2, 16, 4.6);
  console.log('Inside makeStands');
}

function makeHeaderRow(cookiestands) {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  trEl.appendChild(thEl);

  for(var k =0; k<hours.length; k++)
  {
    thEl = document.createElement('th');
    thEl.textContent = hours[k];
    trEl.appendChild(thEl);
  }

  thEl = document.createElement('th');
  thEl.textContent = 'Domestic Sales Total';
  trEl.appendChild(thEl);

  cookiestands.appendChild(trEl);
  console.log('Making header row');
}

function showLocations(cookiestands)
{
  for(var l=0; l<allLocations.length; l++)
  {
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    thEl.textContent = allLocations[l].name;
    trEl.appendChild(thEl);
    console.log('Making row2 with all locations names');

    for(var m=0; m<hours.length; m++)
    {
      var tdEl = document.createElement('td');
      tdEl.textContent = allLocations[l].cookiesSoldPerHour[m];
      trEl.appendChild(tdEl);
    }
    console.log('Cookies sold per hour for all locations in row2');
    tdEl = document.createElement('td');
    tdEl.textContent = allLocations[l].totalCookies;
    trEl.appendChild(tdEl);
    cookiestands.appendChild(trEl);
  }
}

function showLocationTotal(cookiestands)
{
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);

  for(var n=0; n<hours.length; n++)
  {
    var totalPerHour = 0;
    var totalAllLocations = 0;
    var tdEl = document.createElement('td');

    for(var p=0; p<allLocations.length; p++)
    {
      totalPerHour += allLocations[p].cookiesSoldPerHour[n];
    }
    tdEl.textContent = totalPerHour;
    trEl.appendChild(tdEl);
  }

  for(var r=0; r<allLocations.length; r++)
  {
    totalAllLocations += allLocations[r].totalCookies;
  }
  tdEl = document.createElement('td');
  tdEl.textContent = totalAllLocations;
  trEl.appendChild(tdEl);
  cookiestands.appendChild(trEl);
}

var cookiestands = document.getElementById('cookiestands');
makeStands();
makeHeaderRow(cookiestands);
showLocations(cookiestands);
showLocationTotal(cookiestands);

var storeForm = document.getElementById('store-form');

function handleStoreAdd(event)
{
  event.preventDefault();

  if(!event.target.storename.value || !event.target.mincust.value || !event.target.maxcust.value || !event.target.avgcook.value)
  {
    return alert('Please input values, fields cannot be empty!');
  }

  var newStoreName = event.target.storename.value;
  var newStoreMinCust = event.target.mincust.value;
  var newStoreMaxCust = event.target.maxcust.value;
  var newStoreAvgCook = event.target.avgcook.value;

  new MakeLocation(newStoreName, newStoreMinCust, newStoreMaxCust, newStoreAvgCook);

  for(var i= cookiestands.rows.length; i>0; i--)
  {
    cookiestands.deleteRow(i-1);
  }
  makeHeaderRow(cookiestands);
  showLocations(cookiestands);
  showLocationTotal(cookiestands);

  event.target.storename.value = null;
  event.target.mincust.value = null;
  event.target.maxcust.value = null;
  event.target.avgcook.value = null;
}
storeForm.addEventListener('submit', handleStoreAdd);
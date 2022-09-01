// https://www.omnicalculator.com/finance/free-float

// calculators not working

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const freefloatpercentageRadio = document.getElementById('freefloatpercentageRadio');
const outstandingsharesRadio = document.getElementById('outstandingsharesRadio');
const restrictedsharesRadio = document.getElementById('restrictedsharesRadio');
const closelyheldsharesRadio = document.getElementById('closelyheldsharesRadio');

let freefloatpercentage;
let outstandingshares = v1;
let restrictedshares = v2;
let closelyheldshares = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

freefloatpercentageRadio.addEventListener('click', function() {
  variable1.textContent = 'Outstanding shares';
  variable2.textContent = 'Restricted shares';
  variable3.textContent = 'Closely held shares';
  outstandingshares = v1;
  restrictedshares = v2;
  closelyheldshares = v3;
  result.textContent = '';
});

outstandingsharesRadio.addEventListener('click', function() {
  variable1.textContent = 'Free float percentage';
  variable2.textContent = 'Restricted shares';
  variable3.textContent = 'Closely held shares';
  freefloatpercentage = v1;
  restrictedshares = v2;
  closelyheldshares = v3;
  result.textContent = '';
});

restrictedsharesRadio.addEventListener('click', function() {
  variable1.textContent = 'Free float percentage';
  variable2.textContent = 'Outstanding shares';
  variable3.textContent = 'Closely held shares';
  freefloatpercentage = v1;
  outstandingshares = v2;
  closelyheldshares = v3;
  result.textContent = '';
});

closelyheldsharesRadio.addEventListener('click', function() {
  variable1.textContent = 'Free float percentage';
  variable2.textContent = 'Outstanding shares';
  variable3.textContent = 'Restricted shares';
  freefloatpercentage = v1;
  outstandingshares = v2;
  restrictedshares = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(freefloatpercentageRadio.checked)
    result.textContent = `Free float percentage = ${computefreefloatpercentage().toFixed(2)}`;

  else if(outstandingsharesRadio.checked)
    result.textContent = `Outstanding shares = ${computeoutstandingshares().toFixed(2)}`;

  else if(restrictedsharesRadio.checked)
    result.textContent = `Restricted shares = ${computerestrictedshares().toFixed(2)}`;

  else if(closelyheldsharesRadio.checked)
    result.textContent = `Closely held shares = ${computecloselyheldshares().toFixed(2)}`;
})

// calculation

function computefreefloatpercentage() {
  return ((Number(outstandingshares.value) - Number(restrictedshares.value) - Number(closelyheldshares.value)) / Number(outstandingshares.value)) * 100;
}

function computeoutstandingshares() {
  return (Number(freefloatpercentage.value) * Number(closelyheldshares.value)) + Number(restrictedshares.value);
}

function computerestrictedshares() {
  return Number(outstandingshares.value) - ((Number(freefloatpercentage.value) / 100) * Number(outstandingshares.value)) + Number(closelyheldshares.value);
}

function computecloselyheldshares() {
  return Number(outstandingshares.value) - ((Number(freefloatpercentage.value) / 100) * Number(outstandingshares.value)) + Number(restrictedshares.value);
}
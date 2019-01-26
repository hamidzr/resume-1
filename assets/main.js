'use strict';

// Global site tag (gtag.js) - Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag() {dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-83673341-2');

// User Heat Tag
(function(add, cla) {window['UserHeatTag']=cla;window[cla]=window[cla]||function() {(window[cla].q=window[cla].q||[]).push(arguments);}, window[cla].l=1*new Date();var ul=document.createElement('script');var tag = document.getElementsByTagName('script')[0];ul.async=1;ul.src=add;tag.parentNode.insertBefore(ul, tag);})('//uh.nakanohito.jp/uhj2/uh.js', '_uhtracker');_uhtracker({id:'uha71AZEbd'});
// End User Heat Tag


// setup a onetime warning
if (!document.cookie.includes('isWarned')) {
  const WARNING = 'This page is a work in progress, consider looking at the pdf version.';
  setTimeout(() => alert(WARNING), 3000);
  document.cookie = 'isWarned=true';
}


// spaces out a 3 part man header
function spaceOut(parent) {
  let spans = Array.from(parent.querySelectorAll('span'));
  // calc the empty space
  // can't use reduce.. why?
  const totalOccupied = spans.map(s => s.clientWidth).reduce((a, b) => a + b);
  const totalEmpty = parent.clientWidth - totalOccupied;

  // position the middle element
  spans[1].style.left = (totalEmpty/2 + spans[0].clientWidth) + 'px';
}

// fix spacing for all .manheader
Array.from(document.querySelectorAll('.manheader')).forEach(spaceOut);

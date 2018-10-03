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
  const WARNING = 'This page is still unfinished and the information provided here might be inaccurate and not mine.';
  setTimeout(() => alert(WARNING), 3000);
  document.cookie = 'isWarned=true';
}


// ==UserScript==
// @name          Wishing Well Auto-Filler
// @description   Auto-fills 21np donation and the item you want (just replace second value)
// @include       http://www.neopets.com/wishing.phtml
// @version       2.0
// ==/UserScript==

document.querySelector("input[name='donation']").value = '21';
document.querySelector("input[name='wish']").value = 'Turned Tooth';
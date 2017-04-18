// ==UserScript==
// @name          Wise Old King Selector
// @description   Randomly pre-selects a saying for the avatar
// @include       http://www.neopets.com/medieval/wiseking.phtml
// @version       2.0
// ==/UserScript==

let maxOptions = [15, 21, 11, 18, 11, 124, 276];

for (let i=1; i<=7; i++) {
    let questionEl = document.getElementById('qp' + i);
    let selection = Math.floor(Math.random() * (maxOptions[i - 1] - 1)) + 1;
    questionEl.options[selection].selected=true;
}
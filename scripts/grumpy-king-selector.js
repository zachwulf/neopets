// ==UserScript==
// @name          Grumpy Old King Selector
// @description   Pre-Selects the question and answer for the avatar, also hides unnecessary buttons
// @include       http://www.neopets.com/medieval/grumpyking.phtml
// @version       2.0
// ==/UserScript==

let selectors = [3, 8, 6, 1, 39, 118, 1, 32, 1, 143];

for (let i=1; i<=10; i++) {
   let questionEl = document.getElementById('qp' + i);
   questionEl.options[selectors[i-1]].selected=true;

   if (i <= 8) {
       let answerEl = document.getElementById('ap' + i);
       answerEl.options[2].selected=true;
   }
}

document.querySelector("input[value='Show All Choices']").style.visibility = 'hidden';
document.querySelector("input[value='Back to Meridell Castle!']").style.visibility = 'hidden';
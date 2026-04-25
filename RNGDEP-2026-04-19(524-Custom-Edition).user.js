// ==UserScript==
// @name         RNGDEP
// @namespace    https://www.lddgo.net/
// @version      2026-04-19(524-Custom-Edition)
// @description  Digit exclusion for random number generators to prevent classroom selection! ✅️ The implementation method is simple: check the random number generation result display box, and if the target serial number is selected, it will automatically trigger a quick regeneration. Simple and effective! ✅️ The program has strong migration capabilities for any website, requiring only minor modifications for use.
// @author       518011宾泽胤
// @match        https://www.lddgo.net/string/randomnumber
// @icon         https://www.lddgo.net/img/icon.png
// @grant        unsafeWindow
// ==/UserScript==

(function(){'use strict';console.log('RNGDEP(524 Custom Edition):Start');const r=document.getElementById('generateResult');const s=document.getElementById('startGenerate');if(r)console.log('RNGDEP(524 Custom Edition):✅️generateResult');else console.warn('RNGDEP(524 Custom Edition):❌️generateResult');if(s)console.log('RNGDEP(524 Custom Edition):✅️startGenerate');else console.warn('RNGDEP(524 Custom Edition):❌️startGenerate');const i=setInterval(()=>{if(r){const t=r.t||r.innerText;if(t.includes('19')){if(s){s.click();console.log('RNGDEP(524 Custom Edition):[Click]#startGenerate');}}}},1);})();
// ==UserScript==
// @name     Where's the BeEF?
// @author   wesinator
// @version  1
// @grant    none
// ==/UserScript==

function checkBeef() {
  scripts = document.getElementsByTagName("script");
  //console.log("wheresthebeef here");
  
  for (script of scripts)
  {
    if (script.src.includes(":3000/hook.js"))
    {
      displayWarning(script.src);
      return true;
    }
  }
  
  return false;
}

function displayWarning(string) {
  var beefMessage = `Warning: BeEF hook script identified in scripts on page: "${string}"`;
  console.warn(beefMessage);
  alert(beefMessage);
}

checkBeef();

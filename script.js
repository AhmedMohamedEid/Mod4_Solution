
// Module 4 Assignment Instructions.
//


// STEP 1: (NOTHING TO DO. ALREADY DONE FOR YOU)
(function () {

var names = ["Ahmed", "Mohamed", "eid", "Ali", "Alaa", "Sara"];


for (var i = 0; i < names.length; i++) {

  
  var firstLetter = names[i].charAt(0).toLowerCase();

  
  // name in the loop.
  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}

})();

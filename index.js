const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const updatedTutorials = tutorials.map(function (title) {
    debugger; 
    const splitTitle = title.split(" ");
    debugger;
    const upperSplit = splitTitle.map(word => (word.charAt(0).toUpperCase() + word.slice(1)));
    debugger;
    let newElementVal = "";
    debugger;
    for (let wordIndex = 0; wordIndex < (upperSplit.length -1); wordIndex++) {
      debugger;  
      newElementVal = newElementVal + upperSplit[wordIndex] + " ";
    }
    debugger;
    newElementVal = newElementVal + upperSplit[upperSplit.length -1];
    return newElementVal;
  });

      
  debugger;
  
  
    //for (const tutorial of tutorials) {
     // const splitTitle = tutorial.split(" ");
     // for (let wordIndex = 0; wordIndex < splitTitle.length; wordIndex++) {
      
      //}

    //  }
    /*
    for (let letterIndex = 0; letterIndex < title.length; letterIndex++) {
      
      if(letterIndex === 0) {
        newArraY = title.map()
      } else { 
        if(tutorial.charAt(letterIndex - 1) === " ") {
        tutorial.map(word => word.charAt(letterIndex).toUpperCase());
        }
      }
    }*/
    return updatedTutorials;
}
titleCased();
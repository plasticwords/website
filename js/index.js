// document.getElementById('test-btn').addEventListener('click', function() {
//     toggleClass(document.getElementById('test'), 'test-class');
// });


// let isFocused = false;
//   $('#venn-button').click(function(){
//     if (isFocused) {
//       $('#myNumberInput').blur();
//       isFocused = false;
//     } else {
//       $('#myNumberInput').focus();
//       isFocused = true;
//     }
//   });

// document.addEventListener('DOMContentLoaded', function() {
//     // Get the pink div and pink-text span
//     const pinkDiv = document.querySelector('.pink-sq');
//     const pinkText = document.querySelector('.pink-sq-text');
    
//     // Add event listener for hover
//     pinkDiv.addEventListener('mouseover', function() {
//       // Change the color of pink-text to red
//       pinkText.style.color = 'red';
//     });
    
//     pinkDiv.addEventListener('mouseout', function() {
//       // Change the color of pink-text back to the initial color
//       pinkText.style.color = 'black';
//     });
//     }); -->

    // maybe way to simplify loops (from services page):
    // window.addEventListener('DOMContentLoaded', () => {
    //   const box2 = document.getElementById('box2');
    //   const detail2 = document.getElementById('detail2');

    //   box2.addEventListener('click', () => {
    //     detail2.style.display = detail1.style.display === 'none' ? 'block' : 'none';
    //   });
    // });

// 1. COLOUR CHANGE TO ONE DIV: Decision  on JS structure: This works, but loops obfuscate, and right now I need clarity to understand what's going on.
// const button = document.querySelector('.button'); 
const button = document.getElementById("hover"); 
const boxes = document.getElementsByClassName("pink-sq-text");

const buttonPressed = () => {
  for(const box of boxes) {
    box.classList.toggle("coloured-text");
  
  }
};

const buttonMouseOut = () => {
  for (const box of boxes) {
    box.classList.toggle("coloured-text");
    
  }
};

button.addEventListener("mouseover", buttonPressed);
button.addEventListener("mouseout", buttonMouseOut);



// 2. LOOPING OF COLOUR CHANGES, so can do change to multiple divs:
// window.addEventListener('DOMContentLoaded', () => {
//   const boxes = document.querySelectorAll('.services-offering > div[class^="box"]');
//   const details = document.querySelectorAll('.services-detail > div[id^="detail"]');

//   const hideAllDetails = () => {
//     details.forEach(detail => {
//       detail.style.display = 'none';
//     });
//   };

//   const resetBoxColors = () => {
//     boxes.forEach(box => {
//       box.style.color = '#7C7C81';
//     });
//   };

//   boxes.forEach((box, index) => {
//     box.addEventListener('mouseover', () => {
//       hideAllDetails();
//       resetBoxColors();

//       box.style.color = '#B450B0';
//       details[index].style.display = 'block';
//     });
//   });
// });


// attempt 3. Decision  on JS structure: This works well, but maybe try simplifying it after you've clarified the html/css and know how you're structuring it.


// Box 1: could use click event instead

// const box1 = document.querySelector('.box1');
// const edit1 = document.querySelector('.box1-edit');
// const reason1 = document.querySelector('.box1-reason');

// box1.addEventListener('mouseover', () => {
//   edit1.style.background = 'navy';
//   reason1.style.display = 'block';
//   reason1.style.color = 'black';
//   reason1.style.border = '1px solid black';
//   reason1.style.padding = '1%';
//   reason1.style.background = 'white';
// });

// box1.addEventListener('mouseout', () => {
//   edit1.style.background = 'none';
//   reason1.style.display = 'none';
// });

// Box 2:  

// const box2 = document.querySelector('.box2');
// const edit2 = document.querySelector('.box2-edit');
// const reason2 = document.querySelector('.box2-reason');

// box2.addEventListener('mouseover', () => {
//   edit2.style.background = 'navy';
//   reason2.style.display = 'block';
//   reason2.style.color = 'black';
//   reason2.style.border = '1px solid black';
//   reason2.style.padding = '1%';
//   reason2.style.background = 'white';
// });

// box2.addEventListener('mouseout', () => {
//   edit2.style.background = 'none';
//   reason2.style.display = 'none';
// });

// Box 3:

// const box3 = document.querySelector('.box3');
// const edit3 = document.querySelector('.box3-edit');
// const reason3 = document.querySelector('.box3-reason');

// box3.addEventListener('mouseover', () => {
//   edit3.style.background = 'navy';
//   reason3.style.display = 'block';
//   reason3.style.color = 'black';
//   reason3.style.border = '1px solid black';
//   reason3.style.padding = '1%';
//   reason3.style.background = 'white';
// });

// box3.addEventListener('mouseout', () => {
//   edit3.style.background = 'none';
//   reason3.style.display = 'none';
// });


// Box 4:

// const box4 = document.querySelector('.box4');
// const edit4 = document.querySelector('.box4-edit');
// const reason4 = document.querySelector('.box4-reason');

// box4.addEventListener('mouseover', () => {
//   edit4.style.background = 'navy';
//   reason4.style.display = 'block';
//   reason4.style.color = 'black';
//   reason4.style.border = '1px solid black';
//   reason4.style.padding = '1%';
//   reason4.style.background = 'white';
// });

// box4.addEventListener('mouseout', () => {
//   edit4.style.background = 'none';
//   reason4.style.display = 'none';
// });

// Loop through boxes 1 to 16:

for (let i = 1; i <= 16; i++) {
  const box = document.querySelector(`.box${i}`);
  // const boxAnimation = document.querySelector(`.box${i+1}`);
  const reason = document.querySelector(`.box${i}-reason`);
  const edit = document.querySelector(`.box${i}-edit`);
  // const instructions = document.querySelector('.instructions');
  const instructionsBox = document.querySelector('.box1');
  // const boxEditHover = document.querySelector('.box2-edit'); 

  box.addEventListener('mouseover', () => {
    // edit.style.background = '#B450B0';
    // edit.style.background = 'rgba(180, 80, 176, 0.25)';
    
    // TOGGLED CLASSES BELOW INSTEAD
    // edit.style.background = 'rgba(180, 80, 176, 0.1)';
    // edit.style.color = '#B450B0';
    // edit.style.fontWeight = 'bold';
    // END
    edit.classList.add('edit-hover'); // Add the class 'highlight' to box2-edit when hovering over box2
    // edit.style.background = 'rgba(1, 1, 1, 0.025)';
    // edit.style.fontFamily = 'cambria';
    // edit.style.fontSize = '1.1rem';
    // edit.style.border = '3px solid black';
    // edit.style.color = 'black';
    // edit.style.padding = '3px';
    reason.style.display = 'block';
    reason.style.color = 'black';
    reason.style.border = '1px solid black';
    reason.style.padding = '1%';
    reason.style.background = 'white';
    // instructions.style.opacity = '0.75';
    // reason.style.transition = 'all 10s ease-out';
    // transition: all 2s ease-out;
    // transition: all 0.3s ease-in;
    // transition: all 0.3s;
    // transition: transform 0.3s;
  });

  box.addEventListener('mouseout', () => { 
    // TOGGLED CLASSES BELOW INSTEAD
    // edit.style.background = 'none';
    // edit.style.color = '#7C7C81';
    // edit.style.fontWeight = 'normal';
    // END
    box.style.transform = 'rotate(135deg)'; // This affects to PW logo, maybe exclude that
    edit.classList.remove('edit-hover'); // Remove the class 'highlight' from box2-edit when no longer hovering over box2
    // edit.style.fontFamily = 'monospace';
    // edit.style.fontSize = '1rem';
    reason.style.display = 'none';
    // instructions.style.opacity = '1';
  });

// ______________________
// START OF ANIMATION :

  box.addEventListener('click', () => {
    // boxAnimation.classList.add('box-transformation');
    // boxAnimation.classList.add('box-animation');
    // boxAnimation.addEventListener('animationend', () => {
    //   boxAnimation.classList.remove('box-animation-after');
    //   }, { once: true });
  });

// const element = document.querySelector('.fade-out-element');
// element.addEventListener('click', () => {
//   element.classList.add('fade-out'); // Add the fade-out class to trigger the animation
// });


// END OF ANIMATION
// ______________________

  instructionsBox.addEventListener('mouseout', () => {
    setTimeout(() => {
    // instructionsBox.style.color = 'rgba(180, 80, 176)';
    // instructionsBox.style.color = '#F3F2EE';
    // instructionsBox.style.color = 'black';
    instructionsBox.style.color = '#B450B0';
    instructionsBox.style.background = '#B450B0';
    instructionsBox.style.fontSize = '1.2rem';
    instructionsBox.style.opacity = '0.65';
    // instructionsBox.style.opacity = '1';
    instructionsBox.style.fontWeight = 'normal';
    instructionsBox.style.padding = '0';
    instructionsBox.style.margin = '0';
    instructionsBox.style.textAlign = 'center';
    // instructionsBox.style.writingMode = 'vertical-rl';
      }, 7500); // 7500 milliseconds = 7.5 seconds
  });
}

//   edit.addEventListener('mouseover', () => {
//     edit.style.cursor = 'pointer';
//     reason.style.display = 'block';
//     reason.style.color = 'black';
//     reason.style.border = '1px solid black';
//     reason.style.padding = '1%';
//     reason.style.background = 'white';
//   });

  
  // function toggleHoverClass() {
    // const boxHover = document.querySelector('.box2');

    // boxHover.addEventListener('mouseenter', () => {
    //    have put action in "for loop"    
    // });

  //   boxHover.addEventListener('mouseleave', () => {
  //      have put action in "for loop"
  //   });
  // }

  // Call the function to set up the event listeners
//   toggleHoverClass();
// }

// ___________________________________________
// Starting working on animation for box+1, but couldn't get it finished:

// if (boxAnimation.style.transform === 'rotate(135deg)') {
//   console.log("hello world");
// } else {
//   console.log("goodbye world");
// }
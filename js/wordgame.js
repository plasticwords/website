// const box1 = document.querySelector('.box1');
// const edit1 = document.querySelector('.box1-edit');
// const reason1 = document.querySelector('.box1-reason');

// Loop through boxes 1 to 16:

for (let i = 1; i <= 16; i++) {
  const box = document.querySelector(`.box${i}`);
  // const boxAnimation = document.querySelector(`.box${i+1}`);
  const reason = document.querySelector(`.box${i}-reason`);
  const edit = document.querySelector(`.box${i}-edit`);
  // const instructions = document.querySelector('.instructions');
  const instructionsBox = document.querySelector('.box1');
  const instructions = document.querySelector(`.box1-reason`);
  const logoBox = document.querySelector(`.box16`);
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
    instructionsBox.style.transform = 'rotate(0deg)';
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
    instructionsBox.style.transform = 'rotate(0deg)';
    logoBox.style.transform = 'rotate(0deg)';
    edit.classList.remove('edit-hover'); // Remove the class 'highlight' from box2-edit when no longer hovering over box2
    // edit.style.fontFamily = 'monospace';
    // edit.style.fontSize = '1rem';
    reason.style.display = 'none';
    instructions.style.display = 'block';
    instructions.style.border = 'none';
    instructions.style.padding = 'calc(1% + 1px)';
    instructions.style.color = '#7C7C81';
    instructions.style.background = 'none';
    // instructions.style.opacity = '1';
  });

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
    // instructionsBox.style.transform = 'rotate(135deg)'
    // instructionsBox.style.writingMode = 'vertical-rl';
      }, 4000); // 4000 milliseconds = 4 seconds
  });
}

// ___________________________________________
// Starting working on animation for box+1, but couldn't get it finished:

// if (boxAnimation.style.transform === 'rotate(135deg)') {
//   console.log("hello world");
// } else {
//   console.log("goodbye world");
// }


// ANIMATION:
// box.addEventListener('click', () => {
//   boxAnimation.classList.add('box-animation');
//   boxAnimation.addEventListener('animationend', () => {
//     boxAnimation.classList.remove('box-animation-after');
//     }, { once: true });
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


// const boxes = document.getElementsByClassName("pink-sq-text");
// const buttonPressed = () => {
//   for(const box of boxes) {
//     box.classList.toggle("coloured-text");  
//   }
// };
// button.addEventListener("mouseover", buttonPressed);


// window.addEventListener('DOMContentLoaded', () => {
//   const box2 = document.getElementById('box2');
//   const detail2 = document.getElementById('detail2');

//   box2.addEventListener('click', () => {
//     detail2.style.display = detail1.style.display === 'none' ? 'block' : 'none';
//   });
// });


// document.addEventListener('DOMContentLoaded', function() {
// window.addEventListener('DOMContentLoaded', () => {     
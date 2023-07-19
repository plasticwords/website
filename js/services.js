// window.addEventListener('DOMContentLoaded', () => {
    //   const box1 = document.getElementById('box1');
    //   const detail1 = document.getElementById('detail1');

    //   box1.addEventListener('click', () => {
    //     detail1.style.display = detail1.style.display === 'none' ? 'block' : 'none';
    //   });
    // });


    // window.addEventListener('DOMContentLoaded', () => {
    //   const box2 = document.getElementById('box2');
    //   const detail2 = document.getElementById('detail2');

    //   box2.addEventListener('click', () => {
    //     detail2.style.display = detail1.style.display === 'none' ? 'block' : 'none';
    //   });
    // });


    // this JS works, it's a copy of the code below, but no colouring include:
  //  window.addEventListener('DOMContentLoaded', () => {
  //     const boxes = document.querySelectorAll('.services-offering > div[id^="box"]');
  //     const details = document.querySelectorAll('.services-detail > div[id^="detail"]');

  //     const hideAllDetails = () => {
  //       details.forEach(detail => {
  //         detail.style.display = 'none';
  //       });
  //     };

  //     boxes.forEach((box, index) => {
  //       box.addEventListener('click', () => {
  //         hideAllDetails();
  //         details[index].style.display = 'block';
  //       });
  //     });
  //   });


  window.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.services-offering > div[id^="box"]');
    const details = document.querySelectorAll('.services-detail > div[id^="detail"]');
  
    const hideAllDetails = () => {
      details.forEach(detail => {
        detail.style.display = 'none';
      });
    };
  
    const resetBoxColors = () => {
      boxes.forEach(box => {
        box.style.color = '#7C7C81';
      });
    };
  
    boxes.forEach((box, index) => {
      box.addEventListener('click', () => {
        hideAllDetails();
        resetBoxColors();
  
        box.style.color = '#B450B0';
        details[index].style.display = 'block';
      });
    });
  });


  // Cleaning up JS (from index page):

for (let i = 5; i <= 16; i++) {
  const box = document.querySelector(`.box${i}`);
  const edit = document.querySelector(`.box${i}-edit`);
  const reason = document.querySelector(`.box${i}-reason`);
  const instructions = document.querySelector('.instructions');

  box.addEventListener('mouseover', () => {
    edit.style.background = '#B450B0';
    reason.style.display = 'block';
    reason.style.color = 'black';
    reason.style.border = '1px solid black';
    reason.style.padding = '1%';
    reason.style.background = 'white';
    instructions.style.opacity = '0.75';
    // reason.style.transition = 'all 10s ease-out';
    // transition: all 2s ease-out;
    // transition: all 0.3s ease-in;
    // transition: all 0.3s;
    // transition: transform 0.3s;
  });

  box.addEventListener('mouseout', () => {
    edit.style.background = 'none';
    reason.style.display = 'none';
    // instructions.style.opacity = '1';
  });
}
// window.addEventListener('DOMContentLoaded', () => {
    //   const box1 = document.getElementById('box1');
    //   const detail1 = document.getElementById('detail1');

    //   box1.addEventListener('click', () => {
    //     detail1.style.display = detail1.style.display === 'none' ? 'block' : 'none';
    //   });
    // });

    // window.addEventListener('DOMContentLoaded', () => {
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


  // TRYING TO Cleaning up JS original code  (from index page). Not bad, but doesn't loop back to serviceTitle:

// for (let i = 1; i <= 6; i++) {
//   const serviceTitle = document.querySelector(`.title${i}`);
//   const serviceDetail = document.querySelector(`.detail${i}`);

//   // serviceTitle.addEventListener('click', () => {
//   function displayServiceOfferings() {
//     serviceDetail.style.display = 'block';
//     serviceDetail.style.border = '1px solid #B450B0';
//     // serviceDetail.style.border = '1px solid black';
//     serviceDetail.style.color = 'black';
//     serviceDetail.style.padding = '2%';
//     serviceDetail.style.background = 'lightgrey';
//     serviceTitle.style.color = '#B450B0';
//     // Loop for hiding all details, :. only showing corresponding:
//     serviceDetail.forEach(detail => {
//         detail.style.color = 'red';
//         // detail.style.display = 'none';
//       });
    // });
  // }
  // serviceTitle.addEventListener('click', displayServiceOfferings);
// }

// CLEANED CODE, TRYING TO, version with loops. This is a mess of duplication and ambiguity. Compare this to the solution below, the solution below is much more elegnat. Is your solution technically better though?:

// for (let i = 1; i <= 6; i++) {
//   const serviceTitle = document.querySelector(`.title${i}`);
//   const serviceDetail = document.querySelector(`.detail${i}`);

//   function displayServiceOfferings() {
//     // Reset all serviceTitle colors to black
//     for (let j = 1; j <= 6; j++) {
//       const title = document.querySelector(`.title${j}`);
//       title.style.color = 'black';
//     }

//     for (let j = 1; j <= 6; j++) {
//       const detail = document.querySelector(`.detail${j}`);
//       if (i === j) {
//         // Show the clicked detail
//         detail.style.display = 'block';
//         detail.style.border = '1px solid #B450B0';
//         detail.style.color = 'black';
//         detail.style.padding = '2%';z
//         detail.style.background = 'lightgrey';
//         serviceTitle.style.color = '#B450B0';
//       } else {
//         // Hide other details
//         detail.style.display = 'none';
//       }
//     }
//   }

//   serviceTitle.addEventListener('click', displayServiceOfferings);
// }


  // ORIGINAL JAVASCRIPT. Back where I started. This works well, just need to understand what it's doing.

    const serviceTitle = document.querySelectorAll('.service-title > div[id^="title"]');
    const serviceDetail = document.querySelectorAll('.service-detail > div[id^="detail"]');
    // const serviceIntro = document.querySelectorAll('.service-intro');
    const serviceTitleBorder = document.querySelector('.service-title');

    // loop to hide all services offerings title:
    const resetServiceTitles = () => {
      serviceDetail.forEach(detail => {
        detail.style.display = 'none';
      });
      serviceTitle.forEach(title => {
        title.style.color = '#7C7C81';
        // title.style.opacity = '0.65';
        // title.style.opacity = '0.25';
        title.style.opacity = '0.35';
        title.style.fontWeight = 'normal';
      });
      // serviceIntro.forEach(intro => {
        // intro.style.opacity = '0.25';
        // intro.style.opacity = '0.8';
      // });
      serviceTitleBorder.style.borderBottom = 'none';
    };

    // display and style service offerings detail, call prior function
    serviceTitle.forEach((detail, i) => {
      detail.addEventListener('click', () => {
        resetServiceTitles();
        serviceTitle[i].style.color = '#B450B0';
        serviceTitle[i].style.opacity = '1';
        // serviceTitle[i].style.fontWeight = 'bold';
        serviceDetail[i].style.display = 'block';
        // serviceDetail[i].style.borderLeft = '1px solid #7d8590';
        // serviceDetail[i].style.borderRight = '1px solid #7d8590';
        serviceDetail[i].style.borderBottom = '1px solid #7d8590';
        serviceDetail[i].style.borderTop = '1px solid #7d8590';
        // serviceDetail[i].style.borderBottom = '1px solid lightgray';
        // serviceDetail[i].style.borderTop = '1px solid lightgray';
        // serviceDetail[i].style.borderBottom = '1px solid #B450B0';
        // serviceDetail[i].style.borderTop = '1px solid #B450B0';
        // serviceDetail[i].style.border = '3px solid black';
        // serviceDetail[i].style.border = '2px solid #B450B0'; 
        // serviceDetail[i].style.color = '#B450B0';
        // serviceDetail[i].style.color = '#7C7C81';
        // serviceDetail[i].style.color = '#7d8590';
        // serviceDetail[i].style.color = 'black'; 
        // serviceDetail[i].style.padding = '3% 15% 3% 15%'
        serviceDetail[i].style.padding = '3% 5% 3% 5%'
        // serviceDetail[i].style.padding = '3%'
        // serviceDetail[i].style.fontWeight = 'bold';    
        // serviceDetail[i].style.borderRadius = '25px'; // loop through elements in NodeList to have this in dark mode
        // serviceDetail[i].style.borderRadius = '50px';
        // serviceDetail[i].style.background = 'rgba(0, 0, 0, 0.075)';
        // serviceDetail[i].style.background = 'rgba(180, 80, 176, 0.1)';
      });
    });

    // serviceIntro.addEventListener('mouseover', () => {
    //   serviceIntro.style.color = 'red';
    // });

    // const serviceTitleBullet = document.querySelector('.title-bullet-point');
    //   serviceTitleBullet.style.color = '#7C7C81';
    //   serviceTitleBullet.style.opacity = '1';
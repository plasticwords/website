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

  // window.addEventListener('DOMContentLoaded', () => {
    const serviceTitle = document.querySelectorAll('.service-title > div[id^="title"]');
    const serviceDetail = document.querySelectorAll('.service-detail > div[id^="detail"]');

    // loop to hide all service offerings title:
    const resetServiceTitles = () => {
      serviceDetail.forEach(detail => {
        detail.style.display = 'none';
      });
      serviceTitle.forEach(detail => {
        detail.style.color = '#7C7C81';
      });
    };

    // display and style service offerings detail, call prior function
    serviceTitle.forEach((title, i) => {
      title.addEventListener('click', () => {
        resetServiceTitles();
        // serviceDetail.style.display = 'block';
        serviceDetail[i].style.display = 'block';
        serviceDetail[i].style.border = '3px solid black';
        // serviceDetail[index].style.border = '3px solid #B450B0'; 
        serviceDetail[i].style.color = 'black';
        // serviceDetail[index].style.color = '#B450B0';
        serviceDetail[i].style.padding = '3%'
        serviceDetail[i].style.background = 'rgba(180, 80, 176, 0.1)';
        // serviceDetail[index].style.background = 'rgba(0, 0, 0, 0.075)';
        
      });
    });
  
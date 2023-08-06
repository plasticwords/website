// ? Simplify in chatGPT && Keep dark mode activated when move through site (I this is called persistence) -- burger menu JS may help, this line of code may also help:
// if (darkButton.classList.contains('active'))
// will probably have to use a toggle system in dark mode

// Implementing dark mode:
const darkButton = document.querySelector('.dark-mode');
const darkButtonResponsive = document.querySelector('.dark-mode-responsive');
const darkBackground = document.querySelector('html');
const darkMenuActive = document.getElementById('active-page');
const darkTitle = document.querySelector('.title');
const darkTitleText = document.getElementById('title-text');
const darkMainText = document.querySelector('.container');
const darkModeTextCanvas = document.querySelector('.mode-on');
const lightModeOffText = document.querySelector('.light-mode-on');
const darkModeOnText = document.querySelector('.dark-mode-on');
// const darkMainTextBorder = document.querySelector('.text'); // will keep border on footer grid
const darkFooter = document.querySelector('.footer ');
const darkResponsiveMenu = document.querySelector('.menu');
const darkResponsiveBorder = document.querySelector('.responsive-header');
const darkMenu = document.querySelectorAll('.menu-link');
const darkFooterSocial = document.querySelectorAll('.footer-social-link')
const darkSocial = document.querySelectorAll('.social i'); // only for "Contact" page
const darkBiography = document.querySelectorAll('.biography-container'); // only for "About" page
const darkBlogName = document.querySelector('.blog-name'); // only for "Blog" page
const darkBlogSummary = document.querySelector('.blog-summary'); // only for "Blog" page
// const darkBlogPicture = document.querySelector('.blog-container img'); // only for "Blog" page
const darkModeInstruct = document.querySelector('.dark-mode-instruct');

// darkButton.addEventListener('click', () => {
function enableDarkMode() {
  darkBackground.style.background = '#0D1117'; // dark charcoal black
  darkMenuActive.style.color = '#7289DA'; // pastel/baby blue
  darkTitle.style.background = '#010409'; // very dark navy blue, almost black (was using it for borders)
  darkTitle.style.border = '2px solid rgba(255, 255, 255, 0.075)'; // 7.5% grey
  darkTitleText.style.color = '#7d8590'; // light silver
  darkMainText.style.color = '#7d8590';
  darkModeTextCanvas.style.color = '#7289DA';
  lightModeOffText.style.display = 'none';
  darkModeOnText.style.display = 'block';
  // darkMainTextBorder.style.borderBottom = '2px solid #010409';
  darkFooter.style.borderTop = '1.5px solid rgba(255, 255, 255, 0.075)';
  darkResponsiveMenu.style.background = '#0D1117';
  darkResponsiveBorder.style.borderBottom = '1.5px solid rgba(255, 255, 255, 0.075)';
  // Loop for menu items: 
  darkMenu.forEach(menu => {
    menu.addEventListener('mouseover', () => {
      menu.style.color = '#7289DA';
    });
  });
  darkMenu.forEach(menu => {
    menu.addEventListener('mouseout', () => {
      menu.style.color = 'rgba(124, 124, 129, 0.25)';
    });
  });
  // Loop for social text link in footer:
  darkFooterSocial.forEach(word => {
      word.style.color = '#7d8590';
    });
  // Loop for social icons:
  darkSocial.forEach(icon => { 
      icon.style.color = '#7d8590';
    });  
  // Loop for line seperating each biography:
  darkBiography.forEach(item => {
      // item.style.borderTop = '2px solid #010409';
      item.style.borderTop = '1.5px solid rgba(255, 255, 255, 0.075)';
    });
  // Change colour of anchor link in "Blogs" page:
  darkBlogName.addEventListener('mouseover', () => {
      // darkBlogName.style.color = '#7289DA'; // I like this a lot, but can't update the colour hover affect on Services page. Same deal with darkBlogPictures below
      darkBlogName.style.color = '#B450B0';
    });
  darkBlogName.addEventListener('mouseout', () => {
      darkBlogName.style.color = '#7d8590';
    });
  darkBlogSummary.addEventListener('mouseover', () => {
      // darkBlogSummary.style.color = '#7289DA';
      darkBlogSummary.style.color = '#B450B0';
    });
  darkBlogSummary.addEventListener('mouseout', () => {
      darkBlogSummary.style.color = '#7d8590';
    });    
  darkBlogName.style.color = '#7d8590';
  darkBlogSummary.style.color = '#7d8590';
  darkBlogSummary.style.borderBottom = '1.5px solid rgba(255, 255, 255, 0.075)';
  // darkBlogPicture.addEventListener('mouseover', () => {
  //     darkBlogPicture.style.borderBottom = '5px solid #7289DA';
  //     // darkBlogPicture.style.borderBottom = '5px solid #B450B0';
  //     darkBlogPicture.style.marginBottom = '-5px';
  //   });
  // darkBlogPicture.addEventListener('mouseout', () => {
  //     darkBlogPicture.style.borderBottom = 'none';
  //     darkBlogPicture.style.marginBottom = '0';
  //   });
  }

darkButton.addEventListener('click', enableDarkMode);
darkButtonResponsive.addEventListener('click', enableDarkMode);

// Display dark mode instructions:
darkButton.addEventListener('mouseover', () => {
  darkModeInstruct.style.display = 'inline-block';
  // darkModeInstruct.style.color = '#7289DA';
  // darkModeInstruct.style.fontWeight = 'bolder';
});
darkButton.addEventListener('mouseout', () => { 
  darkModeInstruct.style.display = 'none';
});
// Touch event for tablet touchscreen:
darkButton.addEventListener('touchstart', () => {
  darkModeInstruct.style.display = 'inline-block';
  setTimeout(() => {
    darkModeInstruct.style.display = 'none';
  }, 3000); // 3000 milliseconds = 3 seconds
});


// Implement light mode:
const lightButton = document.querySelector('.light-mode');
const lightButtonResponsive = document.querySelector('.light-mode-responsive');
const lightBackground = document.querySelector('html');
const lightMenuActive = document.getElementById('active-page');
const lightTitle = document.querySelector('.title');
const lightTitleText = document.getElementById('title-text');
const lightMainText = document.querySelector('.container');
const lightModeTextCanvas = document.querySelector('.mode-on');
const lightModeOnText = document.querySelector('.light-mode-on');
const darkModeOffText = document.querySelector('.dark-mode-on');
// const lightMainTextBorder = document.querySelector('.text'); // will keep border on footer grid
const lightFooter = document.querySelector('.footer')
const lightResponsiveMenu = document.querySelector('.menu');
const lightResponsiveBorder = document.querySelector('.responsive-header');
const lightMenu = document.querySelectorAll('.menu-link');
const lightFooterSocial = document.querySelectorAll('.footer-social-link')
const lightSocial = document.querySelectorAll('.social i'); // only for "Contact" page
const lightBiography = document.querySelectorAll('.biography-container'); // only for "About" page
const lightBlogName = document.querySelector('.blog-name'); // only for "Blog" page
const lightBlogSummary = document.querySelector('.blog-summary'); // only for "Blog" page
// const lightBlogPicture = document.querySelector('.blog-container img'); // only for "Blog" page
const lightModeInstruct = document.querySelector('.light-mode-instruct');

// lightButton.addEventListener('click', () => {  
function enableLightMode() {  
  lightBackground.style.background = '#F3F2EE';
  lightMenuActive.style.color = '#B450B0';
  lightTitle.style.background = 'white';
  lightTitle.style.border = 'lightgray 1px solid';
  lightTitleText.style.color = '#7C7C81';
  lightMainText.style.color = '#7C7C81';
  lightModeTextCanvas.style.color = '#B450B0';
  lightModeOnText.style.display = 'block';
  darkModeOffText.style.display = 'none';
  // lightMainTextBorder.style.borderBottom = 'lightgray 1px solid';
  lightFooter.style.borderTop = 'lightgray 1px solid';
  lightResponsiveMenu.style.background = '#F3F2EE';
  lightResponsiveBorder.style.borderBottom = '1px solid lightgray';
  // Loop for menu items: 
  lightMenu.forEach(menu => {
    menu.addEventListener('mouseover', () => {
      menu.style.color = '#B450B0';
    });
  });
  lightMenu.forEach(menu => {
    menu.addEventListener('mouseout', () => {
      menu.style.color = 'rgba(124, 124, 129, 0.25)';
    });
  });
  // Loop for social text link in footer:
  lightFooterSocial.forEach(word => {
      word.style.color = '#7C7C81';
    });
  // Loop for social icons:
  lightSocial.forEach(icon => {
      icon.style.color = '#7C7C81';
    });  
  // Loop for line seperating each biography: 
  lightBiography.forEach(item => {
      // 
      item.style.borderTop = '1px solid lightgray';
    });
  // Change colour of anchor link in "Blogs" page:
  lightBlogName.addEventListener('mouseover', () => {
      //
      lightBlogName.style.color = '#B450B0';
    });
  lightBlogName.addEventListener('mouseout', () => {
      lightBlogName.style.color = '#7C7C81';
    });
  lightBlogSummary.addEventListener('mouseover', () => {
      //
      lightBlogSummary.style.color = '#B450B0';
    });
  lightBlogSummary.addEventListener('mouseout', () => {
      lightBlogSummary.style.color = '#7C7C81';
    });
  lightBlogName.style.color = '#7C7C81';
  lightBlogSummary.style.color = '#7C7C81';
  lightBlogSummary.style.borderBottom = '1px solid lightgray';
  // lightBlogPicture.addEventListener('mouseover', () => {
  //     lightBlogPicture.style.borderBottom = '5px solid #B450B0';
  //     //
  //     lightBlogPicture.style.marginBottom = '-5px';
  //   });
  // lightBlogPicture.addEventListener('mouseout', () => {
  //     lightBlogPicture.style.borderBottom = 'none';
  //     lightBlogPicture.style.marginBottom = '0';
  //   });
  }

lightButton.addEventListener('click', enableLightMode);
lightButtonResponsive.addEventListener('click', enableLightMode);

// Display light mode instructions:
lightButton.addEventListener('mouseover', () => {  
  lightModeInstruct.style.display = 'inline-block';
  // 
  // 
});
lightButton.addEventListener('mouseout', () => {  
  lightModeInstruct.style.display = 'none';
});
// Touch event for tablet touchscreen:
lightButton.addEventListener('touchstart', () => {
  lightModeInstruct.style.display = 'inline-block';
  setTimeout(() => {
    lightModeInstruct.style.display = 'none';
  }, 3000); // 3000 milliseconds = 3 seconds
});


  // 1. Tried implementing this in dark mode, but it wasn't working. Dark background/colours:

  // const darkServiceDetail = document.querySelectorAll('.service-detail'); // just for services page

  // darkServiceDetail.forEach(detail => {
  //     detail.style.background = 'rgba(255, 255, 255, 0.85)';
  //       dark version not working, don't know why:
  //     detail.style.background = '#0D1117';
  //     detail.style.color = '#7d8590';
  //     detail.style.border = '2px solid #7d8590';
  //   });

  // 2. Tried implementing this in dark mode. Wasn't working though. Dark borders:

  // const darkBiographyText = document.querySelectorAll('.biography-text'); // only for "About" page
  
  // // Loop for left border around biography
  // darkBiographyText.forEach(box => {
  //     box.style.borderLeft = '1.5px solid rgba(255, 255, 255, 0.075)';
  //   });

  // 3. Tried implementing this in dark mode, but not working. Dark scrollar:

  // const darkScrollbar = document.querySelectorAll('.scrollbar-style::-webkit-scrollbar-track') // only for "About" page

  // darkScrollbar.forEach(item => {
  //     item.style.background = '#010409';
  //   }); 

  // 4. Tried changing colour of social links in footer on hover. Working fine, but don't have time to implement properly. Here's what I did, added to loop in dark mode:

  // word.addEventListener('mouseover', () => {
  //   word.style.color = '#B450B0';
  // });
  // word.addEventListener('mouseout', () => {
  //   word.style.color = '#7d8590';
  // });

  // 4. Implement change of dark button colour on hover of corner dark mode Text. Don't like it though
  
  // const darkModeCornerText = document.querySelector('.dark-mode-on');

  // Change dark button colour on hover over dark-mode-text
  // darkModeCornerText.addEventListener('mouseover', () => {
  //   darkButton.style.color = '#7289DA';
  //   darkButton.style.opacity = '1';
  // });
  // darkModeCornerText.addEventListener('mouseout', () => {
  //   darkButton.style.color = '#7d8590';
  // });


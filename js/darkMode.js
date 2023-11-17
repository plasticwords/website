const darkButton = document.querySelector('.dark-mode');
const darkButtonResponsive = document.querySelector('.dark-mode-responsive');
const darkBackground = document.querySelector('html');
const darkModeInstruct = document.querySelector('.dark-mode-instruct');
const lightButton = document.querySelector('.light-mode');
const lightButtonResponsive = document.querySelector('.light-mode-responsive');
const lightBackground = document.querySelector('html');
const lightModeInstruct = document.querySelector('.light-mode-instruct');
// CORPORATE CHANGE:
// const corporateButton = document.querySelector('.corporate-mode');
// const corporateModeTextCHange1 = document.getElementById('title-text')

// Enable dark (default) mode:
function enableDarkMode() {
    document.body.classList.remove('lightmode');
    darkBackground.style.background = '#0D1117';
    // Store the user's preference for dark mode
    localStorage.setItem('darkMode', 'enabled');
  }

// Enable light mode:
function enableLightMode() {
    document.body.classList.add('lightmode');
    lightBackground.style.background = '#F3F2EE';
    // Store the user's preference for light mode
    localStorage.setItem('darkMode', 'disabled');
  }

// CORPORATE CHANGE:
// Enable corporate mode:
// function enableCorporateMode() {
//   document.body.classList.add('corporate');
//   lightBackground.style.background = 'white';
//   // text updates:
//   corporateModeTextCHange1.innerText = 'Contact';
//   corporateModeTextCHange1.style.fontWeight = 'bold';
//   corporateModeTextCHange1.style.fontSize = '1.35rem';
//   // Store the user's preference for light mode
//   localStorage.setItem('darkMode', 'disabled');
// }

// Check if user has dark mode preference and apply on page load:
const modePreference = localStorage.getItem('darkMode');
if (modePreference === 'enabled' || modePreference === null) { // Default to dark mode if preference isn't set - i.e. initital visit - or set to 'enabled'
    enableDarkMode(); 
} else {
    enableLightMode(); 
}

// Call the functions:
darkButton.addEventListener('click', enableDarkMode);
darkButtonResponsive.addEventListener('click', enableDarkMode);
lightButton.addEventListener('click', enableLightMode);
lightButtonResponsive.addEventListener('click', enableLightMode);
// CORPORATE CHANGE:
// corporateButton.addEventListener('click', enableCorporateMode);


// Display dark mode instructions:
darkButton.addEventListener('mouseover', () => {
    darkModeInstruct.style.display = 'inline-block';
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

// Display light mode instructions:
lightButton.addEventListener('mouseover', () => {  
    lightModeInstruct.style.display = 'inline-block';
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


  // MAY USE IN FUTURE:
  // if (darkButton.classList.contains('active'))
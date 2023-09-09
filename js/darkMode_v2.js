const darkButton = document.querySelector('.dark-mode');
const darkButtonResponsive = document.querySelector('.dark-mode-responsive');
const darkBackground = document.querySelector('html');
const darkModeInstruct = document.querySelector('.dark-mode-instruct');
const lightButton = document.querySelector('.light-mode');
const lightButtonResponsive = document.querySelector('.light-mode-responsive');
const lightBackground = document.querySelector('html');
const lightModeInstruct = document.querySelector('.light-mode-instruct');

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

// Check if the user has a preference for dark mode and apply it on page load:
const userPreference = localStorage.getItem('darkMode');
if (userPreference === 'enabled' || userPreference === null) {
    enableDarkMode(); // Default to dark mode if the preference is not set or set to 'enabled'
} else {
    enableLightMode(); 
}

// Call the functions:
darkButton.addEventListener('click', enableDarkMode);
darkButtonResponsive.addEventListener('click', enableDarkMode);
lightButton.addEventListener('click', enableLightMode);
lightButtonResponsive.addEventListener('click', enableLightMode);


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
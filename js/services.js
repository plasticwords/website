const serviceTitle = document.querySelectorAll('.service-title > div[id^="title"]');
const serviceDetail = document.querySelectorAll('.service-detail > div[id^="detail"]');
const serviceTitleBorder = document.querySelector('.service-title');

// Loop to hide all services offerings title / Reset all serviceTitle to:
function resetServiceTitles() {
  serviceTitle.forEach(title => {
    title.style.color = 'var(--text-color)';
    title.style.opacity = '0.6';
  });
  serviceDetail.forEach(detail => {
    detail.style.display = 'none';
  });
  serviceTitleBorder.style.borderBottom = 'none';
};

// Display and style service offerings detail, call prior function:    
function displayServiceOfferings(i) {
  resetServiceTitles();
    serviceTitle[i].style.color = '#B450B0';
    serviceTitle[i].style.opacity = '1';
    serviceDetail[i].style.display = 'block';
    serviceDetail[i].style.padding = '3% 5% 3% 5%'
    serviceDetail[i].style.border = '1.5px solid var(--text-color)';
  }

serviceTitle.forEach((detail, i) => {
  detail.addEventListener('click', () => {
    displayServiceOfferings(i);
  });
});

// window.addEventListener('DOMContentLoaded', () => {
// detail1.style.display = detail1.style.display === 'none' ? 'block' : 'none';
// const serviceTitle = document.querySelector(`.title${i}`);
// for (let j = 1; j <= 6; j++) {
// src/utils/darkmode.js

// Checks for existing dark mode preference and applies it
export function initializeDarkMode() {
 const darkmodeSwitch = document.querySelector('#darkmode-switch');
 const hasDarkmode = localStorage.getItem('darkmode');

 if (hasDarkmode == null) {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
   enableDarkMode();
  } else {
   disableDarkMode();
  }
 } else if (hasDarkmode === 'on') {
  enableDarkMode();
 } else if (hasDarkmode === 'off') {
  disableDarkMode();
 }

 darkmodeSwitch?.addEventListener('change', () => {
  if (darkmodeSwitch.checked) {
   enableDarkMode();
   localStorage.setItem('darkmode', 'on');
  } else {
   disableDarkMode();
   localStorage.setItem('darkmode', 'off');
  }
    // Byt bild beroende på dark mode-status
    if (isDarkMode) {
        themeImage.src = '../assets/images/logo-dark.svg';
      } else {
        themeImage.src = '../assets/images/logo.svg';
      }

 });
}


// Enables dark mode
export function enableDarkMode() {
 const darkmodeSwitch = document.querySelector('#darkmode-switch');
 darkmodeSwitch.checked = true;
 document.documentElement.classList.add('dark');
}

// Disables dark mode
export function disableDarkMode() {
 const darkmodeSwitch = document.querySelector('#darkmode-switch');
 darkmodeSwitch.checked = false;
 document.documentElement.classList.remove('dark');
}

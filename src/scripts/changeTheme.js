
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  const changeThemeBtn = document.querySelector('.theme-switch__toggle')
  const body = document.querySelector('body')
  if(!localStorage.theme){
    localStorage.theme = 'light-theme'
  }
  body.className = localStorage.theme

  changeThemeBtn.addEventListener('change', onChangeTheme)
 
  
  function onChangeTheme () {
      body.classList.toggle(Theme.DARK)
      body.classList.contains(Theme.DARK)? 'light-theme' : 'dark-theme'
      localStorage.theme = body.className || 'light-theme'

  }
      


const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  // const changeThemeBtn = document.querySelector('.theme-switch__toggle')
  // const body = document.querySelector('body')
  // if(!localStorage.theme){
  //   localStorage.theme = 'light-theme'
  // }
  // body.className = localStorage.theme
  
  

  // changeThemeBtn.addEventListener('change', onChangeTheme)
 
  
  // function onChangeTheme () {
  //     body.classList.toggle(Theme.DARK)
  //     body.classList.contains(Theme.DARK)? 'light-theme' : 'dark-theme'
  //     localStorage.theme = body.className || 'light-theme'

  // }


  const changeThemeBtn = document.querySelector('.theme-switch__toggle');
  const body = document.querySelector('body')
  const currentTheme = localStorage.getItem("theme");
  
  
  if (currentTheme) {
    body.classList.add(currentTheme);
  
    if (currentTheme === Theme.DARK) {
      changeThemeBtn.checked = true;
    }
  }

  function onChangeTheme(e) {
    if (e.target.checked) {
      localStorage.setItem("theme", Theme.DARK);
      body.classList.toggle(Theme.DARK);
      body.classList.remove(Theme.LIGHT);

    } else {
      localStorage.setItem("theme", Theme.LIGHT);
      body.classList.toggle(Theme.LIGHT);
      body.classList.remove(Theme.DARK);
      
    }
  }

  changeThemeBtn.addEventListener("change", onChangeTheme);

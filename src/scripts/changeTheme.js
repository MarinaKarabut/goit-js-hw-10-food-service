
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  const changeThemeBtn = document.querySelector('.theme-switch__toggle');
  const body = document.querySelector('body')
  body.classList.add(Theme.LIGHT)
  
  changeThemeBtn.addEventListener("change", onChangeTheme);

  if (localStorage.getItem("theme") === 'true') {
    body.classList.replace(Theme.LIGHT, Theme.DARK);
      changeThemeBtn.checked = true;
    }


  function onChangeTheme(e) {
    const switchTheme = body.classList.toggle(Theme.DARK);
      localStorage.setItem("theme", switchTheme);
  }

 


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


//   const changeThemeBtn = document.querySelector('.theme-switch__toggle');
//   const body = document.querySelector('body')
//   const currentTheme = localStorage.getItem("theme");

// if (currentTheme) {
//   body.classList.add(currentTheme);

//   if (currentTheme === Theme.DARK) {
//     changeThemeBtn.checked = true;
//   }
// }

// function onChangeTheme(e) {
//   if (e.target.checked) {
//     localStorage.setItem("theme", Theme.DARK);
//     body.classList.toggle(Theme.DARK);
//     body.classList.remove(Theme.LIGHT);
    
//   } else {
//     localStorage.setItem("theme", Theme.LIGHT);
//     body.classList.toggle(Theme.LIGHT);
//     body.classList.remove(Theme.DARK);
//   }
// }


// changeThemeBtn.addEventListener("change", onChangeTheme);
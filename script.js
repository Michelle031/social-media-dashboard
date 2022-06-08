const switchMe = document.querySelector('.switch input[type="checkbox"]');

switchMe.addEventListener("change", () => {
  if (switchMe.checked) {
    document.body.setAttribute("data-theme", "dark");
  } else {
    document.body.removeAttribute("data-theme");
  }
});

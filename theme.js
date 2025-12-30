document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("themeToggle");

  const saved = localStorage.getItem("theme");
  const isDark = saved === "dark";
  document.body.classList.toggle("dark", isDark);
  toggle.checked = isDark;

  toggle.addEventListener("change", () => {
    const darkNow = toggle.checked;
    document.body.classList.toggle("dark", darkNow);
    localStorage.setItem("theme", darkNow ? "dark" : "light");
  });
});

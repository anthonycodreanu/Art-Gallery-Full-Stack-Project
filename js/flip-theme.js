

window.addEventListener("load", function () {
  // Theme toggling
  const root = document.documentElement;
  const btn = document.getElementById("themeToggle");

  /**
   * Toggle between dark and light modes.
   *
   * @returns {void}
   */
  function flipTheme() {
    root.classList.toggle("dark");
    root.classList.toggle("light");
    btn.textContent = root.classList.contains("dark") ? "☀" : "☾";
    localStorage.setItem(
      "lidiaTheme",
      root.classList.contains("dark") ? "dark" : "light"
    );
  }

  btn.addEventListener("click", flipTheme);

  // Load saved preference or OS preference
  const saved = localStorage.getItem("lidiaTheme");
  if (
    saved === "dark" ||
    (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    root.classList.add("dark");
    root.classList.remove("light");
    btn.textContent = "☀";
  }
});

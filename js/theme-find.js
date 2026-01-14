
(function () {
  const saved = localStorage.getItem("lidiaTheme");
  const prefers = matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  const mode = saved || prefers;
  document.documentElement.classList.add(mode);
})();

var sidebar = document.getElementById("sidebar");
var dark = document.getElementById("dark");
var night = document.getElementById("night");
var light = document.getElementById("light");

dark.addEventListener("click", () => {
    sidebar.style.background = "#111827";
    sidebar.style.color = "#9ca3af";
});
night.addEventListener("click", () => {
    sidebar.style.background = "#312e81";
});
light.addEventListener("click", () => {
    sidebar.style.background = "#f3f4f6";
    sidebar.style.color = "#000";
});

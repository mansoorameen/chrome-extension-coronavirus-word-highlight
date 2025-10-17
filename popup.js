let toLink = document.getElementById("linkTo");

toLink.addEventListener("click", (e) => {
  e.preventDefault()
  chrome.tabs.create({
    url: `https://covid19dashboard.mohfw.gov.in/`,
  });
});
let toLink = document.getElementById("linkTo");

toLink.addEventListener("click", () => {
  chrome.tabs.create({
    url: `https://www.mohfw.gov.in/`,
  });
});
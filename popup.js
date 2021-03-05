// Initialize butotn with users's prefered color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});

// The body of this function will be execuetd as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
	if (color == "#e8453c"){
		document.body.style.backgroundImage = "url('http://www.hxchector.com/wp-content/uploads/2015/04/attack-on-titan-s1-mikasa-attacks-female-titan.gif')";
		// var img = document.createElement('img'); 
		// img.src = 'https://compote.slate.com/images/697b023b-64a5-49a0-8059-27b963453fb1.gif'; 
		// img.style.position = "sticky";
		// img.style.bottom = "0px";
		// img.style.width = "500px";
		// document.body.appendChild(img); 
		// var iframe = document.createElement('iframe'); 
		// document.body.appendChild(img);
		// iframe.style.position = "sticky";
		// iframe.style.bottom = "0px";
		// iframe.style.width="420px";
		// iframe.style.height="315px";
		// iframe.src="https://www.youtube.com/embed/tgbNymZ7vqY"
		// document.body.appendChild(iframe);
	}
  });
}
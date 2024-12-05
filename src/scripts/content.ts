console.log("Content script loaded!"); // Confirm script is running

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Message received:", message); // Debug log
});

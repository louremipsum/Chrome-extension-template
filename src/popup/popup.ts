document.addEventListener("DOMContentLoaded", () => {
  const incrementButton = document.getElementById("incrementButton");
  const decrementButton = document.getElementById("decrementButton");
  const counterValue = document.getElementById("counterValue");
  let count = 0;

  function updateCounter() {
    if (!counterValue) return;
    counterValue.textContent = count.toString();
    // Send message to content script if needed
  }

  incrementButton?.addEventListener("click", () => {
    count++;
    updateCounter();
  });

  decrementButton?.addEventListener("click", () => {
    count--;
    updateCounter();
  });
});

/**
 * Checks if the given URL is restricted.
 *
 * A URL is considered restricted if it is either undefined or starts with
 * "chrome://", "edge://", or "about:".
 *
 * @param url - The URL to check. If not provided, the function will return true.
 * @returns `true` if the URL is restricted, `false` otherwise.
 */
function isRestrictedUrl(url?: string): boolean {
  if (!url) return true;
  return (
    url.startsWith("chrome://") ||
    url.startsWith("edge://") ||
    url.startsWith("about:")
  );
}

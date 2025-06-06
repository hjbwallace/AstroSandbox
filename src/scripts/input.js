const input = document.getElementById("input-message");
if (input) {
  const params = new URLSearchParams(window.location.search);
  const message = params.get("message");
  if (message !== null) {
    input.textContent = message;
  }
}
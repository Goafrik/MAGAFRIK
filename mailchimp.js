document.addEventListener("DOMContentLoaded", function () {
  const connectBtn = document.getElementById("connectMailchimp");
  const msg = document.getElementById("mailchimpMsg");

  connectBtn.addEventListener("click", function () {
    connectBtn.textContent = "Connecting...";
    setTimeout(() => {
      msg.style.display = "block";
      msg.textContent = "✅ Successfully connected to Mailchimp!";
      connectBtn.textContent = "Connected";
      connectBtn.disabled = true;
    }, 2000);
  });
});
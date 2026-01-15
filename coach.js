// Registration Form Handler
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("coachForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      document.getElementById("message").innerText = "🎉 Registered Successfully! Redirecting to Dashboard...";
      setTimeout(() => {
        window.location.href = "coach-dashboard.html";
      }, 2000);
    });
  }

  // Upload Handler
  window.uploadResource = () => {
    const file = document.getElementById("uploadFile").files[0];
    if (file) {
      document.getElementById("uploadMsg").innerText = "✅ File uploaded successfully!";
    } else {
      document.getElementById("uploadMsg").innerText = "⚠ Please choose a file.";
    }
  };

  // Subscription Countdown (mock: 60 days left)
  const countdown = document.getElementById("countdown");
  if (countdown) {
    let daysLeft = 60;
    const timer = setInterval(() => {
      daysLeft--;
        countdown.innerText
      if (daysLeft <= 0) {
        clearInterval(timer);
        countdown.innerText = "Your free plan has expired.";
      }
    }, 1000 * 60 * 60 * 24); // Real-time would use server-side
}
});

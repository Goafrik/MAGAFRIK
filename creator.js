const connectBtn = document.getElementById("connectBtn");
const successMsg = document.getElementById("successMsg");

connectBtn.addEventListener("click", () => {
  successMsg.style.display = "block";
  setTimeout(() => {
    successMsg.style.display = "none";
  }, 3000);
});
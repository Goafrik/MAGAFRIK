function simulateAI() {
  const question = document.getElementById("userQuestion").value;
  const responseDiv = document.getElementById("aiResponse");

  if (!question.trim()) {
    responseDiv.innerHTML = "Please type your question above.";
    return;
  }

  // Simulated AI logic
  const answers = [
    "Thank you for your question. A counselor will be with you soon.",
    "We've noted your question — check your wellness dashboard.",
    "That's a great question. Here's a resource we recommend: /ebooks.html",
    "You’re not alone. MagAfrik is walking with you."
  ];

  const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
  responseDiv.innerHTML = <em>${randomAnswer}</em>;
}
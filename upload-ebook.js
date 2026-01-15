document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("ebook-upload-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value.trim();
    const file = document.getElementById("ebookFile").files[0];

    if (!title || !author || !category || !description || !file) {
      alert("⚠ Please fill all fields and upload a file.");
      return;
    }

    alert("✅ eBook uploaded successfully! It will be reviewed and published.");
    form.reset();
  });
});
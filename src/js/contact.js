document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const data = {
      contact_name: formData.get("contact_name"),
      contact_email: formData.get("contact_email"),
      contact_request: formData.get("contact_request"),
    };

    localStorage.setItem("contactFormData", JSON.stringify(data));

    window.location.href = "./success.html";
  });
});

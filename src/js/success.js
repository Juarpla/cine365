document.addEventListener("DOMContentLoaded", () => {
  const formDataDisplay = document.getElementById("formDataDisplay");
  const formData = JSON.parse(localStorage.getItem("contactFormData"));

  if (formData) {
      formDataDisplay.innerHTML = `
            <p><strong>Name:</strong> ${formData.contact_name}</p>
            <p><strong>Email:</strong> ${formData.contact_email}</p>
            <p><strong>Request:</strong> ${formData.contact_request}</p><br>
          `;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const data = {
      account_firstname: formData.get("account_firstname"),
      account_lastname: formData.get("account_lastname"),
      account_email: formData.get("account_email"),
      movie_genre: formData.get("movie_genre"),
    };

    localStorage.setItem("accountData", JSON.stringify(data));

    window.location.href = "/account/index.html";
  });
});

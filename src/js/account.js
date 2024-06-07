import Alert from "./alerts";

document.addEventListener("DOMContentLoaded", () => {
  const accountDataDisplay = document.getElementById("accountDataDisplay");
  const deleteAccountDataBtn = document.getElementById("deleteAccountData");
  const accountData = JSON.parse(localStorage.getItem("accountData"));

  function renderAccountData(data) {
    if (data) {
      const genreMap = {
        28: "Action",
        12: "Adventure",
        35: "Comedy",
        99: "Documentary",
        878: "Science Fiction",
        10751: "Family",
        9648: "Mystery",
        27: "Horror",
      };
      accountDataDisplay.innerHTML = `
              <section>
              <p><strong>First Name:</strong> ${data.account_firstname}</p>
              <p><strong>Last Name:</strong> ${data.account_lastname}</p>
              <p><strong>Email:</strong> ${data.account_email}</p>
              <p><strong>Favorite Movie Genre:</strong> ${genreMap[data.movie_genre]}</p>
              </section>
            `;
      deleteAccountDataBtn.removeAttribute("hidden");
    } else {
      accountDataDisplay.innerHTML = `
              <section>
              <p>Please sign up in newsletter.</p>
              </section>
            `;
      deleteAccountDataBtn.setAttribute("hidden");
    }
  }

  renderAccountData(accountData);

  deleteAccountDataBtn.addEventListener("click", () => {
    localStorage.removeItem("accountData");
    renderAccountData(null);
  });
});

// Render the alerts
const alert = new Alert();
alert.render();
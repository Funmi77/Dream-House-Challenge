function changeTheme() {
  let body = document.querySelector("body");
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }
}
function LoveArt() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email?");
  let Gallery = prompt("Where is your favourite Gallery to visit in London?");
  let Voucher = prompt(
    "Would you like a £5 travel voucher to visit any Gallery in London?"
  );

  if (Voucher.toLowerCase() === "yes") {
    alert(
      "Art Galleries " + Gallery + ", we would send you a £5 travel voucher 😻!"
    );
  } else {
    alert(
      "Art Galleries " +
        Gallery +
        ", we wouldn't send you a £5 travel voucher 😞!"
    );
  }

  alert(
    "Art Galleries " +
      name +
      "! We'll be in touch by email, to send you a list of Galleries to visit in London!"
  );
}
let themeButton = document.querySelector(".theme-button");
themeButton.addEventListener("click", changeTheme);
let loveArtButton = document.querySelector("button:not(.theme-button)");
loveArtButton.addEventListener("click", LoveArt);

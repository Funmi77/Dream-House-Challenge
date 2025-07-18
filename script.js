function changeTheme() {
  let body = document.querySelector("body");
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }
}

let apiKey = "7e77fbbbab91e5504tfaaa75643of118";
let prompt =
  "Give me the best Architectural description of a Retro Modern Dream Home";
let context =
  "Provide clear and precise answer in just four lines.Make it four lines ";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(showAnswer);

let themeButton = document.querySelector(".theme-button");
themeButton.addEventListener("click", changeTheme);

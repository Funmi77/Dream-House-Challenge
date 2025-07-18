let apiKey = "7e77fbbbab91e5504tfaaa75643of118";
let prompt = "What is the best joke in the world?";
let context = "Provide clear and precise answer. One joke at a time.";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(showAnswer);

let containerElement = document.querySelector("#house");

let url = "https://dog.ceo/api/breeds/image/random";
let jokeUrl = "https://official-joke-api.appspot.com/random_joke";

function displayDogImage(imageUrl) {
  const dogImageElement = document.getElementById("dogImage");
  dogImageElement.src = imageUrl;
  dogImageElement.alt = "Random Dog Image";
}

function displayJoke(jokeData) {
  const prepositions = ['and', 'or', 'but', 'for', 'with', 'from', 'in', 'on', 'to'];
  let num = Math.floor(Math.random() * 9);
  const jokeContainer = document.getElementById("jokeContainer");
  const jokeElement = document.createElement("div");
  jokeElement.innerHTML = `
    <h2>Random Joke</h2>
    <p>${jokeData.setup}</p>
    <p><strong>Punchline:</strong> ${jokeData.punchline} ${prepositions[num]} dog</p>
  `;
  jokeContainer.innerHTML = "";
  jokeContainer.appendChild(jokeElement);
}

function fetchDataAndDisplay() {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log("here is the data", data);
      displayDogImage(data.message);
    })
    .catch(error => {
      console.error('There was a problem with your fetch operation:', error);
    });

  fetch(jokeUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log("here is the joke data", data);
      displayJoke(data);
    })
    .catch(error => {
      console.error('Error fetching joke:', error);
    });
}

const fetchButton = document.getElementById("fetchButton");
fetchButton.addEventListener("click", fetchDataAndDisplay);

// Fetch the dog image and the joke
fetchDataAndDisplay();
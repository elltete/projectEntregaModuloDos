
const $main = document.querySelector("main");

fetch("https://hp-api.onrender.com/api/characters")
  .then((resp) => {
    console.log(resp);
    return resp.json();
  })

  .then((data) => {
    const characters = data;

    characters.forEach((e) => {
        $main.innerHTML += `
        <div>
        <img src="${e.image}">
        <h4>Name: ${e.name}</h4>
        <p><strong>Gender:</strong> ${e.gender}</p>
        <p><strong>House:</strong> ${e.house}</p>
        <p><strong>Actor Name:</strong> ${e.actor}</p>
        <p><strong>Date Of Birth:</strong> ${e.dateOfBirth}</p>
        </div>
        `;
    });
  });

// endpoint | Personajes (characters)

const $personajes = document.getElementById("personajes");

fetch("https://hp-api.onrender.com/api/characters")
  .then((resp) => {
    console.log(resp);
    return resp.json();
  })

  .then((data) => {
    const data5 = data.slice(0,5);

    data5.forEach((e) => {
        $personajes.innerHTML += `
        <div class="card">
        <img src="${e.image}">
        </div>
        `;
    });
  });

  // endpoint | hechizos (spells)
  
  const $hechizos = document.getElementById("hechizos");

fetch("https://hp-api.onrender.com/api/spells")
  .then((resp) => {
    console.log(resp);
    return resp.json();
  })

  .then((data) => {
    const data5 = data.slice(0,5);

    data5.forEach((e) => {
        $hechizos.innerHTML += `
        <ul>
          <li><strong>Mame:</strong> ${e.name}</li>
          <li><strong>Description:</strong> ${e.description}</li>
        </ul>
        `;
    });
  });

  // endpoint | personajes de Gryffindor house

const $gryffindor = document.getElementById("Gryffindor");

fetch("https://hp-api.onrender.com/api/characters/house/Gryffindor")
  .then((resp) => {
    console.log(resp);
    return resp.json();
  })

  .then((data) => {
    const data3 = data.slice(0,3);

    data3.forEach((e) => {
        $gryffindor.innerHTML += `
        <div class="card">
        <img src="${e.image}">
        </div>
        `;
    });
  });

    // endpoint | personajes de Slytherin house

const $slytherin = document.getElementById("Slytherin");

fetch("https://hp-api.onrender.com/api/characters/house/Slytherin")
  .then((resp) => {
    console.log(resp);
    return resp.json();
  })

  .then((data) => {
    const data3 = data.slice(0,3);

    data3.forEach((e) => {
        $slytherin.innerHTML += `
        <div class="card">
        <img src="${e.image}">
        </div>
        `;
    });
  });

      // endpoint | personajes de Hufflepuff house

const $hufflepuff = document.getElementById("Hufflepuff");

fetch("https://hp-api.onrender.com/api/characters/house/Hufflepuff")
  .then((resp) => {
    console.log(resp);
    return resp.json();
  })

  .then((data) => {
    const data1 = data.slice(0,1);

    data1.forEach((e) => {
        $hufflepuff.innerHTML += `
        <div class="card">
        <img src="${e.image}">
        </div>
        `;
    });
  });

        // endpoint | personajes de Ravenclaw house

const $ravenclaw = document.getElementById("Ravenclaw");

fetch("https://hp-api.onrender.com/api/characters/house/Ravenclaw")
  .then((resp) => {
    console.log(resp);
    return resp.json();
  })

  .then((data) => {
    const data2 = data.slice(0,2);

    data2.forEach((e) => {
        $ravenclaw.innerHTML += `
        <div class="card">
        <img src="${e.image}">
        </div>
        `;
    });
  });


//* Fetch est un méthode intégrée
//* basée sur les promesses
//* XHR n'est pas mauvais, on faire tous nos futurs exemples et projets avec.
//* Fetch est juste une approche alternative qui est plus simple et a une syntaxe plus propre. Le résultat final est le même.

const url = './api/people.json';

// const response = fetch(url);
// console.log(response);

// fetch(url)
//   .then((resp) => {
//     //* objet réponse
//     //* props et méthodes pratiques
//     console.log(resp);
//     //* converti la réponse en JSON
//     //* retourne une promesse
//     return resp.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

// fetch(url)
//   .then((resp) => resp.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//? on ne catch que les erreurs réseau (dns, conflit d'ip, etc...) !=== erreurs HTTP (4xx, 5xx)
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  fetch(url)
    .then((resp) => {
      console.log(resp);
      return resp.json();
    })
    .then((data) => displayItems(data))
    .catch((err) => console.log(err));
});

const displayItems = (items) => {
  const displayData = items
    .map((item) => {
      const { name } = item;
      return `<p>${name}</p>`;
    })
    .join('');
  const element = document.createElement('div');
  element.innerHTML = displayData;
  document.body.appendChild(element);
};

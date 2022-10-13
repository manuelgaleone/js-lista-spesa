/*
Rivediamo l’esercizio visto insieme, ma questa volta con il ciclo while al posto del ciclo for. Facciamo attenzione a non dimenticare tutte le differenze implementative che il ciclo while ci impone, in particolare alla variabile di indice.
*/

//Esercizio, ma col For
/*

let shoppingList = [
  'Pane',
  'Latte di marndorle',
  'Insalata',
  'Burger di soia'
];

let shoppingListEl = document.querySelector('.shopping-list')
console.log(shoppingListEl);

for (let i = 0; i < shoppingList.length; i++) {
  const items = shoppingList[i];

  const liEl = `<li>${items}</li>`
  shoppingListEl.insertAdjacentHTML('beforeend', liEl)
}

*/

//Seleziono l'Ul che ho nell'HTML
let listaSpesa = document.querySelector(".list");

//Creo l'Array con la Lista della Spesa
let prodotti = [
    "Pane",
    "Latte",
    "Coca Cola",
    "Uova",
    "Pasta",
    "Pringles"
];

//Ciclo While
let list = 0;
while (list < prodotti.length) {

    let items = prodotti[list];

    let liEl = `<li>${items}</li>`;
    listaSpesa.insertAdjacentHTML("beforeend", liEl);
    list++;
};
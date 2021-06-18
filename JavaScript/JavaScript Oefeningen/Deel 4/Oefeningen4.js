//Oefening 4

let array = [
    {
        titel: 'The theory of everything',
        auteur: 'Stephen Hawking',
        gelezen: 'Ja',
        toString: function () {
            return this.titel + this.auteur + this.gelezen;
        }
    },
    {
        titel: '12 rules for life',
        auteur: 'Ordan Peterson',
        gelezen: 'Nee',
        toString: function () {
            return this.titel + this.auteur + this.gelezen;
        }
    }
];

let ul = document.createElement('ul');
array.forEach(book => {
    let li = document.createElement('li');
    li.innerText = book.titel+' ' + book.auteur+' ' + book.gelezen+' ';
    ul.appendChild(li);
})

document.body.appendChild(ul);


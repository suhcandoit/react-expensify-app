//Object Destructuring
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        //name: 'Penguin'
    },
}

// const { title : bookTitle , author: bookAuthor } = book;
// const { name:publisherName = 'Self Publisher'} = book.publisher;
// console.log(publisherName);
// console.log(`The book title is ${bookTitle} and author is ${bookAuthor}`)

const item = ['Coffee (iced)', '$2.00', '$12.50', '$2.75'];

const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);
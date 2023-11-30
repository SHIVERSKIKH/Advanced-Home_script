// Представьте, что у вас есть класс для управления библиотекой. 
// В этом классе будет приватное свойство для хранения списка книг, 
// а также методы для добавления книги, удаления книги и получения 
// информации о наличии книги.

// Класс должен содержать приватное свойство #books, 
// которое инициализируется пустым массивом и представляет 
// собой список книг в библиотеке.

// Реализуйте геттер allBooks, 
// который возвращает текущий список книг.

// Реализуйте метод addBook(title), 
// который позволяет добавлять книгу в список. 
// Если книга с таким названием уже существует в списке, 
// выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит 
// удалять книгу из списка по названию. Если книги с таким названием нет в списке, 
// выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие 
// книги в библиотеке 
// и возвращать true или false в зависимости от того,
//  есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список 
// книг (массив) в качестве аргумента.

class Library {
    #books;
    constructor(initialBooks = []) {
        this.#books = initialBooks;
    }
    get allBooks() {
        return this.#books;
    }

    addBook(title) {
        if(this.#books.includes(title)) {
            throw new Error (`Книга с названием ${title} уже существует в библиотеке`);
        }else {
              this.#books.push(title);  
        }
    }

    removeBook(title) {
        if(this.#books.indexOf(title) === -1) {
            throw new Error (`Книги с таким названием ${title} нет в списке`);
        } else {
            this.#books.splice(this.#books.indexOf(title), 1);
        } 
    }
    hasBook(title) {
       return this.#books.includes(title);
    }
}

const myLibrary = new Library(['Мастер и Маргарита', 'Мёртвые души']);
console.log(myLibrary.allBooks);

myLibrary.addBook('Война и мир');
console.log(myLibrary.allBooks);

myLibrary.removeBook('Мёртвые души');
console.log(myLibrary.allBooks);

console.log(myLibrary.hasBook('Мёртвые души'));
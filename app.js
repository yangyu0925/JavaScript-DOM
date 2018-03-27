/**
 *
 * lesson-2
 * Get Element By ID
 *
 var banner = document.getElementById('page-banner');

 var bookList = document.getElementById('book-list');
 */

/**
 *
 * lesson-3
 * Get Elements By Class or Tag
 *
 *
 var titles = document.getElementsByClassName('title');

 for (i = 0; i < titles.length; i++) {
    console.log(titles[i]);
}

 var lis = document.getElementsTagName('li');

// console.log(Array.isArray(titles));
// console.log(Array.isArray(Array.from(titles)));

Array.from(titles).forEach(function (item) {
    console.log(item);
})
**/


/**
 *
 * lesson-4
 * The Query Selector
 *
// const wrap = document.querySelector('#wrapper');
//
// console.log(wrap);

// const wmf = document.querySelector('#book-list li:nth-child(2) .name')
//
// console.log(wmf);

// var books = document.querySelector('#book-list li .name');
// console.log(books)

var books = document.querySelectorAll('#book-list li .name');
// console.log(books);

Array.from(books).forEach(function (book) {
    console.log(book );
})
 */


/**
 *
 * lesson-5
 * Changing Text & HTML Content
 *
var books = document.querySelectorAll('#book-list li .name');

Array.from(books).forEach(function (book) {
    console.log(book.textContent)
    book.textContent += '(book title)';
})

const bookList = document.querySelector('#book-list');
console.log(bookList.innerHTML);
// bookList.innerHTML = '<h2>Books and more books </h2>';
bookList.innerHTML += '<p>This is how you add HTML</p>';
*/

/**
 *
 * lesson-6
 * Nodes
 *
const banner = document.querySelector('#page-banner');
console.log('#page-banner node name is:',banner.nodeName);
console.log('#page-banner node type is:',banner.nodeType);
console.log('#page-banner has child nodes:',banner.hasChildNodes());

// const clonedBanner = banner.cloneNode(true);

const clonedBanner = banner.cloneNode(false);

console.log(clonedBanner)
 */

/**
 *
 * lesson-7
 *  Traversing the DOM (part 1)
 *
const bookList = document.querySelector('#book-list');

console.log( 'the parent node is:',bookList.parentNode);
console.log('the parent element is:',bookList.parentElement.parentElement);

console.log(bookList.childNodes);
 */

/**
 *
 * lesson-8
 *  Traversing the DOM (part 2)
 *
const bookList = document.querySelector('#book-list');

// console.log('book-list next sibling is:',bookList.nextSibling);
// console.log('book-list next element sibling is:',bookList.nextElementSibling);

console.log('book-list next previous is:',bookList.previousSibling);
console.log('book-list next element sibling is:',bookList.previousElementSibling);

bookList.previousElementSibling.querySelector('p').innerHTML += '<br/>Too cool';
 */

/**
 *
 * lesson-9
 * Events
 *
 *
 var h2 = document.querySelector('#book-list h2');

 h2.addEventListener('click', function (e) {
    console.log(e.target);
    console.log(e);
 })

 var btns = document.querySelectorAll('#book-list .delete');

 console.log(btns);

 Array.from(btns).forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const li = e.target.parentElement;

        li.parentNode.removeChild(li);
    })
});

 const link = document.querySelector('#page-banner a');
 link.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('navigation to',e.target.textContent);
})

 *
 */

/**
 * lesson-10
 * Event Bubbling
 *
 const list = document.querySelector('#book-list ul');

 list.addEventListener('click', function (e) {
    if (e.target.className == 'delete') {
        const li = e.target.parentElement;

        list.removeChild(li);
    }
})
 */

/**
 * lesson-11
 *  Interacting with Forms
 *
 console.log(document.forms[0]);
 console.log(document.forms['add-book']);

 const addForm = document.forms['add-book'];

 addForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const value = addForm.querySelector('input[type="text"]').value;

    console.log(value);
})
 */

/*
=========================================
SURaj eBOOK STORE
EBOOK LIST
=========================================

Nayi eBook add karne ke liye neeche
ek aur object copy karke details change karein.

Example:

{
  title: "New Book",
  author: "Suraj Singh",
  price: 99,
  cover: "covers/newbook.jpg",
  description: "Book description",
  file: "books/newbook.pdf"
}

*/


const books = [

  {
    title: "Suraj Singh Ki Kahani",

    author: "Suraj Singh",

    price: 49,

    cover: "",

    description:
      "Ek student ki kahani, struggle aur life experiences par based eBook.",

    file: ""
  },


  {
    title: "Meri Kahaniyan",

    author: "Suraj Singh",

    price: 39,

    cover: "",

    description:
      "Short Hindi stories aur personal experiences ka collection.",

    file: ""
  }

];



const bookGrid =
  document.getElementById("bookGrid");



/*
=========================================
HTML SECURITY
=========================================
*/

function escapeHTML(text) {

  return String(text).replace(
    /[&<>"']/g,

    function (character) {

      return {

        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"

      }[character];

    }
  );

}



/*
=========================================
DISPLAY BOOKS
=========================================
*/

function displayBooks() {

  bookGrid.innerHTML = books.map(
    (book, index) => `

      <div class="book-card">

        <div class="book-cover">

          ${
            book.cover

              ? `<img
                   src="${book.cover}"
                   alt="${escapeHTML(book.title)}"
                 >`

              : "📖"
          }

        </div>


        <div class="book-content">

          <h3>
            ${escapeHTML(book.title)}
          </h3>

          <div class="author">
            By ${escapeHTML(book.author)}
          </div>

          <div class="price">
            ₹${book.price}
          </div>


          <div class="buttons">

            <button
              class="details"
              onclick="showBook(${index})"
            >
              Details
            </button>


            <button
              class="buy"
              onclick="buyBook(${index})"
            >
              Buy / Order
            </button>

          </div>

        </div>

      </div>

    `
  ).join("");

}



/*
=========================================
WHATSAPP ORDER
=========================================
*/

function buyBook(index) {

  const book = books[index];

  const message =
    `Namaste, mujhe "${book.title}" eBook ₹${book.price} me kharidni hai.`;

  const whatsappURL =
    "https://wa.me/919753724450?text=" +
    encodeURIComponent(message);

  window.open(
    whatsappURL,
    "_blank"
  );

}



/*
=========================================
BOOK DETAILS
=========================================
*/

function showBook(index) {

  const book = books[index];

  const modalContent =
    document.getElementById(
      "modalContent"
    );


  modalContent.innerHTML = `

    <h2>
      ${escapeHTML(book.title)}
    </h2>

    <p style="margin-top:10px">
      <b>Author:</b>
      ${escapeHTML(book.author)}
    </p>

    <p style="margin-top:15px">
      ${escapeHTML(book.description)}
    </p>


    <div class="payment-box">

      <b>Price: ₹${book.price}</b>

      <br><br>

      <b>UPI ID:</b>

      9753724450-2@axl

      <br><br>

      Payment karne ke baad
      WhatsApp par payment screenshot
      bhej dein.

    </div>


    <button
      class="buy"
      style="
        border:none;
        padding:12px 18px;
        border-radius:9px;
        font-weight:bold;
        cursor:pointer;
      "

      onclick="buyBook(${index})"
    >
      📲 WhatsApp Order
    </button>

  `;


  document.getElementById(
    "modal"
  ).style.display = "block";

}



/*
=========================================
CLOSE MODAL
=========================================
*/

function closeModal() {

  document.getElementById(
    "modal"
  ).style.display = "none";

}



/*
=========================================
CLOSE WHEN CLICKING OUTSIDE
=========================================
*/

window.addEventListener(
  "click",

  function (event) {

    const modal =
      document.getElementById("modal");

    if (event.target === modal) {

      closeModal();

    }

  }
);



/*
=========================================
START WEBSITE
=========================================
*/

displayBooks();
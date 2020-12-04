// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container
const headerEntryPoint = document.querySelector('.header-container') // establish header entry point

function Header() { // this function builds and attaches the site header
   const headerDiv = document.createElement('div'); // create container
   headerDiv.classList.add('header');
   const dateSpan = document.createElement('span'); // create span with date
   dateSpan.classList.add('date');
   dateSpan.textContent = 'MARCH 28, 2020';
   headerDiv.appendChild(dateSpan); 
   const siteNameH1 = document.createElement('h1'); // create site heading
   siteNameH1.textContent = 'Lambda Times';
   headerDiv.appendChild(siteNameH1);
   headerEntryPoint.appendChild(headerDiv); // attach header to the DOM at the established entry point
}

Header(); // run function to attach header
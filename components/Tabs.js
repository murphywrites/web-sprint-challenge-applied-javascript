// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

const tabsEntryPoint = document.querySelector('div.topics');

axios.get(URL = ' https://lambda-times-api.herokuapp.com/topics').then( res => {
    const topicsArray = res.data.topics; // establish array from API payload
    topicsArray.forEach(topic => {
        const thisTopicDomElem = document.createElement('div'); // create dom element for each topic
        thisTopicDomElem.classList.add('tab');
        thisTopicDomElem.textContent = topic;
        tabsEntryPoint.appendChild(thisTopicDomElem); // attach topic tab element to entry point  
    })
}).catch(err => {
    const errMessage = document.createElement('div');
    errMessage.classList.add('tab');
    errMessage.textContent = 'Error: Cannot Load Topics at This Time, Check Back Soon';
    tabsEntryPoint.appendChild(errMessage)
});
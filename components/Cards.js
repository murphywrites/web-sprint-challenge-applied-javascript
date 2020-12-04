// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const cardsEntryPoint = document.querySelector('.cards-container');
console.log(cardsEntryPoint)

axios.get(URL = 'https://lambda-times-api.herokuapp.com/articles').then( res => {
    const articleObjectsArray =[];
    const articleTopicsArray = Object.keys(res.data.articles);
    const arrayOfArticleArraysByTopic = Object.values(res.data.articles)
    arrayOfArticleArraysByTopic.forEach( articleArray => {
        articleArray.forEach(articleObj => {
            articleObjectsArray.push(articleObj);
        })

    })
    articleObjectsArray.forEach( articleObj => {
        attachArticleCardToDOM(buildArticleCard(articleObj))
    })

    // const ArrayOfArticleObjectsForOneTopic = res.data.articles[`${articleTopicsArray[topicElem]}`]
    // const oneArticleObj = ArrayOfArticleObjectsForOneTopic[articleElem];
    // console.log(oneArticleObj)
    
    
})

function buildArticleCard (articleObj) {

const container = document.createElement('div');
container.classList.add('card');

const articleHeadline = document.createElement('div');
articleHeadline.textContent = articleObj.headline;
articleHeadline.classList.add('headline');
container.appendChild(articleHeadline);

const articleAuthor = document.createElement('div'); 
articleAuthor.classList.add('author');
container.appendChild(articleAuthor)

const authorImgContainer = document.createElement('div');
authorImgContainer.classList.add('img-container');
articleAuthor.appendChild(authorImgContainer);

const authorImg = document.createElement('img');
authorImg.src = articleObj.authorPhoto
authorImgContainer.appendChild(authorImg)

const byLine = document.createElement('span');
byLine.textContent = 'By: ' + articleObj.authorName;
articleAuthor.appendChild(byLine)

container.addEventListener('click', e => {
    console.log(articleObj.headline)
})
return container;
}

function attachArticleCardToDOM(articleCard) {
    cardsEntryPoint.appendChild(articleCard)// attach card to the DOM
}

// function buildDom(obj) {
//     const cardDiv = document.createElement('div');
//     cardDiv.classList.add('card');
//     const userImg = document.createElement('img');
//     userImg.src = obj.data.avatar_url;
//     cardDiv.appendChild(userImg);
//     const cardInfoDiv = document.createElement('div');
//     cardInfoDiv.classList.add('card-info');
//     cardDiv.appendChild(cardInfoDiv);
//     const nameOfUser = document.createElement('h3');
//     nameOfUser.classList.add('name');
//     nameOfUser.textContent=obj.data.name
//     cardInfoDiv.appendChild(nameOfUser);
//     const username = document.createElement('p');
//     username.classList.add('name');
//     username.textContent=obj.data.login
//     username.style.fontSize = '2rem'
//     cardInfoDiv.appendChild(username);
  
//     const userLocation = document.createElement('p');
//     userLocation.textContent=`Location= ${obj.data.location}`
//     cardInfoDiv.appendChild(userLocation);
  
//     const userProfileHeading = document.createElement('p');
//     userProfileHeading.textContent="Profile: "
//     cardInfoDiv.appendChild(userProfileHeading);
  
//     const profLink = document.createElement('a');
//     profLink.href = 'https://github.com/'+obj.data.login ;
//     profLink.textContent = 'github.com/'+obj.data.login  ;
//     userProfileHeading.appendChild(profLink);
//     // <a href={address to users github page}>{address to users github page}</a>
  
//     const userFollowers = document.createElement('p');
//     userFollowers.textContent="Followers: "+obj.data.followers
//     cardInfoDiv.appendChild(userFollowers);
//     // <p>Followers: {users followers count}</p>
    
//     const userFollowing = document.createElement('p');
//     userFollowing.textContent="Following: "+obj.data.following
//     cardInfoDiv.appendChild(userFollowing);
//     // <p>Following: {users following count}</p>
    
//     const userBio = document.createElement('p');
//     userBio.textContent="Bio: "+obj.data.bio;
//     cardInfoDiv.appendChild(userBio);
//     // <p>Bio: {users bio}</p>
//   return cardDiv;
//   }
  
  
  
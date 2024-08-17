 // JavaScript to create the card
 function createCard() {
    // Create card elements
    const card = document.createElement('div');
    card.className = 'card';
    
    const cardImage = document.createElement('img');
    cardImage.src = 'https://via.placeholder.com/300';
    cardImage.alt = 'Card Image';
    
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    
    const cardTitle = document.createElement('h3');
    cardTitle.className = 'card-title';
    cardTitle.innerText = 'Card Title';
    
    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.innerText = 'This is a simple card created with JavaScript.';
    
    const cardButton = document.createElement('a');
    cardButton.className = 'card-button';
    cardButton.href = '#';
    cardButton.innerText = 'Learn More';
    
    // Append elements to card
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardButton);
    
    card.appendChild(cardImage);
    card.appendChild(cardBody);
    
    // Append card to the container
    document.getElementById('card-container').appendChild(card);
}

// Call the function to create the card
createCard();


function newCard() {
    const card = document.createElement('div');
    card.className = 'card';
    
    const cardImg = document.createElement('img');
    cardImg.src = 'messi.jpg';
    cardImg.alt = 'messi'
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    
    const cardTitle = document.createElement('h3');
    cardTitle.className = 'card-title';
    cardTitle.innerText = 'Card Title';
    
    const cardText = document.createElement('p')
    cardText.className = 'card-text';
    cardText.innerText = 'messy best player in the world ';
    
    const cardButton = document.createElement('a');
    cardButton.className = 'card-button';
    cardButton.href = '#';
    cardButton.innerText = 'Learn More';

    card.appendChild(cardImg)
    card.appendChild(cardBody)
    cardBody.appendChild(cardTitle)
    cardBody.appendChild(cardText) 
    cardBody.appendChild(cardButton) 



    document.getElementById('new-card').appendChild(card);

}
newCard()

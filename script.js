const jokeButton=document.getElementById('jokeButton');
const jokeContainer = document.getElementById('jokeContainer');

const apiKey = 'hbl7ZdeAd02k9lz5Hg6TgytUlgKevb9PYVk7j0JS';


jokeButton.addEventListener('click',(fetchJokes)=> {
  fetch('https://api.api-ninjas.com/v1/dadjokes', {
    headers: {
      'X-Api-Key': apiKey
    }
  })
    .then(response => response.json())
    .then((data) => {
        displayJoke(data[0].joke);
    })
    .catch((error) => {
      console.error('Error fetching jokes:', error);
    });
});

fetchJokes();


function displayJoke(joke){  
    const laughingEmoji = '😂'.repeat(3); // Adjust the number of emojis for desired effect
    jokeContainer.innerHTML = `
      <p>${joke}</p>
      <p class='emoji'>${laughingEmoji}</p>
    `;
}

// const shareBtn = jokeContainer.querySelector('#shareButton');
//   shareBtn.addEventListener('click', () => {
//     shareJoke(joke);
//   });


// // Function to share joke
// function shareJoke(jokeToShare) {
//   const shareText = `Check out this joke: ${jokeToShare}`;
//   const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;

//   // Open a new window with the sharing URL
//   window.open(shareUrl, '_blank');
// }
  


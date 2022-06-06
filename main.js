// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const likeButton = document.querySelectorAll(".like-glyph");

likeButton.forEach(button => {
  button.addEventListener("click", () => {
    mimicServerCall().then( () => {
      button.classList.toggle("activated-heart")
    }).catch(() => {
      const errorMessage = document.querySelector(".hidden");
      errorMessage.style.visibility = "visible";
      console.log("Error");
      setTimeout( () => {
        errorMessage.style.visibility = "hidden";
      }, 3000);
    })
  })
});


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

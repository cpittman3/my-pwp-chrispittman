/*
  This script handles the form's animated message.
  When the form is clicked on a short animation will play
  and a message will appear notifying the user that I'm
  not available for contract work. Another message will
  appear letting the user know they can still contact me.
  When the message (or anywhere within the gif) is clicked
  the gif will be deleted freeing the form for use.
*/

// Prohibit animation on small screens
if(window.innerWidth < 600) {
    let formParent = document.querySelector(".formImage")
    let formChild = document.querySelector(".formAni")
    formParent.removeChild(formChild)
}

// Prohibit logo on small screen
if(window.innerWidth < 600) {
    let formParent = document.querySelector(".nighthawkCol")
    let formChild = document.querySelector(".nightHawk")
    formParent.removeChild(formChild)
}

// Delete the static dummy form and call for audio and gif to replace it
formStart = () => {
    let formParent = document.querySelector(".formImage")
    let formChild = document.querySelector(".formAni")
    formParent.removeChild(formChild)
    formParent.insertAdjacentHTML("beforeend", aniStage2())
}

// HTML for playing audio and animation
aniStage2 = () =>
    `  <audio 
           src="./SFX/sfxGlass.mp3" autoplay>Your browser does not support the <code>audio</code> element.
       </audio>
       <img src="./images/formAni2.gif" width="550" height="680" class="formAni" onClick="formContact()" alt="Not Available">`

// Delete the gif freeing the form for use
formContact = () => {
    let formParent = document.querySelector(".formImage")
    let formChild = document.querySelector(".formAni")
    formParent.removeChild(formChild)
}


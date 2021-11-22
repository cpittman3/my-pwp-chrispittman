formStart = () => {
    let formParent = document.querySelector(".formImage")
    let formChild = document.querySelector(".formAni")
    formParent.removeChild(formChild)
    formParent.insertAdjacentHTML("beforeend", aniStage2())
}

aniStage2=() =>
    `<img src="./images/formAni2.gif" class="formAni" onClick="formContact()" alt="Not Available">`

formContact = () => {
    let formParent = document.querySelector(".formImage")
    let formChild = document.querySelector(".formAni")
    formParent.removeChild(formChild)
}


const link = document.getElementById("link");
const form = document.getElementById("form")

form.addEventListener("submit", ()=>{

    if (link.value == "") {
       return alert("You shoul type a link");
    }

    let url = {
        newtablink: link.value
    }

    function setItem() {
        console.log("OK");
    }

    function onError(error) {
        console.log(error)
    }
      
    browser.storage.local.set({url})
    .then(setItem, onError);
});

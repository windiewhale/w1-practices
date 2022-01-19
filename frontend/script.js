function loadEvent() {
    console.log("the page loaded");

    const list = document.querySelectorAll("section");
    
    for (const elem of list) {
        elem.insertAdjacentHTML("beforeend", `
        <p>text</p>
        `);
        elem.querySelector("p").style.fontFamily = `'Poppins', sans-serif`;
    }
}
window.addEventListener("load", loadEvent);
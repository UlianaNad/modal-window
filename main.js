// modal windows
const openButtons = document.querySelectorAll("[data-modal-id]");
const closeButtons = document.querySelectorAll("[data-button-id]")

openButtons.forEach(button => {
    button.addEventListener("click", () =>{
        const modalId = button.dataset.modalId;
        const modal = document.getElementById(modalId);
        modal.classList.add("show");
    })
})

closeButtons.forEach(button => {
    button.addEventListener("click", () =>{
        console.log("button")
        const modalId = button.dataset.modalId;
        const modal = document.getElementById(modalId);
        modal.classList.remove("show");
    })
})

// select gender
const gender = document.querySelector(".gender");
gender.addEventListener('change', () => {
    let genderValue = gender.value;
    console.log(genderValue);

    const alert = document.querySelector(".alert");
    if(genderValue === "female"){
        html = `It is not tolerant to ask woman's age!`;
        alert.innerHTML = html;
    } 
    if(genderValue === "male"){
        html2 = `<input type = "date">`;
        alert.innerHTML = html2;
    }
    if(genderValue === "none"){
        html = `Please, select your gender!`;
        alert.innerHTML = html;
    } 
})
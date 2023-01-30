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

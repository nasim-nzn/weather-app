const modal = document.getElementById("modal");
const modalText = modal.querySelector("p");

const showModal = (text) => {
  modalText.innerHTML = text;
  modal.style.display = "flex";
};

const removeModal = () => {
  modal.style.display = "none";
};
export { showModal, removeModal };

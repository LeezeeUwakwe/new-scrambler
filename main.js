const settingBtn = document.querySelector(".setting-btn");
const modal = document.querySelector(".modal");
const modalModal = document.getElementById("modal_modal");
settingBtn.addEventListener("click", openModal);
function openModal(e) {
  if (modalModal.style.display == "block") {
    modalModal.style.display = "none";
  } else {
    modalModal.style.display = "block";
  }
}

const slider = document.querySelector("input");
const value = document.querySelector(".value");
value.textContent = slider.value;
slider.oninput = function () {
  value.textContent = this.value;
};


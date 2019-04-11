let modal = document.querySelector(".modal__overlay"),
		btn = document.getElementById("form-btn"),
		btnClose = document.querySelector(".modal__close-btn");

btn.addEventListener("click", function() {
	modal.classList.add("modal_active");
	modal.classList.remove("modal_hide");
});

btnClose.addEventListener("click", function() {
	modal.classList.remove("modal_active");
	modal.classList.add("modal_hide");
});


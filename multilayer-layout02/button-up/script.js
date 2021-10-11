window.addEventListener("scroll", () => {
	const upButton = document.querySelector(".scroll-up-link");
	if (window.pageYOffset > 100) {
		upButton.classList.add("scroll-up-link--showed");
	} else {
		upButton.classList.remove("scroll-up-link--showed");
	}
});

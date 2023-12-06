function updateResponsiveLayout() {
	const wWidth = document.documentElement.clientWidth;
	const hilang = document.querySelectorAll(".hilang");
	const navLi2 = document.querySelector("nav li:nth-child(2)");
	const flexElements = document.querySelectorAll(".flex");

	if (wWidth <= 550) {
		hilang.forEach((n) => n.classList.add("minimize"));
		navLi2.style.textAlign = "left";
		navLi2.style.marginLeft = "5px";
		flexElements.forEach((n) => (n.style.display = "block"));
	} else {
		hilang.forEach((n) => n.classList.remove("minimize"));
		navLi2.style.textAlign = "center";
		navLi2.style.marginLeft = "0px";
		flexElements.forEach((n) => (n.style.display = "flex"));
	}
}

function initResponsiveLayout() {
	updateResponsiveLayout();
	window.addEventListener("resize", updateResponsiveLayout);
}

function initSoftScrolling() {
	const navLinks = document.querySelectorAll("nav a");

	navLinks.forEach((link) => {
		link.addEventListener("click", function (e) {
			e.preventDefault();
			const targetId = this.getAttribute("href").substring(1);
			const targetSection = document.getElementById(targetId);
			const yOffset = -100; // Sesuaikan sesuai kebutuhan Anda (untuk memberikan jarak dari bagian atas)

			window.scrollTo({
				top: targetSection.offsetTop + yOffset,
				behavior: "smooth", // Animasi pergerakan gulir
			});
		});
	});
}

// Panggil fungsi-fungsi inisialisasi
initResponsiveLayout();
initSoftScrolling();

// Scrolling Navbar

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	var currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.querySelector("header").style.top = "0";
	} else {
		document.querySelector("header").style.top = "-60px";
	}
	prevScrollpos = currentScrollPos;
};

 window.addEventListener("scroll", function(){
 	const header = document.querySelector("header");
 	header.classlist.toggle("sticky", window.scrollY > 0)
 });

 
//scroll to top btn
const scrollToptbn = document.querySelector(".scrolltotop-btn");

window.addEventListener("scroll", function(){
   scrollToptbn.toggle("active", window.scrollY > 500);
});

//nav active
window.addEventListener("scroll", () => {
	const sections = document.querySelectorAll("section");
	const scrollY = window.pageYOffset;

	sections.forEach(current => {
		let sectionHeight = current.offsetHeight;
		let sectionTop = current.offsetTop - 50;
		let id = current.getAttribute("id")

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			document.querySelector(".nav-items a[href*=" + id +"]").classList.add("active");
		}
		else{
			document.querySelector(".nav-items a[href*=" + id +"]").classList.remove("active");
		}
	});
});

//submit btn 
function showAlert() {
	var myText = "Thank You";
	alert(myText);
}	

//animations
ScrollReveal({
	reset: true,
	distance: '60px',
	duration: 2500,
	delay: 100
});

ScrollReveal().reveal('.home .info h2, .section-title-1', {delay: 500, origin: 'left'});
ScrollReveal().reveal('.home .info h3, .home .info p', {delay: 600, origin: 'right'});
ScrollReveal().reveal('.home .info .btn', {delay: 700, origin: 'bottom'});
ScrollReveal().reveal('.media-icons i, .contact-left li', {delay: 500, origin: 'left', interval: 200});
ScrollReveal().reveal('.home-img', {delay: 500, origin: 'bottom'});
ScrollReveal().reveal('.about .description, .copy-right', {delay: 600, origin: 'bottom'});
ScrollReveal().reveal('.about .professional-projects li', {delay: 500, origin: 'right', interval:200});
ScrollReveal().reveal('.projects .img-card', {delay: 800, origin: 'bottom', interval:200});



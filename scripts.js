// Initialize AOS for scroll-based animations
AOS.init();

// Lottie Animation example
var animation = bodymovin.loadAnimation({
    container: document.getElementById('lottie'),
    path: 'https://assets8.lottiefiles.com/packages/lf20_xjbmavbq.json', // Replace with your Lottie JSON URL
    renderer: 'svg',
    loop: true,
    autoplay: true,
});

// GSAP Example for smooth animations on page load
gsap.from(".grid-item", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
});

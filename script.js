document.addEventListener("DOMContentLoaded", function(){


    /* ================= NAVBAR EFFECT ================= */
    
    
    const navbar = document.querySelector(".navbar");
    
    
    window.addEventListener("scroll", function(){
    
    
    if(window.scrollY > 50){
    
    navbar.classList.add("shadow-lg");
    
    }
    
    else{
    
    navbar.classList.remove("shadow-lg");
    
    }
    
    
    });
    
    
    
    
    
    
    
    /* ================= SMOOTH SCROLL ================= */
    
    
    const links = document.querySelectorAll('a[href^="#"]');
    
    
    links.forEach(link => {
    
    
    link.addEventListener("click", function(e){
    
    
    const target = document.querySelector(
    this.getAttribute("href")
    );
    
    
    if(target){
    
    
    e.preventDefault();
    
    
    target.scrollIntoView({
    
    behavior:"smooth"
    
    });
    
    
    }
    
    
    });
    
    
    });
    
    
    
    
    
    
    
    
    /* ================= CARD ANIMATION ================= */
    
    
    const cards = document.querySelectorAll(".career-card");
    
    
    const observer = new IntersectionObserver(entries => {
    
    
    entries.forEach(entry => {
    
    
    if(entry.isIntersecting){
    
    
    entry.target.classList.add("show");
    
    
    }
    
    
    });
    
    
    },{
    
    threshold:0.15
    
    });
    
    
    
    
    cards.forEach(card=>{
    
    
    observer.observe(card);
    
    
    });
    
    
    
    
    
    
    
    
    /* ================= FOOTER YEAR ================= */
    
    
    const year = document.querySelector(".year");
    
    
    if(year){
    
    year.textContent = new Date().getFullYear();
    
    }
    
    
    
    });
let stars = document.getElementsByClassName("cls-1");

Array.from(stars).forEach(star => {
    star.addEventListener("click", () => {
        document.getElementsByClassName("text")[0].innerText = "You have clicked on the star! This piece of art is one of my favorites! Michelangelo decided to represent the divine breath of life with God's and Adam's fingers almost touching each other. This famous gesture represents the creation of the first man with the Creator's index finger ready to strike a spark upon contact with Adam's hand. For me it symoblizes the real and the digital coming together in one piece.";
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const certificate = document.getElementById("certificate");
    const revealButton = document.getElementById("revealButton");
    const cards = document.querySelectorAll(".card");
    const giftBox = document.getElementById("giftBox");
    const giftText = document.getElementById("giftText");
    const ticket1 = document.querySelector(".ticket1");
    const ticket2 = document.querySelector(".ticket2");
    const startButton = document.querySelector(".start-button"); // Select button by class
    const ticketContainer = document.querySelector(".overlap"); // Fixed selector
    const vs = document.querySelector(".valencard");
    const ps = document.querySelector(".psva");
    const vacon = document.querySelector(".valen-container");
    const pb3 = document.getElementById("pb3")
    const pb4 = document.getElementById("pb4")
 
    let isSwapped = false; // Track ticket position state
    let isOpened = false; // Track gift box state
    let clickCount = 0; // Track certificate click
    
    if (pb3){
    pb3.addEventListener("click", () =>{
      window.location.href = "forthpage.html";
    });}else{
        console.error("❌ The 'start-button' was not found!");
    }
    

        
    if(pb4){
    pb4.addEventListener("click", () =>{
        window.location.href = "fifthpage.html";
      });
    }

    if (startButton) {
        startButton.addEventListener("click", () => {
            window.location.href = "eightpage.html"; // Redirects to page 8
        });
    } else {
        console.error("❌ The 'start-button' was not found!");
    }



    if(vacon){
        vacon.addEventListener("click", () => {
            if(!isSwapped){
                gsap.to(vs, { rotation: -10, duration: 0.1, ease: "power2.out" });
                gsap.to(ps, { rotation: 7, duration: 0.1, ease: "power2.out" });
                vs.style.zIndex = 2;
            ps.style.zIndex = 1;
            watchAgain.classList.remove("hidden");
                
            } else {
                gsap.to(vs, { rotation: 7, duration: 0.1, ease: "power2.out" });
                gsap.to(ps, { rotation: -10, duration: 0.1, ease: "power2.out" });
                vs.style.zIndex = 1;
                ps.style.zIndex = 2;
                watchAgain.classList.add("hidden");
            }

        })
    }

    if (ticketContainer) {
        ticketContainer.addEventListener("click", () => {
            if (!isSwapped) {
                gsap.to(ticket1, { x: -50,y:-23, rotation: 10, duration: 0.1, ease: "power2.out" });
                gsap.to(ticket2, { x: -104, y: -86, rotation: -15, duration: 0.1, ease: "power2.out" });
            } else {
                gsap.to(ticket1, { x: -104, y: -86, rotation: -15, duration: 0.1, ease: "power2.out" });
                gsap.to(ticket2, { x: -50, y: -23, rotation: 10, duration: 0.1, ease: "power2.out" });
            }
            isSwapped = !isSwapped; // Toggle state
        });
    }

    // 🎁 Handle gift box click behavior
    if (giftBox) {
        giftBox.addEventListener("click", () => {
            if (!isOpened) {
                giftBox.src = "img/gift-open.png"; // Change to open gift image
                giftText.textContent = "surprise :)";
                giftText.style.color = "rgb(211, 15, 15)";
                isOpened = true;
            } else {
                window.location.href = "sixthpage.html"; // Redirect on second click
            }
        });
    }

    // 🃏 Handle card flipping
    function flipCard(card) {
        card.classList.toggle("flipped");

        // Check if all cards are flipped
        const allFlipped = [...cards].every(card => card.classList.contains("flipped"));

        // Show button only when all cards are flipped
        if (allFlipped) {
            const nextButton = document.getElementById("nextButton");
            if (nextButton) {
                nextButton.classList.add("enabled");
                nextButton.disabled = false;
            }
        }
    }

    cards.forEach(card => {
        card.addEventListener("click", () => flipCard(card));
    });

    // 🏆 Handle certificate click event
    if (certificate) {
        certificate.addEventListener("click", () => {
            if (clickCount === 0) {
                // First Click: Rotate and show button
                certificate.classList.add("active");
                certificate.src = "img/winner_message.png";
                if (revealButton) revealButton.classList.add("show");
            } else if (clickCount === 1) {
                // Second Click: Change back to certificate
                certificate.src = "img/Sliver certificate boyfriend.png";
            } else {
                // Third Click: Change back to winner message
                certificate.src = "img/winner_message.png";
                clickCount = -1; // Reset counter
            }
            clickCount++;
        });
    }

    // 🎯 Handle the reveal button click
    if (revealButton) {
        revealButton.addEventListener("click", () => {
            window.location.href = "thirdpage.html"; // Redirect to next page
        });
    }
   
        const words = ["Are", "you", "ready?"];
        let currentIndex = 0;
        const textElement = document.querySelector(".loading-text");
    
        function changeText() {
            textElement.textContent = words[currentIndex]; // Update text
            currentIndex = (currentIndex + 1) % words.length; // Loop through words
        }
    
        // Change text every 3 seconds
        setInterval(changeText, 1200);



        const photostrip = document.querySelector(".photoStrip");
        let isdrop = false;
        photostrip.addEventListener("click", () => {
                // Move photo strip down
                if(isdrop != true){
                gsap.to(photostrip, { x: 0 , y: 10 , rotation: -2, duration: 0.7, ease: "power2.out" });
                isdrop = true;
            }
                else{
                    window.location.href = "tenpage.html"
                }
          
        });


        

});
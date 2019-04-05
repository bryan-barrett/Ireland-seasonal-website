//Landing Page JS ----------------------------------------------------|

// Landing page dropdown image change
const landingBGR = document.querySelector(".landing-wrapper");
const landingBTN = document.getElementById("l-btn");

function selectedSeason(season) {
    
    switch(season) {
        case "summer":
            landingBTN.setAttribute("href","summer.html"); 
            landingBGR.classList.add("summer-bgr");
        break;

        case "winter":
            landingBTN.setAttribute("href","winter.html");
            landingBGR.classList.add("winter-bgr");
            break;

        case "spring":
            landingBTN.setAttribute("href","spring.html");
            landingBGR.classList.add("spring-bgr");
            break;

        case "autumn":
            landingBTN.setAttribute("href","autumn.html");
            landingBGR.classList.add("autumn-bgr");
            break;
    }
}

landingBTN.onmouseenter = () => landingBGR.classList.add("gray-remove");

// Landing page JS End --------------------------------------------------|
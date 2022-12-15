let dashboardItems = document.querySelector("#dasboardItems");
const arrowButton = document.querySelector("#dArr");
const fArr = document.querySelector('.fArr');
const sArr = document.querySelector('.sArr');
const bothArr = document.querySelector('.but');
const leftContainer = document.querySelector('#left');
const logoImg = document.querySelector('.logo img');
const dashboardButton = document.querySelectorAll(".dashboardItemsInner button");
const userBtn = document.querySelectorAll(".userMainContents button");
const userMain = document.querySelectorAll(".userMain");
const userMainContents = document.querySelectorAll(".userMainContents");
const dashboardItemsInner = document.querySelector(".dashboardItemsInner");
const userAccount = document.querySelector(".userAccount");
const userAuth = document.querySelector(".userAuth");
const showButton = document.querySelector("#showLeft");
const userShowBtn = document.querySelector(".userShowBtn");
const upDownIcons = document.querySelector("#up-downIcons");
const dashboardBtn = document.querySelector(".downArrow");
const displayOn = document.querySelectorAll(".displayOn");
const dashboardBtnArw = document.querySelector(".downArrow img");
dashboardItemsInner.style.height = "160px";
let navTheme = true;


// Mid container ---- 
const midContainer = document.querySelector("#mid");
const navMenu = document.querySelector(".navDashHover");
const navMenuItem = document.querySelectorAll(".navDashItem");
const navMenuIcons = document.querySelectorAll(".navMenuIcon");

arrowButton.addEventListener("mouseenter", function () {
    fArr.style.color = "#3e97ff";
    sArr.style.color = "#3f639e";
});
arrowButton.addEventListener("mouseleave", function () {
    if(sidebar){

        fArr.style.color = "black";
    }else{
        fArr.style.color = "white";

    }
    sArr.style.color = "gray";
});
arrowButton.addEventListener("click", function () {
    let lArr = fArr.innerHTML;
    let rArr = sArr.innerHTML;
    displayOn.forEach(function (ele) {
        ele.classList.toggle("displayOf");
    });

    if (bothArr.style.animation === "" || bothArr.style.animation === "0.2s ease-in-out 0s 1 normal forwards running RotationM") {
        bothArr.style.animation = "RotationP 0.2s forwards ease-in-out";
        leftContainer.style.animation = "WidthM 0.2s forwards ease-in-out";
        logoImg.style.display = "none";
        midContainer.style.width = "100%";

    }
    else {
        bothArr.style.animation = "RotationM 0.2s forwards ease-in-out";
        leftContainer.style.animation = "WidthP 0.2s forwards ease-in-out";
        logoImg.style.display = "block";
        midContainer.style.width = "80%";

    }
});

// dashboard button Main reveal -----
dashboardBtn.innerHTML = `<img src="./img/downArw.png" alt="">`;
dashboardItems.classList.add("displayNone");

dashboardBtn.addEventListener("click", function () {
    if (dashboardBtn.innerHTML === `<img src="./img/upArw.png" alt="">`) {
        dashboardBtn.innerHTML = `<img src="./img/downArw.png" alt="">`;
        dashboardItems.classList.add("displayNone");

    } else if (dashboardBtn.innerHTML === `<img src="./img/downArw.png" alt="">`) {
        dashboardBtn.innerHTML = `<img src="./img/upArw.png" alt="">`;
        dashboardItems.classList.remove("displayNone");
    }

});



// Scrollbar hover ----- 

document.querySelector(".leftMidInner").addEventListener("mouseover", function () {
    document.querySelector(".leftMidInner").classList.add("leftMidInnerScroll");
    // console.log("hover");
});
document.querySelector(".leftMidInner").addEventListener("mouseleave", function () {
    document.querySelector(".leftMidInner").classList.remove("leftMidInnerScroll");
    // console.log("hover");
});



// dashboard button Show more - Less  ----- 
dashboardButton[0].style.background = "#3e97ff";
dashboardButton[0].style.color = "white";

for (let i = 0; i < dashboardButton.length; i++) {

    dashboardButton[i].addEventListener("click", function () {
        for (let j = 0; j < dashboardButton.length; j++) {
            dashboardButton[j].style.background = "none";
            dashboardButton[j].style.color = "#a1a5b7";
        };
        this.style.background = "#3e97ff";
        this.style.color = "white";
    });
}

// dashboard Width min max ----- 


if (dashboardItemsInner.style.height === "160px") {
    showButton.innerHTML = `<p>Show More</p>
    <p class="pmSign">
    <ion-icon name="add-outline"></ion-icon>
    </p>`;
} else {
    showButton.innerHTML = `<p>Show Less</p>
    <p class="pmSign">
    <ion-icon name="remove-outline"></ion-icon>
    </p>`;
}
showButton.addEventListener("click", function () {

    if (dashboardItemsInner.style.height === "160px") {
        dashboardItemsInner.style.animation = "heightP 0.6s ease-in-out forwards";
        dashboardItemsInner.style.height = "322px";
    } else if (dashboardItemsInner.style.height === "322px") {
        dashboardItemsInner.style.animation = "heightM 0.6s ease-in-out forwards";
        dashboardItemsInner.style.height = "160px";
    }

    if (dashboardItemsInner.style.height === "160px") {
        showButton.innerHTML = `<p>Show More</p>
        <p class="pmSign">
        <ion-icon name="add-outline"></ion-icon>
        </p>`;
    } else {
        showButton.innerHTML = `<p>Show Less</p>
        <p class="pmSign">
        <ion-icon name="remove-outline"></ion-icon>
        </p>`;
    }
});

// Pagesss ----- 
function handleClick(e) {

    // console.log(userMainContents.length);
    if (e.getAttribute("name") === "chevron-down-outline") {
        e.setAttribute("name", "chevron-up-outline");

        // userProfile Btn --- 
        for (let i = 1; i <= userMainContents.length; i++) {
            if (e.getAttribute("value") === "user" + i) {
                let user = ".user" + i;
                document.querySelector(user).style.animation = "userHeightP 0.6s ease-in-out forwards";
            }
        }

    }
    else if (e.getAttribute("name") === "chevron-up-outline") {
        e.setAttribute("name", "chevron-down-outline");

        // userProfile btn --- 
        for (let i = 1; i <= userMainContents.length; i++) {
            if (e.getAttribute("value") === "user" + i) {
                let user = ".user" + i;
                document.querySelector(user).style.animation = "userHeightM 0.6s ease-in-out forwards";
            }
        }
    }
}


// Inner Btn click animation --- 
for (let i = 0; i < userBtn.length; i++) {

    userBtn[i].addEventListener("click", function () {
        for (let j = 0; j < userBtn.length; j++) {
            userBtn[j].style.background = "none";
            userBtn[j].style.color = "#a1a5b7";
        };
        this.style.background = "#3e97ff";
        this.style.color = "white";
    });
}


// userMain focus when clicked ------

for (let i = 0; i < userMain.length; i++) {
    userMain[i].addEventListener("click", function () {

        for (let j = 0; j < userMain.length; j++) {
            userMain[j].style.color = "#8d98a5";
        }
        if(sidebar){
            userMain[i].style.color = "black";
        }else{
            userMain[i].style.color = "white";
        }
    });
}

// Nav menu items hover effect ----- 

for (let i = 0; i < navMenuItem.length; i++) {
    navMenuItem[i].addEventListener("mouseover", function () {
        navMenuIcons[i].style.background = "#f4f4f4";
    });

    navMenuItem[i].addEventListener("mouseleave", function () {
        navMenuIcons[i].style.background = "none";
    });
}


// nav Menu items loop input  ----- 

const menuItems = [
    {
        id: 1,
        heading: "Dashboard",
        subHeading: "Reports & statistics",
        icon: '<ion-icon name="basket-outline"></ion-icon>',
        color:"deepskyblue"
    },
    {
        id: 2,
        heading: "Projects",
        subHeading: "Tasts,graphs & charts",
        icon: '<ion-icon name="medal-outline"></ion-icon>',
        color:"#7239ea"
    },
    {
        id: 3,
        heading: "eCommerce",
        subHeading: "Sales reports",
        icon: '<ion-icon name="grid-outline"></ion-icon>',
        color:"red"
    },
    {
        id: 4,
        heading: "Marketing",
        subHeading: "Campaings & conversions",
        icon: '<ion-icon name="stats-chart-outline"></ion-icon>',
        color:"black"
    },
    {
        id: 5,
        heading: "Social",
        subHeading: "Feeds & Activities",
        icon: '<ion-icon name="sync-outline"></ion-icon>',
        color:"limegreen"
    },
    {
        id: 6,
        heading: "Bidding",
        subHeading: "Deals & stock exchange",
        icon: '<ion-icon name="trending-up-outline"></ion-icon>',
        color:"#ffc700"
    },
    {
        id: 7,
        heading: "Online courses",
        subHeading: "Student progess",
        icon: '<ion-icon name="wifi-outline"></ion-icon>',
        color:"limegreen"
    },
    {
        id: 8,
        heading: "Logistics",
        subHeading: "Shipments & delivery",
        icon: '<ion-icon name="albums-outline"></ion-icon>',
        color:"#7239ea"
    },
];


navMenuItem.forEach((ele,i)=> {
    ele.getElementsByClassName("navMenuIcon")[0].innerHTML = menuItems[i].icon;
    ele.getElementsByClassName("menuHeading")[0].innerText = menuItems[i].heading;
    ele.getElementsByClassName("menusubHeading")[0].innerText = menuItems[i].subHeading;
    ele.getElementsByClassName("navMenuIcon")[0].style.color = menuItems[i].color;
});



// hover effect dashboard ---- 
let manipulate = false
document.getElementById("dashBoard").addEventListener("mouseover",function(){
    navMenu.style.display = "block"
    if(navTheme){
        document.getElementById("dashBoard").classList.add("navWordsLight");
    }else{
        document.getElementById("dashBoard").classList.add("navWordsDark");
    }
});
navMenu.addEventListener("mouseover",function(){
    navMenu.style.display = "block"
    manipulate = true;
});
document.getElementById("dashBoard").addEventListener("mouseleave",function(){
    let interval = setInterval(function () {
        if(manipulate){
            navMenu.style.display = "block"

        }else{
            navMenu.style.display = "none"
            if(navTheme){
                document.getElementById("dashBoard").classList.remove("navWordsLight");
            }else{
                document.getElementById("dashBoard").classList.remove("navWordsDark");
            }
        }
        clearInterval(interval);
    }, 200);
    
});

navMenu.addEventListener("mouseleave",function(){
    let interval = setInterval(function () {
        navMenu.style.display = "none";
        if(navTheme){
            document.getElementById("dashBoard").classList.remove("navWordsLight");
        }else{
            document.getElementById("dashBoard").classList.remove("navWordsDark");
        }
        clearInterval(interval);
        manipulate = false
    }, 100);
});

// click layout box items ----- 

const layoutListItem = document.querySelectorAll(".layoutListItem");

for(let i = 0;i<layoutListItem.length;i++){
    layoutListItem[i].addEventListener("click", function () {
        for (let j = 0; j < layoutListItem.length; j++) {
            layoutListItem[j].style.background = "none";
            layoutListItem[j].style.color = "gray";
        };
        this.style.background = "#f4f6fb";
        this.style.color = "#64acf6";
    });
}


// Nav words dark theme ---- 

const navWordsInner = document.querySelectorAll(".navWordsInner");
const iconsInnerBorder = document.querySelectorAll(".iconsInnerBorder");

function headerTheme(ele){
    if(ele.id ==="lightHeader"){
        navTheme = true;
        document.querySelector("nav").classList.remove("backBlack");
        navWordsInner.forEach((ele)=>{
            ele.classList.remove("colorWhite");
        });
        iconsInnerBorder.forEach((ele)=>{
            ele.classList.remove("iconsInnerBorderDark");
        });
    }
    else if(ele.id ==='darkHeader'){
        navTheme = false;
        document.querySelector("nav").classList.add("backBlack");
        navWordsInner.forEach((ele)=>{
            ele.classList.add("colorWhite");
        });
        iconsInnerBorder.forEach((ele)=>{
            ele.classList.add("iconsInnerBorderDark");
        });
    }
}

const layoutsHover = document.querySelector(".layoutHover");
let manipulateLayouts = false;
function navMouseOver(ele){
    if(navTheme){
        ele.classList.add("navWordsLight");
    }else{
        ele.classList.add("navWordsDark");
    }

    if(ele.id === "layouts"){
        layoutsHover.style.display = "flex";
    }
}
layoutsHover.addEventListener("mouseover",function(){
    manipulateLayouts = true;
});
function navMouseLeave(ele){
    if(navTheme){
        ele.classList.remove("navWordsLight");
    }else{
        ele.classList.remove("navWordsDark");
    }

    if(ele.id === "layouts"){
        
        let interval = setInterval(function () {
            if(manipulateLayouts){
                layoutsHover.style.display = "flex";
    
            }else{
                layoutsHover.style.display = "none";
            }
            clearInterval(interval);
        }, 200);
        
    }
}
layoutsHover.addEventListener("mouseleave",function(){
    manipulateLayouts = false;
    let interval = setInterval(function () {
        layoutsHover.style.display = "none";
        clearInterval(interval);
    }, 200);
});

// left bar light theme ----- 

const logo = document.querySelector(".logo img");
const logoContainer  = document.querySelector(".logo");
const leftMidInner = document.querySelector(".leftMidInner");
let sidebar = false;
const userMainBtn = document.querySelectorAll(".userMainContentButtons");
function sidebarTheme(ele){
    if(ele.id ==="lightSidebar"){
        sidebar = true;
    }else if(ele.id ==="darkSidebar"){
        sidebar = false
    }

    if(sidebar){
        logo.src = "https://preview.keenthemes.com/keen/demo1/assets/media/logos/default.svg";
        arrowButton.style.background = "#f4f6fa";
        fArr.style.color = "black";
        leftContainer.style.background = "#f6f6f6";
        document.querySelector(".docsBtn a").style.background = "#4199ff";
        document.querySelector(".docsBtn a").style.color = "#f6f6f6";
        userMain.forEach(ele=>{
            ele.classList.add("backWhite");
        });
        document.querySelector("#dashboard").style.filter = "invert(1)";
        document.querySelectorAll(".userShowBtn ion-icon").forEach(ele=>{
            ele.classList.add("userBtnIcons");
        });
        userMainBtn.forEach(ele=>{
            ele.classList.add("userMainLight");
        });
        logoContainer.style.borderBottom = "none";
        leftMidInner.classList.add("leftMidInnerLight");
        
    }else{
        logo.src = "https://preview.keenthemes.com/keen/demo1/assets/media/logos/default-dark.svg";
        arrowButton.style.background = "#323c55";
        fArr.style.color = "white";
        leftContainer.style.background = "#202b46";
        document.querySelector(".docsBtn a").style.background = "#2b334b";
        document.querySelector(".docsBtn a").style.color = "#a8b5c3";
        userMain.forEach(ele=>{
            ele.classList.remove("backWhite");
        });
        document.querySelector("#dashboard").style.filter = "invert(0)";
        document.querySelectorAll(".userShowBtn ion-icon").forEach(ele=>{
            ele.classList.remove("userBtnIcons");
        });
        userMainBtn.forEach(ele=>{
            ele.classList.remove("userMainLight");
        });
        
        logoContainer.style.borderBottom = "1px dashed #33446C";

        leftMidInner.classList.remove("leftMidInnerLight");
    }
}

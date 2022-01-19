//male dodatki
window.addEventListener('load', function(){
    const backgroundIMG = document.querySelector('#background').firstChild;
    const isLoaded = backgroundIMG.complete && backgroundIMG.naturalHeight !==0;
    if(isLoaded){
        wylonObraz(backgroundIMG);
        menuHamburger();
    }
})

function wylonObraz(img) {
    let opacity = 0;
    const x = setInterval(function() {
        img.style.opacity = opacity;
        if(opacity >= 1){
            clearInterval(x);
        }
        opacity+=0.02;
    }, 20);
}

//Menu Hamburger 
function menuHamburger() {
    let czyWlaczony = true;

    const hamburgerPanel = document.querySelector('.hamburger');
    
    let menuPanels = Array.from(document.querySelectorAll('.menu > li'));
    menuPanels.shift();
    
    menuPanels.forEach(panel=> {
        panel.classList.add("liAktywny");
    })

    hamburgerPanel.addEventListener('click', function() {
        if(czyWlaczony) {
            czyWlaczony = false;
            menuPanels.forEach( panel => {
                panel.classList.replace("liAktywny", "liNieaktywny")
                
            }) 

        } else {
            czyWlaczony = true;
            menuPanels.forEach( panel => {
                panel.classList.replace("liNieaktywny", "liPrzejscie_one")

                const x = setTimeout(function() {
                    panel.classList.replace("liPrzejscie_one", "liPrzejscie_two")
                }, 20)

                const y = setTimeout(function() {
                    panel.classList.replace("liPrzejscie_two", "liAktywny")
                }, 700)           
                
            })
        }
    })
}

//kontakt
const kontakt = document.querySelector('.kontakt');
const body = document.body;


function backPanelCreation(backPanel) {

    backPanel.id = "kontaktBackPanel";
}

function createNewsPanel(newsPanel){
    
    newsPanel.className = "kontaktNewsPanel";
}

function createExitButton(closeButton, mainParrent) {

    closeButton.className = "kontaktCloseButton";
    closeButton.src = "zdjecia/close.png";

    closeButton.addEventListener('click', function(){
        mainParrent.remove();
    });
}

function pullDownElement(element) {
    let x = 100;
    const interval = setInterval(function() {
        
        element.style.top = `-${x}vh`;
        if(x == 0){
            clearInterval(interval);
        }
        x -= 5;
    },2);
    
}

function createParagraphs(p1, p2){
    p1.innerHTML = "Zapisz sie do Newslettera!";
    p1.style.fontFamily = 'fast_handregular', 'sans-serif';

    p2.innerHTML = "Email:";
}

function createInputAndButton(input, button){

    input.type = "email";

    button.innerHTML= "Zapisz!";  
}


kontakt.addEventListener('click', function() {

    const backPanel = document.createElement('div');
    const newsPanel = document.createElement('div');
    const closeButton = document.createElement('img');

    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const input = document.createElement('input');
    const button = document.createElement('button');

    backPanelCreation(backPanel);
    createExitButton(closeButton, backPanel);
    createNewsPanel(newsPanel);
    createParagraphs(p1, p2);
    createInputAndButton(input, button);

    backPanel.appendChild(closeButton);
    backPanel.appendChild(newsPanel);

    newsPanel.appendChild(p1);
    newsPanel.appendChild(p2);

    newsPanel.appendChild(input);
    newsPanel.appendChild(button);

    body.appendChild(backPanel);


    pullDownElement(backPanel);
});


//oferty

const imgContainers = document.querySelectorAll('.ofertGridContainer > div');
imgContainers.forEach( imgC => {
    imgC.addEventListener('mouseenter', pokazDetale);
    imgC.addEventListener('mouseleave', schowajDetale);
})

function pokazDetale() {
    const img = this.firstChild;

    const realWidth = img.width;
    img.style.transform = `translateY(${-(realWidth / (realWidth/100) )}px)`;
    
    const zakrywka = document.createElement('div');
    zakrywka.style.width = "100%";
    zakrywka.style.height = "100%";
    zakrywka.style.display = "flex";
    zakrywka.style.alignItems = "flex-end";
    zakrywka.style.justifyContent = "center";
    zakrywka.style.flexWrap = "wrap";
    zakrywka.style.borderRadius = "1.2vw";

    const text = document.createElement('p');
    text.innerHTML = "25,99zł";
    text.style.textAlign = "center";
    text.style.color = "black"
    text.style.backgroundColor = "#e7e7e7";
    text.style.position = "absolute"
    text.style.borderRadius = "1.2vw";
    text.style.margin = "0";
    text.style.width = `${realWidth}px`

    this.style.alignItems = "flex-end"

    this.appendChild(zakrywka);
    zakrywka.appendChild(img);
    zakrywka.appendChild(text);
}

function schowajDetale() {

    const zakrywka = this.firstChild;    
    const img = zakrywka.children[0];
    const text = zakrywka.children[1];


    this.style.alignItems = "center";
    img.style.transform = `translateY(0px)`;

    this.appendChild(img);
    text.remove();
    zakrywka.remove();
    
}




//artykuly 
const artykuly = document.querySelectorAll('artGridContainer > div');
artykuly.forEach( art => {

})


/* #07026E
#021C78
#033161
#025A78
#026E6D */
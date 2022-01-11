//male dodatki
window.addEventListener('load', function(){
    const backgroundIMG = document.querySelector('#background').firstChild;
    const isLoaded = backgroundIMG.complete && backgroundIMG.naturalHeight !==0;
    if(isLoaded){
        wylonObraz(backgroundIMG);
    }
})

function wylonObraz(img) {
    let opacity = 0;
    const x = setInterval(function() {
        img.style.opacity = opacity;
        opacity+=0.02;
    }, 20);
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
    //imgC.addEventListener('mouseenter', pokazDetale);
    //imgC.addEventListener('mouseleave', schowajDetale);
})

function pokazDetale() {
    const img = this.firstChild;
    
    const zakrywka = document.createElement('div');
    zakrywka.style.backgroundColor = "#e7e7e7";
    zakrywka.style.width = "100%";
    zakrywka.style.height = "100%";
    zakrywka.style.display = "flex";
    zakrywka.style.alignItems = "center";
    zakrywka.style.borderRadius = "1.2vw";

    this.appendChild(zakrywka);
    zakrywka.appendChild(img);
}

function schowajDetale() {
    const zakrywka = this.firstChild;
    const img = zakrywka.firstChild;

    this.appendChild(img);
    
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
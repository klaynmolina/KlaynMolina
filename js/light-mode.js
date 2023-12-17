const lightMode = 'lightMode';
const emptyCircleLight = 'empty-circle-light';
const portfolioTextLight = 'portfolio-text-light';
const cvLinksLight  = 'cv-links-light';

const body = document.getElementsByTagName('body')[0];
const navigationContent = document.getElementById('navigation-content');

const homeLink = document.getElementsByClassName('page-links')[0];
const portfolioLink = document.getElementsByClassName('page-links')[1];


const linkedin = document.getElementById('linkedin');
const github = document.getElementById('github');
const cv = document.getElementById('cv');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const lamp = document.getElementById('lamp');
const headerImage = document.getElementById('headerImage');

const portfolioHeader = document.getElementById('portfolioHeader');

const portfolioTextTresReis = document.getElementsByClassName('portfolio-text')[0];
const portfolioTextKlaynFotografia = document.getElementsByClassName('portfolio-text')[9];
const portfolioTextDvl = document.getElementsByClassName('portfolio-text')[1];
const portfolioTextDely = document.getElementsByClassName('portfolio-text')[2];
const portfolioTextMaisPraTi = document.getElementsByClassName('portfolio-text')[3];
const portfolioTextBootcampSantander = document.getElementsByClassName('portfolio-text')[4];
const portfolioTextFrontEndSenai = document.getElementsByClassName('portfolio-text')[5];
const portfolioTextBackendSenai = document.getElementsByClassName('portfolio-text')[6];
const portfolioTextSimulacaoBancaria = document.getElementsByClassName('portfolio-text')[7];
const portfolioTextPequenosProjetos = document.getElementsByClassName('portfolio-text')[8];
// const portfolioTextConstrucao = document.getElementsByClassName('portfolio-text')[8];


const portfolio = document.getElementById('portfolio');

const headerCaptionFirst = document.getElementsByClassName('header-caption')[0];

function goLightMode() {

    body.classList.toggle(lightMode);  

    homeLink.classList.toggle(lightMode);
    portfolioLink.classList.toggle(lightMode);

    /*portfolio*/    
    portfolioTextTresReis.classList.toggle(portfolioTextLight);
    portfolioTextTresReis.classList.toggle(lightMode);

    portfolioTextDvl.classList.toggle(portfolioTextLight);
    portfolioTextDvl.classList.toggle(lightMode);

    portfolioTextDely.classList.toggle(portfolioTextLight);
    portfolioTextDely.classList.toggle(lightMode);

    portfolioTextMaisPraTi.classList.toggle(portfolioTextLight);
    portfolioTextMaisPraTi.classList.toggle(lightMode);

    portfolioTextBootcampSantander.classList.toggle(portfolioTextLight);
    portfolioTextBootcampSantander.classList.toggle(lightMode);
    
    portfolioTextFrontEndSenai.classList.toggle(portfolioTextLight);
    portfolioTextFrontEndSenai.classList.toggle(lightMode);

    portfolioTextBackendSenai.classList.toggle(portfolioTextLight);
    portfolioTextBackendSenai.classList.toggle(lightMode);

    portfolioTextSimulacaoBancaria.classList.toggle(portfolioTextLight);
    portfolioTextSimulacaoBancaria.classList.toggle(lightMode);
    
    portfolioTextPequenosProjetos.classList.toggle(portfolioTextLight);
    portfolioTextPequenosProjetos.classList.toggle(lightMode); 

    portfolioTextKlaynFotografia.classList.toggle(portfolioTextLight);
    portfolioTextKlaynFotografia.classList.toggle(lightMode);
    
    // portfolioTextConstrucao.classList.toggle(portfolioTextLight);
    // portfolioTextConstrucao.classList.toggle(lightMode);
    
    
    portfolioHeader.classList.toggle(lightMode);
    portfolio.classList.toggle(lightMode);

    cv.classList.toggle(cvLinksLight);

    headerCaptionFirst.classList.toggle(lightMode);

    if (body.getAttribute('class') == 'lightMode') {
        linkedin.src = 'images/linkedin-logo-black.png';
        github.src = 'images/github-black.png';
        cv.src = 'images/cv-black.png';
        email.src = 'images/icon-email-black.png';
        phone.src = 'images/icon-phone-black.png';
        lamp.src = 'images/light-mode-black.png';
        headerImage.src = 'images/km-black.png';
        navigationContent.style.backgroundColor = '#E5E8E8';
    } else {
        linkedin.src = 'images/linkedin-logo-gradient.png';
        github.src = 'images/github-gradient.png';
        cv.src = 'images/cv.png';
        email.src = 'images/icon-email-gradient.png';
        phone.src = 'images/icon-phone-gradient.png';
        lamp.src = 'images/light-mode.png';
        headerImage.src = 'images/km-gray.png';
        navigationContent.style.backgroundColor = '#020202';
    }
}

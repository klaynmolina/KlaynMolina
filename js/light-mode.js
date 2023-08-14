const lightMode = 'lightMode';
const emptyCircleLight = 'empty-circle-light';
const portfolioTextLight = 'portfolio-text-light';
const cvLinksLight  = 'cv-links-light';



const body = document.getElementsByTagName('body')[0];
const navigationContent = document.getElementById('navigation-content');

const homeLink = document.getElementsByClassName('page-links')[0];
const aboutLink = document.getElementsByClassName('page-links')[1];
const portfolioLink = document.getElementsByClassName('page-links')[2];


const linkedin = document.getElementById('linkedin');
const github = document.getElementById('github');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const lamp = document.getElementById('lamp');
const headerImage = document.getElementById('headerImage');
const aboutContent = document.getElementById('about-content');
const aboutHeader = document.getElementById('aboutHeader');
const aboutFirstParagraph = document.getElementById('aboutFirstParagraph');

const skillsHeader = document.getElementById('skillsHeader');
const java = document.getElementById('java');
const spring = document.getElementById('spring');
const mysql = document.getElementById('mysql');
const git = document.getElementById('git');
const htmlcss = document.getElementById('htmlcss');
const javascript = document.getElementById('javascript');
const emptyCircleJava = document.getElementById('emptyCircleJava');
const emptyCircleJav = document.getElementById('emptyCircleJav');
const emptyCircleSpring = document.getElementById('emptyCircleSpring');
const emptyCircleSpringBoot = document.getElementById('emptyCircleSpringBoot');
const emptyCircleBoot = document.getElementById('emptyCircleBoot');
const emptyCircleMy = document.getElementById('emptyCircleMy');
const emptyCircleMySql = document.getElementById('emptyCircleMySql');
const emptyCircleSql = document.getElementById('emptyCircleSql');
const emptyCircleG = document.getElementById('emptyCircleG');
const emptyCircleI = document.getElementById('emptyCircleI');
const emptyCircleT = document.getElementById('emptyCircleT');
const emptyCircleHtml = document.getElementById('emptyCircleHtml');
const emptyCircleCss = document.getElementById('emptyCircleCss');
const emptyCircleJs = document.getElementById('emptyCircleJs');
const emptyCircleJavas = document.getElementById('emptyCircleJavas');
const emptyCircleJavaScript = document.getElementById('emptyCircleJavaScript');
const emptyCircleScript = document.getElementById('emptyCircleScript');
const portfolioHeader = document.getElementById('portfolioHeader');

const portfolioTextTresReis = document.getElementsByClassName('portfolio-text')[0];
const portfolioTextDvl = document.getElementsByClassName('portfolio-text')[1];
const portfolioTextDely = document.getElementsByClassName('portfolio-text')[2];
const portfolioTextMaisPraTi = document.getElementsByClassName('portfolio-text')[3];
const portfolioTextBootcampSantander = document.getElementsByClassName('portfolio-text')[4];
const portfolioTextFrontEndSenai = document.getElementsByClassName('portfolio-text')[5];
const portfolioTextBackendSenai = document.getElementsByClassName('portfolio-text')[6];
const portfolioTextSimulacaoBancaria = document.getElementsByClassName('portfolio-text')[7];
const portfolioTextPequenosProjetos = document.getElementsByClassName('portfolio-text')[8];
const portfolioTextKlaynFotografia = document.getElementsByClassName('portfolio-text')[9];
// const portfolioTextConstrucao = document.getElementsByClassName('portfolio-text')[8];


const portfolio = document.getElementById('portfolio');

const cv = document.getElementsByClassName('cv-links')[0];
const linklinkedin = document.getElementsByClassName('cv-links')[1];

const headerCaptionFirst = document.getElementsByClassName('header-caption')[0];
const headerCaptionSecond = document.getElementsByClassName('header-caption')[1];

const aboutFirstLineAjust = document.getElementsByClassName('about-first-line-ajust')[0];



function goLightMode() {

    body.classList.toggle(lightMode);  

    aboutContent.classList.toggle(lightMode);
    aboutHeader.classList.toggle(lightMode);
    skillsHeader.classList.toggle(lightMode);
    java.classList.toggle(lightMode);
    spring.classList.toggle(lightMode);
    mysql.classList.toggle(lightMode);
    git.classList.toggle(lightMode);
    htmlcss.classList.toggle(lightMode);
    javascript.classList.toggle(lightMode);

    homeLink.classList.toggle(lightMode);
    aboutLink.classList.toggle(lightMode);
    portfolioLink.classList.toggle(lightMode);

    emptyCircleJava.classList.toggle(emptyCircleLight);
    emptyCircleJav.classList.toggle(emptyCircleLight);
    emptyCircleSpring.classList.toggle(emptyCircleLight);
    emptyCircleSpringBoot.classList.toggle(emptyCircleLight);
    emptyCircleBoot.classList.toggle(emptyCircleLight);
    emptyCircleMy.classList.toggle(emptyCircleLight);
    emptyCircleMySql.classList.toggle(emptyCircleLight);
    emptyCircleSql.classList.toggle(emptyCircleLight);
    emptyCircleG.classList.toggle(emptyCircleLight);
    emptyCircleI.classList.toggle(emptyCircleLight);
    emptyCircleT.classList.toggle(emptyCircleLight);
    emptyCircleHtml.classList.toggle(emptyCircleLight);
    emptyCircleCss.classList.toggle(emptyCircleLight);
    emptyCircleJavas.classList.toggle(emptyCircleLight);
    emptyCircleJavaScript.classList.toggle(emptyCircleLight);
    emptyCircleScript.classList.toggle(emptyCircleLight);

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

    aboutFirstParagraph.classList.toggle(lightMode);
    aboutFirstLineAjust.classList.toggle(lightMode);

    cv.classList.toggle(cvLinksLight);
    linklinkedin.classList.toggle(cvLinksLight);

    headerCaptionFirst.classList.toggle(lightMode);
    headerCaptionSecond.classList.toggle(lightMode);

    if (body.getAttribute('class') == 'lightMode') {
        linkedin.src = 'images/linkedin-logo-black.png';
        github.src = 'images/github-black.png';
        email.src = 'images/icon-email-black.png';
        phone.src = 'images/icon-phone-black.png';
        lamp.src = 'images/light-mode-black.png';
        headerImage.src = 'images/km-black.png';
        navigationContent.style.backgroundColor = '#E5E8E8';
    } else {
        linkedin.src = 'images/linkedin-logo-gradient.png';
        github.src = 'images/github-gradient.png';
        email.src = 'images/icon-email-gradient.png';
        phone.src = 'images/icon-phone-gradient.png';
        lamp.src = 'images/light-mode.png';
        headerImage.src = 'images/km-gray.png';
        navigationContent.style.backgroundColor = '#020202';
    }
}

/* Add Authors section dynamically */
/* <div class="authorBox row px-3">
        <div class="d-flex flex-lg-column col-lg-2 container my-1 py-3 align-items-center">
          <img class="auth-img" src="speakers/speaker_03.png" alt="">
          <div class="d-flex flex-column">
            <h2 class="p-1 m-1 mx-3">SohYeong Noh</h2>
            <p class=""authLine mt-2"></span>
            </p>
            <p class=""</p>
          </div>
        </div>
      </div>
      */
const authors = [{
  name: 'Gene Hall',
  authImg: 'speakers/speaker_01_.png',
  authText1: 'Professor, Analytical Chemist, Rutgers University',
  authText2: 'Gene is an analytical chemist who specializes in ICPMS, FT-IR, Raman, MALDI, Q-TOF, and XRF Laboratory. Dr. Hall earned his BS degree from Tusculum College and his PhD from Virginia Polytechnic.',
},
{
  name: 'Renã Robinson',
  authImg: 'speakers/speaker_02_.png',
  authText1: 'Associate Professor of Chemistry Vanderbilt University',
  authText2: 'She has a nationally and internationally recognized research program and is a leader in the field of proteomics for her work in aging, Alzheimer’s disease, and applications relevant to human health and disparities.',
},
{
  name: 'Siqi Sun',
  authImg: 'speakers/speaker_03_.png',
  authText1: 'Application Lab Manager, Analytik Jena US',
  authText2: 'She led the application research and technical support for the North American market. She is the voting member of American Society for Testing and Materials (ASTM) Committee D02 on Petroleum Products, Liquid Fuels, and Lubricants and D19 on water.',
},
{
  name: 'Toby Blackburn',
  authImg: 'speakers/speaker_04_.png',
  authText1: 'Head of Business Development and Strategy, Emerald Cloud Lab',
  authText2: 'Toby Blackburn serves as the head of business development and strategy at Emerald Cloud Lab (ECL), a physical laboratory which scientists can access remotely via the Internet that allows them to run, analyze, and interpret experiments without setting foot in the lab.',
},
{
  name: 'Brian Frezza',
  authImg: 'speakers/speaker_05_.png',
  authText1: 'Co-Founder and Co-Chief Executive Officer Emerald Cloud Lab',
  authText2: 'Brian is a Hollerith and Wolfram Innovator award-winner who has received over four hundred combined citations for published articles in the Journal of the American Chemical Society (JACS) and Chemical Physics. He has also served as a peer reviewer for both JACS and Langmuir, and guest-lectured at CMU, TSRI, and Stanford.',
},
{
  name: 'SohYeong Noh',
  authImg: 'speakers/speaker_06_.png',
  authText1: 'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
  authText2: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006',
}];

function addAuthor(id) {
  const authName = document.createElement('h2');
  authName.className = 'p-1 m-1 mx-3';
  authName.textContent = authors[id].name;
  const authText1 = document.createElement('p');
  authText1.className = 'authText1 px-4 m-1';
  authText1.textContent = authors[id].authText1;
  const span = document.createElement('span');
  span.className = 'authLine mt-2';
  authText1.appendChild(span);
  const authText2 = document.createElement('p');
  authText2.className = 'authText2 px-4 m-1';
  authText2.textContent = authors[id].authText2;
  const textDiv = document.createElement('div');
  textDiv.className = 'd-flex flex-column';
  textDiv.append(authName, authText1, authText2);
  const authImg = document.createElement('img');
  authImg.src = authors[id].authImg;
  authImg.classList.add('auth-img');
  const contDiv1 = document.createElement('div');
  contDiv1.className = 'd-flex container my-1 py-3 align-items-center';
  contDiv1.append(authImg, textDiv);
  const baseCont = document.createElement('div');
  baseCont.className = 'col-lg-5 authorBox row px-3';
  if (id > 1) {
    baseCont.classList.add('collapsable');
    baseCont.classList.add('order-5');
  }
  baseCont.appendChild(contDiv1);
  document.querySelector('.authCards').appendChild(baseCont);
}

window.addEventListener('load', () => {
  for (let i = 0; i < authors.length; i += 1) {
    addAuthor(i);
  }
  document.getElementById('menuBtn').click();
  document.getElementById('seeMore').click();
  document.getElementById('seeMore').click();
});

document.addEventListener('scroll', () => {
  const mainMenu = document.querySelector('.mainMenu');
  if (window.scrollY > 200) {
    mainMenu.style.backgroundColor = 'white';
  } else {
    mainMenu.style.backgroundColor = 'transparent';
  }
});

// change drop down menu backgroundColor

document.getElementById('menuBtn').addEventListener('click', () => {
  document.querySelector('.collapsed').style.backgroundColor = 'white';
});
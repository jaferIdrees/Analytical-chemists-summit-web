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
  name: 'Yochai Benkler',
  authImg: 'speakers/speaker_01.png',
  authText1: 'Director of Art Centre Nabi and a board member of CC Korea',
  authText2: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
},
{
  name: 'SohYeong Noh',
  authImg: 'speakers/speaker_03.png',
  authText1: 'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
  authText2: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006',
},
{
  name: 'Kilnam Chon',
  authImg: 'speakers/speaker_02.png',
  authText1: '',
  authText2: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
},
{
  name: 'SohYeong Noh',
  authImg: 'speakers/speaker_04.png',
  authText1: 'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
  authText2: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006',
},
{
  name: 'Kilnam Chon',
  authImg: 'speakers/speaker_05.png',
  authText1: '',
  authText2: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
},
{
  name: 'SohYeong Noh',
  authImg: 'speakers/speaker_06.png',
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
  document.getElementById('seeMore').click();
  document.getElementById('seeMore').click();
});
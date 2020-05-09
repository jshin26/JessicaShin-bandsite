
//querySelectors
let innerShow = document.querySelector('.show--inner');
let showContainer = document.querySelector('.show__container')


const apiKey = '6964010a-171a-4b5c-94b4-5a65f52aa3ea';
const apiURL = 'https://project-1-api.herokuapp.com';

const url = apiURL + '/showdates?api_key=' + apiKey;


getShowsfromAPI = () => {
    
    return axios.get(url)
    .then (showData =>{
        // console.log(showData);
        tabletHeader();
        showData.data.forEach(result => {
            getShows(result);
        })
    })
    .catch(error => {
        console.log(error);
    })
}
getShowsfromAPI();

function createElem (para1, para2, para3, para4, para5) {
    return `let ${para1} = document.createElement(${para2}).classList.add(${para3});
            ${para4}.appendChild(${para1});
            ${para1}.innerText = ${para5}`
}


//function for creating new rows
function getShows (showInfo) {

    // //Create Elements
    let showTable = document.createElement('div'); //container <- table
    let showBody = document.createElement('div'); // table <- body
    // let showDateHeader = document.createElement('p');
    // let showDate = document.createElement('p');
    // let showVenueHeader = document.createElement('p');
    // let showVenue = document.createElement('p');
    // let showLocationHeader = document.createElement('p');
    // let showLocation = document.createElement('p');
    // let showTicketBtn = document.createElement('button');
    
    

    // //Adding class names
    showTable.classList.add('show__table');
    showBody.classList.add('show__body');
    // showDateHeader.classList.add('show__header');
    // showDate.classList.add('show__date');
    // showVenueHeader.classList.add('show__header');
    // showVenue.classList.add('show__venue');
    // showLocationHeader.classList.add('show__header');
    // showLocation.classList.add('show__location');
    // showTicketBtn.classList.add('show__btn', 'btn');


    // //appendChild in parent
    showContainer.appendChild(showTable);
    showTable.appendChild(showBody);
    // showBody.appendChild(showDateHeader);
    // showBody.appendChild(showDate);
    // showBody.appendChild(showVenueHeader);
    // showBody.appendChild(showVenue);
    // showBody.appendChild(showLocationHeader);
    // showBody.appendChild(showLocation);
    // showBody.appendChild(showTicketBtn);

    // createElem('showTable', 'div', 'show__table', 'showContainer');
    // createElem('showBody', 'div', 'show__body', 'showTable');
    createElem(showDateHeader, 'p', 'show__header', showBody, 'DATE');
    createElem(showDate, 'p', 'show__date', showBody, showInfo.date);
    createElem(showVenueHeader, 'p', 'show__header', showBody, 'VENUE');
    createElem(showVenue, 'p', 'show__venue', showBody, showInfo.place);
    createElem(showLocationHeader, 'p', 'show__header', showBody, 'LOCATION');
    createElem(showLocation, 'p', 'show__location', showBody, showInfo.location);
    createElem(showTicketBtn, 'button', 'show__btn', showBody, 'BUY TICKETS');

    // showDateHeader.innerText = 'DATE';
    // showDate.innerText = showInfo.date;
    // showVenueHeader.innerText = 'VENUE';
    // showVenue.innerText = showInfo.place;
    // showLocationHeader.innerText = 'LOCATION';
    // showLocation.innerText = showInfo.location;
    // showTicketBtn.innerText = 'BUY TICKETS';

}


/* function for the top header for tablet and desktop,
 created button with hidden visibility so that 
 they can take same portion of width as the table body */

function tabletHeader () {
    let topHeader = document.createElement('div');
    let topDate = document.createElement('p');
    let topVenue = document.createElement('p');
    let topLocation = document.createElement('p');
    let topBtn = document.createElement('button');

    topHeader.classList.add('show__top');
    topDate.classList.add('show__top-date');
    topVenue.classList.add('show__top-venue');
    topLocation.classList.add('show__top-location');
    topBtn.classList.add('show__top-btn', 'btn');

    topHeader.appendChild(topDate);
    topHeader.appendChild(topVenue);
    topHeader.appendChild(topLocation);
    topHeader.appendChild(topBtn);

    showContainer.prepend(topHeader);

    topDate.innerText = 'DATE';
    topVenue.innerText = 'VENUE';
    topLocation.innerText = 'LOCATION';
    topBtn.innerText = 'BUY TICKETS';

}
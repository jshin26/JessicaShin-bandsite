
//querySelectors
let innerShow = document.querySelector('.show--inner');
let showContainer = document.querySelector('.show__container')


const apiKey = '6964010a-171a-4b5c-94b4-5a65f52aa3ea';
const apiURL = 'https://project-1-api.herokuapp.com';

const url = apiURL + '/showdates?api_key=' + apiKey;


getShowsfromAPI = () => {
    
    return axios.get(url)
    .then (showData =>{
        console.log(showData);
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


// function for creating element, class name, appendChild, innerText
function createElem (elem, className, parent, text) {
    let newElement = document.createElement(elem);
    newElement.classList.add(className);
    parent.appendChild(newElement);
    newElement.innerText = text
    return newElement;
}


//function for creating new rows
function getShows (showInfo) {

    // //Create Elements
    let showTable = document.createElement('div'); //container <- table
    let showBody = document.createElement('div'); // table <- body
    let showTicketBtn = document.createElement('button');
    showTicketBtn.innerText = 'BUY TICKETS';

    // //Adding class names
    showTable.classList.add('show__table');
    showBody.classList.add('show__body');
    showTicketBtn.classList.add('show__btn', 'btn');

    // //appendChild in parent
    showContainer.appendChild(showTable);
    showTable.appendChild(showBody);

    createElem('p', 'show__header', showBody, 'DATE');
    createElem('p', 'show__date', showBody, showInfo.date);
    createElem('p', 'show__header', showBody, 'VENUE');
    createElem('p', 'show__venue', showBody, showInfo.place);
    createElem('p', 'show__header', showBody, 'LOCATION');
    createElem('p', 'show__location', showBody, showInfo.place);

    showBody.appendChild(showTicketBtn);
}


// Top header for tablet and desktop

function tabletHeader () {

    let topHeader = document.createElement('div');
    topHeader.classList.add('show__top');

    createElem('p', 'show__top-date', topHeader, 'DATE');
    createElem('p', 'show__top-venue', topHeader, 'VENUE');
    createElem('p', 'show__top-location', topHeader, 'LOCATION');
    createElem('button', 'show__top-btn', topHeader, 'BUY TICKETS');

    //  created button with hidden visibility so that 
    //  they can take same portion of width as the table body

    showContainer.prepend(topHeader);
}
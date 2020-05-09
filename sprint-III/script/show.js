
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
        showData.data.forEach(result => {
            getShows(result)
        })
    })
    .catch(error => {
        console.log(error)
    })
}
getShowsfromAPI();



function getShows (showInfo) {

    let showTable = document.createElement('div'); //container <- table
    let showBody = document.createElement('div'); // table <- body
    let showDateHeader = document.createElement('div');
    let showDate = document.createElement('div');
    let showVenueHeader = document.createElement('div');
    let showVenue = document.createElement('div');
    let showLocationHeader = document.createElement('div');
    let showLocation = document.createElement('div');
    let showTicketBtn = document.createElement('button');


    showTable.classList.add('show__table');
    showBody.classList.add('show__body');
    showDateHeader.classList.add('show__header');
    showDate.classList.add('show__date');
    showVenueHeader.classList.add('show__header');
    showVenue.classList.add('show__venue');
    showLocationHeader.classList.add('show__header');
    showLocation.classList.add('show__location');
    showTicketBtn.classList.add('show__btn', 'btn');


    showContainer.appendChild(showTable);
    showTable.appendChild(showBody);
    showBody.appendChild(showDateHeader);
    showBody.appendChild(showDate);
    showBody.appendChild(showVenueHeader);
    showBody.appendChild(showVenue);
    showBody.appendChild(showLocationHeader);
    showBody.appendChild(showLocation);
    showBody.appendChild(showTicketBtn);


    showDateHeader.innerText = 'DATE';
    showDate.innerText = showInfo.date;
    showVenueHeader.innerText = 'VENUE';
    showVenue.innerText = showInfo.place;
    showLocationHeader.innerText = 'LOCATION';
    showLocation.innerText = showInfo.location;
    showTicketBtn.innerText = 'BUY TICKETS';
}

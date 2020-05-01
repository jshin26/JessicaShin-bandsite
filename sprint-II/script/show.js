
//querySelectors
let innerShow = document.querySelector('.show--inner');
let showContainer = document.querySelector('.show__container')


//Array for Ticket Lists

showSection = [
    {   
        'date' : {'date1' : 'DATES', 'date2' : ''},
        'venue' : {'venue1' : 'VENUE', 'venue2': ''},
        'location' : {'location1': 'LOCATION', 'location2': ''}
    },
    {
        'date' : {'date1':'DATE', 'date2':'Mon Dec 17 2018'},
        'venue' : {'venue1':'VENUE', 'venue2':'Ronald Land'},
        'location' : {'location1':'LOCATION', 'location2':'San Francisco, CA'},
        'ticket' : 'BUY TICKET'
    },
    {
        'date' : {'date1':'DATE', 'date2':'Tue Jul 18 2019'},
        'venue' : {'venue1':'VENUE', 'venue2':'Pier 3 East'},
        'location' : {'location1':'LOCATION', 'location2':'San Francisco, CA'},
        'ticket' : 'BUY TICKET'
    },    
    {
        'date' : {'date1':'DATE', 'date2':'Fri Jul 22 2019'},
        'venue' : {'venue1':'VENUE', 'venue2':'View Loungue'},
        'location' : {'location1':'LOCATION', 'location2':'San Francisco, CA'},
        'ticket' : 'BUY TICKET'
    },
    {
        'date' : {'date1':'DATE', 'date2':'Sat Aug 12 2019'},
        'venue' : {'venue1':'VENUE', 'venue2':'Hyatt Agency'},
        'location' : {'location1':'LOCATION', 'location2':'San Francisco, CA'},
        'ticket' : 'BUY TICKET'
    },
    {
        'date' : {'date1':'DATE', 'date2':'Fri Sep 05 2019'},
        'venue' : {'venue1':'VENUE', 'venue2':'Moscow Center'},
        'location' : {'location1':'LOCATION', 'location2':'San Francisco, CA'},
        'ticket' : 'BUY TICKET'
    },
    {
        'date' : {'date1':'DATE', 'date2':'Wed Aug 11 2019'},
        'venue' : {'venue1':'VENUE', 'venue2':'Pres Club'},
        'location' : {'location1':'LOCATION', 'location2':'San Francisco, CA'},
        'ticket' : 'BUY TICKET'
    }
];


for (var i = 0; i < showSection.length; i++) {

    let showTable = document.createElement('div'); //container <- table
    showTable.classList.add('show__table');
    showContainer.appendChild(showTable);

    let showBody = document.createElement('div'); // table <- body
    showBody.classList.add('show__body');
    showTable.appendChild(showBody);


    // Date
    let showDateH = document.createElement('div');
    showDateH.classList.add('show__header');
    showBody.appendChild(showDateH);

    let showDate = document.createElement('div');
    showDate.classList.add('show__date');
    showBody.appendChild(showDate);


    // Venue
    let showVenueH = document.createElement('div');
    showVenueH.classList.add('show__header');
    showBody.appendChild(showVenueH);

    let showVenue = document.createElement('div');
    showVenue.classList.add('show__venue');
    showBody.appendChild(showVenue);


    // Location
    let showLocationH = document.createElement('div');
    showLocationH.classList.add('show__header');
    showBody.appendChild(showLocationH);

    let showLocation = document.createElement('div');
    showLocation.classList.add('show__location');
    showBody.appendChild(showLocation);


    // "Buy Ticket" Button
    let showTicketBtn = document.createElement('button');
    showTicketBtn.classList.add('show__btn', 'btn');
    showBody.appendChild(showTicketBtn);


    showDateH.innerText = showSection[i].date.date1;
    showDate.innerText = showSection[i].date.date2;
    showVenueH.innerText = showSection[i].venue.venue1;
    showVenue.innerText = showSection[i].venue.venue2;
    showLocationH.innerText = showSection[i].location.location1;
    showLocation.innerText = showSection[i].location.location2;
    showTicketBtn.innerText = showSection[i].ticket;
}
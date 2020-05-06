
// API REQUST & RESPONSE

const apiURL = 'https://project-1-api.herokuapp.com'

const prom = axios.get(apiURL + '?api_key=6e9b5bbb-b8c9-4903-aa19-aa79db9e2caf')


// querySelectors

let nameInput = document.querySelector('.join-input__name');
let commentInput = document.querySelector('.join-input__comment');
let formSubmit = document.querySelector('.join-input--right');

let innerContainer = document.querySelector('.join-container--inner');


// TimeStamp
function updateTime() {
    const date = new Date();

    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    const time = (month+1) + '/' + day + '/' + year;
    return time;
};


// Array for default comments
commentSection = [
    {
        'name': 'Theodore Duncan',
        'date': '11/15/2018',
        'comment': 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He\'s definitely my favorite ever!'
    },
    {
        'name': 'Gary Wong',
        'date': '12/12/2018',
        'comment': 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He\'s so talented! I wish I can ride like him one dayt so I can really enjoy myself!'
    },
    {
        'name': 'Micheal Lyons',
        'date': '12/18/2018',
        'comment': 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'
    }
];


// displayComment function
function displayComment () {
    
    for (var i = 0; i < commentSection.length; i++) {        

        // Create Elements
        let commentBox = document.createElement('div'); 
        commentBox.classList.add('join-container__box');

        let commentBoxLeft = document.createElement('div');
        commentBoxLeft.classList.add('join-container--left');
        commentBox.appendChild(commentBoxLeft);

        let commentBoxRight = document.createElement('div');
        commentBoxRight.classList.add('join-container--right');
        commentBox.appendChild(commentBoxRight);

        let commentBoxInfo = document.createElement('div');
        commentBoxInfo.classList.add('join-container__info');
        commentBoxRight.appendChild(commentBoxInfo);

        // Name
        let newName = document.createElement('p');
        newName.classList.add('join-container__name');
        commentBoxInfo.appendChild(newName);
        
        // Time
        let newTime = document.createElement('p');
        newTime.classList.add('join-container__time');            
        commentBoxInfo.appendChild(newTime);          

        // Comment
        let newComment = document.createElement('div');
        newComment.classList.add('join-container__comment');
        commentBoxRight.appendChild(newComment);

        innerContainer.prepend(commentBox);

        newName.innerText = commentSection[i].name;
        newTime.innerText = commentSection[i].date;
        newComment.innerText = commentSection[i].comment;    
    }

    // empty the array
    function empty() {
        commentSection.length = 0;
    }
    empty();
}
displayComment();


// displayComment eventlistener
formSubmit.addEventListener('submit', event => {
    event.preventDefault();

    // push array

    commentSection.push({
        'name' : nameInput.value,
        'date' : updateTime(),
        'comment' : commentInput.value
    })

    if (!nameInput.value) {
        
        alert ('Please type your name');
        
    } else {

        displayComment ();
    
    }
    formSubmit.reset();
});



// Change label for NAME INPUT @MEDIA QUERY

const x = window.matchMedia("(min-width: 768px)");

function changeLabel(x) {

    if (x.matches) {
        document.querySelector('.join-input__text').innerText = 'NAME';
    } else {
        document.querySelector('.join-input__text').innerText = 'JOIN THE CONVERSATION';
    }   
}

changeLabel(x);
x.addListener(changeLabel);
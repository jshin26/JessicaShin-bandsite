
// Array for default comments
// commentSection = [
//     {
//         'name': 'Theodore Duncan',
//         'date': '11/15/2018',
//         'comment': 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He\'s definitely my favorite ever!'
//     },
//     {
//         'name': 'Gary Wong',
//         'date': '12/12/2018',
//         'comment': 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He\'s so talented! I wish I can ride like him one dayt so I can really enjoy myself!'
//     },
//     {
//         'name': 'Micheal Lyons',
//         'date': '12/18/2018',
//         'comment': 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'
//     }
// ];


// querySelectors

let form = document.querySelector('.join-input')
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


// displayComment function
function displayComment (comment) {

    // Create Elements
    let commentBox = document.createElement('div'); 
    let commentBoxLeft = document.createElement('div');
    let commentBoxRight = document.createElement('div');
    let commentBoxInfo = document.createElement('div');
   
    let newName = document.createElement('p');          //NAME    
    let newTime = document.createElement('p');          //TIME    
    let newComment = document.createElement('div');     //COMMENT

    //Adding class names
    commentBox.classList.add('join-container__box');
    commentBoxLeft.classList.add('join-container--left');
    commentBoxRight.classList.add('join-container--right');
    commentBoxInfo.classList.add('join-container__info');
    newName.classList.add('join-container__name');
    newTime.classList.add('join-container__time');    
    newComment.classList.add('join-container__comment');


    //appendChild in parent
    commentBox.appendChild(commentBoxLeft); 
    commentBox.appendChild(commentBoxRight);
    commentBoxRight.appendChild(commentBoxInfo);
    commentBoxInfo.appendChild(newName);         
    commentBoxInfo.appendChild(newTime);   
    commentBoxRight.appendChild(newComment);

    // let deleteBtn = document.createElement('button');
    // deleteBtn.classList.add('join-container__delete', 'btn');
    // deleteBtn.innerText = 'DELETE'
    // commentBoxInfo.appendChild(deleteBtn)


    innerContainer.prepend(commentBox);


    newName.innerText = comment.name;
    newTime.innerText = comment.date;
    newComment.innerText = comment.comment;    

}


// FUNCTION for API REQUST & RESPONSE

const apiKey = 'ba3cfeed-1363-40a2-a6f5-d1bb19b29c3f';
const apiURL = 'https://project-1-api.herokuapp.com';

const url = apiURL + '/comments?api_key=' + apiKey;

getfromAPI = () => {
    
    axios.get(url)
    .then (commentData =>{
        commentData.data.forEach(result => {
            displayComment(result)
        })
    })
    .catch(error => {
        console.log(error)
    })
}
getfromAPI();


// displayComment eventlistener
formSubmit.addEventListener('submit', event => {
    event.preventDefault();

    if (!event.target.name.value) {
        
        alert ('Please type your name');
        
    } else {

        return axios.post(url, {
            'name' : event.target.name.value,
            // 'date' : updateTime(),
            'comment' : event.target.comment.value
        })

        .then(() => {
            
            getfromAPI()

            innerContainer.innerHTML = '';

            formSubmit.reset();
        });

    }
    
});


// let clickDelete = document.querySelector('.join-container__delete');

// clickDelete.addEventListener('click', event => {
//     event.preventDefault();

//     return axios.delete(url)
//     .then ((res) => {
//         console.log(res)
//     })
// })  


// Change label for NAME INPUT @MEDIAQUERY

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
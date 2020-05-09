
// querySelectors

let form = document.querySelector('.join-input')
let nameInput = document.querySelector('.join-input__name');
let commentInput = document.querySelector('.join-input__comment');
let formSubmit = document.querySelector('.join-input--right');

let innerContainer = document.querySelector('.join-container--inner');


// TimeStamp
function updateTime(unix) {
    const getDate = new Date(unix);

    const year = getDate.getUTCFullYear();
    const month = getDate.getUTCMonth();
    const day = getDate.getUTCDate();

    const time = (month+1) + '/' + day + '/' + year;
    return time;
};


// FUNCTION for API REQUST & RESPONSE

const apiKey = 'ba3cfeed-1363-40a2-a6f5-d1bb19b29c3g';
const apiURL = 'https://project-1-api.herokuapp.com';

const url = apiURL + '/comments?api_key=' + apiKey;

getfromAPI = () => {
    
    axios.get(url)
    .then (commentData =>{
        console.log(commentData);
        commentData.data.forEach(result => {
            displayComment(result)
        })
    })
    .catch(error => {
        console.log(error)
    })
}
getfromAPI();


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

    innerContainer.prepend(commentBox);


    newName.innerText = comment.name;
    newTime.innerText = updateTime(comment.timestamp);
    newComment.innerText = comment.comment;  


    //Like Button
    let likeBtn = document.createElement('button');
    likeBtn.classList.add('join-container__like', 'btn');
    likeBtn.innerText = `likes ${comment.likes}`;
    commentBoxInfo.appendChild(likeBtn);

    likeBtn.addEventListener('click', event => {
        event.preventDefault();
   
        likeBtn.innerText++
      
    })

    
    //Delete Button
    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('join-container__delete', 'btn');
    deleteBtn.innerText = 'DELETE'
    commentBoxInfo.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', event => {
        event.preventDefault();

        axios.delete(url)
        .then ((res) => {
            res.data
        })
    })
}


// displayComment eventlistener
formSubmit.addEventListener('submit', event => {
    event.preventDefault();

    if (!event.target.name.value) {
        
        alert ('Please type your name');
        
    } else {
        return axios.post(url, {
            'name' : event.target.name.value,
            'date' : updateTime(timestamp.value),
            'comment' : event.target.comment.value
        })
        .then(() => {

            getfromAPI();

            innerContainer.innerHTML = '';

            formSubmit.reset();
        });
    }    
});


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
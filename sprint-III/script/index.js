
// querySelectors

let form = document.querySelector('.join-input')
let nameInput = document.querySelector('.join-input__name');
let commentInput = document.querySelector('.join-input__comment');
let formSubmit = document.querySelector('.join-input--right');

let innerContainer = document.querySelector('.join-container--inner');


// TimeStamp (unix timestamp => date => 'human readable format')
function updateTime(unix) {
    const getDate = new Date(unix);

    const year = getDate.getFullYear();
    const month = getDate.getMonth();
    const day = getDate.getDate();


    let calSeconds = Math.floor((new Date() - getDate) / 1000);
    let timeAgo = Math.floor(calSeconds / 2592000);
    if (timeAgo > 1) {
    return (month+1) + '/' + day + '/' + year;
    }
    timeAgo = Math.floor(calSeconds / 86400);
    if (timeAgo > 1) {
      return timeAgo + " days ago";
    }
    timeAgo = Math.floor(calSeconds / 3600);
    if (timeAgo > 1) {
      return timeAgo + " hours ago";
    }
    timeAgo = Math.floor(calSeconds / 60);
    if (timeAgo > 1) {
      return timeAgo + " minutes ago";
    }
    return Math.floor(calSeconds) + " seconds ago";

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
    let btnParent = document.createElement('div');
    btnParent.classList.add('join-container__btn-parent');
    commentBoxRight.appendChild(btnParent)

    let likeBtn = document.createElement('button');
    likeBtn.classList.add('join-container__btn', 'btn');
    likeBtn.innerText = 0;
    btnParent.appendChild(likeBtn);

    likeBtn.addEventListener('click', event => {
        event.preventDefault();
   
        likeBtn.innerText ++
        // axios.post(url).then(res => {res.data.likes++})
        
        /* I really wanted to use /id to increase the likes, but could not figure out.
        My code will only increase the number, but will not be saved :( */

    })

    //Delete Button
    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('join-container__btn', 'btn');
    deleteBtn.innerText = 'DELETE'
    btnParent.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', event => {
        event.preventDefault();

        axios.delete(url, { data: event.target.data.id })
        .then (res => {
            res.data.id
        }
            
        )
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
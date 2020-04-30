
// Join the Conversation

let nameInput = document.querySelector('.join-input__name');
let commentInput = document.querySelector('.join-input__comment');
let btnSubmit = document.querySelector('.join-input__submit');

let joinContainer = document.querySelector('.join-container--inner');


// TimeStamp
function generateTime() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const wDate = date.getDate();

    const time = (month+1) + '/' + wDate + '/' + year;
    return time;
};


// eventlistener
btnSubmit.addEventListener('click', event => {
    event.preventDefault();
    

    // Create Box
    let commentBox = document.createElement('div'); 
    commentBox.classList.add('join-container__box');
    
    let commentBoxLeft = document.createElement('div');
    commentBoxLeft.classList.add('join-container--left');
    commentBox.appendChild(commentBoxLeft);

    let commentBoxRight = document.createElement('div');
    commentBoxRight.classList.add('join-container--right');
    commentBox.appendChild(commentBoxRight);


    // Name
    let newName = document.createElement('p');
    newName.classList.add('join-container__name');

    commentBoxRight.appendChild(newName);
    newName.innerText = nameInput.value;


    // Time
    let showTime = document.createElement('p');
    showTime.classList.add('join-container__time');
    commentBoxRight.appendChild(showTime);

    showTime.innerText = generateTime();


    // Comment
    let newComment = document.createElement('div');
    newComment.classList.add('join-container__comment');

    commentBoxRight.appendChild(newComment);
    newComment.innerText = commentInput.value;

    joinContainer.appendChild(commentBox);

});


// DEFAULT COMMENTS


joinContainer.onload = function() {

    defaultComments = [
        comm1 = {
            name: 'Micheal Lyons',
            date: '12/18/2018',
            comment: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'
        },
        comm2 = {
            name: 'Gary Wong',
            date: '12/12/2018',
            comment: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He\'s so talented! I wish I can ride like him one dayt so I can really enjoy myself!'
        },
        comm3 = {
            name: 'Theodore Duncan',
            date: '11/15/2018',
            comment: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He\'s definitely my favorite ever!'
        }
    ];

}



//버튼만들기+입력값 전달 

// function pressBtn(){ 
//     const currentVal = inputBar.value; 
    
//     if(!currentVal.length){ 
//         alert("댓글을 입력해주세요!!"); 
//     }else{ 
//         showComment(currentVal); 
//         mainCommentCount.innerHTML++; 
//         inputBar.value =''; 
//     } 
// }

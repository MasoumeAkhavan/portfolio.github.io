// on scroll sticky header

document.addEventListener('scroll', function() {
    if (window.scrollY > 80){
        document.getElementById('header').classList.add('sticky-header');
    }else {
        document.getElementById('header').classList.remove('sticky-header');

    }
})


// reviews slider

const reviews = [
    {
        id:1,
        name:"Elizabeth Bennet",
        job:"Web Designer",
        img:"./assets/person1.jpg",
        text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam nostrum voluptates in enim vel amet? Lorem ipsum dolor sit amet.",
    },
    {
        id:2,
        name:"Anna Karenina",
        job:"Frontend Developer",
        img:"./assets/person2.jpg",
        text:"Lorem ipsum dolor sit amet,Magnam nostrum voluptates in enim vel amet? Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
        id:3,
        name:"hua mulan",
        job:"Ui Designer",
        img:"./assets/person3.jpg",
        text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam nostrum voluptates in enim vel amet.",
    }
]

const userImage = document.getElementById('customer-img');
const userName = document.getElementById('customer-name');
const userJob = document.getElementById('customer-job');
const userReview = document.getElementById('customer-review');
let currentUser = 0;

function setSlideData(user) {
    userImage.src = user.img;
    userName.textContent = user.name;
    userJob.textContent = user.job;
    userReview.textContent = user.text;
}

document.addEventListener('DOMContentLoaded', function () {
    const userOne = reviews[0];
    setSlideData(userOne);
})


document.getElementById('next-btn').addEventListener('click', function () {
    if (currentUser >= 0 && currentUser < reviews.length - 1) {
        currentUser++;
        setSlideData(reviews[currentUser]);
    }else if (currentUser >= reviews.length - 1) {
        currentUser = 0;
        setSlideData(reviews[currentUser]);
    }
})

document.getElementById('back-btn').addEventListener('click', function () {
    if (currentUser > 0) {
        currentUser--;
        setSlideData(reviews[currentUser]);
    }else {
        currentUser = reviews.length - 1;
        setSlideData(reviews[currentUser]);
    }
})

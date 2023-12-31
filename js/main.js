const posts = [
  {
    id: 1,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/300?image=171",
    author: {
      name: "Phil Mangione",
      image: "https://unsplash.it/300/300?image=15",
    },
    likes: 80,
    created: "2021-06-25",
  },
  {
    id: 2,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=112",
    author: {
      name: "Sofia Perlari",
      image: "https://unsplash.it/300/300?image=10",
    },
    likes: 120,
    created: "2021-09-03",
  },
  {
    id: 3,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=234",
    author: {
      name: "Chiara Passaro",
      image: "https://unsplash.it/300/300?image=20",
    },
    likes: 78,
    created: "2021-05-15",
  },
  {
    id: 4,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=24",
    author: {
      name: "Luca Formicola",
      /* "image": null*/
    },
    likes: 56,
    created: "2021-04-03",
  },
  {
    id: 5,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=534",
    author: {
      name: "Alessandro Sainato",
      image: "https://unsplash.it/300/300?image=29",
    },
    likes: 95,
    created: "2021-03-05",
  },
];

const divContainer = document.querySelector("div.posts-list");

posts.forEach((element) => {
  divContainer.innerHTML += generatePost(
    element.author.image,
    element.author.name,
    element.created,
    element.content,
    element.media,
    element.likes,
    element.id
  );
});

const buttonLike = document.querySelectorAll("a.like-button.js-like-button");
const counterLike = document.querySelectorAll("strong.js-likes-counter");

for (let i = 0; i<buttonLike.length; i++){

  const buttonLikeGreen =   buttonLike[i];
  buttonLikeGreen.addEventListener('click', function(event){
      event.preventDefault();

      if(buttonLikeGreen.classList.contains('like-button--liked')){
        buttonLikeGreen.classList.remove('like-button--liked');
   
        counterLike[i].innerHTML = parseInt(counterLike[i].innerHTML,10) - 1;

      }else{
        buttonLikeGreen.classList.add('like-button--liked');
        counterLike[i].innerHTML = parseInt(counterLike[i].innerHTML,10) + 1;
      }
      

     })
}


//Function

function generatePost(
  imgSrc,
  name,
  dateGenerate,
  content,
  media,
  likes,
  index
) {
  return ` 
    <div class="post">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src=${imgSrc} alt="${name}'s image">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${name}</div>
                <div class="post-meta__time">${dateGenerate}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">${content}</div>
    <div class="post__image">
        <img src=${media} alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="#" data-postid="${index}">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <strong id="${index}" data-postid="${index}" 
                class="js-likes-counter">${likes}</strong> persone
            </div>
        </div> 
    </div>            
    </div>
    `;
}

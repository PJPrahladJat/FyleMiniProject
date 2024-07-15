const tl = gsap.timeline()
tl.from(".button", {
    y: 100,
    opacity: 0,
    duration: 2
    
})



document.getElementById('image-1').addEventListener('click', function () {
    document.getElementById('main-image').src = 'https://img.freepik.com/free-photo/fresh-fruits-arrangement-top-view_23-2148949745.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1710892800&semt=ais';
});

document.getElementById('image-2').addEventListener('click', function () {
    document.getElementById('main-image').src = 'https://freerangestock.com/sample/113635/fruits-in-a-bowl.jpg';
});

document.getElementById('image-3').addEventListener('click', function () {
    document.getElementById('main-image').src = 'https://media.istockphoto.com/id/1288975835/photo/red-and-green-apples-in-a-bowl-on-a-wooden-table-with-empty-copy-space.jpg?s=612x612&w=0&k=20&c=yjf6x-wGR5OlTdTxy57l2Pl5XTRHl9Vw53zqdphq7jU=';
}); 



let button = document.querySelector('.button');
let buttonText = document.querySelector('.button p');
let thankText = document.querySelector('.button p:last-child');


let timeLine = new TimelineMax({
    paused: false
    });


    button.addEventListener('click',() =>{
        timeLine
        .to(buttonText, 0.6, {
            opacity:1,
            
            
            
        })
        .to(button, 0.8, {
            height:0.2,
            // opacity:0.5,
            // boxShadow:"0px 0px 35px 7px #cd28fa"
          
        })

        .to(button, 0.1, {
            opacity:0.5,
            
            
        })

        .to(button, 0, {
            width:1,
            delay:0.2,
            
            

        })

       

        .to(button, 0.3, {
            height:50,
            
            width:150,
            opacity:1,
          
           
           
           
        })
    });


    let sliderInner = document.querySelector('.wrapper');
    let dots = document.querySelectorAll('.dots span');
    let images = document.querySelectorAll('.wrapper img');
    let design = document.querySelectorAll('.procon');

    let currentImage = 0;

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            sliderInner.style.transform = `translateX(-${index * 100}%)`;
            currentImage = index;
            updateDots();
        });
    });

    // images.forEach((image, index) => {
    //     image.addEventListener('mouseover', () => {
    //         design[index].style.display = 'block';
    //     });
    //     image.addEventListener('mouseout', () => {
    //         design[index].style.display = 'none';
    //     });
    // });

    function updateDots() {
        dots.forEach((dot, index) => {
            if (index === currentImage) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

   

    
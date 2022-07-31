
window.addEventListener('load', function (e) {
    const score = document.querySelector('.score');
    const forPoints = document.querySelectorAll('.forPoints');
    const formToaAddPoints = document.querySelectorAll('.formToaAddPoints');
   $('.forPoints').click(function (e) { 
        e.preventDefault();
        $(this).siblings().slideToggle();;


        
    });
    // for(let i = 0 ; i<=forPoints.length -1 ; i++){
    //     forPoints[i].addEventListener('click' , ()=>{

    //     })
    // }

});
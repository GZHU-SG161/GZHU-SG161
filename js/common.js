window.addEventListener('load', function(){
    
    var roomNo = document.querySelector('.roomNo');
    var mine = document.querySelector('.mine');
    var nav = document.querySelector('.nav');
    var dorm = nav.querySelector('.dorm');
    var myPro = nav.querySelector('.myPro');

    dorm.addEventListener('mouseenter', function(){
        roomNo.style.display = 'block';
    })
    roomNo.addEventListener('mouseenter', function(){
        roomNo.style.display = 'block';
    })
    dorm.addEventListener('mouseleave', function(){
        roomNo.style.display = 'none';
    })
    roomNo.addEventListener('mouseleave', function(){
        roomNo.style.display = 'none';
    })
    myPro.addEventListener('mouseenter', function(){
        mine.style.display = 'block';
    })
    myPro.addEventListener('mouseleave', function(){
        mine.style.display = 'none';
    })
})

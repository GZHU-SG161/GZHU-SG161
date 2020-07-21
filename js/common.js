window.addEventListener('load', function () {

    var roomNo = document.querySelector('.roomNo');
    var mine = document.querySelector('.mine');
    var nav = document.querySelector('.nav');
    var dorm = nav.querySelector('.dorm');
    var myPro = nav.querySelector('.myPro');
    var login = nav.querySelector('.login');

    dorm.addEventListener('mouseenter', function () {
        // roomNo.style.display = 'block';
        animate_vertical(roomNo, 60);
    })
    roomNo.addEventListener('mouseenter', function () {
        animate_vertical(roomNo, 60);
        // roomNo.style.display = 'block';
    })
    dorm.addEventListener('mouseleave', function () {
        animate_vertical(roomNo, -300);
        // roomNo.style.display = 'none';
    })
    roomNo.addEventListener('mouseleave', function () {
        animate_vertical(roomNo, -300);
        // roomNo.style.display = 'none';
    })


    myPro.addEventListener('mouseenter', function () {
        // mine.style.display = 'block';
        animate_vertical(mine, 60);
    })
    mine.addEventListener('mouseenter', function () {
        // mine.style.display = 'block';
        animate_vertical(mine, 60);
    })
    myPro.addEventListener('mouseleave', function () {
        animate_vertical(mine, -100);
        // mine.style.display = 'none';
    })
    mine.addEventListener('mouseleave', function () {
        animate_vertical(mine, -100);
        // mine.style.display = 'none';

    })

    // // 下拉动画
    // dorm.addEventListener('mouseenter', function(){
    //    
    // })
    // roomNo.addEventListener('mouseenter', function(){
    //     animate_vertical(roomNo, 60);
    // })
    // dorm.addEventListener('mouseleave', function(){
    //     animate_vertical(roomNo, -270);
    // })
    // roomNo.addEventListener('mouseleave', function(){
    //     animate_vertical(roomNo, -270);
    // })

    login.addEventListener('click', function(){
        alert('此功能尚未开通，日期未定');
    })
})
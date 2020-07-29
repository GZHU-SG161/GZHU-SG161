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

    login.addEventListener('click', function () {
        alert('此功能尚未开通，日期未定');
    })

    // 侧边导航栏弹出效果
    var showBtn = document.querySelector('.showBtn');
    var out_sideNav = document.querySelector('#out_sideNav');
    var in_sideNav = document.querySelector('.in_sideNav');
    
    out_sideNav.addEventListener('mouseenter', function () {
        animate_horizontal(out_sideNav, document.body.clientWidth - 70);
        animate_horizontal(in_sideNav, document.body.clientWidth - 70);
        showBtn.innerHTML = '嘻嘻<br>~<br>咕噜<br>咕噜';
    })

    out_sideNav.addEventListener('mouseleave', function () {
        animate_horizontal(out_sideNav, document.body.clientWidth);
        animate_horizontal(in_sideNav, document.body.clientWidth);
        showBtn.innerHTML = '摸<br>摸<br>我<br>ฅ\'ω\'ฅ';
    })

    window.addEventListener('resize', function () {
        out_sideNav.style.left = document.body.clientWidth + 'px';
        in_sideNav.style.left = document.body.clientWidth + 'px';
        // animate_horizontal(out_sideNav, document.body.clientWidth);
        // animate_horizontal(in_sideNav, document.body.clientWidth);
    })

    //对侧边导航栏进行链接配置
    var list = in_sideNav.getElementsByTagName('li');
    //配置暗号
    list[0].addEventListener('click', function(){
        var code = prompt('请输入暗号：');
        if (code == '黄宇晴') {
            window.location.href = './bilibili/bilibili.html';
            alert('暗号匹配，恭喜你发现了秘密空间~');
        } else {
            alert('暗号错误，请浏览你能看到的页面吧~')
        }
    })
})
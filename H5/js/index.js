window.addEventListener('load', function () {
    var arrow_L = document.querySelector('.arrow_L');
    var arrow_R = document.querySelector('.arrow_R');
    var showPic = document.querySelector('.showPic');
    // 鼠标经过，箭头显示
    showPic.addEventListener('mouseenter', function () {
        arrow_L.style.display = 'block';
        arrow_R.style.display = 'block';
        //鼠标经过,停止定时器
        clearInterval(timer);
        //清除定时器
        timer = null;
    })
    showPic.addEventListener('mouseleave', function () {
        arrow_L.style.display = 'none';
        arrow_R.style.display = 'none';
        //鼠标离开重置定时器
        timer = setInterval(function () {
            arrow_R.click();
        }, 2000);
    })
    // 动态生成圆圈
    var ul = showPic.querySelector('ul');
    var ol = showPic.querySelector('.circle');
    // console.log(ul.children.length);
    //获取图片宽度
    var showPicWidth = showPic.offsetWidth;
    //循环生成圆圈
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        //记录生成的圆圈的索引号,通过自定义属性实现
        li.setAttribute('index', i);
        ol.appendChild(li);
        //生成的同时绑定点击事件,排他思想
        li.addEventListener('click', function () {
            //清除所有li的类名
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            //赋类名给被点击的圆圈
            this.className = 'current';
            //点击圆圈移动ul,使图片滚动
            var index = this.getAttribute('index');
            num = index;
            circle = index;

            console.log(showPicWidth);
            animate_horizontal(ul, - index * showPicWidth);
        })

    }
    // 将圆圈居中对齐
    var width = 20 * ul.children.length;
    ol.style.width = width + 'px';
    ol.style.marginLeft = - width / 2 + 'px';
    // 赋类名给第一个圆圈
    ol.children[0].className = 'current';
    //克隆第一张图片放到ul最后面
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);

    //控制图片播放
    var num = 0;
    //控制圆圈的播放
    var circle = 0;
    //节流阀变量
    var flag = true;
    //点击右侧按钮,图片滚动一张
    arrow_R.addEventListener('click', function () {
        if (flag) {
            //关闭水龙头
            flag = false;
            //如果走到最后复制的一张,ul快速复原left为0
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate_horizontal(ul, - num * showPicWidth, function () {
                // 在动画的回调函数中打开水龙头
                flag = true;
            });


            circle++;
            //如果circle=最后一张,说明走到最后一张复制的图片
            if (circle == ol.children.length) {
                circle = 0;
            }
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            ol.children[circle].className = 'current';
        }
    })
    //左侧按钮
    arrow_L.addEventListener('click', function () {
        if (flag) {
            flag = false;
            //如果走到最后复制的一张,ul快速复原left为0
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = - num * showPicWidth + 'px';

            }
            num--;
            animate_horizontal(ul, - num * showPicWidth, function () {
                flag = true;
            });


            circle--;
            //如果circle=最后一张,说明走到最后一张复制的图片
            if (circle < 0) {
                circle = ol.children.length - 1;
            }
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            ol.children[circle].className = 'current';
        }
    })

    //自动播放
    var timer = setInterval(function () {
        arrow_R.click();
    }, 2000);

    //控制风景导航栏
    var scenNav = document.querySelector('.scenNav');
    var scenBtn = scenNav.querySelectorAll('a');
    var scen = document.querySelectorAll('.scen');
    

    for (var i=0;i<scenBtn.length;i++){
        scenBtn[i].setAttribute('index',i);
        scenBtn[i].addEventListener('click', function(){
            for (var i=0;i<scenBtn.length;i++){
                scenBtn[i].className='';
            }
            this.className='current';
            var index = this.getAttribute('index');
            
            for(var i=0;i<scen.length;i++){
                scen[i].style.display = 'none';
            }
            scen[index].style.display = 'block';
        })
    }

})
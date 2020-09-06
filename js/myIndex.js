var nav = document.querySelector("#nav")
var navList = nav.querySelectorAll('.top-nav-li')
var flag = 0  //显示或隐藏子元素
//遍历navList给导航添加事件
navList.forEach(function (item, index) {
    item.addEventListener('mouseenter', function () {
        flag = 0
        sliderMove(index)
    })
    item.addEventListener('mouseleave', function () {
        flag = 1
        sliderMove(index)
    })

})

//根据遍历的key,计算移动距离
var sliderMove = function (item) {
    var move = 0
    var width = 0
    switch (item) {
        case 0:
            move = 0;
            width = 70;
            break;
        case 1:
            move = 70;
            width = 120;
            break;
        case 2:
            move = 190;
            width = 120;
            break;
        case 3:
            move = 310;
            width = 120;
            break;
        case 4:
            move = 430;
            width = 120;
            break;
        case 5:
            move = 550;
            width = 70;
            break;
    }
    slow(item, move, width)
}
//开始滑动，并显示隐藏子元素
var slow = function (item, move, width) {
    move += 255
    var navLine = document.querySelector('#navline')
    var navLi = document.querySelector('#nav .top-nav-li:nth-child(' + ++item + ') ul')
    if (navLi != null) {
        navLi.style.display = 'block'
        if (flag === 1) {
            navLi.style.display = 'none'
        }
    }

    navLine.style.left = move + 'px'
    navLine.style.width = width + 'px'
}

//开启定时器
var itemTime = 2 //计数器
var time = 1500 //轮播时间
var timer = setInterval(function () {
    rotation(itemTime) //封装轮播函数
    clickBot(itemTime)
    itemTime++
    if (itemTime > 3) {
        itemTime = 1
    }
}, time)


//鼠标移入清除定时器
var clearTime = document.querySelector(".banner ul img")
clearTime.addEventListener('mouseenter', function () {
    clearInterval(timer)
    timer = null
})

//鼠标移开图片重新播放定时器
var openTime = document.querySelector(".banner ul img")
openTime.addEventListener('mouseleave', function () {
    //开启定时器前关闭清除之前的定时器
    clearInterval(timer)
    timer = null
    timer = setInterval(function () {
        rotation(itemTime)
        clickBot(itemTime)
        itemTime++
        if (itemTime > 3) {
            itemTime = 1
        }
    }, time);
})

//遍历小圆点添加点击事件
var b_dotClick = document.querySelectorAll('.b_dot a')
b_dotClick.forEach(function (item, index) {
    item.addEventListener("click", function () {
        rotation(index + 1)
        clickBot(index + 1)
        itemTime = index + 1
    })
})

//轮播函数
function rotation(item) {
    var bannerImg = document.querySelector('.banner ul li:nth-child(' + item + ')')
    var bannerImgs = document.querySelectorAll('.banner ul li')
    for (var i = 0; i < bannerImgs.length; i++) {
        bannerImgs[i].style.display = "none"
        bannerImgs[i].style.zIndex = "0"
    }
    bannerImg.style.display = "block"
    bannerImg.style.zIndex = "1"
}

//小圆点触发函数
function clickBot(item) {
    var b_dot = document.querySelector('.b_dot a:nth-child(' + item + ')')
    var b_dots = document.querySelectorAll('.b_dot a')
    for (var j = 0; j < b_dots.length; j++) {
        b_dots[j].className = ""
    }
    b_dot.className = 'on'
}






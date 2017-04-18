var $list = $("#pic_list>li");
var $dots = $("#dots>li");
var listArr = [].slice.call($list); //list 的dom数组
var len = $list.length;
var index = 0;
var activeIndex = 0;
var key = 0;

prependItem(); //

tId = setInterval(rightMove,3000);

// 按下left(37)和right(39)键触发的事件
$(window).keydown(function (e) {
    switch (e.which){
        case (37):
            clearInterval(tId); // 清除定时器
            leftMove(startMove); //向左滑动
            break;
        case (39):
            clearInterval(tId);
            rightMove(startMove);
            break;
    }

});

// slider鼠标滑过的触发事件
$("#toggle_box").hover(
    function () {
        clearInterval(tId);
    }, // mouseover时清除定时器
    function () {
        tId = setInterval(rightMove,3000);
    }// mouseout
);

function rightMove(callback){
    $('#pic_list').stop(false, true).animate({left:'-=900px'},300,function(){
        appendItem();
        $(this).css('left',-900);
        if(callback){
            callback();
        }
    });

}


function leftMove(callback){
    $('#pic_list').stop(false, true).animate({left:'+=900px'},300,function(){
        prependItem();
        $(this).css('left',-900);
        activeIndex -= 1;
        if(activeIndex < 0){
            activeIndex = len - 1;
        }
        if(callback){
            callback();
        }
    });
}//图片宽度900px

//前插item
function prependItem() {
    index = index - 1; // index 渐小
    activeIndex = index + 1;
    if(index < 0){
        index = len - 1;
    }
    if(activeIndex  == len){
        activeIndex = 0;
    }
    $('#pic_list').prepend(listArr[index]);
    // dots 的焦点变化
    $dots.eq(activeIndex ).removeClass("active");
    $dots.eq(activeIndex - 1).addClass("active");

}
//
function appendItem() {
    $('#pic_list').append(listArr[index]);
    index = (index + 1) % 4;
    activeIndex = index +1 ;
    if(activeIndex == len){
        activeIndex = 0;
    }
    $dots.eq(index).removeClass("active");
    $dots.eq(activeIndex).addClass("active");
}

function startMove() {
    clearInterval(tId);
    tId = setInterval(rightMove,3000);
}


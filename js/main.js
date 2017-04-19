var $list = $("#pic_list>li");
var listArr = [].slice.call($list); //list 的dom数组
var $picList = $('#pic_list');
var len = $list.length;
var index = 0;
var activeIndex = 0; //dots的默认焦点

prependItem(); //
tId = setInterval(rightMove,3000);

// 按下left(37)和right(39)键触发的事件
$(window).keydown(function (e) {
    switch (e.which){
        case (37): //key left
            clearInterval(tId); // 清除定时器
            leftMove(startMove); //向左滑动
            break;
        case (39): //key right
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
        startMove();
    }// mouseout
);

function rightMove(callback){
    $picList.stop(false, true).animate({left:'-=900px'},300,function(){
        appendItem();
        $(this).css('left',-900);
        if(callback){
            callback();
        }
    });

}


function leftMove(callback){
    $picList.stop(false, true).animate({left:'+=900px'},300,function(){
        prependItem();
        $(this).css('left',-900);
        if(callback){
            callback();
        }
    });
}//图片宽度900px

//前插item
function prependItem() {
    index = index - 1; // index 渐小
    if(index < 0){
        index = len - 1;
    }
    $picList.prepend(listArr[index]);

    //dots 的焦点变化
    activeUpdate();

}
//
function appendItem() {
    $picList.append(listArr[index]);
    index = (index + 1) % 4;

    activeUpdate();
}

function startMove() {
    clearInterval(tId);
    tId = setInterval(rightMove,3000);
}

//dots焦点更新
function activeUpdate() {
    activeIndex = index +1 ;
    if(activeIndex == len){
        activeIndex = 0;
    }
    $dots.removeClass("active");
    $dots.eq(activeIndex).addClass("active");
}


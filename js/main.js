var $list = $("#pic_list>li");
var $dots = $("#dots>li");
var listArr = [].slice.call($list);
var len = $list.length;
var index = 0;
var activeIndex = 0;
var preActive = 3;
prependItem();

tId = setInterval(rightMove,3000);
// var tId = setInterval(leftMove,3000);

$(window).keydown(function (e) {
    switch (e.which){
        case (37):
            clearInterval(tId);
            leftMove();
            tId = setInterval(rightMove,3000);
            break;
        case (39):
            clearInterval(tId);
            rightMove();
            tId = setInterval(rightMove,3000);
            break;
    }



    
});
$("#toggle_box").hover(
    function () {
        clearInterval(tId);
    },
    function () {
        tId = setInterval(rightMove,3000);
    }
);

function rightMove(){
    $('#pic_list').animate({left:'-=900px'},300,function(){
        appendItem();
        $(this).css('left',-900);
    });
}


function leftMove(){
    $('#pic_list').animate({left:'+=900px'},300,function(){
        prependItem();
        $(this).css('left',-900);
        activeIndex -= 1;
        if(activeIndex < 0){
            activeIndex = len - 1;
        }

    });
}//图片宽度900px

function prependItem() {
    index = index - 1;
    activeIndex = index + 1;
    if(index < 0){
        index = len - 1;
    }
    if(activeIndex == len){
        activeIndex = 0;
    }
    $('#pic_list').prepend(listArr[index]);
    $dots.eq(activeIndex).removeClass("active");
    $dots.eq(activeIndex - 1).addClass("active");



}

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


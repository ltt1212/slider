var sliderWidth = 900;


var $sliderObj = $(".slider-contents");
var $sliderLists =$(".slider-list");



sliderAuto();
function sliderAuto() {
    for (var i = 0 ; i <$sliderLists.length; i++){
        (function(index){
            setTimeout(function(){
                $sliderObj.css({
                  transform : 'translateX(-' + index*sliderWidth +'px)',
                  transition: 'transform 0.5s ease-in'
                });
            },2000 * index);
            if(index == 3){
                $sliderLists[0].insertAfter($sliderLists[3])
                setTimeout(sliderAuto,2000*(index+1));
            }

        })(i);

    }
}
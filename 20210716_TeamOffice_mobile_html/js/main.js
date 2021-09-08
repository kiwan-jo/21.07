$(document).ready(function(){
    $('.cont_02_title > a').on('click',function(){
       $('.cont_02_title').removeClass('on');
       $(this).parent('li').addClass('on');
       $('.cont_02_title > ul').hide();
       $(this).next().show(); 
    })
})
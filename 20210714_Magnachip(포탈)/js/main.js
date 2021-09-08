$(document).ready(function(){
    // a링크 새로고침 X
    $('a').on('click',function(e){
        e.preventDefault();
    })

    $('.user_interface > li >a').on('click',function(){
        $(this).next().slideToggle(300);
    })


    // task_link
    $('.task_link > ul > li > a').on('click',function(){
        if($(this).hasClass('on')){
            $(this).next().slideUp(500);
            $('.task_link > ul > li > a').removeClass('on');
        } else{
            $('.task_link > ul > li > a').removeClass('on');
            $(this).addClass('on');
            $('.task_link > ul > li > ul').slideUp(500);
            $(this).next().slideDown(500);
        }
    })


    // employee_search
    $('.employee_down').on('click',function(){
        if($(this).hasClass('on')){
            $('.result_list').animate({
                height:'0px'
            },500,function(){
                $('.employee_down').removeClass('on');
                $('.result_list').css('display','none')
            })
        } else{
            $('.result_list').css('display','block')
            $('.result_list').animate({
                height:'170px'
            },500,function(){
                $('.employee_down').addClass('on');
            })
        }
    })

    
    // banner
    var num=0;
    var sid;
    function auto(){
        num ++;
        if(num>2) num=0;
        $('.banner_box').animate({
            left:'-100%'
        },500,function(){
            $('.banner_box').append($('.banner_list:first'));
            $('.banner_box').css('left','0')
        })
    }

    sid=setInterval(auto,2000)

})

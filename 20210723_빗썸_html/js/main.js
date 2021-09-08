$(document).ready(function(){
    // var DDD = $('.survey_graph dl dd').width()

    // var XXX = $('.survey_graph dl dd .per_txt').width();

    var Y_01 = $('.sur_DL1 dd .per_txt .per_g').text();
    var Y_02 = $('.sur_DL2 dd .per_txt .per_g').text();
    var Y_03 = $('.sur_DL3 dd .per_txt .per_g').text();
    var Y_04 = $('.sur_DL4 dd .per_txt .per_g').text();

    $('.sur_DL1 .per').css('width',Y_01+'%')
    $('.sur_DL2 .per').css('width',Y_02+'%')
    $('.sur_DL3 .per').css('width',Y_03+'%')
    $('.sur_DL4 .per').css('width',Y_04+'%')
})
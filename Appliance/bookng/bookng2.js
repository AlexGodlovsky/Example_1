var liveChat = document.getElementsByClassName('liveChatCont');

$( document ).ready(function() {
    if(document.body.clientWidth>767){
        $(liveChat).css('position', 'fixed');
        $(liveChat).css('bottom', '0px');
        $(liveChat).css('right', '15px');
    }

    drawCanvas();
    addBrands();

    allDropButtonItems = document.getElementsByClassName('clickItem');

    hiddenAllChildren();

    allInputsInPage = document.getElementsByClassName('inputSelector');
    getQuoteBEhavior();

    weekSelectorBehavior();

    setTimeout(function(){
        todayBehavior();
        changeProgressText();
        fixingHeader();
        daysBehavior();
        radioCountBehavior();
    }, 10);

    getUrlParams();

    });


function getUrlParams (){

    function parseParams (urlString, showAppl, showBrand, showNum) {

        var items = urlString.split(/&/);

        var i;
        var length = items.length;
        for(i=0; i< length; i++){
            var tempItem = items[i].split(/=/);

            if(tempItem[0] == 'appl'){
                showAppl.text(tempItem[1].replace(/_/g, ' '))
            }

            if(tempItem[0] == 'brand'){
                showBrand.text(tempItem[1].replace(/_/g, ' '))
            }

            if(tempItem[0] == 'num'){
                showNum.val(tempItem[1].replace(/_/g, ' '));

                if(tempItem[1]){
                    getQuoteFontSize();
                }
            }
        }

    }

    if(window.location.search){

        var urlVar = window.location.search.replace(/\?/g, '');
        var showAppliance = $('.showAppliance');
        var showBrand = $('.showBrand');
        var showNum = $('#inputItem');

        parseParams(urlVar, showAppliance, showBrand, showNum);


    }
}

var allDropButtonItems;

$(function(){
    $(allDropButtonItems).click(function(event){
        var pToShowChoise = event.target.parentElement.parentElement.parentElement.getElementsByTagName('button')[0].getElementsByTagName('p')[0];
        $(pToShowChoise).text($(event.target).text());

        var showAppliance = document.getElementsByClassName('showAppliance');
        var showBrand = document.getElementsByClassName('showBrand');
        var parentInput = document.getElementsByClassName('postcodeQuote');
        var caretCanvas = document.getElementsByClassName('caretCanvas');
        var input = $(parentInput).children(0);

        if((document.body.clientWidth < 1253) && (document.body.clientWidth > 1100)){

            if($(event.target).text() == 'Antony Worrall Thompson' ||
                $('.showBrand').text() == 'Antony Worrall Thompson'){
                $(showBrand).css('font-size', '1.18vw');
                $(showAppliance).css('font-size', '1.18vw');
                $(input).addClass('classPlOne');

                console.log(1);
            }else{
                $(showBrand).css('font-size', '16px');
                $(showAppliance).css('font-size', '16px');
                $(input).removeClass('classPlOne');
            }
        }

        if((document.body.clientWidth < 1101) && (document.body.clientWidth > 991)){
            if($(event.target).text() == 'Antony Worrall Thompson' ||
                $('.showBrand').text() == 'Antony Worrall Thompson'){
                $(showBrand).css('font-size', '1.1vw');
                $(showAppliance).css('font-size', '1.1vw');
                $(input).addClass('classPlTwo');
                $(caretCanvas).addClass('caretCanvasTwo');

                console.log(2);
            }else{
                $(showBrand).css('font-size', '16px');
                $(showAppliance).css('font-size', '16px');
                $(input).removeClass('classPlTwo');
                $(input).removeClass('classPlThree');
                $(caretCanvas).removeClass('caretCanvasTwo');
                $(caretCanvas).removeClass('caretCanvasThree');

                if($(event.target).text() == 'Zanussi-Electrolux'){
                    $(showBrand).css('font-size', '1.5vw');
                    $(showAppliance).css('font-size', '1.5vw');
                    $(input).addClass('classPlThree');
                    $(caretCanvas).addClass('caretCanvasThree');
                }
            }
        }

        if((document.body.clientWidth < 992) && (document.body.clientWidth > 860)){
            if($(event.target).text() == 'Antony Worrall Thompson' ||
                $('.showBrand').text() == 'Antony Worrall Thompson'){
                $(showBrand).css('font-size', '1.8vw');
                $(showAppliance).css('font-size', '1.8vw');
                $(input).addClass('classPlTwo');
                $(caretCanvas).addClass('caretCanvasTwo');

            }else{
                $(showBrand).css('font-size', '20px');
                $(showAppliance).css('font-size', '20px');
                $(input).removeClass('classPlTwo');
                $(input).removeClass('classPlThree');
                $(caretCanvas).removeClass('caretCanvasTwo');
                $(caretCanvas).removeClass('caretCanvasThree');

                if($(event.target).text() == 'Zanussi-Electrolux'){
                    $(showBrand).css('font-size', '1.9vw');
                    $(showAppliance).css('font-size', '1.9vw');
                    $(input).addClass('classPlThree');
                    $(caretCanvas).addClass('caretCanvasThree');
                }
            }
        }

        if((document.body.clientWidth < 861) && (document.body.clientWidth > 767)){
            if($(event.target).text() == 'Antony Worrall Thompson' ||
                $('.showBrand').text() == 'Antony Worrall Thompson'){
                $(showBrand).css('font-size', '1.8vw');
                $(showAppliance).css('font-size', '1.8vw');
                $(input).addClass('classPlTwo');
                $(caretCanvas).addClass('caretCanvasTwo');

                console.log(3);
            }else{
                $(showBrand).css('font-size', '17px');
                $(showAppliance).css('font-size', '17px');
                $(input).removeClass('classPlTwo');
                $(input).removeClass('classPlThree');
                $(caretCanvas).removeClass('caretCanvasTwo');
                $(caretCanvas).removeClass('caretCanvasThree');

                if($(event.target).text() == 'Zanussi-Electrolux'){
                    $(showBrand).css('font-size', '1.9vw');
                    $(showAppliance).css('font-size', '1.9vw');
                    $(input).addClass('classPlThree');
                    $(caretCanvas).addClass('caretCanvasThree');
                }
            }
        }
        if((document.body.clientWidth < 768)){
            if($(event.target).text() == 'Antony Worrall Thompson' ||
                $('.showBrand').text() == 'Antony Worrall Thompson'){
                $(showBrand).css('font-size', '16px');
                $('.showApplianceType').css('font-size', '16px');
                $(showAppliance).css('font-size', '16px');
                $(caretCanvas).addClass('caretCanvasTwo');
                $('.postcodeQuote').addClass('classPlFourt');
                $(input).css('font-size', '16px');
            }
            else{
                $(showBrand).css('font-size', '20px');
                $(showAppliance).css('font-size', '20px');
                $('.showApplianceType').css('font-size', '20px');
                $(caretCanvas).removeClass('caretCanvasTwo');
                $('.postcodeQuote').removeClass('classPlFourt');
                $(input).css('font-size', '20px');
            }
        }
    });
});

var drawCanvas = function(){
    var canvases = document.getElementsByClassName('caretCanvas');

    var i;
    for(i=0; i < canvases.length; i++){
        var context = canvases[i].getContext('2d');

        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(16, 0);
        context.lineTo(8, 10);
        context.closePath();
        context.fillStyle = "#d1669e";  /* Color of caret image  */
        context.fill();
    }
};

var addBrands = function(){
    var parent = document.getElementsByClassName('brandsList');
    var brandsString = 'A  Admiral  AEG  AGA  Akura  Antony Worrall Thompson  Ariston  Asko  Atag  B  Bauknecht  Baumatic  Beko  Belling  Bissell  Black & Decker  Bosch  Brandt  Bush  Butler  C  Candy  Cannon  Carlton  Comet  Cookworks  Coolzone  Creda  Crosslee  Currys Essentials  D  Daewoo  Dedietrich  Delonghi  Dirt Devil  Dyson  E  Elba  Electrolux  Eurotech  F  Fagor  Falcon  Fisher&paykel  Flavel  Fridgemaster  Frigidaire  Funai  G  General Electric  Gorenje  H  Haier  Hitachi  Hoover  Hotpoint  Husky  Husqvarna  I  Iceland  Ignis  Indesit  J  John Lewis  K  Karcher  Kelvinator  Kenwood  Kwood Apps  L  LEC  Leisure  LG  Logik  M  Matsui  Maytag  Mercury  Merloni  Mertz  Micromark  Moffat  Mondia  N  Neff  New World  Norfrost  Nova Scotia  Novascotia  O  Ocean  P  Panache  Panasonic  Parkinson Cowan  Philco  Philips  Prestige  Prima  Proline  Q  R  Rangemaster  S  Samsung  Sebo  Servis  Sharp  Siemens  Smeg  Snowcap  Sovereign  Stoves  T  Technolec  Teka  Tricity Bendix  Turbo  U  V  VAX  Vestel  W  Whirlpool  White Knight  X  Y  Z  Zanussi  Zanussi-Electrolux  Empty';
    var brandsArray = brandsString.split('  ');
    var arrSize = brandsArray.length;
    var i;

    for(i = 0; i < arrSize; i++){

        if(brandsArray[i].length !== 1){
            var opt = brandsArray[i].charAt(0);
            $(parent).append('<li class="clickItem"><a onclick="return false" id="'+brandsArray[i]+'" href="#">'+brandsArray[i]+'</a></li>');
        }
    }
};

function getQuoteFontSize (){

    var fontSize = window.getComputedStyle(document.getElementsByClassName('showBrand')[0]).fontSize;

    $('#inputItem').css('font-size', fontSize);

}

var inputFontSize;
var allInputsInPage;

// onfocus() && onblur() all <inputs> in the page
$(function () {
    $(allInputsInPage).focus(function () {

        $(this).data('placeholder', $(this).attr('placeholder')).attr('placeholder', '');

        var fontSize = window.getComputedStyle(document.getElementsByClassName('showBrand')[0]).fontSize;

        switch (event.target.value){
            case '':
                inputFontSize = $(event.target).css('font-size');
                event.target.style.fontSize = fontSize;

                break;
            default :
                event.target.style.fontSize = fontSize;
                break;
        }

    }).blur(function () {
        $(this).attr('placeholder', $(this).data('placeholder'));
        switch (event.target.value) {
            case '':
                event.target.style.fontSize = inputFontSize;
                event.target.style.textTransform = 'none';
                break;
        }
    });
});

//live chat behawior
$(function(){
    if(document.body.clientWidth>767){

        window.onscroll = function() {

            liveChatBehavior();
            bigChatBehavior();
        };
    }
    else{
        $(liveChat).css('position', 'relative');
        $(liveChat).css('right', '0px');
    }
});

//get Qoute behavior
$(function(){
    $(window).resize(function(){
        getQuoteBEhavior();
        liveChatBehavior();
        bigChatBehavior();
        //alingMessagesResponsive();
        daysBehavior();
        weekSelectorBehavior();
        todayBehavior();
        changeProgressText();
        fixingHeader();
        radioCountBehavior();
    });
});

//    Replace progress stages text
function changeProgressText () {

    if (document.body.clientWidth < 768){
        $('.progressQuote').text('1');
        $('.progressAppoint').text('2');
        $('.progressDetail').text('3');
        $('.progressPay').text('4');
    }
    else{
        $('.progressQuote').text('Quote');
        $('.progressAppoint').text('Appointment');
        $('.progressDetail').text('Details');
        $('.progressPay').text('Payment');
    }

}

function fixingHeader () {
    if(document.body.clientWidth < 768){
        $('.header').removeClass('navbar-fixed-top');
        $('.whiteLineCont').removeClass('navbar-fixed-top');
        $('.whiteLineCont').css('display', 'none');
        $('.bookingSection').css('margin-top', 0);
    }
    else{
        $('.header').addClass('navbar-fixed-top');
        $('.whiteLineCont').addClass('navbar-fixed-top');
        $('.whiteLineCont').css('display', 'block');
        $('.bookingSection').css('margin-top', '130px');
    }
}

function changeProgressImage (stage) {
    if(document.body.clientWidth < 768){
        switch (stage){
            case 1:
                $('#xsProgressImage').attr('src','images/xsProgress.png');
                break;
            case 2:
                $('#xsProgressImage').attr('src','images/xsProgress.png');
                break;
            case 3:
                $('#xsProgressImage').attr('src','images/xsProgress1.png');
                break;
            case 4:
                $('#xsProgressImage').attr('src','images/xsProgress2.png');
                break;
            case 5:
                $('#xsProgressImage').attr('src','images/xsProgress3.png');
                break;
            case 6:
                $('#xsProgressImage').attr('src','images/xsProgress3.png');
                break;
        }
    }
    else{
        switch (stage){
            case 1:
                $('#mdProgressImage').attr('src','images/line_1.png');
                break;
            case 2:
                $('#mdProgressImage').attr('src','images/line_1.png');
                break;
            case 3:
                $('#mdProgressImage').attr('src','images/line_2.png');
                break;
            case 4:
                $('#mdProgressImage').attr('src','images/line_3.png');
                break;
            case 5:
                $('#mdProgressImage').attr('src','images/line_4.png');
                break;
            case 6:
                $('#mdProgressImage').attr('src','images/line_4.png');
                break;
        }
    }
}

var liveChatBehavior = function(){

    if(innerHeight < document.body.clientHeight){
        if(document.body.clientWidth>767){

            var bottomHeight = (+$('#liveChatRef').css('margin-bottom').slice(0, -2)) + (+$('.footerCont').css('height').slice(0, -2) - 6);

            if(+$('html')[0].clientHeight + $('body')[0].scrollTop >= $('body')[0].scrollHeight - bottomHeight){
                $('.liveChatCont').css('position', 'relative');
                $('.liveChatCont').css('right', '0px');
            }
            else{
                $('.liveChatCont').css('position', 'fixed');
                $('.liveChatCont').css('bottom', '0px');
                $('.liveChatCont').css('right', '15px');
            }
        }
    }
    else{
        $('.liveChatCont').css('position', 'relative');
        $('.liveChatCont').css('right', '0px');
    }
};

var daysBehavior = function(){

    if(document.body.clientWidth > 767){
        var parentWidth = +$('.calendarCont').css('width').slice(0, -2);
        var parentPaddings = +$('.calendarCont').css('padding-left').slice(0, -2) -
            $('.calendarCont').css('padding-right').slice(0, -2);

        var itemMargins = (+$('.days').css('margin-right').slice(0, -2) + 12) * 7;

        var freeSpace = parentWidth - parentPaddings;

        var itemWidth = (freeSpace - itemMargins) / 7 + 'px';

        $('.days').css('width', itemWidth);
        $('.days').css('height', itemWidth);

        $('.daysCont').css('height', itemWidth);
    }
    else{
        var xsParentWidth = +$('.xsDaysCont').css('width').slice(0, -2) - 1;
        var xsItemsMargin = +$('.xsDay').css('margin-right').slice(0, -2) * 4;
        var xsItemWidth = (xsParentWidth - xsItemsMargin) / 4 + 'px';
        $('.xsDay').css('width', xsItemWidth);
        $('.xsDay').css('height', xsItemWidth);

        var xsPsHeight = +$('.xsDay').children('p').css('height').slice(0, -2);
        var xsItemHeight = +$('.xsDay').css('height').slice(0, -2);
        var top = (xsItemHeight / 2) - xsPsHeight + 'px';
        $('.xsDay').children('p').css('top', top);
    }

};

function todayBehavior () {

    setTimeout(function(){

        if(document.body.clientWidth > 767){
            var itemWidth = +$('.todayP').children('p').css('width').slice(0, -2);
            var dayWidth = +$('.days').css('width').slice(0, -2);
            var calendarPadding = +$('.calendarCont').css('padding-left').slice(0, -2);

            var paddingLeft = calendarPadding - (itemWidth / 2) + (dayWidth / 2) + 'px';

            $('.todayP').css('padding-left', paddingLeft);
        }

    }, 10)

}

function weekSelectorBehavior () {

    setTimeout(function(){

        if(document.body.clientWidth > 767){
            var parentHeight = +$('.weeksCont').css('height').slice(0, -2);
            var itemHeight = +$('.calendarSelector').css('height').slice(0, -2) - 17;

            var itemTop = -(parentHeight / 2) - (itemHeight) + 'px';


            $('.calendarSelector').css('top', itemTop);
        }
        else{
            var xsDayMarginBottom = +$('.xsDay').css('margin-bottom').slice(0, -2);
            var calendarContHeight = +$('.xsDaysCont').css('height').slice(0, -2) - xsDayMarginBottom + 2;
            var selectorHeight = +$('.nextWeekContXs').css('height').slice(0, -2);
            var top = (calendarContHeight / 2) - (selectorHeight / 2) + 'px';
            $('.nextWeekContXs').css('top', top);
        }

    }, 10);

}

function radioCountBehavior(){
    var parentWidth = +$('.radioCont').css('width').slice(0, -2);
    var parentLeftPadd = +$('.radioCont').css('padding-left').slice(0, -2);
    var parentRightPadd = +$('.radioCont').css('padding-right').slice(0, -2);
    var parentSpace = parentWidth - parentLeftPadd - parentRightPadd - 5;

    var labelWidth = +$('#labelCount').css('width').slice(0, -2);

    var newWidth = parentSpace - labelWidth + 'px';
    $('#radioPCount').css('width', newWidth);

    var labelHeight = +$('#labelCount').css('height').slice(0, -2);
    var radioPHeight = +$('#radioPCount').css('height').slice(0, -2);

    var newTop = radioPHeight - labelHeight - 13 + 'px';
    $('#labelCount').css('top', '-'+newTop);
}

var getQuoteBEhavior = function(){

    var parent;
    var parentWidth;
    var subR;
    var subRWidth;
    var width;
    var margin;
    if(document.body.clientWidth > 991){
        parent = document.getElementsByClassName('getQuote')[0];
        parentWidth = $(parent).css('width').toString().split('px')[0];

        var adptiveItem1 = $('.adptiveItem1').css('width').toString().split('px')[0];
        var adptiveItem1Margin = $('.adptiveItem1').css('margin-left').toString().split('px')[0];
        var marginLeft = Number(adptiveItem1) + Number(adptiveItem1Margin);

        subR = document.getElementsByClassName('aplBraInp')[0];
        subRWidth = $(subR).css('width').toString().split('px')[0];

        width = (+parentWidth - ((+parentWidth * 0.24999999)+175));

        $(subR).css('width',width+'px');
        $(subR).css('margin-left',marginLeft+'px');
        $('.applianceType').children('.selectApplianceType').css('margin-left', marginLeft+'px');
        $('.applianceType').children('.aplBraInp').css('margin-left', marginLeft+'px');
        $('.subRow').children('.adaptItem2').css('width', $('#applianceQuote').css('width'));

    }
    else{
        subR = document.getElementsByClassName('aplBraInp')[0];
        if(document.body.clientWidth > 767){
            $(subR).css('width','91.66666667%');
            $(subR).css('margin-left','0px');
        }
        else{
            $(subR).css('width','83.33333333%');
            $(subR).css('margin-left','0px');
        }
    }

};

var goToItem = function () {
    var listBrands = document.getElementsByClassName('brandsList');
    if(document.body.clientWidth>992){
        switch (event.keyCode){
            case 97:
                $(listBrands).scrollTop(0);
                document.getElementById('Admiral').focus();
                break;
            case 98:
                $(listBrands).scrollTop(245);
                document.getElementById('Bauknecht').focus();
                break;
            case 99:
                $(listBrands).scrollTop(563);
                document.getElementById('Candy').focus();
                break;
            case 100:
                $(listBrands).scrollTop(836);
                document.getElementById('Daewoo').focus();
                break;
            case 101:
                $(listBrands).scrollTop(991);
                document.getElementById('Elba').focus();
                break;
            case 102:
                $(listBrands).scrollTop(1082);
                document.getElementById('Fagor').focus();
                break;
            case 103:
                $(listBrands).scrollTop(1300);
                document.getElementById('General Electric').focus();
                break;
            case 104:
                $(listBrands).scrollTop(1363);
                document.getElementById('Haier').focus();
                break;
            case 105:
                $(listBrands).scrollTop(1545);
                document.getElementById('Iceland').focus();
                break;
            case 106:
                $(listBrands).scrollTop(1645);
                document.getElementById('John Lewis').focus();
                break;
            case 107:
                $(listBrands).scrollTop(1673);
                document.getElementById('Karcher').focus();
                break;
            case 108:
                $(listBrands).scrollTop(1800);
                document.getElementById('LEC').focus();
                break;
            case 109:
                $(listBrands).scrollTop(1927);
                document.getElementById('Matsui').focus();
                break;
            case 110:
                $(listBrands).scrollTop(2173);
                document.getElementById('Neff').focus();
                break;
            case 111:
                $(listBrands).scrollTop(2327);
                document.getElementById('Ocean').focus();
                break;
            case 112:
                $(listBrands).scrollTop(2354);
                document.getElementById('Panache').focus();
                break;
            case 114:
                $(listBrands).scrollTop(2600);
                document.getElementById('Rangemaster').focus();
                break;
            case 115:
                $(listBrands).scrollTop(2636);
                document.getElementById('Samsung').focus();
                break;
            case 116:
                $(listBrands).scrollTop(2846);
                document.getElementById('Technolec').focus();
                break;
            case 118:
                $(listBrands).scrollTop(2846);
                document.getElementById('VAX').focus();
                break;
            case 119:
                $(listBrands).scrollTop(2846);
                document.getElementById('Whirlpool').focus();
                break;
            case 122:
                $(listBrands).scrollTop(2846);
                document.getElementById('Zanussi').focus();
                break;
        }
    }



};

var setStickyDiv = function(){
    var stickyDiv = document.getElementsByClassName('stickyLi')[0];
    var parentButtonHeight = $(document.getElementsByClassName('dropBrands')[0]).css('height').slice(0, -2);
    var parentButtonWidth = $(document.getElementsByClassName('dropBrands')[0]).css('width').slice(0, -2);
    var listBrandsHeight = $(document.getElementsByClassName('brandsList')[0]).css('height').slice(0, -2);
    $(stickyDiv).css('top', (Number(parentButtonHeight) + 1 + Number(listBrandsHeight)-1 - Number($(stickyDiv).css('height').slice(0, -2))) + 'px');
    //$(stickyDiv).css('width', Number(parentButtonWidth) - 17);
    $(stickyDiv).css('width', (+parentButtonWidth - 4) + 'px');
    //$(stickyDiv).css('border', '1px solid lightgray');
    //$(stickyDiv).css('border-top', 0)
};

var setAllDetail = function(){

    function getCurrentValue (items){
        if($(items[0]).val()){
            return $(items[0])
        }
        else{
            return $(items[1])
        }
    }
    // get
    var showAppliance = document.getElementsByClassName('showAppliance')[0];
    var showBrand = document.getElementsByClassName('showBrand')[0];
    var inputItem = document.getElementById('inputItem');
    var showApplianceType = document.getElementsByClassName('showApplianceType')[0];
    var price = document.getElementById('price');

    var selectedDate = document.getElementsByClassName('selectedDate')[0];

    var inputSerial = document.getElementsByClassName('inputSerial')[0];
    var inputModel = document.getElementsByClassName('inputModel')[0];
    var inputAge = document.getElementsByClassName('inputAge')[0];
    var inputDetail = document.getElementsByClassName('inputDetail')[0];
    var inputTitle = document.getElementsByClassName('inputTitle')[0];
    var inputHouse = document.getElementsByClassName('inputHouse')[0];
    var inputFirstName = document.getElementsByClassName('inputFirstName')[0];
    //var inputPostcode = document.getElementsByClassName('inputPostcode')[0];

    var inputPostcode = getCurrentValue($('.inputPostcode'));

    var inputLastName = document.getElementsByClassName('inputLastName')[0];
    var inputPhoneNumber = document.getElementsByClassName('inputPhoneNumber')[0];

    var inputAdressLine1 = getCurrentValue($('.inputAdressLine1'));

    var inputEmail = document.getElementsByClassName('inputEmail')[0];

    var inputAdressLine2 = getCurrentValue($('.inputAdressLine2'));

    var inputCity = getCurrentValue($('.inputCity'));

    var inputCheckBox = document.getElementsByClassName('inputCheckBox')[0];


    //set to
    var appliance = document.getElementsByClassName('appliance');
    var brand = document.getElementsByClassName('brand');
    var phoneNumber = document.getElementsByClassName('phoneNumber');
    var applianceT = document.getElementsByClassName('applianceT');
    var showPrice = document.getElementsByClassName('showPrice');

    var showAppDay = document.getElementsByClassName('showAppDay');
    var showAppDate = document.getElementsByClassName('showAppDate');
    var showAppMonth = document.getElementsByClassName('showAppMonth');

    var appName = document.getElementsByClassName('appName');
    var model = document.getElementsByClassName('model');
    var age = document.getElementsByClassName('age');
    var title = document.getElementsByClassName('title');
    var name = document.getElementsByClassName('name');
    var address = document.getElementsByClassName('address');
    var showCity = document.getElementsByClassName('showCity');
    var showPostcode = document.getElementsByClassName('showPostcode');
    var showPhoneNumber = document.getElementsByClassName('showPhoneNumber');
    var showEmail = document.getElementsByClassName('showEmail');


    //set
    $(appliance).text($(showAppliance).text());
    $(brand).text($(showBrand).text());
    $(phoneNumber).text($(inputItem).val());
    $(applianceT).text($(showApplianceType).text());
    $(showAppDay).text($('.selectedDay').text());
    $(showAppDate).text($('.selectedDate').text().slice(4));
    $(showAppMonth).text($('.selectedMonth').text());



    $(showPrice).text($(price).text());

    $(appName).text($(inputSerial).val());
    $(model).text($(inputModel).val());
    $(age).text($(inputAge).text());
    $(title).text($(inputTitle).text()+' ');
    $('.name').text($(inputFirstName).val()+
        ' '+$(inputLastName).val());

    $(address).text($(inputAdressLine1).val()+' '+$(inputAdressLine2).val());
    $(showCity).text($(inputCity).val());
    $(showPostcode).text($(inputPostcode).val());
    $(showPhoneNumber).text($(inputPhoneNumber).val());
    $(showEmail).text($(inputEmail).val());

};

var hiddenAllChildren = function(){

    var changeCont = document.getElementsByClassName('changeCont')[0].children;
    var i;
    for (i = 0; i <= changeCont.length; i++){
        $(changeCont[i]).css('display', 'none');
    }
};

var gotoFirst = function(){
    hiddenAllChildren();
    setAllDetail();

    changeProgressImage(1);

    var getQuote = document.getElementsByClassName('getQuote')[0];
    $(getQuote).css('display', 'block');


    var buttGetQuote = document.getElementsByClassName('buttonQuoteMedium')[0];
    var applianceType = document.getElementsByClassName('applianceType')[0];
    $('.buttonQuoteSmall').css('display', 'none');
    $(buttGetQuote).css('display', 'none');
    $(applianceType).css('display', 'block');

    var changeCont = document.getElementsByClassName('changeCont')[0];
    $(changeCont).css('height', '726px');
};

var gotoSecond = function(){

    var showAppliance = document.getElementsByClassName('showAppliance')[0].textContent;
    var appValue = 'Select appliance';
    var showBrand = document.getElementsByClassName('showBrand')[0].textContent;
    var brandValue = 'Select brand';
    var inputItem = document.getElementById('inputItem').value;
    var phoneValue = '';
    var showApplianceType = document.getElementsByClassName('showApplianceType')[0].textContent;

    if(showAppliance == appValue){
        $('#applianceQuote').children('.dropButton').addClass('invalidInput');
    }
    else{
        $('#applianceQuote').children('.dropButton').removeClass('invalidInput')
    }
    if(showBrand == brandValue){
        $('#brandQuote').children('.dropButton').addClass('invalidInput')
    }
    else{
        $('#brandQuote').children('.dropButton').removeClass('invalidInput')
    }
    if(inputItem == phoneValue){
        $('#inputItem').parent().addClass('invalidInput');
    }
    else{
        $('#inputItem').parent().removeClass('invalidInput');
    }
    if(showApplianceType == appValue){
        $('#applTypeQuote').children('.dropButton').addClass('invalidInput');
    }
    else{
        $('#applTypeQuote').children('.dropButton').removeClass('invalidInput');
    }

    if(showAppliance !== appValue && showBrand !== brandValue && inputItem !== phoneValue && showApplianceType !== appValue){
        hiddenAllChildren();
        setAllDetail();

        $('.changeCont').css('height', '375px');

        var getQuote = document.getElementsByClassName('getQuote')[0];
        $(getQuote).css('display', 'none');

        var applianceDetails = document.getElementsByClassName('applianceDetails')[0];
        $(applianceDetails).css('display', 'block');

        changeProgressImage(2);

        var changeCont = document.getElementsByClassName('changeCont')[0];
        $(changeCont).css('height', '830px');
    }


};

var gotoThird = function(){

    hiddenAllChildren();
    setAllDetail();
    changeProgressImage(3);

    $('.changeCont').css('height', 'auto');

    var appointment = document.getElementsByClassName('appointment')[0];
    $(appointment).css('display', 'block');

    $('.changeCont').css('height', 'auto');

    daysBehavior();
    weekSelectorBehavior();
    todayBehavior();

};

var gotoFourth = function(){

    $('.selectedDate').removeClass('invalitInputDay');


    if($('.selectedDay').text() !== '' && $('#userSelectDay').text() !== 'This day is not available'
        && $('.selectedDate').text() !== ''){

         hiddenAllChildren();
         setAllDetail();

        changeProgressImage(4);

         var footer = document.getElementsByClassName('footer')[0];
         $(footer).css('display', 'none');

         var footerCont = document.getElementsByClassName('footerCont')[0];
         $(footerCont).css('display', 'none');

         var detailsSection = document.getElementsByClassName('detailsSection')[0];
         $(detailsSection).css('display', 'block');

        radioCountBehavior();
    }
    else{
        $('#userSelectDay').addClass('invalitInputDay');
    }
};

var gotoFifth = function(){

    var inputSerial = ($('.inputSerial').val() == '');
    var inputModel = ($('.inputModel').val() == '');
    var inputAge = ($('.inputAge').text() !== 'Select age');
    var inputTitle = ($('.inputTitle').text() !== 'Select title');

    var inputHouseVal = (document.body.clientWidth < 992) ?
        $($('.inputHouse')[1]).val() :
        $($('.inputHouse')[0]).val();

    var inputHouse = (inputHouseVal !== '');
    var inputFirstName = ($('.inputFirstName').val() !== '');
    var inputLastName = ($('.inputLastName').val !== '');

    var inputPostcodeVal = (document.body.clientWidth < 992) ?
        $($('.inputPostcode')[1]).val() :
        $($('.inputPostcode')[0]).val();

    var inputPostcode = (inputPostcodeVal !== '');     //
    var inputPhoneNumber = ($('.inputPhoneNumber').val() !== '');

    var inputAdressLine1Val = (document.body.clientWidth < 992) ?
        $($('.inputAdressLine1')[1]).val() :
        $($('.inputAdressLine1')[0]).val();

    var inputAdressLine2Val = (document.body.clientWidth < 992) ?
        $($('.inputAdressLine2')[1]).val() :
        $($('.inputAdressLine2')[0]).val();

    var inputAdressLine = (inputAdressLine1Val !== ''
    || inputAdressLine2Val == '');      //

    var confirmEmail = (($('.confirmEmail').val() !== '') &&
    ($('.inputEmail').val() == $('.confirmEmail').val()));

    var inputCityVal = (document.body.clientWidth < 992) ?
        $($('.inputCity')[1]).val() :
        $($('.inputCity')[0]).val();

    var inputCity = (inputCityVal !== '');

    var inputsInDetailSection = document.getElementById('detailsCont').querySelectorAll("input");


    var c;
    for(c=0; c < inputsInDetailSection.length; c++){
        $(inputsInDetailSection[c]).parent().removeClass('invalidInput')
    }

    var i;
    for(i=0; i < inputsInDetailSection.length; i++){
        if($(inputsInDetailSection[i]).val() == ''){
            $(inputsInDetailSection[i]).parent().addClass('invalidInput')
        }
    }

    if($('.inputEmail').val() !== $('.confirmEmail').val()){
        $('.inputEmail').parent().addClass('invalidInput');
        $('.confirmEmail').parent().addClass('invalidInput');
    }

    if($('.inputAge').text() == 'Select age'){
        $('.inputAge').parent().parent().addClass('invalidInput');
    }
    else{
        $('.inputAge').parent().parent().removeClass('invalidInput');
    }

    if($('.inputTitle').text() == 'Select title'){
        $('.inputTitle').parent().parent().addClass('invalidInput');
    }
    else{
        $('.inputTitle').parent().parent().removeClass('invalidInput');
    }


    if(inputAge && inputTitle && inputHouse && inputFirstName && inputLastName && inputPostcode
        && inputPhoneNumber && inputAdressLine && confirmEmail && inputCity){
        hiddenAllChildren();
        setAllDetail();

        changeProgressImage(5);

        var paymentsSection = document.getElementsByClassName('paymentsSection')[0];
        $(paymentsSection).css('display', 'block');
    }
};

var gotoSixth = function(){

    var allInputsInThis = document.getElementsByClassName('paymentsSection')[0].querySelectorAll("input");
    var allDropYearInThis = document.getElementsByClassName('year');
    var allDropMonthInThis = document.getElementsByClassName('month');
    var cardType = document.getElementsByClassName('cardType')[0];

    var validAll = function(){
        var inputs = [];
        var years = [];
        var monts = [];
        var card;

        for(var i=0; i < allInputsInThis.length; i++){
            if($(allInputsInThis[i]).val() == ''){
                $(allInputsInThis[i]).addClass('invalidInput');
                inputs[i] = false;
            }
            else{
                $(allInputsInThis[i]).removeClass('invalidInput');
                inputs[i] = true;
            }
        }

        for(var u=0; u < allDropYearInThis.length; u++){
            if($(allDropYearInThis[u]).text() == 'Year'){
                $(allDropYearInThis[u]).parent().parent().addClass('invalidInput');
                years[u] = false;
            }
            else{
                $(allDropYearInThis[u]).parent().parent().removeClass('invalidInput');
                years[u] = true;
            }
        }

        for(var o=0; o < allDropMonthInThis.length; o++){
            if($(allDropMonthInThis[o]).text() == 'Month'){
                $(allDropMonthInThis[o]).parent().parent().addClass('invalidInput');
                monts[o] = false;
            }
            else{
                $(allDropMonthInThis[o]).parent().parent().removeClass('invalidInput');
                monts[o] = true;
            }
        }

        if($(cardType).text() == 'Select card type'){
            $(cardType).parent().parent().addClass('invalidInput');
            card = false;
        }
        else{
            $(cardType).parent().parent().removeClass('invalidInput');
            card = true;
        }

        return inputs[0] && inputs[1] && inputs[2] && inputs[3] && years[0] && years[1]
                && monts[0] && monts[1] && card;
    };

    if(validAll()){
        //Go to pay
        console.log('GO');
    }
    else{
        console.log('STOP');
    }
};


//Live chat functionality
$(function(){

    //Start to chatting
    $('.welcomeBtn').click(function(){
        startChating();
    });

    //Send new message
    $('.inputMessageBtn').click(function(){
        sendMessage('front');
    });

    $('.closeChatImg').click(function(){
        closeChat();
    });

    $('#liveChatRef').click(function(){
        openChat();
    });
});

//Blocking scrolling
$(function(){
    $('.messageList').hover(function(){
            if(document.body.clientWidth > 767){
                var x=window.scrollX;
                var y=window.scrollY;
                window.onscroll=function(){window.scrollTo(x, y);};
            }
        },
        function(){
            window.onscroll = function() {

                liveChatBehavior();
                bigChatBehavior();
            };
        })
});

var usernameForChatting = 'Default';
var startChating = function(){

    $('.welcomeInput').removeClass('invalidInput');

    if($('.welcomeInput').val() !== ''){

        usernameForChatting = $('.welcomeInput').val();

        $('.welcomeSection').css('display', 'none');
        $('.chattingSection').css('display', 'block');

    }
    else{
        $('.welcomeInput').addClass('invalidInput');
    }

};

var sendMessage = function(source){

    var mess = $('.inputMessage').val();
    var lengthOfList = $('.messageList li').length;

    var newId = 'mess'+(+lengthOfList + 1);
    var dat = new Date;
    var messageTime = dat.getHours() +':'+dat.getMinutes();

    $('.inputMessage').removeClass('invalidInput');

    if(mess !== ''){

        if(source == 'front' && mess.substr(0,4 ) !== 'test'){

            $('.rollbar-content').append(
                '<li id='+newId+'>'+
                '<div  class="userMessage messageItem">'+
                '<canvas id="'+newId+'canv'+'"></canvas>'+
                '<div class="row messageTop">'+
                '<p class="col-md-6 col-xs-6 userName">'+usernameForChatting+'</p>'+
                '<p class="col-md-6 col-xs-6 messageTime">'+messageTime+'</p>'+
                '</div>'+
                '<p class="messageValue">'+mess+'</p>'+
                '</div>'+
                '</li>');


            var canvas = setCanvasSize(newId);

            drawChatCanvas(canvas, newId, source);
        }
        else{

            $('.rollbar-content').append(
                '<li id='+newId+'>'+
                '<div  class="answerMessage messageItem">'+
                '<canvas id="'+newId+'canv'+'"></canvas>'+
                '<div class="row answMessageTop">'+
                '<p class="answMessageTime">'+messageTime+'</p>'+
                '</div>'+
                '<p class="answMessageValue">'+mess+'</p>'+
                '</div>'+
                '</li>');

            var canvas = setCanvasSize(newId);

            drawChatCanvas(canvas, newId, 'test');

            alingMessagesResponsive();

        }
    }
    else{
        $('.inputMessage').addClass('invalidInput');
    }



    //Reset messege
    $('.inputMessage').val('');

    //Scroll message list down

    var listHeight = +($('.rollbar-content').css('height')).slice(0, -2);

    var parentHeight = +($('.messageList').css('height')).slice(0, -2);

    $('.rollbar-content').css('top', '-'+(listHeight - parentHeight + 'px'));


    //Set height of rollbar-path-vertical
    var chatScreeenHeight = +($('.messageList').css('height')).slice(0, -2);

    $('.rollbar-path-vertical').css('height', (chatScreeenHeight - 20) + 'px');

    //Set hight of rollbar-handle

    $('.rollbar-handle').css('height', ((chatScreeenHeight / 100) * 10)+'px');


    //scroll rollbar-handle down

    var handlHeight = +($('.rollbar-handle').css('height')).slice(0, -2);

    var rollPathHeight = +($('.rollbar-path-vertical').css('height')).slice(0, -2);

    $('.rollbar-handle').css('top', +(rollPathHeight - ((chatScreeenHeight / 100) * 10)) + 'px');
};

var setCanvasSize = function(itemId){
    var listIlem = $('#'+itemId+' .messageItem');
    var canvas = $('#'+itemId+'canv'+'');

    $(canvas).attr('height', $(listIlem).css('height'));
    $(canvas).css('height', $(listIlem).css('height'));

    $(canvas).attr('width', $(listIlem).css('width'));
    $(canvas).css('width', $(listIlem).css('width'));

    return canvas;
};

var drawChatCanvas = function(canv, id, source){

    var canvas = canv[0];

    var height = $(canvas).attr('height').slice(0, -2);
    var width = $(canvas).attr('width').slice(0, -2);

    var ctx = canvas.getContext('2d');

    if(source !== 'test'){

        ctx.fillStyle = '#dfdfdf';

        ctx.beginPath();
        ctx.moveTo(14, 0);
        ctx.lineTo(width, 0);
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.lineTo(14, height-11);
        ctx.fill();
        ctx.closePath();

    }
    else{

        ctx.fillStyle = '#7e206c';

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(width-14, 0);
        ctx.lineTo(width-14, height-11);
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.fill();
        ctx.closePath();
    }

};

var closeChat = function(){

    $('.liveChatBigCont').css('display', 'none');

    $('.liveChatCont').removeClass('hidden');

    if(document.body.clientWidth < 768){

        $('.footer').css('margin-top', '50px');

        $('.lc').css('margin-top', '0');

    }

};

var openChat = function(){

    $('.liveChatBigCont').css('display', 'block');

    $('.liveChatCont').addClass('hidden');

    if(document.body.clientWidth < 768){

        $('.footer').css('margin-top', '0');

        $('.lc').css('margin-top', '30px');

    }
};

function bigChatBehavior(){

    var bodyHeight = $('body')[0].scrollHeight;
    var bodyTop = $('body')[0].scrollTop;
    var clientHeight = $('html')[0].clientHeight;
    var subFooterHeight = +$('.footerCont').css('height').slice(0, -2);
    var bodyCssHeight = +$('body').css('height').slice(0, -2);

    if(innerHeight < document.body.clientHeight){
        if(document.body.clientWidth>767){

            if((bodyHeight - (bodyTop + clientHeight)) < (subFooterHeight)){
                var bottom = (subFooterHeight + 15) - (bodyHeight - (bodyTop + clientHeight));

                $('.lc').css('bottom', bottom+'px');
            }
            else{
                $('.lc').css('bottom', '15px');
            }
        }
    }
    else{
        $('.lc').css('bottom', ((bodyHeight - bodyCssHeight)+(subFooterHeight + 15))+'px');
    }

};

function alingMessagesResponsive (){
    if(document.body.clientWidth < 768){

        console.log($('.messageList').css('width'));

        if(Boolean($('.messageList')) && Boolean($('.answerMessage'))){

            var parentWidth = $('.messageList').css('width').slice(0, -2);
            var selfWidth = $('.answerMessage').css('width').slice(0, -2);

            $('.answerMessage').css('left', (+parentWidth - (+selfWidth + 10))+'px');

        }
        else(
            console.log('Not answers')
        )



    }
    else{
        $('.answerMessage').css('left','85px');
    }
}

// Main logo link to index page
$(function(){
    var mainLogoCont = $('#mainLogoCont');

    mainLogoCont.children('img').click(function(){
        location.href = '../index/appl.html';
    });

    mainLogoCont.children('h1').click(function(){
        location.href = '../index/appl.html';
    });
});
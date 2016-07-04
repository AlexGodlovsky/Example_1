$( document ).ready(function() {
    setTimeout(function(){
        getQuoteBEhavior();
        liveChatBehavior();
        fixingHeader();
        tableTitleBehavior();
    },10);

    addBrands();
    drawCanvas();

    $('.messageList').rollbar({zIndex:80});

    $('.buttonQuoteMedium').click(function(){
        var appl = $('.showAppliance').text().replace(/\s/g, '_'),
            brand = $('.showBrand').text().replace(/\s/g, '_'),
            num = $('#inputItem').val().replace(/\s/g, '_');
        console.log(appl+'   '+brand);

        window.location.href = '../bookng/bookng.html?appl='+appl+'&brand='+brand+'&num='+num;
    });

    $('.buttonQuoteSmall').click(function(){
        var appl = $('.showAppliance').text().replace(/\s/g, '_'),
            brand = $('.showBrand').text().replace(/\s/g, '_'),
            num = $('#inputItem').val().replace(/\s/g, '_');
        console.log(appl+'   '+brand);

        window.location.href = '../bookng/bookng.html?appl='+appl+'&brand='+brand+'&num='+num;
    });
});

$(function(){

    window.onscroll = function() {
        liveChatBehavior();
        bigChatBehavior();
    };

    //get Qoute behavior
    $(window).resize(function(){
        getQuoteBEhavior();
        setStickyDiv();
        leftInputsBehavior();
        liveChatBehavior();
        fixingHeader();
        tableTitleBehavior();
    });

    placeholdersBehavior();
});

//Editing font-size in list of brands
$(function(){
    var allDropButtonItems = document.getElementsByClassName('clickItem');
    $(allDropButtonItems).click(function(event){
        var pToShowChoise = event.target.parentElement.parentElement.parentElement.getElementsByTagName('button')[0].getElementsByTagName('p')[0];
        $(pToShowChoise).text($(event.target).text());

        var showAppliance = document.getElementsByClassName('showAppliance');
        var showBrand = document.getElementsByClassName('showBrand');
        var parentInput = document.getElementsByClassName('postcodeQuote');
        var caretCanvas = document.getElementsByClassName('caretCanvas');
        var input = $(parentInput).children(0);

        if((document.body.clientWidth < 1253) && (document.body.clientWidth > 1100)){

            if($(event.target).text() == 'Antony Worrall Thompson'){
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
            if($(event.target).text() == 'Antony Worrall Thompson'){
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
    });
});

function showHideTabls (){
    $('.tablContent').css('height', $('.fixedTabl').css('height'));
    $('.tablBtn').removeClass('activeTabl');
    if($(event.target).hasClass('fixedPrice') || $(event.target).hasClass('fixedPriseSm')){
        $('.fixedTabl').css('display', 'inline-block');
        $('.fixedPrice').addClass('activeTabl');
        $('.serviceAgree').removeClass('activeTabl');
        $('.agreeTabl').css('display', 'none');
        $('.serviceAgreeSm').css('color', '#D1669E');
        $('.fixedPriseSm').css('color', 'White');
        console.log("go")
    }
    else{
        $('.agreeTabl').css('display', 'inline-block');
        $('.fixedPrice').removeClass('activeTabl');
        $('.serviceAgree').addClass('activeTabl');
        $('.fixedTabl').css('display', 'none');
        $('.fixedPriseSm').css('color', '#D1669E');
        $('.serviceAgreeSm').css('color', 'White')
    }
}

function tableTitleBehavior (){
    if(document.body.clientWidth<451){
        $('.fixedPrice').val('');
        var fixedPriceWidth = $('.fixedPrice').css('width').slice(0, -2);
        $('.serviceAgree').val('');
        var serviceAgreeWidth = $('.serviceAgree').css('width').slice(0, -2);

        var fixedPriseSmWidth = $('.fixedPriseSm').css('width').slice(0, -2);
        $('.fixedPriseSm').css('display','block');
        $('.fixedPriseSm').css('left', (((+fixedPriceWidth) / 2) - ((+fixedPriseSmWidth) / 2)) +'px');

        var serviceAgreeSmWidth = $('.serviceAgreeSm').css('width').slice(0, -2);
        $('.serviceAgreeSm').css('display','block');
        $('.serviceAgreeSm').css('left', (((+serviceAgreeWidth) / 2) - ((+serviceAgreeSmWidth) / 2)) +'px');
    }
    else{
        $('.fixedPrice').val('Fixed price repair');
        $('.serviceAgree').val('Service agreement');
        $('.serviceAgreeSm').css('display','none');
        $('.fixedPriseSm').css('display','none');
    }
}

function fixingHeader (){
    if(document.body.clientWidth>767){

        $('.header').attr('class','row navbar navbar-default navbar-fixed-top header');
        var headerHeight = $('.header').css('height').slice(0, -2);

        $('.getQuote').css('margin-top', headerHeight +'px');
        $('.getQuote').attr('class', 'row navbar-fixed-top getQuote');
        var getQuoteHeight = $('.getQuote').css('height').slice(0, -2);

        $('.path').css('margin-top', (+headerHeight) + (+getQuoteHeight) + 'px');

    }
    else{
        $('.header').attr('class','row navbar navbar-default header');
        $('.getQuote').css('margin-top', '0px');
        $('.getQuote').attr('class', 'row getQuote');
        $('.path').css('margin-top', '0px');
    }



}

var leftInputsBehavior = function(){

    $('.leftInputCont').css('width', $('.dropButton').css('width'));
    $('.leftInputCont').css('margin-left', $('.adptiveItem1').css('width'));
    $('.leftBtn').css('margin-left', $('.adptiveItem1').css('width'))

};

var getQuoteBEhavior = function(){

    var parent = document.getElementsByClassName('getQuote')[0];
    var subR = document.getElementsByClassName('aplBraInp')[0];
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

        $('.subRow').children('.adaptItem2').css('width', $('#applianceQuote').css('width'));
    }
    else{
        $(subR).css('margin-left','0px');

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
        else{
            $('.liveChatCont').css('position', 'relative');
            $('.liveChatCont').css('right', '0px');
        }
    }
    else{
        $('.liveChatCont').css('position', 'relative');
        $('.liveChatCont').css('right', '0px');
    }
};

var addBrands = function(){
    var parent = document.getElementsByClassName('brandsList');
    var brandsString = 'A  Admiral  AEG  AGA  Akura  Antony Worrall Thompson  Ariston  Asko  Atag  B  Bauknecht  Baumatic  Beko  Belling  Bissell  Black & Decker  Bosch  Brandt  Bush  Butler  C  Candy  Cannon  Carlton  Comet  Cookworks  Coolzone  Creda  Crosslee  Currys Essentials  D  Daewoo  Dedietrich  Delonghi  Dirt Devil  Dyson  E  Elba  Electrolux  Eurotech  F  Fagor  Falcon  Fisher&paykel  Flavel  Fridgemaster  Frigidaire  Funai  G  General Electric  Gorenje  H  Haier  Hitachi  Hoover  Hotpoint  Husky  Husqvarna  I  Iceland  Ignis  Indesit  J  John Lewis  K  Karcher  Kelvinator  Kenwood  Kwood Apps  L  LEC  Leisure  LG  Logik  M  Matsui  Maytag  Mercury  Merloni  Mertz  Micromark  Moffat  Mondia  N  Neff  New World  Norfrost  Nova Scotia  Novascotia  O  Ocean  P  Panache  Panasonic  Parkinson Cowan  Philco  Philips  Prestige  Prima  Proline  Q  R  Rangemaster  S  Samsung  Sebo  Servis  Sharp  Siemens  Smeg  Snowcap  Sovereign  Stoves  T  Technolec  Teka  Tricity Bendix  Turbo  U  V  VAX  Vestel  W  Whirlpool  White Knight  X  Y  Z  Zanussi  Zanussi-Electrolux';
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
    $(stickyDiv).css('top', (Number(parentButtonHeight) + Number(listBrandsHeight)-1 - Number($(stickyDiv).css('height').slice(0, -2))) + 'px');
    $(stickyDiv).css('width', Number(parentButtonWidth) - 17);
};

var placeholdersBehavior = function(){

    var inputFontSize;
    var allInputsInPage = document.getElementsByClassName('inputSelector');;

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
};

var inputFontSize;
var onFocusInput = function(){
    var fontSize = window.getComputedStyle(document.getElementsByClassName('showBrand')[0]).fontSize;

    switch (event.target.value){
        case '':
            inputFontSize = $(event.target).css('font-size');
            event.target.style.textTransform = 'uppercase';
            break;
        default :
            event.target.style.textTransform = 'uppercase';
            break;
    }

    console.log();
};

var onBlurInput = function(){var inputItem = document.getElementById('inputItem');
    switch (event.target.value){
        case '':
            event.target.placeholder = 'Enter postcode';
            event.target.style.fontSize = inputFontSize;
            event.target.style.textTransform = 'none';
            break;

        default :
            event.target.style.textTransform = 'uppercase';
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
            var x=window.scrollX;
            var y=window.scrollY;
            window.onscroll=function(){window.scrollTo(x, y);};
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
                '<p class="col-md-6 userName">'+usernameForChatting+'</p>'+
                '<p class="col-md-6 messageTime">'+messageTime+'</p>'+
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

        console.log('q');
    }

};

var closeChat = function(){

    $('.liveChatBigCont').css('display', 'none');

    $('.liveChatCont').removeClass('hidden');

};

var openChat = function(){

    $('.liveChatBigCont').css('display', 'block');

    $('.liveChatCont').addClass('hidden');


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
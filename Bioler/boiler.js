var header = document.getElementsByClassName('header');
var getQuote = document.getElementsByClassName('getQuote');
var liveChat = document.getElementsByClassName('liveChatCont');
var mainFoto = document.getElementsByClassName('mainFotoCont');

$( document ).ready(function() {
    if(document.body.clientWidth>767){
        $(liveChat).css('position', 'fixed');
        $(liveChat).css('bottom', '0px');
        $(liveChat).css('right', '15px');
    }

    drawCanvas();
    addBrands();

    var brandsList = document.getElementsByClassName('brandsList');
    var showBrandChoise = document.getElementsByClassName('showBrand');
    var parentInput = document.getElementsByClassName('postcodeQuote');
    var caretCanvas = document.getElementsByClassName('caretCanvas');
    var input = $(parentInput).children(0);
    $(brandsList).children().click(function(){
        var showAppliance = document.getElementsByClassName('showAppliance');
        var showBrand = document.getElementsByClassName('showBrand');

        if($(this).text().length !== 1){
            $(showBrandChoise).text($(this).text());
        }
        if((document.body.clientWidth < 1253) && (document.body.clientWidth > 1100)){

            if($(this).text() == 'Antony Worrall Thompson'){
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
            if($(this).text() == 'Antony Worrall Thompson'){
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

                if($(this).text() == 'Zanussi-Electrolux'){
                    $(showBrand).css('font-size', '1.5vw');
                    $(showAppliance).css('font-size', '1.5vw');
                    $(input).addClass('classPlThree');
                    $(caretCanvas).addClass('caretCanvasThree');
                }
            }
        }
     });

    var appliancesList = document.getElementsByClassName('appiancesList');
    var showApplianceChoise = document.getElementsByClassName('showAppliance');
    $(appliancesList).children().click(function(){
        if($(this).text().length !== 1){
            $(showApplianceChoise).text($(this).text());

        }
    });


});

var drawCanvas = function(){
    var canvases = document.getElementsByClassName('caretCanvas');

    var i;
    for(i=0; i<2; i++){
        var context = canvases[i].getContext('2d');

        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(16, 0);
        context.lineTo(8, 10);
        context.closePath();
        context.fillStyle = "#0071BB";  /* Color of caret image  */
        context.fill();
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
            $(parent).append('<li><a id="'+brandsArray[i]+'" href="#">'+brandsArray[i]+'</a></li>');
        }
    }
};

var inputFontSize;
var onFocusInput = function(){
    var fontSize = window.getComputedStyle(document.getElementsByClassName('showBrand')[0]).fontSize;

    switch (event.target.value){
        case '':
            inputFontSize = $(event.target).css('font-size');
            event.target.placeholder = '';
            event.target.style.fontSize = fontSize;
            event.target.style.textTransform = 'uppercase';
            break;
        default :
            event.target.style.fontSize = fontSize;
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

var testp = function () {
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

setInterval(function(){
    if(document.body.clientWidth>767){

        $(header).attr('class','row navbar navbar-default navbar-fixed-top header');
        $(getQuote).css('margin-top', '130px');
        $(getQuote).attr('class', 'row navbar-fixed-top getQuote');

        if(document.body.clientWidth<992){
            $(mainFoto).css('margin-top', '238px');
        }
        else{
            $(mainFoto).css('margin-top', '192px');
        }

        window.onscroll = function() {

            if(document.body.clientWidth>767){
                var max = document.body.scrollHeight - innerHeight;
                var percent = (pageYOffset / max) * 100;
                var post =92.7;
                if(percent > post){
                    $(liveChat).css('position', 'relative');
                    $(liveChat).css('right', '0px');
                }
                else{
                    $(liveChat).css('position', 'fixed');
                    $(liveChat).css('bottom', '0px');
                    $(liveChat).css('right', '15px');
                }
            }
        };
    }
    else{
        $(header).attr('class','row navbar navbar-default header');
        $(getQuote).css('margin-top', '0px');
        $(getQuote).attr('class', 'row getQuote');
        $(liveChat).css('position', 'relative');
        $(liveChat).css('right', '0px');
        $(mainFoto).css('margin-top', '0px');
    }



},1);

var parent;
var parentWidth;
var subR;
var subRWidth;
var width;
var margin;
setInterval(function(){
    if(document.body.clientWidth > 991){
        parent = document.getElementsByClassName('getQuote');
        parentWidth = $(parent).css('width').toString().split('px')[0];

        subR = document.getElementsByClassName('aplBraInp');
        subRWidth = $(subR).css('width').toString().split('px')[0];

        width = (+parentWidth - ((+parentWidth * 0.24999999)+175));

        margin = (+parentWidth - (+subRWidth + (+parentWidth * 0.1666666666)));

        $(subR).css('width',width+'px');
        $(subR).css('margin-left',margin+'px');
    }
    else{
        if(document.body.clientWidth > 767){
            $(subR).css('width','91.66666667%');
            $(subR).css('margin-left','0px');
        }
        else{
            $(subR).css('width','83.33333333%');
            $(subR).css('margin-left','0px');
        }
    }
}, 1);


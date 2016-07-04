$(document).ready(function(){
   dev(5);
});

function dev (num){
    if(num){

        hideAllItems();

        var getQuote = $('.getQuote');

        switch (num){

            case 1:
                $('.applianceType').css('display', 'block');
                getQuote.css('display', 'block');
                break;

            case 2:
                $('.applianceDetails').css('display', 'block');
                getQuote.css('display', 'none');
                break;

            case 3:
                $('.appointment').css('display', 'block');
                getQuote.css('display', 'none');
                break;

            case 4:
                $('.detailsSection').css('display', 'block');
                getQuote.css('display', 'none');
                break;

            case 5:
                $('.paymentsSection').css('display', 'block');
                getQuote.css('display', 'none');
                break;
        }

    }
}

function hideAllItems (){
    $('.changeCont').children().css('display', 'none');
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
$(window).resize(function(){
    liveChatBehavior();
    initCalendar(false);
});


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

var dayOfWeekUs = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
    'Saturday'];
var dayOfWeekRu = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг',
    'Пятница', 'Суббота'];
var monts = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'];

var date = new Date();
//var date = new Date(2016, 11, 15);

 $(document).ready(function(){

     initCalendar(false);
 });

function initCalendar (isNewWeek){

    var clientWidth = document.body.clientWidth < 768;
    var items = [];

    var i;
    if(clientWidth){

        for(i=0; i<16; i++){
            items.push($('#'+'xsDay'+i));
        }
    }
    else{
        for(i=0; i<14; i++){
            items.push($('#'+'day'+i));
        }
    }

    setDayProperties(items, isNewWeek);
}

function updateDate (oldDate){
    return new Date(
        oldDate.getFullYear(),
        oldDate.getMonth(),
        (oldDate.getDate() + 1)
    )
}

function setDayOfWeek (item, date){
    var result = dayOfWeekUs[date.getDay()];
    item.children('.dayOfWeek').text(result)
}

function setDayOfMont (item, date){

    var reduct = sockFu(date.getDate());
    var result = date.getDate()+' '+reduct;

    item.children('.date').text(result);
}

function setMonth (item, date){
    var result = monts[date.getMonth()];
    item.children('.currentMonth').text(result);
}

function checkSunday(item){
    var dayOfWeek = $(item).children('.dayOfWeek').text();

    if(dayOfWeek == 'Sunday' || dayOfWeek =='Воскресенье'){

        item.addClass('notAvailable')
    }
    else{
        item.addClass('available')
    }

}

function resetClasses (item){
    $(item).removeClass('notAvailable');
    $(item).removeClass('available');
    $(item).removeClass('selected');
}

function setDayProperties(items, date){

    var currentDate = date ? date : new Date();

    var i;
    for(i=0; i<items.length; i++){

        setMonth(items[i], currentDate);

        setDayOfMont(items[i], currentDate);

        setDayOfWeek(items[i], currentDate);

        resetClasses(items[i]);

        checkSunday(items[i]);

        currentDate = updateDate(currentDate)
    }

    if(items.length == 16){
        $('#xsLastDayOfWeek').text(currentDate.toString());
    }
    else{
        $('#mdLastDayOfWeek').text(currentDate.toString());
    }
}

function sockFu (num){
    switch (num){
        case 1:
            return 'st';
            break;
        case 21:
            return 'st';
            break;
        case 31:
            return 'st';
            break;
        case 2 :
            return 'nd';
            break;
        case 22 :
            return 'nd';
            break;
        case 3:
            return 'd';
            break;
        case 23:
            return 'd';
            break;
        default :
            return 'th';
            break;
    }
}

function selectDay (elem){

    var listOfDays = [];
    var i;

    if(document.body.clientWidth > 767){
        for(i=0; i<14; i++){
            listOfDays[i] = document.getElementById('day'+i);
            $(listOfDays[i]).removeClass('selected');
            $(listOfDays[i]).addClass('available');
        }
        if(!elem.classList.contains('notAvailable')){
            $(elem).removeClass('available');
            $(elem).addClass('selected');
            var elemDay = $(elem).children(".dayOfWeek").text();
            var elemDate = $(elem).children(".date").text();
            var currentMonth = $(elem).children(".currentMonth").text();
            $('.selectedDay').text(elemDay);
            $('.selectedDate').text(' the '+elemDate.replace(' ', '')+' '+currentMonth);
            //$(appSelected).text(elemDay+' the '+elemDate.replace(' ', '')+' '+currentMonth);
            $('#userSelectDay').removeClass('invalitInputDay');
            $('#userSelectDay').text('Appointment selected:');
        }
        else{
            $('#userSelectDay').text('This day is not available');
            $('.selectedDay').text('');
            $('.selectedDate').text('');
            $('.selectedMonth').text('');
        }
    }
    else{
        $('.xsDay').removeClass('selected');
        $('.xsDay').addClass('available');

        if(!$(elem).hasClass('notAvailable')){
            $('#userSelectDay').text('Appointment selected:');
            $('#userSelectDay').removeClass('invalitInputDay');
            $(elem).removeClass('available');
            $(elem).addClass('selected');

            var elemDay = $(elem).children(".dayOfWeek").text();
            var elemDate = $(elem).children(".date").text();
            var currentMonth = $(elem).children(".currentMonth").text();

            $('.selectedDay').text(elemDay);
            $('.selectedDate').text(' the '+elemDate.replace(' ', ''));
            $('.selectedMonth').text(currentMonth);
        }
        else{
            $('#userSelectDay').text('This day is not available');
            $('.selectedDay').text('');
            $('.selectedDate').text('');
            $('.selectedMonth').text('');
        }
    }


};

var nextWeek = function(){

    if(document.body.clientWidth > 767){
        var lastDayOfWeek = $('#mdLastDayOfWeek').text();
        var newDate = new Date(lastDayOfWeek);

        $('.selectedDate').text('');
        $('.selectedDay').text('');

        initCalendar(newDate)
    }
    else{
        var lastDayOfWeek = $('#xsLastDayOfWeek').text();
        var newDate = new Date(lastDayOfWeek);

        $('.selectedDate').text('');
        $('.selectedDay').text('');

        initCalendar(newDate)
    }

};


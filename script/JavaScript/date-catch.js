function theDate() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth()+1;
    var date = now.getDate(),day;

    switch(now.getDay()) {
        case 0 : day = "일요일";   break;
        case 1 : day = "월요일";   break;
        case 2 : day = "화요일";   break;
        case 3 : day = "수요일";   break;
        case 4 : day = "목요일";   break;
        case 5 : day = "금요일";   break;
        case 6 : day = "토요일";   break;
    }
    document.write(year + "년 " + month + "월 " + date + "일 " + day);

}

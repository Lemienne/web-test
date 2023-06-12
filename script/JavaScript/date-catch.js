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

function statusTime() {
    let now = new Date();
    let day;
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    switch(now.getDay()) {
        case 0 :
            day = "일요일";
            document.write(day + "&nbsp&nbsp·&nbsp&nbsp");
            document.write("주말");
            break;
        case 1 :
            day = "월요일";
            if(hours >= 14 && hours < 16) {
                document.write(day + "&nbsp&nbsp·&nbsp&nbsp");
                document.write("취업전략수립및역량평가1 : 듣는 중");
            } else if (hours >= 16 && hours < 18) {
                document.write(day + "&nbsp&nbsp·&nbsp&nbsp");
                document.write("웹프로그래밍 : 듣는 중");
            } else {
                document.write(day + "&nbsp&nbsp·&nbsp&nbsp");
                document.write("휴식 중");
            }
            break;
        case 2 :
            day = "화요일";
            if(hours >= 12 && hours < 13) {
                document.write(day + "&nbsp&nbsp·&nbsp&nbsp");
                document.write("프로그래밍실습 : 듣는 중");
            } else {
                document.write(day + "&nbsp&nbsp·&nbsp&nbsp");
                document.write("휴식 중");
            }
            break;
        case 3 :
            day = "수요일";
            if(hours >= 9 && hours < 10) {
                document.write(day + "&nbsp&nbsp·&nbsp&nbsp");
                document.write("웹프로그래밍 : 듣는 중");
            }
            else if (hours >= 10 && hours < 12) {
                document.write(day + "&nbsp&nbsp·&nbsp&nbsp");
                document.write("디지털논리회로 : 듣는 중");
            }
            else if (hours >= 14 && hours < 16) {
                document.write(day + "&nbsp&nbsp·&nbsp&nbsp");
                document.write("성신의대학생활지도 : 듣는 중");
            }
            else {
                document.write(day + "&nbsp&nbsp·&nbsp&nbsp");
                document.write("휴식 중");
            }
            break;
        case 4 :
            day = "목요일";
            if(hours >= 10 && hours < 12) {
                document.write(day + "&nbsp&nbsp·&nbsp&nbsp");
                document.write("프로그래밍실습 : 듣는 중");
            }
            else if (hours >= 14 && hours < 16) {
                document.write(day + "&nbsp&nbsp·&nbsp&nbsp");
                document.write("감성합창 : 듣는 중");
            }
            else if (hours >= 16 && hours < 18) {
                document.write(day + "&nbsp&nbsp·&nbsp&nbsp");
                document.write("디지털논리회로 : 듣는 중");
            }
            else {
                document.write(day + "&nbsp&nbsp·&nbsp&nbsp");
                document.write("휴식 중");
            }
            break;
        case 5 :
            day = "금요일";
            document.write(day + "&nbsp&nbsp·&nbsp&nbsp");
            document.write("공강");
            break;
        case 6 :
            day = "토요일";
            document.write(day + "&nbsp&nbsp·&nbsp&nbsp");
            document.write("주말");
            break;
    }

}

function status() {
    let now = new Date();
    let day;
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    switch(now.getDay()) {
        case 0 :
            day = "일요일";
            document.write("주말");
            break;
        case 1 :
            day = "월요일";
            if(hours >= 14 && hours < 16) {
                document.write("취업전략수립및역량평가1 : 듣는 중");
            } else if (hours >= 16 && hours < 18) {
                document.write("웹프로그래밍 : 듣는 중");
            } else {
                document.write("휴식 중");
            }
            break;
        case 2 :
            day = "화요일";
            if(hours >= 12 && hours < 13) {
                document.write("프로그래밍실습 : 듣는 중");
            } else {
                document.write("휴식 중");
            }
            break;
        case 3 :
            day = "수요일";
            if(hours >= 9 && hours < 10) {
                document.write("웹프로그래밍 : 듣는 중");
            }
            else if (hours >= 10 && hours < 12) {
                document.write("디지털논리회로 : 듣는 중");
            }
            else if (hours >= 14 && hours < 16) {
                document.write("성신의대학생활지도 : 듣는 중");
            }
            else {
                document.write("휴식 중");
            }
            break;
        case 4 :
            day = "목요일";
            if(hours >= 10 && hours < 12) {
                document.write("프로그래밍실습 : 듣는 중");
            }
            else if (hours >= 14 && hours < 16) {
                document.write("감성합창 : 듣는 중");
            }
            else if (hours >= 16 && hours < 18) {
                document.write("디지털논리회로 : 듣는 중");
            }
            else {
                document.write("휴식 중");
            }
            break;
        case 5 :
            day = "금요일";
            document.write("공강");
            break;
        case 6 :
            day = "토요일";
            document.write("주말");
            break;
    }
}
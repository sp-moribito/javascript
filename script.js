// 2021년이 윤년인지 확인
var year=prompt("연도를 입력해주세요.");
isLeapYear(year)

function isLeapYear(year){
    if(year%4==0){
        alert(year+"년은 윤년입니다.");
    }
    else{
        alert(year+"년은 윤년이 아닙니다.");
    }
}


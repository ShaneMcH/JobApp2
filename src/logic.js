export const prettyDate = (dateString) => {
    const days = ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat'];
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dev']
    const dateParts = dateString.split('-');
    const date = new Date(+dateParts[0],+dateParts[1] - 1,+dateParts[2]);
    const day = date.getDay();
    return `${days[day]} ${dateParts[2]} ${months[date.getMonth()]}`;
}

export const twelveToTwentyfour = (timeString) => {
    const isPM = timeString.indexOf('PM') > -1;
    const timeNum = timeString.slice(0,-2);
    return isPM && +timeNum < 12 ? +timeNum + 12 : +timeNum;
}

export const calcPay = () => {
    /*
    *   FORMULA:
    *   (Base Rate * (1 + Casual)) + (Base Rate * Loading)
    */

    return '$?';
}
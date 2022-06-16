
export function writeFriendlyDate(dateTime){
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const functionDate = new Date(dateTime);
    return `${months[functionDate.getMonth()]} ${functionDate.getDate()}, ${functionDate.getFullYear()}`
}

function addOneLeadingZero(intendedDigit) {
    let leadingZeroString = '';
    
    if (intendedDigit < 10) { leadingZeroString = `0${intendedDigit}` } 
    else { leadingZeroString = `${intendedDigit}` }

    return leadingZeroString;
}

function convertDateToNytFormat(year, month, day){
    // Date is zero indexed; subtracting one to make up for that.
    const todayDate = new Date(year, month - 1, day);
    const selectedYear = todayDate.getFullYear();
    const selectedMonth = addOneLeadingZero(todayDate.getMonth() + 1);
    const selectedDate = addOneLeadingZero(todayDate.getDate());

    return `${selectedYear}${selectedMonth}${selectedDate}`;
}

export function spitOutDates() {
    const todayDate = new Date();
    const intDate = todayDate.getDate();
    const intMonth = todayDate.getMonth() + 1; // Zero indexed, correcting
    const intYear = todayDate.getFullYear()
    const stringTodayDate = convertDateToNytFormat(intYear, intMonth, intDate);
    const stringOneYearAgo = convertDateToNytFormat(intYear - 1, intMonth, intDate);

    return [stringOneYearAgo, stringTodayDate];
}
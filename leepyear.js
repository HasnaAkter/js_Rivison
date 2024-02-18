function lepYear(year){

    if ((year%400 === 0) || ((year%4 === 0 ) && ( year%100 !== 0)) )
    {
        console.log(`${year} This is Leap Year`);
    }
    else{
        //console.log(`${year} This is Not Leap Year`);
        console.log(year + " This is Not Leap Year");
    }

}

lepYear(2026);
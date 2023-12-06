function show() {
    var tags = ["half", "ten", "quarter", "twenty", "five", "minutes", "to", "past", "one", "three", "two", "four", "fiveh", "six", "seven", "eight", "nine", "tenh", "eleven", "twelve"];
    
    for (i = 0; i < tags.length; i++) {
        tag = tags[i];
        tag = tag + "";
        document.getElementsByTagName(tag)[0].style.color = "#5C5C5C";
    }

    var today = new Date();
    var h = today.getHours();
    var word;
    var word2 = word;
    if (h >= 12) {
        h -= 12;
    }

    var m = today.getMinutes();

    if (m <= 30) {
        h = h;
        var key = "past";
        m = m;
    } else {
        h += 1;
        var key = "to";
        m = 60 - m;
    }

    if (m >= 0 && m <= 6) {
        word = "five";
    } else if (m >= 7 && m <= 12) {
        word = "ten";
    } else if (m >= 13 && m <= 18) {
        word = "quarter";
    } else if (m >= 19 && m <= 25) {
        word = "twenty";
    } else if (m >= 26 && m <= 30) {
        word = "half";
    }

    if (word2 != null) {
        alert(word2);
    }
    document.getElementsByTagName(word)[0].style.color = "white";
    document.getElementsByTagName(key)[0].style.color = "white";
    
    if (word == "five" || word == "ten" || word == "twenty") {
        document.getElementsByTagName('minutes')[0].style.color = "white";
    } else {
        document.getElementsByTagName('minutes')[0].style.color = "#5C5C5C";
    }

    switch (h) {
        case 1:
            hour = "one";
            break;
        case 2:
            hour = "two";
            break;
        case 3:
            hour = "three";
            break;
        case 4:
            hour = "four";
            break;
        case 5:
            hour = "fiveh";
            break;
        case 6:
            hour = "six";
            break;
        case 7:
            hour = "seven";
            break;
        case 8:
            hour = "eight";
            break;
        case 9:
            hour = "nine";
            break;
        case 10:
            hour = "tenh";
            break;
        case 11:
            hour = "eleven";
            break;
        case 12:
            hour = "twelve";
            break;
    }
    document.getElementsByTagName(hour)[0].style.color = "white";

    if (m == 0) {
        document.getElementsByTagName(oclock)[0].style.color = "white";
    }

    var t = setTimeout(function () {
        show();
    }, 10000);
}

show();



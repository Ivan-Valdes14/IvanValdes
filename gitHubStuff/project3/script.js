function testLength(value, length) {
    if (value === length) {
        return true;
    } else {
        return false;
    }
}


function testNumber(value) {
    if (!isNaN(value) && value != "" && value != "\n") {
        return true;
    } else {            
        return false;
    }   
}

function numberOfWords(value, ttc){
    let count = 0;
    re = /\n/;
    //console.log(value);
    //console.log(ttc);
    for(i in value){
        if(value[i] == "" || (value[i].indexOf("\n") >-1 && value[i].indexOf("\n") <= 1)){
            count++;
        }
    }
    //console.log(count);

    if(value.length === 1){
        ttc.innerHTML = 'Your sentence has a total amount of ' + (value.length - count) + ' word';
    }else{
        ttc.innerHTML = 'Your sentence/sentences have a total amount of ' + (value.length - count) + ' words';
    }
    return true;
}

function numberOfUniqueWords(value, ttc){

    let array = value;

    let count = 0;

    let transformedArray = array.map(word => word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase());

    let set = new Set(transformedArray);
    
    for (let item of set) {
        if(!testNumber(item)){
            count++;
        }
    }

    ttc.innerHTML = 'Your sentences have a total amount of ' + count + ' unique words';



    return true;
}

function numberCount(value, ttc) {
    let num = 0;
    for (compare in value) {
        if(testNumber(value[compare])){
            num++;
        }
    }

    ttc.innerHTML = 'Your sentences have a total amount of ' + num + ' numbers';
        
    
    return true;
}

function sentenceCount(value, ttc) {
    let sen = 0;
    let re = /\./g;
    for (compare in value) {
        if(re.test(value[compare])){
            sen++;
        }
    }
    if(sen === 1){
        ttc.innerHTML = 'Your entry has a total of ' + sen + ' sentence';
    }
    else{
        ttc.innerHTML = 'Your entry has a total of ' + sen + ' sentences';
    }
    return true;
}

function longWordCount(value, ttc) {
    let lwc = 0;
    let re2 = /\.|,/g;
    for (compare in value) {
        if(re2.test(value[compare])){
            if(((value[compare].length - 1) > 5) && (!testNumber(value[compare]))){
                lwc++;
            }    
        }
        else{
            if(value[compare].length > 5 && (!testNumber(value[compare]))){
                lwc++;
            }
        }
        ttc.innerHTML = 'Your sentences have a total amount of ' + lwc + ' long words';
    }
    return true;
}

function mostFrequentWord(value, ttc) {
    let mfw = "";
    let maxCount = 0;
    let count2 = 0;
    for (compare in value) {
        count2 = 0;
        for (i in value) {
            if((value[compare].split('.').join("").toLowerCase() == value[i].split('.').join("").toLowerCase()) || (value[compare].split('.').join("").toLowerCase() == value[i].split('.').join("").toLowerCase())){
                count2++;
            }
        }
        if(count2 > maxCount){
            maxCount = count2;
            mfw = value[compare]
        }
    }
    ttc.innerHTML = 'Your most frequent word was \'' + mfw + '\'';
    return true;
}




function analyzeText() {
    event.preventDefault();
    numberOfWords(document.getElementById('user-text').value.split(" "), document.getElementById('wordCount'));
    numberOfUniqueWords(document.getElementById('user-text').value.split(" "), document.getElementById('uwc'));
    numberCount(document.getElementById('user-text').value.split(" "), document.getElementById('nc'));
    sentenceCount(document.getElementById('user-text').value.split(" "), document.getElementById('sc'))
    longWordCount(document.getElementById('user-text').value.split(" "), document.getElementById('lwc'));
    mostFrequentWord(document.getElementById('user-text').value.split(" "),document.getElementById('mfw'));
    
    //console.log(mysary);
    return false;
}
/*This is a sample file used as input for Project. It contains regular English text in sentences and paragraphs that are analyzed by program. The counts total number of words. also long. word considered if has more than five characters. counting periods. most least frequent. concludes. Have nice day.*/
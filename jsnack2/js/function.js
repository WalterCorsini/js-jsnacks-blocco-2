function longWord(text1,text2){
    let result="";
    console.log(text1.length, text2.length);
    if(text1.length > text2.length){
        return result = text1;
        alert("parola 1");
    } else if (text1.length < text2.length){
        return result = text2;
        alert("parola 2");
    } else {
        return result ="uguale";
        alert("uguale");
    }
}
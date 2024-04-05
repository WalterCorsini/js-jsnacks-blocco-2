function longWord(text1,text2){
    let result="";
    console.log(text1.length, text2.length);
    if(text1.length > text2.length){
        result = text1;
        alert("parola 1");
    } else if (text2.length < text2.length){
        result = text2;
        alert("parola 2");

    } else {
        result ="uguale";
        alert("uguale");
    }
}
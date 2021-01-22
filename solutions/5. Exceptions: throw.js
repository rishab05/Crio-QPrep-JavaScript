function isAlphabet(X) {
    if(X.charCodeAt()>=65 && X.charCodeAt()<=122){
        return "Yes";
    }
    else{
        throw "Not Alphabet";
    }
};
//console.log(isAlphabet('S'));
module.exports = isAlphabet;

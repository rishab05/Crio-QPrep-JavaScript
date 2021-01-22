let modify = (array) => {
    for(let i=0;i<array.length;i++){
	let check=0;
        for(let j = 2, s = Math.sqrt(array[i]); j <= s; j++){ 

        if(array[i]%j==0){
            array[i]*=2;
check=1;
            break;
        }

        }
	if(check===0 && array[i]!=0){
            array[i]++;}
        
    else{
        // do nothing for 0
    }
    }
    return array;
}

module.exports = modify;

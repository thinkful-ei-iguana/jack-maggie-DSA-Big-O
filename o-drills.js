function sheepCount(num){ //O(n) runtime
    for(let i = num; i > 0; i--){
        console.log(`${i}: Another sheep jumps over the fence`);
    }
    console.log('All sheep jumped over the fence');
}

function powerCalc(base, power){ //O(n) runtime
    let x = base;
    for(let i = 1; i < power; i++){
        x *= base;
    }
    return x;
}

function revStr(string){ //O(n) runtime
    let res = '';
    for(let i = string.length -1; i >= 0; i--){
        res = res + string[i];
    }
    return res;
}

function nTri(nth){ //O(n) runtime
    let res = 1;
    inc = 1;
    for(let i = 1; i < nth; i ++){
        inc++;
        res = res + inc;
    }
    return res;
}

function splitter(string, splChar){ //O(n) runtime
    let res = []; 
    let curString = ''; 
    for(let i = 0; i < string.length; i++){ 
        if(string[i] === splChar){ 
            res.push(curString); 
            curString = ''; 
        } else { 
            curString = curString + string[i]; 
        }
    }
    res.push(curString); 
    return res;
}

function fib(num){ //O(n)
    resArr = [];
    for(let i = 0; i < num; i++){
        if(i < 2){
            resArr.push(1);
        } else {
            resArr.push(resArr[i-1] + resArr[i-2]);
        }
    }
    return resArr
}
 
function fact(num){ //O(n) runtime 
    res = 1;
    for(let i = 1; i <= num; i++){
        res = res*i;
    }
    return res;
}

//sheepCount(3);
//console.log(powerCalc(10, 2));
//console.log(powerCalc(10, 3));
//console.log(revStr('hello'))
//console.log(nTri(6));
//console.log(splitter('02/20/2020', '/'))
//console.log(fib(7))
//console.log(fact(7));
const swapElements = (array, index1, index2) => {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
};
function byteString(n) {
    if (n < 0 || n > 255 || n % 1 !== 0) {
        throw new Error(n + " does not fit in a byte");
    }
    return ("000000000" + n.toString(2)).substr(-8)
  }

const RC4= (plain,k)=>{
    const length=plain.length;
    let s=[];
    for(let i=0;i<length;i++){
        s[i]=i;
    }  
    let j=0;
    console.log('~~~~~~~~~~EXPANSI ARRAY-S~~~~~~~~~~');
    console.log(`Plain Text : ${plain}`);
    console.log(`Array S : ${s}`);
    console.log(`Array K : ${k}`);
    console.log('-------------------------');
    for(let i=0;i<length;i++){
        console.log(`Iterasi ${i+1}`);
        console.log(`i = ${i}`);
        console.log(`j = (${j} + S[${i}] + K[${i} mod ${length}]) mod ${length} = (${j} + ${s[i]} + ${k[i % length]} mod ${length}) = ${(j+s[i]+k[i % length]) % length}`);
        j=(j+s[i]+k[i % length]) % length;
        console.log(`Swap (S[${i}],S[${j}])`);
        swapElements(s,i,j);
        console.log(`Hasil Array S : ${s}`);
        console.log('-------------------------');
    }
    j=0;
    let iteration=0;
    let key=[];
    let plainValue=[];
    let result=[];
    console.log('~~~~~~~~~~EXPANSI KUNCI-K~~~~~~~~~~');
    for(let i=0;i<length;i++){
        console.log(`Array S : ${s}`);
        console.log(`i : ${i}`);
        console.log(`j : ${j}`);
        console.log(`Iterasi ${i+1}`);
        console.log(`i = (${iteration} + 1) mod ${length} = ${(iteration+1) % length}`);
        iteration=(iteration+1) % length ;
        console.log(`j = (${j} + S[${iteration}]) mod ${length} = (${j} + ${s[iteration]}) mod ${length} = ${(j+s[iteration])%length}`);
        j=(j+s[iteration])%length;
        
        swapElements(s,iteration,j);
        console.log(`Swap (S[${i}],S[${j}]) -> S : ${s}`);
        key[i]=(s[iteration]+s[j]) % length;
        console.log(`K${i+1} = S[(S[${iteration}] + S[${j}]) mod ${length}] = S[${s[iteration]+s[j]} mod ${length}] = ${key[i]}`);
        console.log(`K${i+1} = ${byteString(key[i])}`);
        plainValue[i]=(plain.charCodeAt(i));
        
        result[i]=String.fromCharCode( key[i]^plainValue[i]);
        console.log('-------------------------');
    }
    console.log('~~~~~~~~~~Proses Enkrip~~~~~~~~~~');
    for(let i = 0;i<length;i++){
        console.log(`Plain : ${plain[i]}`);
        console.log(`Plain Text : ${byteString(plain.charCodeAt(i))}`);
        console.log(`Key : ${byteString(key[i])}`);
        console.log(`Chiper Text : ${byteString(key[i]^plainValue[i])}`);
        console.log(`Hasil Chiper : ${result[i]}`);
        console.log('--------------------------');
    }
    console.log(`HASIL ENKRIP = ${result.join('')}`);
    console.log('~~~~~~~~~~Proses Dekrip~~~~~~~~~~');
    for(let i = 0;i<length;i++){
        console.log(`Chiper : ${result[i]}`);
        console.log(`Chiper Text : ${byteString(key[i]^plainValue[i])}`);
        console.log(`Key : ${byteString(key[i])}`);
        console.log(`Plain Text : ${byteString(plain.charCodeAt(i))}`);
        console.log(`Plain : ${plain[i]}`);
        console.log('--------------------------');
    }
    console.log(`HASIL ENKRIP = ${plain}`);
}


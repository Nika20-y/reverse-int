module.exports = function reverse (n) {
    if(n<0){
        n = n-n*2;
    }
    n = String(n);
    let arr = n.split('');
    arr = arr.reverse();
    arr = arr.join('')
    n = Number(arr)
    return n;
}

module.exports = function reverse (n) {
    let str = n.toString(), temp = "";
    for (let i = str.length - 1; i > -1; --i) {
        temp += str[i];
    }
    n = parseInt(temp);
    return n;
}

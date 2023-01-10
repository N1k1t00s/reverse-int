module.exports = function reverse (n) {
    n = n.toString();
    let temp = "";
    for (let i = n.length; i > 0; --i) {
        temp += i;
    }
    return temp;
}

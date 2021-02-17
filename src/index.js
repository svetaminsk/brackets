module.exports = function check(str, bracketsConfig) {
  const result = bracketsConfig.map((bracket) => bracket.join(''));
    for (let i = 0; i < result.length; i += 1) {
        if (str.includes(result[i])) {
            str = str.replace(result[i], '');
            i = -1;
        }
    }
    return str.length === 0;
};

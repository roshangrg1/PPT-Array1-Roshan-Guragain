const firstUniqChar = function (s) {
    const obj = {};
    const strArr = s.split('');
  
    for (let element of strArr) {
      obj[element] = (obj[element] || 0) + 1;
    }
  
    return strArr.findIndex((value) => obj[value] === 1);
  };

  console.log(firstUniqChar("hyhiteshsir"))
function stringChop(str, size) {
      let arr = [];
      if(str == null){
          return arr;
      }
      let i = 0;
      while (i <= str.length-1) {
          arr.push(str.slice(i, i+size));
          i = i + size;
      }
      return arr;
  }
  const str = null;
  const size = 5;
  console.log(stringChop(str, size));
  
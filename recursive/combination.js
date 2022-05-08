function comb(arr) {
  let result = []
  if (arr.length === 0) return ['']
  if (Array.isArray(arr[0])) {
      let temp = comb(arr.slice(1))
      for(let i=0; i<arr[0].length;i++) {
          for(let j=0; j<temp.length;j++){
              result.push(arr[0][i].concat(temp[j]))
          }
      }
  }
  return result
}
console.log(JSON.stringify(comb([['L','P'],['L','P']]))) // ["LL","LP","PL","PP"]
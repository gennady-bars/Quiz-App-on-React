function nextBigger(n){
  let findPermutations = (string) => {
    string = String(string)
    if (!string || typeof string !== "string"){
      return "Please enter a string"
    } else if (string.length < 2 ){
      return string
    }
  
    let permutationsArray = [] 
     
    for (let i = 0; i < string.length; i++){
      let char = string[i]
  
      if (string.indexOf(char) != i)
      continue
  
      let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)
  
      for (let permutation of findPermutations(remainingChars)){
        permutationsArray.push(char + permutation) }
    }
    
    return permutationsArray
  }
  let res = findPermutations(n).map(Number).sort((a, b) => a - b)
  let final = res.findIndex(x => x === n)
  if (final === res.length - 1) return -1
  
  return res[final + 1]
}

console.log(nextBigger(2017));

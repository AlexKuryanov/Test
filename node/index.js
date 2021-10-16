function nextPrime(n) {
  let arr = [];
  let result;
  if ( n <= 1) {
    return 2;
  } else {
      for (let i = n; i < n * 3; i++) {
	      let counter = 0;
		  for (let j = 1; j <= n * 3; j++) {
			  if (i % j == 0) {
		          counter++;
              }
		  }
	      if (counter === 2) {
		      arr.push(i);
	      }
      }
	  result = arr.find(el => el > n);
	  return result;
  }
}

nextPrime(10);

  // 1------------------Helper function to square a number
  function sqNs(number) {
    return number * number;
  }

// 2-------------------Helper function to add two numbers
function adNs(n1, n2) {
    return n1 + n2;
  }
  

  
  //3----------------- Main function to perform the operation
  function ad_sq(x, y) {
    const sum = adNs(x, y);
    const rs = sqNs(sum);
    return rs;
  }
  
  // Example of usage:
  const num1 = 13;
  const num2 = 15;
  const rs = ad_sq(num1, num2);
  
  console.log(`(${num1} + ${num2})^2 = ${rs}`);

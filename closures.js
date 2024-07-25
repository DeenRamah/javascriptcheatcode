//closures occur when a function is defined within another function, allowing the inner function to access variables from the outer function even after the outer function has finished executing.The closure function retains access to outer variables
function closureExample(){
  const outerVariable="am enclosed";
  return function(){
    console.log(outerVariable);
  };
}
const closureFunction=closureExample();
closureFunctio();

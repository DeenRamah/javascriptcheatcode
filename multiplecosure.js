function outerFunction(message){
  return function(){
    console.log(message);
  };
}

let closure1 = outerFunction("Hello");
let closure2 = outerFunction("Hola");

closure1();
closure2();

type Constructor = {new(...args: any[]): {}}
interface Teste {
  imprimir(): void
}

//class decorator (put something before and after super)
function Decorar(construcor: Constructor){
  return class extends construcor{
    constructor(...args: any){
      super(...args)
    }
  }
}

//class decorator adding new method.
function addPrint(constructor: Function) {
  constructor.prototype.imprimir = function(){
    console.log(this);
  }
}

//@addPrint
class Teste {
  constructor(){
  }
}

new Teste().imprimir()

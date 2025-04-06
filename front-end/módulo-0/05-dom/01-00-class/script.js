class Retangulo {
  constructor(altura, largura) {
    this.altura = altura;
    this.largura = largura;
  }

  area() {
    return this.altura * this.largura;
  }
}

class Quadrado extends Retangulo {
  constructor(dimensao) {
    super(dimennsao, dimensao);
  }
}

var r1 = new Retangulo(2, 3);
console.log(r1);

var quadrado1 = new Quadrado(4);

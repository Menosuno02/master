export class Producto {
  public nombre: string;
  public imagen: string;
  public precio: number;

  constructor(name: string, image: string, price: number) {
    this.nombre = name;
    this.imagen = image;
    this.precio = price;
  }
}

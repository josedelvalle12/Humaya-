import React from 'react';

const Productos = () => {
  return (
    <section id="productos">
      <div>
        <div className="tituloProductos">
          <h2>PRODUCTOS</h2>
        </div>
        <div className="seccionProductos">
          <div className="seccionProductos1">
            <div className="imgProducto1"></div>
            <div className="infoProducto1">
              <h2>DULCE DE LECHE TRADICIONAL</h2>
              <p>
                Elaboración artesanal de principio a fin, con un sabor intenso,
                receta tradicional.
              </p>
              <p>Presentación en frasco de vidrio de 580g.</p>
              <div className="btnInfo1">
                <a href="#info1">+INFO</a>
              </div>
            </div>
          </div>
          <div className="seccionProductos2">
            <div className="infoProducto2">
              <h2>DULCE DE LECHE SIN AZÚCAR</h2>
              <p>
                Elaboración artesanal para cuidar de tu silueta sin renunciar a
                nada, endulzado naturalmente con stevia.
              </p>
              <p>Presentación en frasco de vidrio de 580g y 280g.</p>
              <div className="btnInfo2">
                <a href="#info2">+INFO</a>
              </div>
            </div>
            <div className="imgProducto2"></div>
          </div>
          <div className="seccionProductos3">
            <div className="imgProducto3"></div>
            <div className="infoProducto3">
              <h2>DULCE CHOCONUTT</h2>
              <p>
                Elaboración artesanal para el capricho dulce, combinación de
                dulce de leche, chocolate y pasta de avellanas. Una delicia
                única
              </p>
              <p>Presentación en frasco de vidrio de 280g.</p>
              <div className="btnInfo3">
                <a href="#info3">+INFO</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Productos;

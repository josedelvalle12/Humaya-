import React from 'react';

const QuienesSomos = () => {
  return (
    <section id="quienes-somos">
      <div className="tituloProductos" style={{height: '800px'}}>
        <div style={{padding: '50px'}}>
          <h2 style={{margin: '15px'}}>¿Quienes Somos?</h2>
          <p style={{color: '#fff', margin: '0 250px'}}>Somos un local especializado en la venta de dulce de leche. Nos enorgullece ofrecer productos de la más alta calidad, elaborados con ingredientes 100% orgánicos y naturales. Nuestro compromiso con la salud y el bienestar nos lleva a producir dulces de leche sin TACC (libres de gluten) y sin conservantes. Valoramos las tradiciones familiares y nos esforzamos por brindar sabores caseros que deleiten a nuestros clientes en cada bocado. En nuestro local, encontrarás una variedad de opciones dulces, donde la excelencia y la frescura son nuestra prioridad. Descubre el auténtico sabor del dulce de leche en cada producto que ofrecemos.</p>
        </div>

        <div>
          <h2>Ubicación</h2>      
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.3163304489563!2d-58.37580341111539!3d-34.6214455886714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a334d33019ea9d%3A0x3730148234276727!2sAv.%20San%20Juan%2C%20C1147%20CABA!5e0!3m2!1ses-419!2sar!4v1688705126154!5m2!1ses-419!2sar" width="600" height="450" style={{display: 'flex', margin:'0 auto'}} title='1' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>    
        </div>
        
      </div>
    </section>
    
  );
};

export default QuienesSomos;

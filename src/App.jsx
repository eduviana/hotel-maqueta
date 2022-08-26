import "./App.css";
import logo from "./assets/logo.png";
import instagram from "./assets/social-media/instagram.png";
import facebook from "./assets/social-media/facebook.png";
import youtube from "./assets/social-media/youtube.png";
import twitter from "./assets/social-media/twitter.png";

import habitacion1 from "./assets/departamentos/habitacion1.png";

import restaurant from "./assets/instalations/restaurant.png";

function App() {
  return (
    <div className="contenedor">
      <header className="header">
        <div className="logoContainer">
          <img src={logo} alt="logo" />
        </div>

        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Departamentos</a>
          <a href="#">Instalaciones</a>
          <a href="#">Galería</a>
          <a href="#">Sobre Nosotros</a>
        </nav>
        <div className="socialMedia">
          <img src={instagram} alt="instagram" />
          <img src={facebook} alt="facebook" />
          <img src={youtube} alt="youtube" />
          <img src={twitter} alt="twitter" />
        </div>
      </header>

      <section className="hero">
        <div className="promotion">
          <h2>20% OFF</h2>
          <h3>Promociones Estadia + Cena</h3>
        </div>
      </section>

      {/* <main className="contenido">
        <section>Nuestros Departamentos</section>
        <section>Slider Yotube</section>
        <section>Instalaciones</section>
        <section>Galeria</section>
        <section>Reseñas</section>
      </main> */}

      <section className="departmens">
        <div className="titleContainer">
          <h4>Nuestros Departamentos</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
            viverra parturient diam sagittis nec cras.
          </p>
        </div>
        <div className="departmentContainer">
          <div className="departmentCard">
            <img src={habitacion1} alt="habitacion" />
            <div className="titleAndPrice">
              <h5>Family Room</h5>
              <span>$799</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              leo et Loremuntur veritatis. Pariatur, natus facilis aspernatur
              earum commodi placeat accusamus excepturi iure officiis impedit
              assumenda saepe voluptatem numquam alias quos quae!
            </p>
          </div>

          <div className="departmentCard">
            <img src={habitacion1} alt="habitacion" />
            <div className="titleAndPrice">
              <h5>Family Room</h5>
              <span>$799</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              leo et Lorem ipsum doaque rem vel paab officiis cum debitis?
            </p>
          </div>

          <div className="departmentCard">
            <img src={habitacion1} alt="habitacion" />
            <div className="titleAndPrice">
              <h5>Family Room</h5>
              <span>$799</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              nda architecto a corrupti quae, dignissimos non fugiat. Incidunt,
              placeat quia?
            </p>
          </div>
        </div>
      </section>

      <section className="slider">
        <iframe
          width="100%"
          height="720"
          src="https://www.youtube.com/embed/WJThNmE_ehE"
          title="JW Marriott Bucharest Grand Hotel - Hotel Video Presentation"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>

      <section className="instalaciones">
        <div className="titleContainer">
          <h4>Nuestras Instalaciones</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
            viverra parturient diam sagittis nec cras.
          </p>
        </div>

        <div className="instalationsContainer">
          <div className="instalationCard">
            <img src={restaurant} alt="" />
            <h5>Restaurant</h5>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </div>
          <div className="instalationCard">
            <img src={restaurant} alt="" />
            <h5>Restaurant</h5>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </div>
          <div className="instalationCard">
            <img src={restaurant} alt="" />
            <h5>Restaurant</h5>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </div>
          <div className="instalationCard">
            <img src={restaurant} alt="" />
            <h5>Restaurant</h5>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </div>
          <div className="instalationCard">
            <img src={restaurant} alt="" />
            <h5>Restaurant</h5>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </div>
          <div className="instalationCard">
            <img src={restaurant} alt="" />
            <h5>Restaurant</h5>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </div>
          <div className="instalationCard">
            <img src={restaurant} alt="" />
            <h5>Restaurant</h5>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </div>
          <div className="instalationCard">
            <img src={restaurant} alt="" />
            <h5>Restaurant</h5>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </div>
        </div>
      </section>

      <section className="galeria">
        <div className="titleContainer">
          <h4>Galería</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
            viverra parturient diam sagittis nec cras.
          </p>
        </div>



        <div className="grid-wrapper">
	<div>
		<img src="https://images.unsplash.com/photo-1541845157-a6d2d100c931?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="" />
	</div>
	<div>
		<img src="https://images.unsplash.com/photo-1588282322673-c31965a75c3e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1351&amp;q=80" alt="" />
	</div>
	<div className="tall">
		<img src="https://images.unsplash.com/photo-1588117472013-59bb13edafec?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" alt="" />
	</div>
	<div className="wide">
		<img src="https://images.unsplash.com/photo-1587588354456-ae376af71a25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" />
	</div>
	<div>
		<img src=" https://images.unsplash.com/photo-1558980663-3685c1d673c4?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=60" alt="" />
	</div>
	<div className="tall">
		<img src="https://images.unsplash.com/photo-1588499756884-d72584d84df5?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2134&amp;q=80" alt="" />
	</div>
	<div className="big">
		<img src="https://images.unsplash.com/photo-1588492885706-b8917f06df77?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80" alt="" />
	</div>
	<div>
		<img src="https://images.unsplash.com/photo-1588247866001-68fa8c438dd7?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=564&amp;q=80" alt="" />
	</div>
	<div className="wide">
		<img src="https://images.unsplash.com/photo-1586521995568-39abaa0c2311?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="" />
	</div>
	<div className="big">
		<img src="https://images.unsplash.com/photo-1572914857229-37bf6ee8101c?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80" alt="" />
	</div>
	<div className="tall">
		<img src="https://images.unsplash.com/photo-1588453862014-cd1a9ad06a12?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80" alt="" />
	</div>
	<div>
		<img src="https://images.unsplash.com/photo-1588414734732-660b07304ddb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=675&amp;q=80" alt="" />
	</div>
	<div>
		<img src="https://images.unsplash.com/photo-1588224575346-501f5880ef29?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="" />
	</div>
	<div>
		<img src="https://images.unsplash.com/photo-1574798834926-b39501d8eda2?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80" alt="" />
	</div>
	<div>
		<img src="https://images.unsplash.com/photo-1547234935-80c7145ec969?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1353&amp;q=80" alt="" />
	</div>
	<div className="wide">
		<img src="https://images.unsplash.com/photo-1588263823647-ce3546d42bfe?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=675&amp;q=80" alt="" />
	</div>
	<div>
		<img src="https://images.unsplash.com/photo-1587732608058-5ccfedd3ea63?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="" />
	</div>
	<div>
		<img src="https://images.unsplash.com/photo-1587897773780-fe72528d5081?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1489&amp;q=80" alt="" />
	</div>
	<div className="wide">
		<img src="https://images.unsplash.com/photo-1588083949404-c4f1ed1323b3?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1489&amp;q=80" alt="" />
	</div>
	<div>
		<img src="https://images.unsplash.com/photo-1587572236558-a3751c6d42c0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="" />
	</div>
	<div className="wide">
		<img src="https://images.unsplash.com/photo-1583542225715-473a32c9b0ef?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="" />
	</div>
	<div className="big">
		<img src="https://images.unsplash.com/photo-1527928159272-7d012024eb74?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="" />
	</div>
	<div>
		<img src="https://images.unsplash.com/photo-1553984840-b8cbc34f5215?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="" />
	</div>
	<div>
		<img src="https://images.unsplash.com/photo-1433446787703-42d5bf446876?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1351&amp;q=80" alt="" />
	</div>
	<div className="big">
		<img src="https://images.unsplash.com/photo-1541187714594-731deadcd16a?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="" />
	</div>
	<div className="tall">
		<img src="https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80" alt="" />
	</div>
	<div>
		<img src="https://images.unsplash.com/photo-1421930866250-aa0594cea05c?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1355&amp;q=80" alt="" />
	</div>
	<div>
		<img src="https://images.unsplash.com/photo-1493306454986-c8877a09cbeb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1381&amp;q=80" alt="" />
	</div>
	<div className="wide">
		<img src="https://images.unsplash.com/photo-1536466528142-f752ae7bdd0c?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="" />
	</div>
</div>

      </section>





















      

      <section className="reseñas">Reseñas</section>

      <footer className="footer">
        <h3>FOOTER</h3>
      </footer>

      {/* <aside className="sidebar">
        <h3>SIDEBAR</h3>
      </aside>
      <div className="widget-1">
        <h3>WIDGET 1</h3>
      </div>
      <div className="widget-2">
        <h3>WIDGET 2"</h3>
      </div> */}
    </div>
  );
}

export default App;

// <div className="contenedor">
//       <header className="header">
//         <h2>HEADER</h2>
//       </header>

//       <main className="contenido">
//         <h1>Contenido</h1>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsa
//           tenetur odio tempora vero at sed molestias possimus fugit itaque vel
//           quasi, cumque, ex iste quisquam. Totam fuga explicabo voluptate Lorem,
//           ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
//           debitis cumque ullam neque ex nulla! Perferendis, quae maxime
//           voluptatem ut enim odit nisi laudantium aliquid debitis quos.
//           Voluptas, sequi quod Lorem ipsum dolor sit amet consectetur
//           adipisicing elit. Quam maxime laboriosam quas distinctio, blanditiis
//           hic dolor odit nulla delectus nemo minima repellat quasi numquam unde
//           sed cum, ad ex error. Lorem ipsum dolor sit, amet consectetur
//           adipisicing elit. Reiciendis laboriosam tempore mollitia nam,
//           repudiandae quasi numquam accusamus aliquam. Hic ea repellat animi
//           vitae amet ut quis aspernatur nulla tenetur minus!
//           <br />
//           <br />
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
//           incidunt est reiciendis nihil accusantium enim perspiciatis sit amet
//           quasi temporibus! Ab quo nam voluptates, rerum eos cupiditate at
//           beatae. Voluptate. Lorem ipsum dolor sit amet consectetur adipisicing
//           elit. Laborum aspernatur corporis ipsa alias hic, quaerat molestias
//           illo commodi, vero atque nulla, sequi accusamus porro neque quibusdam
//           sit ab incidunt ad Lorem ipsum dolor sit, amet consectetur adipisicing
//           elit. Accusamus corrupti ad at repellendus sunt cumque praesentium
//           maxime possimus impedit dolorem ipsa doloribus sequi officiis,
//           provident sit nobis aspernatur consequuntur recusandae!
//           <br />
//           <br />
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
//           eligendi excepturi earum minima dolor recusandae provident inventore
//           rem similique aspernatur magni sequi quidem soluta vel, totam porro
//           dolorum quae quaerat Lorem ipsum dolor sit amet consectetur
//           adipisicing elit. Alias, ea! Amet recusandae repudiandae doloribus
//           laborum saepe alias nostrum ipsum veritatis modi mollitia quidem quo
//           dolorem molestias reiciendis, similique sequi ducimus Lorem ipsum,
//           dolor sit amet consectetur adipisicing elit. Eius, doloribus veritatis
//           nisi aliquam quo quaerat inventore quae id odit voluptas laborum
//           distinctio molestias eos ipsa fugiat velit minima quasi dignissimos?
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
//           ducimus quibusdam officiis non voluptatibus alias cum magnam, vero hic
//           facere, omnis dolor dolorum. Rem eius fugiat temporibus debitis
//           incidunt possimus?
//         </p>
//       </main>
//       <aside className="sidebar">
//         <h3>SIDEBAR</h3>
//       </aside>
//       <div className="widget-1">
//         <h3>WIDGET 1</h3>
//       </div>
//       <div className="widget-2">
//         <h3>WIDGET 2"</h3>
//       </div>
//       <footer className="footer">
//         <h3>FOOTER</h3>
//       </footer>
//     </div>

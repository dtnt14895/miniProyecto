import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Nav from "./components/Nav/Nav";
import Line from "./components/Line/Line";
import Footer from "./components/Footer/Footer";

function App() {
  // La variable data es la que va a almacenar los datos de "stays.json" y setData nos ayudará a guardar esos datos en esa variable. Es necesario que inicialicemos esa variable como un array vacío para evitar errores.
  const [data, setData] = useState([]);
  const [filtro, setFiltro] = useState([]);
  const [searchForCity, setSearchForCity] = useState(true);
  const [searchForGuest, setSearchForGuest] = useState(false);
  const [total, setTotal] = useState(0);
  const [adult, setAdult] = useState(0);
  const [children, setChildren] = useState(0);
  const [stays, setStays] = useState();
  const city = ["Helsinki", "Turku", "Vaasa", "Oulu"];
  const country = "Finland";
  const [ciudad, setCiudad] = useState("Whole");

  // Función para traer los datos de "stays.json".
  const getData = async () => {
    // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      // Aquí guardamos los datos de "stays.json" en la variable data.
      setData(resJson);
      setFiltro(resJson);
      setStays(resJson.length);
    } catch (error) {
      console.log(error);
    }
  };
  // Este Hook te va a ejecutar la función getData cada vez que la página se renderice.
  useEffect(() => {
    getData();
  }, []);

  const handleButtonClick = () => {
    if (ciudad === "Whole") {
    } else {
      setFiltro(data);
      const filter = data.filter((e) => e.city === ciudad);
      setFiltro(filter);
      setStays(filter.length);
    }
  };
  const addAdult = () => {
    setAdult(adult + 1);
    setTotal(adult + children);
  };
  const minusAdult = () => {
    setAdult(adult - 1);
    setTotal(adult + children);
  };
  const addChildren = () => {
    setChildren(children + 1);
    setTotal(adult + children);
  };
  const minusChildren = () => {
    setChildren(children - 1);
    setTotal(adult + children);
  };
  return (
    <div>
      <header className="head">
        <Nav
          city={city}
          country={country}
          ciudad={ciudad}
          searchForCity={searchForCity}
          searchForGuest={searchForGuest}
          setCiudad={setCiudad}
          setSearchForCity={setSearchForCity}
          setSearchForGuest={setSearchForGuest}
          handleButtonClick={handleButtonClick}
          adult={adult}
          setAdult={setAdult}
          children={children}
          setChildren={setChildren}
          addAdult={addAdult}
          minusAdult={minusAdult}
          addChildren={addChildren}
          minusChildren={minusChildren}
          total={total}
        ></Nav>
      </header>
      <Line stays={stays}></Line>
      <div className="contenedor">
        {filtro.map((e, i) => {
          return (
            <div key={i}>
              <Card
                src={e.photo}
                superHost={e.superHost}
                type={e.type}
                rating={e.rating}
                title={e.title}
                beds={e.beds}
              ></Card>
            </div>
          );
        })}
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;

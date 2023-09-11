import logo from "../../img/logo.svg";

function Nav(props) {
  return (
    <div className="navContent">
      <div>
        <img className="img" src={logo} alt="imagen" />
        <div className="botones-como-barra">
          <button
            id="filtro"
            data-bs-toggle="modal"
            data-bs-target="#miModal"
            onClick={() => {
              props.setSearchForCity(true);
              props.setSearchForGuest(false);
            }}
          >{`${props.ciudad},${props.country}`}</button>
          <button
            onClick={() => {
              props.setSearchForCity(false);
              props.setSearchForGuest(true);
            }}
            data-bs-toggle="modal"
            data-bs-target="#miModal"
          >
            Add guests
          </button>
          <button className="search">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
      </div>
      <div
        className="modal fade modal-xl"
        id="miModal"
        tabIndex="-1"
        aria-labelledby="miModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="miModalLabel">
                Edit your search
              </h5>
              <button
                type="button"
                className="btn-close "
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body botones-como-barra">
              <button
                onClick={() => {
                  props.setSearchForCity(true);
                  props.setSearchForGuest(false);
                }}
                className="btn-amplio"
              >
                <h5>Location</h5>
                <h6>{`${props.ciudad},${props.country}`}</h6>
              </button>
              <button
                onClick={() => {
                  props.setSearchForCity(false);
                  props.setSearchForGuest(true);
                }}
                className="btn-amplio"
              >
                <h5>Guest</h5>
                <h6>{props.total+1}</h6>
              </button>
              <button 
                onClick={props.handleButtonClick}
                className="btn-amplio modal-search"
                data-bs-dismiss="modal"
              >
                <span className="material-symbols-outlined modal-search">search</span>Search
              </button>
            </div>
            <div>
              {props.searchForCity ? (
                <div className="modal-body">
                  {props.city.map((e, i) => (
                    <div key={i}>
                      <button className="btn-search-city"
                        onClick={() => {
                          props.setCiudad(e);
                        }}
                      >
                        <span className="material-symbols-outlined location">
                          location_on
                        </span>
                        {`${e},${props.country}`}
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <></>
              )}
            </div>
            <div>
              {props.searchForGuest ? (
                <div className="div">
                  <div className="chilOf">
                    <h1 className="adult">Adult</h1>
                    <span>Age 13 Or above</span>
                    <div className="buttons-src">
                      <button className="btn-guest" onClick={props.addAdult}>
                        <span className="material-symbols-outlined location guest">add</span>
                      </button>
                      <span>{` ${props.adult} `}</span>
                      <button className="btn-guest" onClick={props.minusAdult}>
                        <span className="material-symbols-outlined location guest">
                          remove
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="chilOf">
                    <h1 className="adult">Children</h1>
                    <span>Age 2-12</span>
                    <div className="buttons-src">
                      <button className="btn-guest" onClick={props.addChildren}>
                        <span className="material-symbols-outlined location guest">add</span>
                      </button>
                      <span>{` ${props.children} `}</span>
                      <button className="btn-guest" onClick={props.minusChildren}>
                        <span className="material-symbols-outlined location guest">
                          remove
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;

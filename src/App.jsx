// FILE: App.jsx
import { useState, useEffect } from "react";
import { Routes, Route, useFetcher } from "react-router-dom";
import Loader from "./components/Loader.jsx";
import Switch from "./components/Switch.jsx";
import "./App.css";
import { useSelector } from "react-redux";
import Scrollbar from "smooth-scrollbar";
import Checkbox from "./components/Checkbox.jsx";
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`app `}>
      <Loadinger isLoading={isLoading} />

      <Routes>
        <Route path="/" element={<Main isLoading={isLoading} />} />
        <Route path="/about" element={<About isLoading={isLoading} />} />
        <Route path="/bicycles" element={<Bicycles isLoading={isLoading} />} />
        <Route
          path="/accessories"
          element={<Accessories isLoading={isLoading} />}
        />
        <Route path="/contact" element={<Contact isLoading={isLoading} />} />
      </Routes>
    </div>
  );
};
function Main({ isLoading }) {
  const bikes = useSelector((state) => state.bikes);
  useEffect(() => {
    if (isLoading) {
      document.querySelector("#main-scrollbar").style.overflow = "hidden";
    } else {
      document.querySelector("#main-scrollbar").style.overflow = "auto";
      document.querySelector("#main-scrollbar").style.overflowX = "hidden";
    }
  }, [isLoading]);

  useEffect(() => {
    Scrollbar.init(document.querySelector("#main-scrollbar"));
  }, []);

  return (
    <main
      className={"main-container " + (isLoading ? " " : " active")}
      id="main-scrollbar"
    >
      <Navbar />
      <section id="content-bg"></section>
      <section id="content">
        <h4 className="super-title">Newly Launched</h4>
        <h1 className="website-title">Kryo X26 MTB</h1>

        <div className="specifications">
          <h5 className="sub-title">Specifications:</h5>
          <div className="spec-item">
            <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M288 256C288 273.7 273.7 288 256 288C238.3 288 224 273.7 224 256C224 238.3 238.3 224 256 224C273.7 224 288 238.3 288 256zM112 256C112 176.5 176.5 112 256 112C335.5 112 400 176.5 400 256C400 335.5 335.5 400 256 400C176.5 400 112 335.5 112 256zM256 336C300.2 336 336 300.2 336 256C336 211.8 300.2 176 256 176C211.8 176 176 211.8 176 256C176 300.2 211.8 336 256 336zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 64C149.1 64 64 149.1 64 256C64 362 149.1 448 256 448C362 448 448 362 448 256C448 149.1 362 64 256 64z"></path>
            </svg>
            <div className="spec-text">Lightweight 18{`"`} Frame</div>
          </div>
          <div className="spec-item">
            <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M288 256C288 273.7 273.7 288 256 288C238.3 288 224 273.7 224 256C224 238.3 238.3 224 256 224C273.7 224 288 238.3 288 256zM112 256C112 176.5 176.5 112 256 112C335.5 112 400 176.5 400 256C400 335.5 335.5 400 256 400C176.5 400 112 335.5 112 256zM256 336C300.2 336 336 300.2 336 256C336 211.8 300.2 176 256 176C211.8 176 176 211.8 176 256C176 300.2 211.8 336 256 336zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 64C149.1 64 64 149.1 64 256C64 362 149.1 448 256 448C362 448 448 362 448 256C448 149.1 362 64 256 64z"></path>
            </svg>
            <div className="spec-text">Steel Suspension Fork</div>
          </div>
          <div className="spec-item">
            <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M288 256C288 273.7 273.7 288 256 288C238.3 288 224 273.7 224 256C224 238.3 238.3 224 256 224C273.7 224 288 238.3 288 256zM112 256C112 176.5 176.5 112 256 112C335.5 112 400 176.5 400 256C400 335.5 335.5 400 256 400C176.5 400 112 335.5 112 256zM256 336C300.2 336 336 300.2 336 256C336 211.8 300.2 176 256 176C211.8 176 176 211.8 176 256C176 300.2 211.8 336 256 336zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 64C149.1 64 64 149.1 64 256C64 362 149.1 448 256 448C362 448 448 362 448 256C448 149.1 362 64 256 64z"></path>
            </svg>
            <div className="spec-text">Steel Hardtail Frame</div>
          </div>
        </div>
        <div className="primary-btn mt-4">Buy Now</div>
      </section>
      <section id="new-arrivals">
        <h2 className="section-title">New Arrivals</h2>
        <div className="bike-cards">
          {bikes.map((bike, index) => (
            <>
              <div className="bike-card">
                <div className="bike-image">
                  <img src={bike.src} alt={"bike " + index + " image"} />
                </div>
                <div className="bike-tag">{bike.tag}</div>
                <h2 className="bike-title">{bike.name}</h2>
                <div className="bike-rating"></div>
                <div className="bike-cost">
                  <bdi>${bike.price}.00</bdi>
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
    </main>
  );
}

function About({ isLoading }) {
  return (
    <main className={"main-container " + (isLoading ? " " : " active")}>
      <Navbar />
      <section id="content">
        <h1>About</h1>
      </section>
    </main>
  );
}

function Bicycles({ isLoading }) {
  return (
    <main className={"main-container " + (isLoading ? " " : " active")}>
      <Navbar />
      <section id="content">
        <h1>Bicycles</h1>
      </section>
    </main>
  );
}

function Accessories({ isLoading }) {
  return (
    <main className={"main-container " + (isLoading ? " " : " active")}>
      <Navbar />
      <section id="content">
        <h1>Accessories</h1>
      </section>
    </main>
  );
}

function Contact({ isLoading }) {
  return (
    <main className={"main-container " + (isLoading ? " " : " active")}>
      <Navbar />
      <section id="content">
        <h1>Contact</h1>
      </section>
    </main>
  );
}

function Navbar() {
  const cart = useSelector((state) => state.cart);
  const isActive = useSelector((state) => state.isActive);
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="52.000000pt"
          height="29.000000pt"
          fill="currentColor"
          viewBox="0 0 520.000000 292.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,292.000000) scale(0.100000,-0.100000)"
            fill="currentColor"
            stroke="none"
          >
            <path
              d="M3303 2878 c-57 -28 -66 -118 -20 -213 14 -27 55 -124 92 -215 37
-91 78 -189 92 -219 14 -31 22 -64 19 -76 -3 -12 -35 -41 -73 -67 -62 -41
-144 -113 -423 -368 -52 -48 -151 -138 -220 -200 -69 -63 -170 -155 -225 -205
-935 -857 -902 -829 -1029 -889 -142 -68 -253 -91 -409 -83 -170 8 -295 51
-439 149 -162 109 -287 289 -346 497 -11 40 -16 98 -15 206 0 141 2 155 32
242 143 423 542 667 960 588 175 -34 311 -104 439 -229 147 -142 226 -300 255
-513 l12 -92 51 47 c28 26 78 70 110 98 59 51 59 51 59 106 0 30 -6 66 -12 79
-29 56 -103 243 -103 260 0 18 14 19 273 19 242 0 275 2 298 18 50 32 219 187
219 200 0 9 -99 12 -462 12 -349 0 -469 3 -488 13 -15 7 -33 33 -46 67 -63
153 -145 373 -147 393 -2 21 1 22 124 27 98 4 131 9 152 23 54 35 60 118 12
166 l-25 26 -384 0 c-412 0 -422 -1 -445 -52 -14 -31 -14 -75 0 -106 19 -43
58 -57 157 -57 76 0 94 -3 123 -23 44 -30 73 -75 94 -145 10 -31 23 -74 31
-95 8 -21 12 -42 10 -46 -3 -4 -42 5 -88 20 -135 45 -225 59 -370 59 -137 0
-220 -13 -338 -51 -311 -100 -575 -348 -694 -649 -57 -145 -68 -212 -70 -400
0 -116 4 -192 12 -225 50 -190 88 -281 173 -410 59 -92 208 -244 290 -298 67
-43 209 -117 227 -117 7 0 20 -4 30 -9 73 -37 233 -64 382 -64 190 -1 325 31
490 113 130 65 149 81 900 770 129 118 303 276 385 351 83 75 238 216 345 314
217 198 304 267 325 258 8 -3 15 -9 15 -15 0 -8 153 -376 205 -493 12 -27 40
-92 61 -144 24 -57 53 -110 75 -133 31 -33 42 -38 82 -38 38 0 49 5 71 31 42
49 35 104 -34 253 -10 23 -32 77 -49 121 -18 44 -36 89 -41 100 -10 21 -74
174 -130 307 -17 43 -30 85 -28 95 9 47 199 66 348 35 287 -59 526 -248 630
-499 57 -137 64 -175 64 -343 0 -134 -3 -165 -23 -230 -80 -258 -280 -472
-526 -562 -113 -42 -172 -52 -300 -51 -111 1 -149 7 -260 41 -153 47 -345 198
-437 342 -76 119 -115 228 -138 388 l-12 83 -52 -48 c-28 -26 -77 -71 -109
-99 -72 -65 -76 -85 -42 -189 105 -311 283 -527 540 -655 201 -100 319 -124
568 -117 159 4 193 8 267 31 396 122 699 456 783 866 14 68 14 326 -1 400 -16
86 -61 218 -100 295 -158 316 -424 521 -777 602 -94 21 -342 22 -445 0 -79
-16 -101 -12 -120 23 -30 57 -150 366 -146 377 4 10 43 13 156 13 178 0 213
10 236 65 24 57 6 118 -43 143 -29 16 -558 15 -590 0z"
            />
          </g>
        </svg>
      </div>
      <div className="nav-links d-sm-flex d-none">
        <a href="/" className="nav-link">
          HOME
        </a>
        <a href="/bicycles" className="nav-link">
          BICYCLES
        </a>
        <a href="/accessories" className="nav-link">
          ACCESSORIES
        </a>
        <a href="/about" className="nav-link">
          ABOUT US
        </a>
        <a href="/contact" className="nav-link">
          CONTACT
        </a>
      </div>
      <div className="cart-btn  d-md-flex d-none">
        <div className="cart-cost">
          $
          {cart
            ? cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)
            : 0}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          id="ast-cart-svg"
          x="0px"
          y="0px"
          width="20px"
          height="20px"
          fill="white"
          viewBox="826 837.5 140 121"
          enableBackground="new 826 837.5 140 121"
          xmlSpace="preserve"
        >
          <path d="M878.77,943.611c0,2.75-1.005,5.131-3.015,7.141c-2.009,2.01-4.389,3.014-7.139,3.014c-2.75,0-5.13-1.004-7.139-3.014  c-2.01-2.01-3.015-4.391-3.015-7.141c0-2.749,1.005-5.129,3.015-7.138c2.009-2.011,4.389-3.016,7.139-3.016  c2.75,0,5.13,1.005,7.139,3.016C877.765,938.482,878.77,940.862,878.77,943.611z M949.846,943.611c0,2.75-1.005,5.131-3.015,7.141  s-4.39,3.014-7.141,3.014c-2.748,0-5.129-1.004-7.138-3.014c-2.01-2.01-3.015-4.391-3.015-7.141c0-2.749,1.005-5.129,3.015-7.138  c2.009-2.011,4.39-3.016,7.138-3.016c2.751,0,5.131,1.005,7.141,3.016C948.841,938.482,949.846,940.862,949.846,943.611z   M960,857.306v40.615c0,1.27-0.438,2.393-1.311,3.371s-1.943,1.548-3.212,1.705l-82.815,9.678c0.687,3.174,1.031,5.024,1.031,5.554  c0,0.846-0.635,2.539-1.904,5.076h72.979c1.375,0,2.564,0.503,3.569,1.508c1.006,1.005,1.508,2.194,1.508,3.569  c0,1.376-0.502,2.564-1.508,3.569c-1.005,1.005-2.194,1.507-3.569,1.507H863.54c-1.375,0-2.565-0.502-3.57-1.507  s-1.507-2.193-1.507-3.569c0-0.581,0.212-1.415,0.634-2.498c0.424-1.085,0.847-2.036,1.27-2.855c0.423-0.82,0.992-1.878,1.706-3.174  s1.124-2.076,1.23-2.34l-14.041-65.285h-16.183c-1.375,0-2.564-0.502-3.569-1.507c-1.005-1.005-1.508-2.195-1.508-3.57  c0-1.375,0.502-2.565,1.508-3.57c1.004-1.004,2.194-1.507,3.569-1.507h20.308c0.846,0,1.6,0.172,2.261,0.516  s1.177,0.754,1.547,1.229c0.37,0.476,0.714,1.124,1.032,1.944c0.316,0.819,0.528,1.507,0.634,2.062  c0.106,0.556,0.252,1.336,0.437,2.34c0.185,1.005,0.304,1.692,0.357,2.063h95.271c1.375,0,2.563,0.502,3.57,1.507  C959.497,854.741,960,855.931,960,857.306z"></path>
        </svg>
        <span className="cart-count">
          {cart.length > 0 ? cart.length : "0"}
        </span>
      </div>
      <div className="navbar-medium-toggle d-sm-none d-flex">
        <Checkbox />
      </div>

      <div className={"navbar navbar-small " + (isActive ? " active" : " ")}>
        <div className="nav-links">
          <a href="/" className="nav-link">
            HOME
          </a>
          <a href="/bicycles" className="nav-link">
            BICYCLES
          </a>
          <a href="/accessories" className="nav-link">
            ACCESSORIES
          </a>
          <a href="/about" className="nav-link">
            ABOUT US
          </a>
          <a href="/contact" className="nav-link">
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
}

function Loadinger({ isLoading }) {
  return (
    <section className={"loading-container " + (isLoading ? " active" : " ")}>
      <Loader />
      {/* <div className="moder">
        <Switch />
      </div> */}
    </section>
  );
}

export default App;

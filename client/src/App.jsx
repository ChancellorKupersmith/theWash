import React, { useState } from 'react'
import { Routes, Route, Outlet, Link, useNavigate, useLocation } from "react-router-dom";

import './App.css'

const Menu = React.lazy(() => import("./pages/Menu"));
const Home = React.lazy(() => import("./pages/Home"));
const Layout = () => (
  <div>
    <NavBtn />
    <Outlet />
  </div>
);

const NavBtn = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState(useLocation().pathname);
  
  const changeRoute = () => {
    switch(location){
      case "/":
        setLocation("/menu")
        return navigate("/menu");
      case "/menu":
        setLocation("/")
        return navigate("/")
    }
  };

  const btn = (
    <button className="circle-button spin" onClick={changeRoute}>
      {location == "/" ? "menu" : "home"}
    </button>
  );

  return location != "*" ? btn : <div></div>
}

const NoMatch = () => (
  <div>
    <h2>Nothing to see here!</h2>
    <p>
      <Link to="/">Go to the home page</Link>
    </p>
  </div>
);

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/menu"
            element={
              <React.Suspense fallback={<>...</>}>
                <Menu />
              </React.Suspense>
            }
          />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
};


export default App

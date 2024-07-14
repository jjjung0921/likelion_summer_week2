import { styled, ThemeProvider } from "styled-components";

import { Outlet } from "react-router-dom";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ebebeb;

  * { //object
    border: 1px solid black;
  }
`;

const Layout = () => { //function
  return ( 
    <>
      <Outlet />
    </>
  );
};

function App() {
  return (
    <>
      <Layout />
    </>
  );
}

export default App;
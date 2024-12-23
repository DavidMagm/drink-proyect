// import { useContext } from "react";
import {useRoutes} from "react-router-dom";
import {  MoneyPageProvider } from "../../Context";
import { Home } from "../Home";
import { Rate } from "../Rate";
import { Amount } from "../Amount";
import { Nav } from "../../Componets/Nav";

function AppRoutes() {
  let routes = useRoutes([
    {path: '/', element: <Home/>},
    {path: 'rate', element: <Rate/>},
    {path: 'amount', element: <Amount/>}
  ])
  return routes
}

function App() {
  return (
    <MoneyPageProvider>
        <Nav/>
        <AppRoutes/>
    </MoneyPageProvider>
  );
}

export default App;

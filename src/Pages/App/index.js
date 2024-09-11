// import { useContext } from "react";
import {useRoutes, BrowserRouter} from "react-router-dom";
import {  MoneyPageProvider } from "../../Context";
import { Home } from "../Home";
import { Rate } from "../Rate";
import { Amount } from "../Amount";

function AppRoutes() {
  let routes = useRoutes([
    {path: '/', element: <Home/>},
    {path: 'rate', element: <Rate/>},
    {path: 'amout', element: <Amount/>}
  ])
  return routes
}

function App() {
  return (
    <MoneyPageProvider>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </MoneyPageProvider>
  );
}

export default App;

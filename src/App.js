import { Routes ,Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIN from "./routes/signIn/signIn.component";
const Shop= ()=>{
  return(
    <h1>HEYY</h1>
  )
}
const App = () => {
    return (
      <Routes>
        <Route path='/' element={<Navigation/>}>
          <Route index  element={<Home/>}/>
          <Route path='shop'  element={<Shop/>}/>
          <Route path='sign-in' element={<SignIN></SignIN>}></Route>

        </Route>
      </Routes>
  );
};
export default App;

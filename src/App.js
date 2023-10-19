import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider,  } from "react-router-dom";
import Home from "./Page/Home/Home";
import About from "./Page/About/About";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
    </Route>
))

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;

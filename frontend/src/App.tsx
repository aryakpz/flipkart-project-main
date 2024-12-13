import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./components/mainPage";
import { SignIn } from "./components/user/sigin";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path='/main' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

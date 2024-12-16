import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./components/user/mainPage"
import { SignIn } from "./components/user/sigin";
import { Login } from "./components/user/login";
import { AdminSign } from "./components/admin/adminSign";
import { AdminLogin } from "./components/admin/adminLogin";
import { AdminPage } from "./components/admin/adminMainPage";
import { Dashboard } from "./components/admin/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path='/main' element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={< AdminSign/>} />
        <Route path='/adminlogin' element={<AdminLogin />} />
        <Route path="/adminpage" element={<AdminPage/>} />

        {/* ======= admin page= ======= */}
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

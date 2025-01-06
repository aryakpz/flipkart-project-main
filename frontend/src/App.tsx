import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./components/user/mainPage"
import { SignIn } from "./components/user/sigin";
import { Login } from "./components/user/login";
import { AdminSign } from "./components/admin/adminSign";
import { AdminLogin } from "./components/admin/adminLogin";
import { AdminPage } from "./components/admin/adminMainPage";
import { Dashboard } from "./components/admin/Dashboard";
import { FilterProvider } from "./context/useContext";
import { CommonSection } from "./components/user/CommonSection";
import { ProductBuyPage } from "./components/user/ProductBuyPage";

function App() {
  return (
    <FilterProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/sign" element={<SignIn />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/singlePage" element={<CommonSection />} />
          <Route path="/productBuy" element={<ProductBuyPage/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={< AdminSign />} />
          <Route path='/adminlogin' element={<AdminLogin />} />
          <Route path="/adminpage" element={<AdminPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </FilterProvider>
  )
}

export default App;  
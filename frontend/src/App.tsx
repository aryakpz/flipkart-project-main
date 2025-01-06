import { Route, Routes } from "react-router-dom";
import { MainPage } from "./components/user/mainPage"
import { SignIn } from "./components/user/sigin";
import { Login } from "./components/user/login";
import { AdminPage } from "./components/admin/adminMainPage";
import { Dashboard } from "./components/admin/Dashboard";
import { FilterProvider } from "./context/useContext";
import { CommonSection } from "./components/user/CommonSection";
import { ProductBuyPage } from "./components/user/ProductBuyPage";
import { UrlNotFound } from "./components/user/urlNotFound";
                                                 
function App() {                      
  return (                                 
    <FilterProvider>                       
        <Routes>            
          <Route path="/sign" element={<SignIn />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/singlePage" element={<CommonSection />} />
          <Route path="/productBuy" element={<ProductBuyPage/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/adminpage" element={<AdminPage />} />
          <Route path="/dashboard" element={<Dashboard />} />   
          <Route path="*" element={<UrlNotFound/>}    />                    
        </Routes>                                                                    
    </FilterProvider>                                                                             
  )                         
}                                                                                                               
                                                
export default App;       
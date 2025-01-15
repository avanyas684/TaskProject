import { Suspense, useEffect } from "react";
import { Route, Routes, useNavigate} from "react-router-dom";
import { authArray, dashboardAuthArray, routeConfig } from "./routeConfig";
// import { getLocalStorage } from "../utils/browserHandlers/browserStorageHandler";

export default function Router() {
  const navigate = useNavigate()
  const routes = routeConfig;
  // useEffect(() => {
  //   if (!getLocalStorage('access_token') && authArray.includes(window.location.pathname)) {
  //     navigate('/register')
  //   }else if (!getLocalStorage('access_token') && dashboardAuthArray.includes(window.location.pathname)) {
  //     navigate('/')
  //   }


  // })
  return (
<Suspense fallback={<div>Loading...</div>}>
    <Routes>
      {routes.map((item) => {
        return <Route path={item.path} key={item.path} element={item.component} />;
      })}
    </Routes>
    </Suspense>
  );
}

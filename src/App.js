import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard';
import { useAuth } from './Utils/ContextStore';
// import {useAuth} from './Utils/ContextStore'
import { AuthProvider } from './Utils/ContextStore';
import PrivateRoute from './Utils/PrivateRoute';
import ForgotPass from './Pages/ForgotPass';
import PrivateLogIn from './Utils/PrivateLogIn';
import UpdateProfile from './Pages/UpdateProfile';

function App() {

  return (
    <>

      <BrowserRouter>
        <AuthProvider>

          <Routes>

            <Route element={<PrivateRoute />}>
              <Route exact path="/" element={<Dashboard />} />
            </Route>

            {/* <Route element={<PrivateLogIn />}> */}
              <Route path="/Login" exact element={<Login />} />
              <Route path="/Forgot-Password" exact element={<ForgotPass />} />
              <Route path="/Signup" exact element={<Signup />} />
              <Route path="/Update-Profile" exact element={<UpdateProfile />} />
            {/* </Route> */}

            {/* login=> dont show login, register, forgot=-password, signup
not login=> dont show dashboard, */}
          </Routes>

        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

import React from 'react';
import SuperAdminFnl from './Components/Admin/Superadmin/SuperAdminFnl.js';
import 'antd/dist/antd.css';
import Signup from './Components/Admin/Signup/Signup.js';
//import Changepassword from './Product_owner/Resetpassward/Changepassword.js/Changepassword.js';
//import Success from './Components/Product_owner/Success/Success.js';
//import Login from './Components/Product_owner/Login/Login.js';
import Resetpassward from './Components/Forgotpassword/Resetpassward/Reserpassaward/Resetpassward.js';
//import Newpassword from "./Components/Forgotpassword/Resetpassward/Newpassword/Newpassword.js"
//import Emailreset from "./Product_owner/Resetpassward/Resetpassawardemail/Emailreset"
//import Resetmsg from "./Components/Forgotpassword/Resetpassward/Resetmsg/Resetmsg.js"
//import Checkmail from './Components/Forgotpassword/Resetpassward/Checkmail/Checkmail.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import Onboard from './Components/Admin/Superadmin/Dashboard/Onboard.js';
//import FormData from './Components/Admin/Superadmin/Dashboard/FormData.js';



function App() {

  return (

    <div className="App">

      <Router>
        <Switch>


          <Route exact path="/" component={SuperAdminFnl} />
          <Route exact path="/superadminfnl" component={SuperAdminFnl} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/resetpassward" component={Resetpassward} />




        </Switch>
      </Router>

      {/* <SuperAdminFnl/> */}
      {/* <Signup/> */}
      {/* <Onboard/> */}
      {/* <FormData/> */}
      {/* <Changepassword/> */}
      {/* <Login/> */}
      {/* <Success/>  */}
      {/* <Resetpassward/>  */}
      {/* <Checkmail/> */}
      {/* <Newpassword/>  */}
      {/* <Resetmsg/>  */}

    </div>
  );
}

export default App;

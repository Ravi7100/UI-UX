import React from 'react'
import {Link} from 'react-router-dom'
import './Login.css';
import logoImg from './images/logo.png'
import logoImg2 from './images/content.png' 


function Login() {
    return(
    <div>
    
        
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
       
        <main className="d-flex align-items-center min-vh-100 py-3 py-md-0">
        <div className="container" >
        <div className="card login-card">
            <div className="row no-gutters" >
                <div className="col-md-5">
                <img src={logoImg2} alt="login" className="login-card-img" />
                </div>
                <div className="col-md-7">
                    <div className="card-body">
                        <div className="brand-wrapper">
                            <img src={logoImg} alt="logo" className="logo"  />
                        </div>
                        <p className="login-card-description">Sign into your account</p>
                        <form action="#!" >
                            <div className="form-group">
                                <label for="email" className="sr-only">Email</label>
                                <input type="email" name="email" id="email" className="form-control" placeholder="Enter your id" />
                            </div>
                            <div className="form-group mb-4">
                                <label for="password" className="sr-only">Password</label>
                                <input type="password" name="password" id="password" className="form-control" placeholder="Password" />
                            </div>
                            < Link to="/Home"><input name="login" id="login" className="btn btn-block login-btn " type="button" value="Login" /></Link>
                        </form>
                        < Link to="/Reset">Forgot password?</Link> 
                       < Link to="/Signup"><p className="login-card-footer-text">Don't have an account </p></Link>
                    </div>
                </div>
            </div>
        </div>
     </div>
     </main> 
   </div> 
)
} 
export default Login;
  
  



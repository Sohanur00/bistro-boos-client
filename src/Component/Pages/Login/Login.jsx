/* eslint-disable no-unused-vars */
import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

import loginImg from '../../../assets/others/authentication.png'
import loginimg2 from '../../../assets/others/authentication1.png'
import { AuthContext } from '../../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const Login = () => {
    const captchaRef = useRef(null)
    const [disabled, setDisabled] = useState(true)
    const { signIn } = useContext(AuthContext)


    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/' ;

    useEffect(() => {

        loadCaptchaEnginge(6);

    })


    const handleLogin = event => {
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;

        console.log(email, password)
        signIn(email, password)
            .then(result => {

                const user = result.user;
                console.log(user);

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login successfully",
                    showConfirmButton: false,
                    timer: 1500
                   
                  });
                  navigate(from,{replace :true });
                
                })
               


    }

    const hanleValiDateCaptcha = () => {
        const value = captchaRef.current.value;
        if (validateCaptcha(value)) {
            setDisabled(false)

        } else {

            setDisabled(true)

        }

    }



    return (
        <div>
            <Helmet>
                <title>Bistro | Login </title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url(${loginImg})` }}>
            <div className="hero-content flex-col md:flex-row">
                <div className="text-center md:w-1/2 lg:text-left">

                    <img className='' src={loginimg2} alt="" />
                </div>
                <div className="card lg:w-1/3 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center p-4">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="captcha" ref={captchaRef} name="captcha" placeholder="" className="input input-bordered" required />
                            <button onClick={hanleValiDateCaptcha} className='btn btn-outline btn-xs mt-1'>Validate</button>

                        </div>
                        <div className="form-control mt-6">
                            <input disabled={disabled} className="btn btn-success btn-outline bg-red-50" type="submit" value='Login' />
                        </div>
                        <p className="text-center">New here?<Link to='/signup' className='text-blue-500 font-bold'>Create a New Account</Link> <br />Or sign in with </p>
                    </form>
                </div>
            </div>
        </div>

        </div>
       
    );
};

export default Login;
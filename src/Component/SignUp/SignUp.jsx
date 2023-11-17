
import signupImg from '../../assets/others/authentication2.png';
import { useForm } from "react-hook-form"
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';



const SignUp = () => {



    // const handleSignup = event => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const email = form.email.value;
    //     const password = form.password.value;

    //     console.log(email,password)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();


    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate() ;

    const onSubmit = (data) => {
        console.log(data);

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updateUserProfile(data.name, data.url)
                .then(() => {
                    console.log('user profile into updated')
                    reset();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "sign Up successfully",
                        showConfirmButton: false,
                        timer: 1500
                       
                      });
                      navigate('/');

                })
                .catch(errors => console.error(errors))
            })
    }



    return (

        <div>
            <Helmet>
                <title>Bistro | Sign up </title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>

            <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url(${signupImg})` }}>
                <div className="hero-content flex ">
                    <div className="text-center lg:text-left">

                        <img src={signupImg} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h1 className="text-5xl font-bold">Sign Up!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name='name' placeholder="" className="input input-bordered" required />
                                {errors.name && <span>This field is required</span>}



                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name='email' placeholder="password" className="input input-bordered" required />
                                {errors.email && <span>This field is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="url" {...register("url", { required: true })} placeholder="photo url" className="input input-bordered" required />
                                {errors.url && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true })} name='password' placeholder="password" className="input input-bordered" required />
                                {errors.password && <span>This field is required</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-success' type="submit" value="Sign Up" />

                                <p>Allready have an accaunt <Link className='btn btn-ghost text-blue-500 font-bold' to='/login'>login</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SignUp;
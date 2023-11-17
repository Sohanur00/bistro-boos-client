import signupImg from '../../assets/others/authentication2.png';
import { useForm } from "react-hook-form"


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
       
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {


        console.log(data)
    }



return (
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
                        <input type="text" {...register("name", { required: true })} name='name' placeholder="email" className="input input-bordered" required />
                        {errors.name && <span>This field is required</span>}



                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: true })} name='email' placeholder="password" className="input input-bordered" required />
                        
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password" , { required: true })} name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input className='btn btn-success' type="submit" value="Sign Up" />
                    </div>
                </form>
            </div>
        </div>
    </div>
);
};

export default SignUp;
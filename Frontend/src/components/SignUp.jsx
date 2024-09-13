import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  // Submit handler
  const onSubmit = (data) => {
    console.log(data); // This will only be logged if the form is valid
  };

  useEffect(() => {
    // Set the default theme to light
    document.documentElement.setAttribute("data-theme", "light");
  }, []);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-[600px]">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close modal button */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>

            <h3 className="font-bold text-lg">SignUp</h3>

            {/* Name Field */}
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter Your Name"
                className={`w-80 px-3 py-1 border rounded-md outline-none ${errors.name ? 'border-red-500' : ''}`}
                {...register("name", { required: "This field is required" })}
              />
              <br />
              {errors.name && (
                <span className="text-sm text-red-500">
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* Email Field */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter Your Email"
                className={`w-80 px-3 py-1 border rounded-md outline-none ${errors.email ? 'border-red-500' : ''}`}
                {...register("email", { required: "This field is required" })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Password Field */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter Your Password"
                className={`w-80 px-3 py-1 border rounded-md outline-none ${errors.password ? 'border-red-500' : ''}`}
                {...register("password", { required: "This field is required" })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-around mt-6">
              <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                SignUp
              </button>
              <p className="text-xl">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
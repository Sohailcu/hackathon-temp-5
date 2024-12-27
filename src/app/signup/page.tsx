import Image from "next/image";
import Link from "next/link"; // Import Link for navigation

function Signup() {
  return (
    <div className="w-full flex sm:flex-col md:flex-col lg:flex-row justify-start items-start">
      {/* Left */}
      <div className="sm:w-full md:w-full lg:w-[600px] sm:h-full lg:h-[500px] sm:m-0 sm:mt-10 lg:m-11 cursor-pointer">
        <Image 
          src={"/images/siguplogin/fashion.png"}
          width={400}
          height={400}
          alt="Mobile"
          className="w-full" 
        />
      </div>

      {/* Right */}
      <div className="sm:w-full lg:w-[600px] sm:h-full lg:h-[500px] my-11 flex flex-col justify-center items-center">
        <div className="w-[70%] h-[80%] mb-12">
          <div>
            <h1 className="sm:text-lg md:text-2xl lg:text-3xl font-semibold">Create an account</h1>
            <p className="text-md pt-2">Enter your details below</p>
          </div>
          <form action="">
            {/* Name Input */}
            <input 
              type="text" 
              placeholder="Name" 
              className="py-2 px-2 mt-5 w-72 bg-transparent border-b-4 border-gray-200 focus:outline-none placeholder-gray-400"
            /> 
            <br />
            
            {/* Email Input */}
            <input 
              type="email" 
              placeholder="Email or Phone Number" 
              className="py-2 px-2 mt-5 w-72 bg-transparent border-b-4 border-gray-200 focus:outline-none placeholder-gray-400" 
            /> 
            <br />
            
            {/* Password Input */}
            <input 
              type="password" 
              placeholder="Password" 
              className="py-2 px-2 mt-5 w-72 bg-transparent border-b-4 border-gray-200 focus:outline-none placeholder-gray-400"
            /> 
            <br />
            
            {/* Create Account Button */}
            <input 
              className="py-2 px-20 mt-5 w-72 bg-green-500 hover:bg-green-700 text-white hover:font-semibold rounded-sm cursor-pointer shadow-lg transition duration-200" 
              type="button" 
              value="Create Account" 
            />
            
            {/* Sign up with Google Button */}
            <div className="mt-4 flex items-center justify-center py-[6px] w-72 bg-white hover:bg-slate-100 rounded-sm cursor-pointer border border-gray-400">
              <Image 
                src="/images/social/Icon-Google.png" 
                alt="Google Icon" 
                width={20} 
                height={20} 
                className="mr-3" 
              />
              <span className="text-black hover:font-semibold">Sign up with Google</span>
            </div>

            {/* Login Link */}
            <p className="text-sm pt-2 mt-2 ml-[41px]">
              Already have an account? 
              <Link href="/login">
                <span className="font-semibold underline cursor-pointer ml-2 hover:text-blue-500">Log in</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;


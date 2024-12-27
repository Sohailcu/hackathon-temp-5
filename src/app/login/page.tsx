import Image from "next/image";
import Link from "next/link"; // Import Link for navigation

function Login() {
  return (
    <div className="w-full flex sm:flex-col md:flex-col lg:flex-row justify-start items-start">
      {/* Left */}
      <div className="sm:w-full md:w-full lg:w-[600px] sm:h-full lg:h-[500px] sm:m-0 sm:mt-10 lg:m-11 cursor-pointer">
        <Image 
          src={"/images/siguplogin/mobile.png"}
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
            <h1 className="sm:text-lg md:text-2xl lg:text-3xl font-semibold mt-8">Log in to Exclusive</h1>
            <p className="text-md pt-2 mt-1">Enter your details below</p>
          </div>
          <form action="">          
            {/* Email Input */}
            <input 
              type="email/number" 
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
              className="py-2 px-10 mt-8 bg-green-500 hover:bg-green-600 text-white hover:font-semibold rounded-sm cursor-pointer" 
              type="button" 
              value="Log in" 
            />
            {/* Forget Password Link */}
            <p className="text-[16px] text-red-500 pt-2 -mt-[38px] ml-40 font-normal underline cursor-pointer hover:font-semibold">
              Forget Password? 
              <Link href="/resetpassword"></Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;


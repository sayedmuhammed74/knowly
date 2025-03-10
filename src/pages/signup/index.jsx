'use client';

import Image from 'next/image';

// Images & Icons
import LoginPageImage from './../../../public/login/login.jpg';
import UsernameIcon from './../../../public/login/user.svg';
import LockIcon from './../../../public/login/lock.svg';
import PhoneIcon from './../../../public/login/phone.svg';
import { useState } from 'react';

const Signup = () => {
  const [remindMe, setRemindMe] = useState(false);
  return (
    <div className="flex justify-center items-center">
      <div className="container md:flex-row md:items-center md:h-[100vh]">
        <div className="md:w-3/4">
          <Image
            src={LoginPageImage}
            alt="Login"
            className="aspect-square object-contain"
          />
        </div>
        <form className="container">
          <h1 className="font-bold text-2xl mt-5 text-[#33424a]">Login</h1>
          <p className="px-2 mt-2 mb-3 text-sm text-gray-500">
            Please sign up to continue
          </p>
          <div className="flex gap-2 px-4 py-2.5 my-2 rounded-full overflow-hidden bg-gray-100">
            <Image className="w-6 h-6" src={UsernameIcon} alt="user-image" />
            <input className="login-input" type="text" placeholder="username" />
          </div>
          <div className="flex gap-2 px-4 py-2.5 my-2 rounded-full overflow-hidden bg-gray-100">
            <Image className="w-6 h-6" src={PhoneIcon} alt="phone-image" />
            <input className="login-input" type="text" placeholder="number" />
          </div>
          <div className="flex gap-2 px-4 py-2.5 my-2 rounded-full overflow-hidden bg-gray-100">
            <Image className="w-6 h-6" src={LockIcon} alt="lock-image" />
            <input
              className="login-input"
              type="password"
              placeholder="password"
            />
          </div>
          <button className="btn">Sign Up</button>
          <div className="flex items-center justify-between px-2">
            <p className="text-sm text-primary">Remind me next time</p>
            <div
              className={`w-9 h-4 rounded-full flex items-center border-primary border-2 cursor-pointer transition-all duration-100 ease-in ${
                !remindMe ? 'bg-white' : 'bg-primary'
              }`}
              onClick={() => setRemindMe((prev) => !prev)}
            >
              <div
                className={`h-4 w-4 rounded-full transition-all duration-200 ease-in ${
                  !remindMe ? 'bg-primary' : 'translate-x-[100%] bg-white'
                }`}
              ></div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

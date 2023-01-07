import "./App.css";
import { useEffect, useRef, useState } from "react";
import Input from "./components/input";
import {AiFillFacebook} from "react-icons/ai"
function App() {
  const ref = useRef();
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')

  const enable =username && password

  useEffect(() => {
    let images = ref.current.querySelectorAll("img"),
      total = images.length,
      current = 0;
    const imageSlider = () => {
      if (current > 0) {
        images[current - 1].classList.add("opacity-0");
      } else {
        images[total - 1].classList.add("opacity-0");
      }
      images[current].classList.remove("opacity-0");
      if (current == total - 1) {
        current = 0;
      } else {
        current += 1;
      }
    };
    imageSlider();
    let interval = setInterval(imageSlider, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [ref]);
  return (
    <div className="h-full w-full flex items-center gap-x-8 justify-center ">
      <div className="w-[380px] h-[581px] bg-logo-pattern relative bg-[length:468.32px_634.15px] bg-[top_left_-46px]">
        <div
          className="w-[250px] h-[538px] absolute top-[27px] right-[18px]"
          ref={ref}
        >
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity  duration-1000 ease-linear "
            src="https://www.secure.instagram.com/static/images/homepage/screenshots/screenshot1-2x.png/cfd999368de3.png"
          ></img>
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
            src="https://www.secure.instagram.com/static/images/homepage/screenshots/screenshot4-2x.png/8e9224a71939.png"
          ></img>
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
            src="https://www.secure.instagram.com/static/images/homepage/screenshots/screenshot3-2x.png/fe2540684ab2.png"
          ></img>
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
            src="https://www.secure.instagram.com/static/images/homepage/screenshots/screenshot2-2x.png/80b8aebdea57.png"
          ></img>
        </div>
      </div>

      <div className="h-[350px] bg-white border px-[40px] pt-10 pb-2">
        <a href="" className="flex justify-center mb-8">
          <img
            className="h-[51px]"
            src="https://www.secure.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
          ></img>
        </a>
        <form className="grid gap-y-1.5">
          <Input type="text" value={username}   onChange={e=> setUsername(e.target.value)} label="Phone number,username,email"></Input>
          <Input type="password" value={password}   onChange={e=> setPassword(e.target.value)} label="Password"></Input>
    
          <button type="submit" disabled={!enable} className="h-[30px] rounded bg-brand font-medium text-white text disabled:opacity-50">Log In</button>
          <div className="flex items-center">
            <div className="h-px bg-gray-300 flex-1"></div>
            <span className="px-4 text-[13px] text-gray-500 font-semibold">OR</span>
            <div className="h-px bg-gray-300 flex-1">
            </div>
          </div>
        </form>

        <div>
          <a href="#" className="flex justify-center items-center gap-x-2 text-sm font-semibold">
          <AiFillFacebook size={20}>
          </AiFillFacebook>
          Log in with Facebook</a>
        </div>
      </div>
    </div>
  );
}

export default App;

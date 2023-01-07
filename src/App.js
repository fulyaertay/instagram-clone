import "./App.css";
import { useEffect, useRef } from "react";
function App() {
  const ref = useRef();
  useEffect(() => {
    let images = ref.current.querySelectorAll("img"),
      total = images.length,
      current = 0;
      const imageSlider=()=>{
        
          if (current>0){
            images[current-1].classList.add('opacity-0')
          }else{
            images[total-1].classList.add('opacity-0')
          }
          images[current].classList.remove('opacity-0')
          if (current == total - 1) {
            current = 0;
            
          } else {
            current += 1;
          }
        
      }
      imageSlider()
    let interval= setInterval(imageSlider, 2000);
    return ()=>{
      clearInterval(interval)
    }
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

      <div className="h-[350px] bg-white border px-[50px] pt-8 pb-2">
        <a href="" className="flex justify-center">
          <img className="h-[51px]" src="https://www.secure.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"></img>
        </a>
        <form>
          <label for="" className="block relative">
            <input type="" name="" value="" className="bg-zinc-50 border outline-none focus:border-gray-300 rounded-sm w-full h-[38px]"></input>
            <small className="cursor-text pointer-events-none absolute top-1/2 left-2 text-xs text-gray-500 -translate-y-1/2">Phone number,username,email</small>
          </label>
        </form>
      </div>
    </div>
  );
}

export default App;

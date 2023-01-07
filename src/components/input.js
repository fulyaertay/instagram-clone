export default function Input({label, ...props}){
    return(
        <label className="block relative">
        <input
          required={true}

          className="bg-zinc-50 border px-2 outline-none text-xs focus:border-gray-400 rounded-sm w-full valid:pt-[10px] h-[38px] peer" {...props}
        
        ></input>
        <small className="cursor-text pointer-events-none absolute top-1/2 left-[9px] text-xs peer-valid:text-[10px] peer-valid:top-2.5 text-gray-500 transition-all -translate-y-1/2">
         {label}
        </small>
      </label>
    )

}
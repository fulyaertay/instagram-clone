import {createSlice} from "@reduxjs/toolkit"
const initialState={
    user:JSON.parse(localStorage.getItem("user")) || false
}
const auth=createSlice({
    name:"auth",
    initialState,
    reducers:{
        setUser:(state,action)=>{
            if(action.payload){
                localStorage.setItem("user",JSON.stringify(action.payload))
            }else{
                localStorage.removeItem("user")
            }
            state.user=action.payload   
        }
    }

})

export const {setUser}= auth.actions
export default auth.reducer
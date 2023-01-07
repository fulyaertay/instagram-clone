import {Navigate} from 'react-router-dom'

export default function PrivateRoute({children}){
    const user=false;
    if(!user){

    }
    return children

}
import { publicRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"

export const login = async (dispatch, userInfo)=>{
    dispatch(loginStart());
    try{
        const {data} = await publicRequest.post("/auth/login", userInfo);
        dispatch(loginSuccess(data));
    }
    catch(err){
        dispatch(loginFailure());
    }
}
import {useMutation} from "@tanstack/react-query";
import { api } from "../api/axiousInstance";
import axios from "axios";
import { setToken } from "../utills/token";

const useRegisterUser = () => {
    return  useMutation({
        mutationFn: async ({ userName, email, password }) => {
            const response = await api.post("/auth/register", {
                userName, email, password
            })
            return response.data
        },
        onSuccess: (data) => {
            console.log("data",data)
            return data        },
        onError: (data) => {
            console.log("Response failed", data)
        }
    })
};


const useLoginUser = () => {
    return useMutation({
        mutationFn: async ({ email, password }) => {
            const response = await api.post("/auth/login", {
                email, password
            })
            return response.data
        },
        onSuccess: (data) => {
            setToken(data.data)
        },
        onError:(data)=>{
            console.log("login failed",data)
        }
    })
}


//get cart

const useGetCartInfo=()=>{
    return useMutation({
        mutationFn:async({
            
        })
    })
}
export {useRegisterUser,useLoginUser}
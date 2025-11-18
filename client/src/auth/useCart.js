import { useMutation } from "@tanstack/react-query";
import { api } from "../api/axiousInstance";


 const useAddToCartItem = () => {
    return useMutation({
        mutationFn: async (data) => {

            const response = await api.post("/add-to-cart", { data })
            return response.data
        },
        onSuccess: (data) => {
            console.log("data", data)
            return data
        },
        onError: (data) => {
            return data
        }

    })
}




const useRemoveFromCart = () => {
    return useMutation({
        mutationFn: async (data) => {
            const response = await api.post("/remove-from-cart", data)
            return response.data
        }
    })
}
//hetre we will get cart info

const useGetCart=()=>{
return useMutation({
    mutationFn:async(userId)=>{
        const response=await api.get(`/get-cart/${userId}`)
        return response.data
    }
})
}

export {useAddToCartItem,useRemoveFromCart,useGetCart}
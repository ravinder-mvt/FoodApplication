import React from 'react'
import useLogin from '../ContectApi/UIcontext'
import { useLoginUser } from "../auth/useAuth.js"
import { useRegisterUser } from '../auth/useAuth.js'
import { useForm } from "react-hook-form"

const Login = () => {
    const mutation = useLoginUser()
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        mode:"onSubmit"
    })
    const { showLoginPopUp, closeAll, openSignUp } = useLogin();

    const onSubmit = (data) => {
        mutation.mutate(data, {
        
            onSuccess: (response) => {
                console.log("here is the response", response)
            },
            onError: (error) => {
                console.error("here is the error", error)
            }
        })
    }
    if (!showLoginPopUp) return
    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur- flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-2xl w-100 relative px-6 py-10">


                <div className='flex items-center justify-between px-2 mb-8'>
                    <h1 className='flex text-2xl font-semibold '>
                        Login
                    </h1>
                    <button className='flex p-2 items-center justify-center border-none hover:bg-slate-100 text-md font-semibold' onClick={() => closeAll()}>
                        X
                    </button>
                </div>

                <div>
                    <form action="" className='flex items-center justify-center flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder='email' {...register("email", {
                            required: "email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address',
                            },


                        })} className='flex p-1 w-full text-sm border border-slate-300 focus:border outline-0' />
                        {
                            errors.email && <span className='text-sm text-red-600'>
                                {errors.email.message}
                            </span>

                        }

                        <input placeholder='password' {
                            ...register("password", {
                                required: "password is required",
                                pattern: {
                                    value: /^(?=.*[0-9])(?=.*[a-zA-Z]).{6,}$/,
                                    message: "Invalid password format"
                                }
                            })
                        } className='flex p-1 w-full text-sm border border-slate-300 focus:border outline-0' />
                        {
                            errors.password && <span className='text-red-500 text-sm'>
                                {errors.password.message}
                            </span>
                        }
                        <button className='p-1 text-white bg-[tomato] w-full'>
                            Login
                        </button>

                        <div className='flex items-center justify-start gap-2 w-full'>
                            <input type="checkbox" {...register("terms", {
                                required: "you must accept the terms.",
                            })} />
                            {
                                errors.terms &&
                                <span className='flex items-center justify-center text-xs text-red-500'>
                                    {errors.terms.message}

                                </span>
                            }
                            <p className='text-xs'>
                                By continuing, I agree to the terms of use & privacy policy


                            </p>
                        </div>
                    </form>

                    <div className='flex items-center my-4 justify-start'>
                        <p className='flex text-md text-slate-700'>create a new accout?
                            <span className='ml-2 text-[tomato] font-medium hover:font-semibold' onClick={() => openSignUp()}>
                                click here
                            </span>

                        </p>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Login
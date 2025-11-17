import React from 'react'
import useLogin from '../ContectApi/UIcontext'
import { useForm } from "react-hook-form"
import { useRegisterUser } from '../auth/useAuth'
const SignUp = () => {
    const mutation = useRegisterUser();
    const { openLogin, closeAll, showSignUpPopUp } = useLogin();
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        mode:"onSubmit"
    });


    if (!showSignUpPopUp) return

    const onSubmit = (data) => {
        mutation.mutate(data, {
            onSuccess: (response) => {
                openLogin();
                reset({
                    userName: "",
                    email: "",
                    password: ""
                });
            },
            onError: (error) => {
                console.Error("here is the error", error)
            }
        });
    };
    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur- flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-2xl w-100 relative px-6 py-10">


                <div className='flex items-center justify-between px-2 mb-8'>
                    <h1 className='flex text-2xl font-semibold '>
                        Sign Up
                    </h1>
                    <button className='flex p-2 items-center justify-center border-none hover:bg-slate-100 text-md font-semibold' onClick={() => closeAll()}>
                        X
                    </button>
                </div>

                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex items-center justify-center flex-col gap-4'>
                        <input type="text" placeholder='Your Name'  {...register('userName', {
                            required: "userName is required",
                            maxLength: {
                                value: 50,
                                message: "Max length should be in 50 characters only"
                            }, minLength: {
                                value: 4,
                                message: "please enter atleast 4 characters"
                            }

                        })} className='flex p-1 w-full text-sm border border-slate-300 focus:border outline-0' />
                        {
                            errors.userName &&
                            <span className='text-sm text-red-500'>
                                {errors.userName.message}
                            </span>
                        }


                        <input  {
                            ...register("email", {
                                required: "email is required here.",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Invalid email address',
                                }

                            })
                        } type="text" placeholder='Your email' className='flex p-1 w-full text-sm border border-slate-300 focus:border outline-0' />

                        {
                            errors.email && <span className='flex text-red-600 text-sm'>
                                {
                                    errors.email.message
                                }

                            </span>
                        }
                        <input placeholder='password' {
                            ...register("password", {
                                required: "password is required",
                                pattern: {
                                    value: /^(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/,
                                    message: "Invalid password format"
                                }
                            })
                        } className='flex p-1 w-full text-sm border border-slate-300 focus:border outline-0' />
                        {
                            errors.password && <span className='text-red-500 text-sm'>
                                {errors.password.message}
                            </span>
                        }
                        <button className='p-1 text-white bg-[tomato] w-full' type='submit'>
                            Sign Up
                        </button>

                        <div className='flex items-center justify-start gap-2 w-full'>
                            <input type="checkbox" {...register("terms", {
                                required: "you must accept the terms."
                            })} />

                            {
                                errors.terms && <span>
                                    {
                                        errors.terms.message
                                    }
                                </span>
                            }
                            <p className='text-xs'>
                                By continuing, I agree to the terms of use & privacy policy


                            </p>
                        </div>
                    </form>

                    <div className='flex items-center my-4 justify-start'>
                        <p className='flex text-md text-slate-700'>Already have an account?
                            <span className='ml-2 text-[tomato] font-medium hover:font-semibold' onClick={() => openLogin()}>
                                login here
                            </span>

                        </p>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default SignUp;
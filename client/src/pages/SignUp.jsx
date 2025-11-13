import React from 'react'
import useLogin from '../ContectApi/UIcontext'

const SignUp = () => {
    const { openLogin, closeAll, showSignUpPopUp } = useLogin();

    if (!showSignUpPopUp) return
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
                    <form action="" className='flex items-center justify-center flex-col gap-4'>
                        <input type="text" placeholder='Your Name' className='flex p-1 w-full text-sm border border-slate-300 focus:border outline-0' />
                        <input type="text" placeholder='Your email' className='flex p-1 w-full text-sm border border-slate-300 focus:border outline-0' />
                        <input type="text" placeholder='Password' className='flex p-1 w-full text-sm border border-slate-300 focus:border outline-0' />
                        <button className='p-1 text-white bg-[tomato] w-full' onClick={() => openLogin()}>
                            Sign Up
                        </button>

                        <div className='flex items-center justify-start gap-2 w-full'>
                            <input type="checkbox" />
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
'use client'
import Image from "next/image"
import { getData } from "./actions/ServerActionsComponent"
import { useFormState } from "react-dom"
import OutputComponent from "./OutputComponent"
import FormSubmitBtnComponent from "./FormSubmitBtnComponent"
const initialState = {
    userData: {},
    errorMsg: '',
    loading: null
}

export default function SearchComponent() {
    const [state, formAction] = useFormState(getData, initialState)
    
    return (
        <div>
            <form action={formAction} className="my-10 md:mt-24 flex">
                <div className="relative w-[327px] h-[60px] md:w-[573px] md:h-[69px] xl:w-[730px] xl:h-[69px] shadow-md rounded-xl mx-auto group grid grid-cols-24 grid-rows-24">
                    <input type="text" placeholder="Search Github username..." name="userName" className="w-full h-full  rounded-xl pl-10 pr-15 py-5 md:pl-14 xl:pl-16 font-space text-[13px] leading-[25px] text-darkblue dark:bg-darkModeBlue dark:text-darkModeWhite row-span-24 col-span-24" />
                    <div className="absolute font-spacebold text-[13px] text-error col-span-6 row-span-4 col-start-12 md:col-start-16 row-start-9">{state?.erroMsg}</div>
                    <Image src={'/assets/icon-search.svg'} width={20.05} height={20} alt="" className=" absolute row-span-6 col-span-2 col-start-2 row-start-9"/>
                    <FormSubmitBtnComponent/>
                </div>
            </form> 

            {Object.keys(state?.userData).length > 0 ? <OutputComponent userData={state?.userData}/> : null}

            
        </div>
    )
}
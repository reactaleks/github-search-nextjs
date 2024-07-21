'use client'
import Image from "next/image"
import { getData } from "./actions/ServerActionsComponent"
import { useFormState } from "react-dom"
import OutputComponent from "./OutputComponent"

const initialState = {
    userData: {},
}

export default function SearchComponent() {
    const [state, formAction] = useFormState(getData, initialState)
    
    return (
        <div>
            <form action={formAction} className="my-10">
                <div className="relative w-[327px] h-[60px] shadow-md rounded-xl mx-auto">
                    <input type="text" placeholder="Search Github username..." name="userName" className="w-full h-full  rounded-xl pl-10 pr-15 py-5 font-space text-black" />
                    <Image src={'/assets/icon-search.svg'} width={24} height={25} alt="" className="absolute top-0 bottom-0 my-auto ml-2"/>
                    <button type="submit" className="w-[84px] h-[46px] bg-blue rounded-xl text-white absolute right-0 top-0 bottom-0 my-auto mr-2">Search</button>                
                </div>
            </form> 

            <OutputComponent userData={state?.userData}/>
        </div>
    )
}
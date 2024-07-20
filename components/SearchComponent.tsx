'use client'
import Image from "next/image"
import { getData } from "./actions/ServerActionsComponent"
import { useFormState } from "react-dom"
import OutputComponent from "./OutputComponent"

// Things needed from github api
// Login / Avatar/ Name / Created_at / Bio / Public_repos / Followers / Following / Location / Blog / Twitter_username / Company

const initialState = {
    userData: {},
}

export default function SearchComponent() {
    const [state, formAction] = useFormState(getData, initialState)

    console.log(state?.userData);
    return (
        <>
            <form action={formAction}>
                <div>
                    <input type="text" placeholder="Search Github username..." name="userName" className="w-[327px] h-[60px]"/>
                    <Image src={'/assets/icon-search.svg'} width={24} height={25} alt=""/>
                </div>

                <button type="submit">Search</button>
            </form> 

            <OutputComponent/>
        </>
    )
}
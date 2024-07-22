import ThemeToggleComponent from "./ThemeToggleComponent"
export default function NavComponent() {
    return (

        <div className="w-[327px] md:w-[573px] xl:w-[730px]  mx-auto flex items-center justify-between mt-5">
            <div className="lowercase font-bold font-spacebold text-[26px]">devfinder</div>
            <ThemeToggleComponent/>
        </div>

    )
}
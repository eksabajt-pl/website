import { CheckIcon } from "../../ui/check"
type Children ={
    children:React.ReactNode
}
const Li = ({children}:Children) => {
    return(
        <li className="flex flex-row justify-start items-center text-[var(--li)]"><CheckIcon size={15} />{children}</li>
    )
}
export default Li;
import { ReactNode } from "react"
import { Card } from "../../ui/card"
type customCard = {
    children: ReactNode,
    className?: string,
}
const CustomCard = ({children,className = ""}:customCard) => {
    return(
        <Card className={`bg-linear-to-r from-grey-800 to-grey-900 gap-0 shadow-green-500/100  mx-auto my-4 transition delay-50 duration-500 ease-in-out w-[20%] max-xl:w-[45%] max-sm:w-[90%] hover:scale-105 hover:transition hover:delay-50 hover:duration-1000 hover:ease-in-out ${className}`}>{children}</Card>
    )
}
export default CustomCard;
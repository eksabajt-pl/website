import { ReactNode } from "react";
import { Card } from "../../ui/card";
type customCard = {
  children: ReactNode;
  className?: string;
};
const CustomCard = ({ children, className = "" }: customCard) => {
  return (
    <Card
      className={`w-78 h-150 mt-8 pt-12  bg-linear-to-r from-grey-800 to-grey-900 gap-0 shadow-green-500/100  transition delay-50 ease-in-out  hover:scale-105  ${className}`}
    >
      {children}
    </Card>
  );
};
export default CustomCard;

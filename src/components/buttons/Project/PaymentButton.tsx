"use client";

import PaymentProject from "@/db/project/PaymentProject";
import { SQLWrapper } from "drizzle-orm";
type handler = {
  email: string | null;
  projectId: number | SQLWrapper;
};
const PaymentButton = ({ email, projectId }: handler) => {
  const handlePayment = async () => {
    await PaymentProject(email, projectId);
  };

  return (
    <button
      onClick={handlePayment}
      className="rounded-lg bg-background text-foreground p-2"
    >
      Zapłać
    </button>
  );
};

export default PaymentButton;

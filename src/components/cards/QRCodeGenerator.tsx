"use client";
import { useQRCode } from "next-qrcode";
import { useMounted } from "@/components/hooks/useMounted";

export default function QRCodeGenerator() {
  const { Canvas } = useQRCode();

  const mounted = useMounted();

  return (
    <Canvas
      text={mounted ? window.location.href : "Loading..."}
      options={{
        errorCorrectionLevel: "M",
        margin: 3,
        scale: 4,
        width: 250,
      }}
    />
  );
}

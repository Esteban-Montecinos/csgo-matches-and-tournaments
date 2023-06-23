"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function CustomImage({ src, alt, w, h, className }) {
  const [source, setSource] = useState(src);
  return (
    <Image
      className={className}
      unoptimized
      src={source ? source : "/placeholder.svg"}
      alt={alt}
      width={w}
      height={h}
      onError={() => setSource("/placeholder.svg")}
    />
  );
}

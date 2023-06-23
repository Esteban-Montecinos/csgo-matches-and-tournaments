"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function CustomImage({ src, alt, w, h }) {
  const [source, setSource] = useState(src);
  return (
    <Image
      className="justify-self-center opacity-100"
      unoptimized
      src={source ? source : "/placeholder.svg"}
      alt={alt}
      width={w}
      height={h}
      onError={() => setSource("/placeholder.svg")}
    />
  );
}

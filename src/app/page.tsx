'use client';
import React, { useEffect, useState } from "react";
export default function Home() {

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="home">
    
      <h1>Home</h1>

    </div>
  );
}

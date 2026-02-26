import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`bg-white border-4 border-black rounded-lg ${className}`}>
      {children}
    </div>
  );
}

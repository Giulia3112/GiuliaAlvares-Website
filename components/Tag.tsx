"use client";

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export default function Tag({ children, className = "" }: TagProps) {
  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-medium rounded-full bg-surface border border-surface/50 text-text-secondary ${className}`}
    >
      {children}
    </span>
  );
}


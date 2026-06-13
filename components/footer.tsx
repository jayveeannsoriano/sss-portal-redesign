import React from "react";

export default function Footer() {
  return (
    <div className="w-full flex flex-col items-center justify-center text-center text-xs text-muted-foreground mt-6">
      <p className="mb-1">
        SSS Portal Redesign Concept by{" "}
        <a
          href="https://www.linkedin.com/in/jayvee-ann-soriano/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary"
        >
          Jian Soriano
        </a>{" "}
        &copy; 2026
      </p>
      <p>Not an official SSS product</p>
    </div>
  );
}

import Link from "next/link";
import React from "react";

export default function Navigation() {
  return (
    <>
      <Link
        href="/"
        className="text-muted-foreground transition-colors hover:text-foreground"
      >
        Pokémons
      </Link>
      <Link
        href="#"
        className="text-muted-foreground transition-colors hover:text-foreground"
      >
        Pokédex
      </Link>
    </>
  );
}

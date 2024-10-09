import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <h1 className="text-2xl font-extrabold inline-block text-blue-800">
        P
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-red-600">
          DEX
        </span>
      </h1>
    </Link>
  );
}

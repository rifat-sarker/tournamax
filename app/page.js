import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <nav className="flex items-center justify-between px-8 py-3 bg-slate-800">
      <h1 className="text-white text-xl font-bold">Tournamax Assignment</h1>
      <Link className="px-4 p-2 border rounded bg-slate-50" href={"/addTopic"}>Add Topic</Link>
    </nav>
  );
}

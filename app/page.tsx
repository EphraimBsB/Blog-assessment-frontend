import Link from "next/link";
import Posts from "./components/posts";

export default function Home() {
  return (
      <main className="px-6 mx-auto prose prose-xl prose-slate dark:prose-invert">
        <p className="mt-12 mb-5 text-3xl text-center dark:text-white">
          Hello and Welcome 👋
          <span className="whitespace-nowrap"> I&apos;m <span className="font-bold">Ephraim</span></span>
          </p>
          <div className="flex flex-col items-center mb-12">
            <Link href='/create/post'className=" text-white font-semibold py-3 px-6 bg-gray-700 rounded-full no-underline">Create new post</Link>
          </div>
       <Posts />
      </main>
  );
}

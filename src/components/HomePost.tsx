import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { Post } from "../types";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";


export default async function HomePost() {
  const query = `*[_type == "posts"]{
    title,
    summary,
    "image": image.asset->url,
    "createdDate": _createdAt,
    "id": slug.current,
    "author": author->{
    author,
    "image": image.asset->url,
  },
  }[2]`;

  const post: Post = await client.fetch(query);
  

  return (
    <div className="max-w-screen-xl mx-auto mt-16 mb-10 grid md:grid-cols-2 gap-6 grid-cols-1 px-4">

      <div className="lg:w-[95%] lg:h-[70%] overflow-hidden rounded-xl">
        <Image
          src={post.image}
          alt={post.title}
          height={1000}
          width={1000}
          loading="lazy"
          className="object-cover object-center"
        />
      </div>

      <div className="flex flex-col gap-6 ">
        <div className="flex gap-2 items-center">
          <Image
            src={post.author.image}
            alt={post.title}
            height={1000}
            width={1000}
            className="rounded-full w-8"
          />
          <p className="font-light">{post.author.author}</p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <p>{post.summary}</p>
        </div>

        <Link
          href={`/blogs/${post.id}`}
          className="text-blue-600 hover:text-blue-400 flex gap-2"
        >
          <p>Read more</p>
          <MoveUpRight className="w-4" />
        </Link>
      </div>

    </div>
  );
}

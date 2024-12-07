import React from "react";
import { client } from "@/sanity/lib/client";
import { Post } from "@/types";
import Image from "next/image";
import Link from "next/link";


async function RecentBlog() {
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
      }`;

  const posts: Post[] = await client.fetch(query);
  console.log(posts);

  return (
    <section className="max-w-screen-xl mx-auto px-4">
      <h1 className="text-5xl font-bold text-center">Recent Blog</h1>
      <div className="grid lg:grid-cols-5 gap-4 mt-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {posts.map((p) => (
          <div className="flex flex-col gap-4" key={p.id}>

            <div className="">
              <Image
                src={p.image}
                alt={p.title}
                height={1000}
                width={1000}
                className="rounded-t-md object-contain"
              />
            </div>

            <div className="flex gap-2">
              <div className="w-8 overflow-hidden h-8 rounded-full">

              <Image
                src={p.author.image}
                alt={p.author.author}
                height={1000}
                width={1000}
                className="object-contain"
              />
              </div>

              <h4>{p.author.author}</h4>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-semibold">{p.title}</h1>
              <Link href={`/blogs/${p.id}`} className="text-blue-600 hover:text-blue-400">Read more</Link>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default RecentBlog;

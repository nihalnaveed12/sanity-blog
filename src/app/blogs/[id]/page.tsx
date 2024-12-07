import Navbar from "@/components/Navbar";
import { components } from "@/components/renderComponent";
import { client } from "@/sanity/lib/client";
import { type Post } from "@/types";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export const revalidate = 60; 

export async function generateStaticParams() {
  const query = `*[_type == 'post']{
      "id": slug.current
    }`;

  const slugs = await client.fetch(query);
  const slugRoutes: string[] = slugs.map((slug: { id: string }) => slug.id);
  console.log(slugRoutes);
  return slugRoutes.map((slug:string) => ({slug}))
}

export default async function Post({
  params: { id },
}: {
  params: { id: string };
}) {
  const query = `*[_type == "posts" && slug.current == "${id}"]{
    "id": slug.current,
    title,
    content,
    summary,
    "image": image.asset->url,
    "author": author->{
    author,
    "image": image.asset->url,
  },
}[0]`;

  const post: Post = await client.fetch(query);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
    <Navbar />
    <div className="max-w-screen-md mx-auto flex flex-col justify-center gap-6">
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <div className="w-[700px]">
        <Image
          src={post.image}
          alt={post.title}
          height={1000}
          width={1000}
          className="object-cover object-center rounded-xl"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">Summary</h1>
        <p>{post.summary}</p>
      </div>

      <div className="">
        <PortableText value={post.content} components={components} />
      </div>
    </div>
    </>
  );
}

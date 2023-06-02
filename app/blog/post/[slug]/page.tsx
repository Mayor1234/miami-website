import React, { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { urlForImage } from '../../../../sanity/lib/image';
import { groq } from 'next-sanity';
import { client } from '../../../../sanity/lib/client';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import { PortableText } from '@portabletext/react';
import { PortableTextComponents } from '@/app/components/PortableTextComponents';

import Comments from '@/app/components/Comments';
import RecentPosts from '@/app/components/RecentPosts';

import Loading from '../../loading';
import { Post } from '@/typings';

// import { serializers } from '@/app/components/YoutubePreview';

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 60;

export async function generateStaticParams() {
  const query = groq`
    *[_type=='post']{
        slug
    }
    `;

  const posts: Post[] = await client.fetch(query);
  const paths = posts.map((post) => post.slug.current);

  return paths.map((slug) => ({
    slug,
  }));
}

const page = async ({ params: { slug } }: Props) => {
  const query = groq`
    *[_type=='post' && slug.current == $slug][0]{
        ...,
        author->{image, name},
        "comment": *[_type=='comment' && post._ref==^._id && approved == true],
        categories[]->
    }
    `;
  const post: Post = await client.fetch(query, { slug });

  const recentQuery = groq`
  *[_type == "post"  && slug.current != $slug] | order(_createdAt desc)[0...3]`;

  const recentPosts: Post[] = await client.fetch(recentQuery, {
    slug,
  });

  return (
    <article className="container mx-auto">
      <Suspense fallback={<Loading />}>
        <div className="mx-auto my-10 max-w-[980px] p-8 md:p-16">
          <section className="md:w-[740px] mx-auto">
            <hr className="border-1 border-gray-300 mb-10" />
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center">
                <div>
                  <Image
                    src={urlForImage(post.author.image).url()}
                    alt={post.author.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 object-cover object-top rounded-full"
                  />
                </div>
                <div className="px-2 text-xs leading-none">
                  <span className="text-sm text-gray-600">
                    {post.author.name}
                  </span>
                  <p className=" text-gray-400">
                    {new Date(post._createdAt).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <p className="text-sm text-gray-600">Share</p>

                <span>
                  <EllipsisVerticalIcon className="h-6 hover:text-[#1890ff]" />
                </span>
              </div>
            </div>
            <div className="pb-4">
              <Link href="/blog">
                <h2 className="text-2xl text-gray-800 font-medium pb-4">
                  {post.title}
                </h2>
              </Link>
              <p className=" text-gray-500 text-sm font-medium  pb-4">
                {post.description}
              </p>
            </div>
            <div>
              <div className="relative h-60 w-full md:h-96">
                <Image
                  className="object-cover object-center"
                  src={urlForImage(post.mainImage).url()}
                  alt={post.author.name}
                  fill
                  sizes="(max-width: 768px)"
                />
              </div>
            </div>
            <section>
              <PortableText
                value={post.body}
                components={PortableTextComponents}
              />
              <hr className="border-1 border-gray-300 mt-10" />
            </section>
            <section className="my-8">
              <div className="flex justify-between pb-4">
                <h2 className="text-2xl font-medium leading-tight">
                  Recent Posts
                </h2>
                <span>
                  <Link href="/blog">See All</Link>
                </span>
              </div>
              <div className="flex flex-col w-full  md:flex-row gap-4">
                {recentPosts.map((recentPost: Post) => (
                  <div key={recentPost._id}>
                    <RecentPosts {...recentPost} />
                  </div>
                ))}
              </div>
            </section>
            <Comments {...post} />
          </section>
        </div>
      </Suspense>
    </article>
  );
};

export default page;

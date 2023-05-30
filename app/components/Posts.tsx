import ClientSideRoute from './ClientSideRoute';
import Image from 'next/image';
import { HeartIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { urlForImage } from '../../sanity/lib/image';
import { Post } from '@/typings';

type Props = {
  posts: Post[];
};

// interface mainImage {
//   _type: 'image';
//   asset: Reference;
// }

export default function Posts({ posts }: Props) {
  // console.log(posts);
  return (
    <>
      <div className="container mx-auto">
        <div className="mx-auto max-w-[980px]">
          <hr className="hidden md:border-gray-400 mb-10" />
          <div>
            <div className="w-full">
              {posts.map((post) => (
                <div
                  key={post._id}
                  className="flex flex-col md:flex-row group mb-6 cursor-pointer border-1 border-gray-300"
                >
                  <div className="relative w-full md:w-1/2 h-80 drop-shadow-xl group">
                    <Image
                      className="p-8 object-cover object-center brightness-75 group-hover:brightness-100 group-hover:scale-101 transistion-transform duration-200 md:p-4 lg:p-0"
                      src={urlForImage(post.mainImage).url()}
                      alt={post.author.name}
                      fill
                      sizes="(max-width: 768px)"
                    />
                  </div>
                  <div className=" w-full md:w-1/2 p-10 text-gray-700">
                    <div className="flex items-center pb-4">
                      <div>
                        <Image
                          src={urlForImage(post.author.image).url()}
                          alt={post.author.name}
                          width={40}
                          height={40}
                          className="h-10 w-10 object-cover object-top rounded-full"
                        />
                      </div>
                      <div className="px-2 text-xs leading-none">
                        <span className="text-sm text-gray-600">
                          {post.author.name}
                        </span>
                        <p className="text-gray-400">
                          {new Date(post._createdAt).toLocaleDateString(
                            'en-US',
                            {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric',
                            }
                          )}
                        </p>
                      </div>
                    </div>
                    <ClientSideRoute route={`/blog/post/${post.slug.current}`}>
                      <h2 className="text-2xl hover:text-[#1890ff] font-medium pb-2">
                        {post.title}
                      </h2>
                      <p className="text-gray-500 text-sm hover:text-[#1890ff] pb-4">
                        {post.description.substring(0, 90)}...
                      </p>
                    </ClientSideRoute>

                    <hr className="border-gray-300 mt-14 mb-2" />
                    <div className="flex justify-between text-xs">
                      <div className="flex gap-4">
                        <p className="hover:text-[#1890ff]">
                          <span>0</span> views
                        </p>
                        <p className="hover:text-[#1890ff]">
                          <span>0</span> comments
                        </p>
                      </div>
                      <p className="flex">
                        {/* <span> 0 </span> */}
                        <HeartIcon className="h-4 text-[#1890ff]" />
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

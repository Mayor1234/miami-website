import Image from 'next/image';
import { urlForImage } from '../../sanity/lib/image';
import {
  HeartIcon,
  EyeIcon,
  ChatBubbleLeftIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

const RecentPosts = ({ ...recentPost }) => {
  return (
    <div>
      <div className="border-1 border-gray-300">
        <div className="h-full">
          <Link href={`/blog/post/${recentPost.slug.current}`}>
            <Image
              src={urlForImage(recentPost.mainImage).url()}
              alt="post"
              width={250}
              height={150}
              className="object-cover w-full aspect-square overflow-hidden"
            />
          </Link>
        </div>
        <div className="p-4">
          <div className="h-12 overflow-hidden">
            <h2 className="cursor-pointer text-gray-700 hover:text-[#1890ff]">
              <Link href={`/blog/post/${recentPost.slug.current}`}>
                {recentPost.title}
              </Link>
            </h2>
          </div>
          <div className="border-t-1  border-gray-300 mt-4 ">
            <div className="flex justify-between pt-4">
              <div className="flex gap-4">
                <p className="flex gap-1 text-xs">
                  <EyeIcon className="h-4 text-gray-400  hover:text-[#1890ff]" />
                  <span className="text-gray-500">0</span>
                </p>
                <p className="flex gap-1 text-xs">
                  <ChatBubbleLeftIcon className="h-4 text-gray-400 hover:text-[#1890ff]" />
                  <span className="text-gray-500">0</span>
                </p>
              </div>
              <span>
                <HeartIcon className="h-4 text-[#1890ff]" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;

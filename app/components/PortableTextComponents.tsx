import Image from 'next/image';
import Link from 'next/link';
import { urlForImage } from '../../sanity/lib/image';

import getYouTubeId from 'get-youtube-id';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

export const PortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96 m-10 mx-auto">
          <Image
            className="object-contain w-full"
            src={urlForImage(value).url()}
            alt="blog post Image"
            fill
            // sizes="(max-width: 768px)"
          />
        </div>
      );
    },

    youtube: ({ node }: any) => {
      const { url } = node;
      // const url = 'https://www.youtube.com/watch?v=sENgsB4AdZw';
      const id = getYouTubeId(url) as string;

      return (
        <LiteYouTubeEmbed
          id={id}
          title="Youtube video"
          aspectHeight={9}
          aspectWidth={16}
        />
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul
        className="ml-10 py-5 list-disc
        space-y-5"
      >
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-5xl py-10 font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h1 className="text-4xl py-10 font-bold">{children}</h1>
    ),
    h3: ({ children }: any) => (
      <h1 className="text-3xl pt-10 pb-6 font-bold">{children}</h1>
    ),
    h4: ({ children }: any) => (
      <h1 className="text-4l py-10 font-bold">{children}</h1>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-[#1890ff] border-l-4 py-4 px-4 my-5 ">
        {children}
      </blockquote>
    ),
  },
  marks: {
    links: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/')
        ? 'noreferer noopener'
        : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          className="text-[#1890ff] hover:underline"
        >
          {children}
        </Link>
      );
    },
  },
};

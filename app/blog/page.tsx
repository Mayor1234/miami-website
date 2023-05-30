import { Suspense, lazy } from 'react';
import { groq } from 'next-sanity';
import { client } from '../../sanity/lib/client';
// import { PreviewSuspense } from 'next-sanity/preview';
import Posts from '../components/Posts';
// import PreviewPosts from '../components/PreviewPosts';
// import { draftMode } from 'next/headers';
import Loading from './loading';

// const PreviewMovies = lazy(() => import('../components/PreviewPosts'));
const query = groq`*[_type=='post']{
  ...,
  author->{image, name},
  categories[]->,
} | order(_createdAt desc)
`;

export default async function Blog() {
  const data = await client.fetch(query);
  return (
    <main className="flex min-h-screen flex-col">
      <Suspense fallback={<Loading />}>
        <Posts posts={data} />
      </Suspense>
    </main>
  );
}

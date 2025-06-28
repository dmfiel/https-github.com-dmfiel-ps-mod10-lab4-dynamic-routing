import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { DummyPost, Post } from '../lib/posts';
import { useFetch } from '../hooks/useFetch';
import { LoadingSpinner } from '../components/LoadingSpinner/LoadingSpinner';
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';

export function HomePage() {
  const { error, data, loading } = useFetch('https://dummyjson.com/posts');
  const [posts, setPosts] = useState<Post[]>();

  useEffect(() => console.log('Loading:', loading), [loading]);
  useEffect(() => {
    if (error) console.error(error);
  }, [error]);
  useEffect(() => {
    if (data && data.posts && data.posts.length)
      setPosts(
        (data.posts as DummyPost[]).map(datum => {
          const post: Post = {
            id: datum.id.toString(),
            title: datum.title,
            body: datum.body,
            slug: datum.id.toString()
          };
          return post;
        })
      );
  }, [data]);

  if (loading) return <LoadingSpinner text="Loading categories..." />;
  if (!posts || posts.length === 0)
    return <ErrorMessage text="No categories found." />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      <ErrorMessage text={error?.message || ''} />
      {posts &&
        posts.map(post => {
          return (
            <Link
              to={`/blog/${post.slug}`}
              key={post.id}
              className="text-xl no-underline font-bold text-gray-500 cursor-pointer"
            >
              <section className="border border-color-blue-700 text-blue-700 bg-gray-100 dark:text-blue-400 dark:bg-gray-800 rounded-lg m-5 p-5">
                <h2 className="flex flex-col items-center gap-5">
                  {post.title}
                </h2>
              </section>
            </Link>
          );
        })}
    </div>
  );
}

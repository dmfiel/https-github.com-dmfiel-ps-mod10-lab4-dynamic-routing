import { useParams } from 'react-router-dom';
import type { DummyPost, Post } from '../lib/posts';
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';
import { useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { LoadingSpinner } from '../components/LoadingSpinner/LoadingSpinner';

export function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState<Post>();

  const { error, data, loading } = useFetch(
    `https://dummyjson.com/posts/${slug}`
  );
  useEffect(() => console.log('Loading:', loading), [loading]);
  useEffect(() => {
    if (error) console.error(error);
  }, [error]);
  useEffect(() => {
    if (data) {
      const newPost: Post = {
        id: (data as DummyPost).id.toString(),
        title: (data as DummyPost).title,
        body: (data as DummyPost).body,
        slug: (data as DummyPost).id.toString()
      };
      setPost(newPost);
    }
  }, [data]);

  if (loading) return <LoadingSpinner text="Loading posts..." />;
  if (!post) return <ErrorMessage text="No posts found." />;

  if (!post) return <ErrorMessage text="Sorry, post not found." />;
  return (
    <div className="w-full">
      <ErrorMessage text={error?.message || ''} />
      <section className="border border-color-blue-700 text-blue-700 bg-gray-100 dark:text-blue-400 dark:bg-gray-800 rounded-lg mx-auto w-full p-5 my-5">
        <h2 className="font-bold text-gray-700 dark:text-gray-300 text-center">
          {post.title}
        </h2>
        <p className="mt-5">{post.body}</p>
      </section>
    </div>
  );
}

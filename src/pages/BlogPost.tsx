import { useParams } from 'react-router-dom';
import { posts } from '../lib/posts';
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';

export function BlogPost() {
  const { slug } = useParams();
  const thesePosts = posts && posts.filter(post => post.slug === slug);
  if (!thesePosts || thesePosts.length === 0)
    return <ErrorMessage text="Sorry, post not found." />;
  const post = thesePosts[0];
  return (
    <div className="w-full">
      <section className="border border-color-blue-700 text-blue-700 bg-gray-100 dark:text-blue-400 dark:bg-gray-800 rounded-lg mx-auto w-full p-5 my-5">
        <h2 className="font-bold text-gray-700 dark:text-gray-300 text-center">
          {post.title}
        </h2>
        <p className="mt-5">{post.body}</p>
      </section>
    </div>
  );
}

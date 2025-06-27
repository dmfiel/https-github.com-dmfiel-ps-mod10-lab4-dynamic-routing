import { Link } from 'react-router-dom';
import { posts } from '../lib/posts';

export function HomePage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
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

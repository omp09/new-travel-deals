import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  slug: string;
}

export default function BlogCard({ title, excerpt, date, imageUrl, slug }: BlogCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <Calendar className="h-4 w-4 mr-2" />
          <time>{date}</time>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <Link
          to={`/blog/${slug}`}
          className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
        >
          Read More →
        </Link>
      </div>
    </article>
  );
}
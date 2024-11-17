import { ArrowRight } from 'lucide-react';

interface DealCardProps {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  affiliateLink: string;
}

export default function DealCard({ title, description, price, imageUrl, affiliateLink }: DealCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">{price}</span>
          <a
            href={affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Book Now <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
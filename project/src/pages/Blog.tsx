import BlogCard from '../components/BlogCard';

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-4">
      <div className="max-w-7xl mx-auto py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Travel Tips and Guides</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BlogCard
            title="How to Find Cheap Flights with Ease"
            excerpt="Master the art of finding the best flight deals with our comprehensive guide to flight searching and booking."
            date="March 15, 2024"
            imageUrl="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80"
            slug="find-cheap-flights"
          />
          <BlogCard
            title="Top 5 Summer Destinations for 2024"
            excerpt="Discover the hottest destinations for your summer vacation this year, from hidden beaches to vibrant cities."
            date="March 10, 2024"
            imageUrl="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80"
            slug="summer-destinations-2024"
          />
          <BlogCard
            title="The Ultimate Guide to Paris Attractions"
            excerpt="Everything you need to know about visiting Paris's most famous landmarks and hidden gems."
            date="March 5, 2024"
            imageUrl="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80"
            slug="paris-guide"
          />
        </div>
      </div>
    </div>
  );
}
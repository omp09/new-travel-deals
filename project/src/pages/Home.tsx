import { Plane, Hotel, Map } from 'lucide-react';
import DealCard from '../components/DealCard';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Find the Best Travel Deals in One Place!
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Flights, Hotels, and Attractions at the Best Prices
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="https://www.jetradar.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plane className="mr-2 h-5 w-5" /> Find Cheap Flights
            </a>
            <a
              href="https://hotellook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Hotel className="mr-2 h-5 w-5" /> Book Your Perfect Hotel
            </a>
            <a
              href="https://www.viator.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
            >
              <Map className="mr-2 h-5 w-5" /> Explore Attractions
            </a>
          </div>
        </div>
      </div>

      {/* Featured Deals Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Deals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <DealCard
              title="Flight to Paris"
              description="Direct flights to the City of Light"
              price="$199"
              imageUrl="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80"
              affiliateLink="https://www.jetradar.com/"
            />
            <DealCard
              title="Luxury Hotel in Bali"
              description="5-star resort with ocean view"
              price="$150/night"
              imageUrl="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80"
              affiliateLink="https://hotellook.com/"
            />
            <DealCard
              title="Tokyo City Tour"
              description="Guided tour of Tokyo's best attractions"
              price="$89"
              imageUrl="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80"
              affiliateLink="https://www.viator.com/"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
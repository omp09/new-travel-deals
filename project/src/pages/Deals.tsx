import DealCard from '../components/DealCard';

export default function Deals() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-4">
      <div className="max-w-7xl mx-auto py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Today's Best Travel Deals</h1>

        {/* Flight Deals */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Featured Flight Deals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <DealCard
              title="New York Special"
              description="Round-trip flights to NYC"
              price="$300"
              imageUrl="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80"
              affiliateLink="https://www.jetradar.com/"
            />
            <DealCard
              title="Tokyo Adventure"
              description="Direct flights to Tokyo"
              price="$599"
              imageUrl="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80"
              affiliateLink="https://www.jetradar.com/"
            />
            <DealCard
              title="London Calling"
              description="Premium economy to London"
              price="$449"
              imageUrl="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80"
              affiliateLink="https://www.jetradar.com/"
            />
          </div>
        </section>

        {/* Hotel Deals */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Featured Hotel Deals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <DealCard
              title="Luxury in Dubai"
              description="5-star hotel with beach access"
              price="$200/night"
              imageUrl="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80"
              affiliateLink="https://hotellook.com/"
            />
            <DealCard
              title="Maldives Paradise"
              description="Overwater villa with breakfast"
              price="$350/night"
              imageUrl="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80"
              affiliateLink="https://hotellook.com/"
            />
            <DealCard
              title="Swiss Alps Resort"
              description="Ski-in/ski-out luxury chalet"
              price="$280/night"
              imageUrl="https://images.unsplash.com/photo-1528217580778-96e570819666?auto=format&fit=crop&q=80"
              affiliateLink="https://hotellook.com/"
            />
          </div>
        </section>

        {/* Attractions */}
        <section>
          <h2 className="text-2xl font-semibold mb-8">Featured Attractions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <DealCard
              title="Paris Museums Pass"
              description="Skip-the-line access to top attractions"
              price="$50"
              imageUrl="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80"
              affiliateLink="https://www.viator.com/"
            />
            <DealCard
              title="Rome Food Tour"
              description="4-hour guided food experience"
              price="$89"
              imageUrl="https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&q=80"
              affiliateLink="https://www.viator.com/"
            />
            <DealCard
              title="Bali Temple Tour"
              description="Full-day cultural experience"
              price="$65"
              imageUrl="https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&q=80"
              affiliateLink="https://www.viator.com/"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
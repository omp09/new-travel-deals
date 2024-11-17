import { Globe2, Shield, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Who We Are</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in finding the best travel deals for flights, hotels, and attractions. 
            Partnered with top platforms like Kiwi, JetRadar, SuperTravel, and Viator, 
            we ensure you get the best prices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <Globe2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Global Partnerships</h3>
            <p className="text-gray-600">
              We work with leading travel providers worldwide to bring you the best deals.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure Booking</h3>
            <p className="text-gray-600">
              Your transactions are protected with state-of-the-art security measures.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Best Price Guarantee</h3>
            <p className="text-gray-600">
              We constantly monitor prices to ensure you get the best deals available.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold mb-4">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <a href="https://www.kiwi.com" target="_blank" rel="noopener noreferrer" 
               className="text-center text-gray-600 hover:text-blue-600">Kiwi</a>
            <a href="https://www.jetradar.com" target="_blank" rel="noopener noreferrer"
               className="text-center text-gray-600 hover:text-blue-600">JetRadar</a>
            <a href="https://hotellook.com" target="_blank" rel="noopener noreferrer"
               className="text-center text-gray-600 hover:text-blue-600">Hotellook</a>
            <a href="https://www.viator.com" target="_blank" rel="noopener noreferrer"
               className="text-center text-gray-600 hover:text-blue-600">Viator</a>
          </div>
        </div>
      </div>
    </div>
  );
}
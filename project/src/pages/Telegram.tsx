import { Send, Bell, Zap } from 'lucide-react';

export default function Telegram() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Stay Updated on Travel Deals</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our Telegram channel for real-time updates on the hottest travel deals!
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8">
            <div className="flex flex-col items-center space-y-6">
              <Send className="w-16 h-16 text-blue-600" />
              
              <div className="space-y-4 text-center">
                <h2 className="text-2xl font-semibold">Why Join Our Channel?</h2>
                <ul className="space-y-3">
                  <li className="flex items-center justify-center">
                    <Bell className="w-5 h-5 text-blue-600 mr-2" />
                    <span>Instant notifications for new deals</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <Zap className="w-5 h-5 text-blue-600 mr-2" />
                    <span>Flash sales and exclusive offers</span>
                  </li>
                </ul>
              </div>

              <a
                href="https://t.me/your_channel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Send className="mr-2 h-5 w-5" />
                Join Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
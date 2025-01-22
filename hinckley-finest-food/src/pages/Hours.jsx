
import { Clock } from 'lucide-react';

function Hours() {
  return (
    <div className="pt-20 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Opening Hours</h1>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
            <div className="flex items-center justify-center mb-6">
              <Clock className="w-12 h-12 text-orange-600" />
            </div>
            
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-xl font-semibold mb-3">Regular Hours</h2>
                <p className="text-sm text-gray-600">
                  Open 7 days a week
                </p>
                <p className="text-base font-medium text-orange-600 mt-1">
                  1:00 PM to 11:00 PM
                </p>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <h3 className="text-base font-semibold mb-3 text-center">Special Notes</h3>
                <ul className="space-y-2">
                  <li className="flex items-center justify-center">
                    <span className="text-sm text-gray-600">
                      Kitchen closes 30 minutes before closing time
                    </span>
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-sm text-gray-600">
                      Last orders taken 45 minutes before closing
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">For reservations and special arrangements, please call us at:</p>
            <p className="text-base font-semibold text-orange-600 mt-1">0141 611 3058</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hours;
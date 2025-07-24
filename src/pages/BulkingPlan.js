import { Link } from 'react-router-dom';

function BulkingPlan() {
  return (
    <div className="py-6 px-4 sm:px-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">Bulking Diet Plan</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-orange-600">Muscle Gain Nutrition (3000-3500 calories)</h2>
        
        <div className="space-y-8">
          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-xl font-bold mb-3 flex items-center">
              <span className="bg-orange-100 text-orange-800 p-2 rounded-full mr-3">1</span>
              Breakfast (700 cal)
            </h3>
            <ul className="list-disc pl-8 space-y-2 text-gray-700">
              <li>3 whole eggs + 3 egg whites scrambled</li>
              <li>2 slices whole grain toast with 1 tbsp almond butter</li>
              <li>1/2 avocado</li>
              <li>1 cup Greek yogurt with 1/2 cup mixed berries</li>
              <li>1 glass whole milk</li>
            </ul>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-xl font-bold mb-3 flex items-center">
              <span className="bg-orange-100 text-orange-800 p-2 rounded-full mr-3">2</span>
              Mid-Morning Snack (500 cal)
            </h3>
            <ul className="list-disc pl-8 space-y-2 text-gray-700">
              <li>Protein shake: 2 scoops whey, 1 banana, 1 tbsp peanut butter, 1/4 cup oats, 12oz milk</li>
              <li>Handful of mixed nuts (almonds, walnuts, cashews)</li>
            </ul>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-xl font-bold mb-3 flex items-center">
              <span className="bg-orange-100 text-orange-800 p-2 rounded-full mr-3">3</span>
              Lunch (800 cal)
            </h3>
            <ul className="list-disc pl-8 space-y-2 text-gray-700">
              <li>200g grilled chicken breast</li>
              <li>1.5 cups brown rice</li>
              <li>1 cup mixed vegetables (broccoli, carrots, bell peppers)</li>
              <li>1 tbsp olive oil dressing</li>
              <li>1 small whole wheat pita</li>
            </ul>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-xl font-bold mb-3 flex items-center">
              <span className="bg-orange-100 text-orange-800 p-2 rounded-full mr-3">4</span>
              Pre-Workout (300 cal)
            </h3>
            <ul className="list-disc pl-8 space-y-2 text-gray-700">
              <li>1 cup cottage cheese with 1/2 cup pineapple</li>
              <li>2 rice cakes with 1 tbsp honey</li>
              <li>Black coffee (optional)</li>
            </ul>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-xl font-bold mb-3 flex items-center">
              <span className="bg-orange-100 text-orange-800 p-2 rounded-full mr-3">5</span>
              Post-Workout (600 cal)
            </h3>
            <ul className="list-disc pl-8 space-y-2 text-gray-700">
              <li>150g salmon or lean beef</li>
              <li>1 large sweet potato</li>
              <li>1 cup steamed broccoli</li>
              <li>Post-workout protein shake (1 scoop whey, 12oz milk)</li>
            </ul>
          </div>

          <div className="pb-6">
            <h3 className="text-xl font-bold mb-3 flex items-center">
              <span className="bg-orange-100 text-orange-800 p-2 rounded-full mr-3">6</span>
              Before Bed (400 cal)
            </h3>
            <ul className="list-disc pl-8 space-y-2 text-gray-700">
              <li>Casein protein pudding (1 scoop casein mixed with water)</li>
              <li>1 tbsp almond butter</li>
              <li>Handful of walnuts</li>
              <li>1 cup chamomile tea (optional)</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-gray-50 p-4 rounded-lg">
          <h3 className="font-bold text-lg mb-2">Nutrition Tips:</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Drink at least 3L of water daily</li>
            <li>Adjust portions based on weekly progress</li>
            <li>Cook in bulk for meal prep efficiency</li>
            <li>Add healthy fats like olive oil or nuts if needing more calories</li>
          </ul>
        </div>

        <Link 
          to="/diet" 
          className="mt-6 inline-flex items-center bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
        >
          ← Back to Diet Plans
        </Link>
      </div>
    </div>
  );
}

export default BulkingPlan;
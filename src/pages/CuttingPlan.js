import { Link } from 'react-router-dom';

function CuttingPlan() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Cutting Diet Plan</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Fat Loss Nutrition (1800-2200 calories)</h2>
        
        <div className="space-y-8">
          {/* Breakfast */}
          <div className="border-b pb-6">
            <h3 className="text-xl font-bold mb-3 flex items-center">
              <span className="bg-blue-100 text-blue-800 p-2 rounded-full mr-3">1</span>
              Breakfast (400 cal)
            </h3>
            <ul className="list-disc pl-8 space-y-2 text-gray-700">
              <li>1 whole egg + 3 egg whites scrambled</li>
              <li>1/2 cup oatmeal with cinnamon</li>
              <li>1/4 cup blueberries</li>
              <li>Black coffee or green tea</li>
            </ul>
          </div>

          {/* Mid-Morning Snack */}
          <div className="border-b pb-6">
            <h3 className="text-xl font-bold mb-3 flex items-center">
              <span className="bg-blue-100 text-blue-800 p-2 rounded-full mr-3">2</span>
              Mid-Morning Snack (250 cal)
            </h3>
            <ul className="list-disc pl-8 space-y-2 text-gray-700">
              <li>Protein shake (1 scoop whey with water and ice)</li>
              <li>10 raw almonds</li>
              <li>1 cup green tea</li>
            </ul>
          </div>

          {/* Lunch */}
          <div className="border-b pb-6">
            <h3 className="text-xl font-bold mb-3 flex items-center">
              <span className="bg-blue-100 text-blue-800 p-2 rounded-full mr-3">3</span>
              Lunch (500 cal)
            </h3>
            <ul className="list-disc pl-8 space-y-2 text-gray-700">
              <li>150g grilled chicken or turkey breast</li>
              <li>2 cups mixed greens (spinach, kale, arugula)</li>
              <li>1/2 cup quinoa</li>
              <li>1 tbsp balsamic vinaigrette</li>
              <li>1/2 cup chopped cucumbers and tomatoes</li>
            </ul>
          </div>

          {/* Afternoon Snack */}
          <div className="border-b pb-6">
            <h3 className="text-xl font-bold mb-3 flex items-center">
              <span className="bg-blue-100 text-blue-800 p-2 rounded-full mr-3">4</span>
              Afternoon Snack (200 cal)
            </h3>
            <ul className="list-disc pl-8 space-y-2 text-gray-700">
              <li>1 cup non-fat Greek yogurt with cinnamon</li>
              <li>1 small apple</li>
              <li>Sparkling water with lemon</li>
            </ul>
          </div>

          {/* Dinner */}
          <div className="border-b pb-6">
            <h3 className="text-xl font-bold mb-3 flex items-center">
              <span className="bg-blue-100 text-blue-800 p-2 rounded-full mr-3">5</span>
              Dinner (500 cal)
            </h3>
            <ul className="list-disc pl-8 space-y-2 text-gray-700">
              <li>150g white fish (tilapia, cod, or halibut)</li>
              <li>1 cup steamed vegetables (asparagus, zucchini, mushrooms)</li>
              <li>1/2 cup brown rice or cauliflower rice</li>
              <li>Lemon wedge and herbs for flavor</li>
            </ul>
          </div>

          {/* Evening */}
          <div className="pb-6">
            <h3 className="text-xl font-bold mb-3 flex items-center">
              <span className="bg-blue-100 text-blue-800 p-2 rounded-full mr-3">6</span>
              Evening (150 cal)
            </h3>
            <ul className="list-disc pl-8 space-y-2 text-gray-700">
              <li>Casein protein with water</li>
              <li>1 tbsp flaxseeds or chia seeds</li>
              <li>Herbal tea (optional)</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-gray-50 p-4 rounded-lg">
          <h3 className="font-bold text-lg mb-2">Cutting Phase Tips:</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Drink 3-4L of water daily to manage hunger</li>
            <li>Time carbs around workouts for better utilization</li>
            <li>Increase fiber intake to stay full longer</li>
            <li>Use spices and herbs instead of high-calorie sauces</li>
            <li>Consider intermittent fasting if it fits your schedule</li>
          </ul>
        </div>

        <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
          <h3 className="font-bold text-lg mb-2">Optional Cheat Meal (1x/week):</h3>
          <p>Enjoy one controlled cheat meal per week to boost metabolism and maintain sanity. Example: 1 slice pizza + small salad.</p>
        </div>

        <Link 
            to="/diet" 
            className="mt-6 inline-block bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700"
        >
            ← Back to Diet Plans
        </Link>
      </div>
    </div>
  );
}

export default CuttingPlan;
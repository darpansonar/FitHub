import { useState } from 'react';
import MealCard from './MealCard';

export default function MealGenerator() {
  const [meals, setMeals] = useState([]);
  
  const generateMeals = () => {
    // Mock data - replace with API call
    setMeals([
      { id: 1, name: "Grilled Salmon", calories: 450 },
      { id: 2, name: "Quinoa Salad", calories: 320 }
    ]);
  };

  return (
    <div className="space-y-6">
      <button 
        onClick={generateMeals}
        className="btn-primary"
      >
        Generate Meal Plan
      </button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {meals.map(meal => (
          <MealCard key={meal.id} meal={meal} />
        ))}
      </div>
    </div>
  );
}
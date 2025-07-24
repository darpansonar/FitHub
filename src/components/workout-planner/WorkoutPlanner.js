import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableExercise from './DraggableExercise';
import WorkoutDay from './WorkoutDay';

export default function WorkoutPlanner() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        <div>
          <h3 className="text-xl font-bold mb-4">Exercise Library</h3>
          <DraggableExercise id="1" name="Bicep Curl" />
          {/* More draggable items */}
        </div>
        <WorkoutDay day="Monday" />
      </div>
    </DndProvider>
  );
}
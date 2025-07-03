// src/pages/Exercises/CategoryPage.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ExerciseCategoryPage() {
  const { muscleGroup } = useParams();

  // Sample exercise data - replace with your actual GIFs
  const exercises = {
    biceps: [
      { name: "Cable Curl", gif: "cable_curl.gif" },
      { name: "Barbell Curl", gif: "barbell_curl.gif" },
      { name: "Dumbbell Curl", gif: "dumbbell_curl.gif" },
      { name: "Hammer Curl", gif: "hammer_curl.gif" },
      { name: "Preacher Curl", gif: "preacher_curl.gif" },
      { name: "Forearms", gif: "forearms.png" },
      { name: "Rev Barbell Curl", gif: "reverse_barbell_curl.gif" }
    ],

    triceps: [
      { name: "Cable Push Down", gif: "cable_push_down.gif" },
      { name: "Back Dips", gif: "back_dips.gif" },
      { name: "Back Kicks", gif: "back_kicks.gif" },
      { name: "Both Hand D/B Ext.", gif: "both_hand_dumbbell _extension.gif" },
      { name: "Dumbbell Ext", gif: "dumbbell _extension.gif" },
      { name: "Overhead Tricep Ext.", gif: "overhead_tricep_extension.gif" },
      { name: "Rope Push Down", gif: "rope_push_down.gif" },
      { name: "Skull Crusher", gif: "skull_crusher.gif" }
    ],

    abs: [
        { name: "Abs Exercise 1", gif: "abs1.gif" },
        { name: "Abs Exercise 2", gif: "abs2.gif" },
        { name: "Abs Exercise 3", gif: "abs3.gif" },
        { name: "Abs Exercise 4", gif: "abs4.gif" },
        { name: "Abs Exercise 5", gif: "abs5.gif" },
        { name: "Abs Exercise 6", gif: "abs6.gif" },
        { name: "Planck", gif: "planck.gif" }
    ],

    chest: [
        { name: "Bench Press", gif: "bench_press.gif" },
        { name: "Chest Fly", gif: "chest_fly.gif" },
        { name: "Decline Dumbbell Bench Press", gif: "decline_dumbbell_bench_press.gif" },
        { name: "Diamond Push Ups", gif: "diamond_push_ups.gif" },
        { name: "Dumbbell Bench Press", gif: "dumbbell_bench_press.gif" },
        { name: "Incline Dumbbell Fly", gif: "incline_dumbbell_fly.gif" },
        { name: "Incline Push Ups", gif: "incline_push_ups.gif" },
        { name: "Push Ups", gif: "push_ups.gif" }
    ],

    back: [
        { name: "Back Extension", gif: "back_extension.gif" },
        { name: "Barbell Bent Over Row", gif: "barbell_bent_over_row.gif" },
        { name: "Bent Over Dumbbell Row", gif: "bent_over_dumbbell.gif" },
        { name: "Deadlift", gif: "deadlift.gif" },
        { name: "Incline Dumbbell Row", gif: "incline_dumbbell_row.gif" },
        { name: "Lat Pulldown", gif: "lat_pull_down.gif" },
        { name: "Low Cable Row", gif: "low_cable_row.gif" },
        { name: "Pull Ups", gif: "pull_ups.gif" },  
        { name: "Straight Arm Lat Pulldown", gif: "straight_arm_lat_pulldown.gif" },
        { name: "T-Bar Row", gif: "T_bar.gif" }
    ],

    legs: [
        { name: "Bulgarian Split Squats", gif: "bulgarian_squats.gif" },
        { name: "Calf Raises", gif: "calfs.gif" },  // Assuming "calfs" refers to calf exercises
        { name: "Leg Press", gif: "leg press.gif" },
        { name: "Leg Curl", gif: "leg_curl.gif" },
        { name: "Lunges", gif: "lunges.gif" },
        { name: "Squats", gif: "squats.gif" }
    ],

    shoulders: [
        { name: "Arnold Press", gif: "arnold_press.gif" },  
        { name: "Front Raises", gif: "front_raises.gif" },
        { name: "Reverse Peck Fly", gif: "reverse_peck_fly.gif" },  // Likely "Reverse Pec Fly"
        { name: "Shoulder Press", gif: "shoulder_press.gif" },
        { name: "Side Raises", gif: "side_raises.gif" },
        { name: "Upright Cable Row", gif: "upright_cable.gif" }
    ],

    stretching: [
        { name: "Leg Stretch 1", gif: "leg_stretch1.gif" },
        { name: "Leg Stretch 2", gif: "leg_stretch2.gif" },
        { name: "Upper Body Stretch", gif: "stretch3.gif" },
        { name: "Seated Forward Bend", gif: "stretch4.gif" },
        { name: "Shoulder Stretch", gif: "stretch5.gif" },
        { name: "Neck Stretch", gif: "stretch6.gif" },
        { name: "Full Body Stretch", gif: "stretch7.gif" }
    ]
    
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold capitalize mb-8">{muscleGroup} Exercises</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {exercises[muscleGroup]?.map((exercise, index) => (
          <div 
            key={index}
            className="group relative rounded-lg overflow-hidden shadow-md"
          >
            {/* Continuously playing GIF */}
            <div className="aspect-square bg-gray-100">
              <img
                src={`/exercises/${muscleGroup}/${exercise.gif}`}
                alt={exercise.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Exercise name overlay - appears on hover */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-xl font-bold text-center p-2">
                {exercise.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
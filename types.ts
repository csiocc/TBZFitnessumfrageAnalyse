export interface DataPoint {
  name: string;
  value: number;
  fullMark?: number; // For Radar charts
  [key: string]: any;
}

export interface SurveyData {
  totalParticipants: number;
  hoursPerWeek: DataPoint[];
  benchPressRecord: DataPoint[];
  frequencyPerWeek: DataPoint[];
  fitnessLevel: DataPoint[];
  favoriteExercise: DataPoint[];
  yearsTraining: DataPoint[];
  trainingGoals: DataPoint[];
  primaryReason: DataPoint[];
}
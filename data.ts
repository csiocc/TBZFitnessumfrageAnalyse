import { SurveyData } from './types';

// Daten basierend auf den eingereichten Ergebnissen (17 Teilnehmer)
export const mockSurveyData: SurveyData = {
  totalParticipants: 17,

  // 1. Wie viele Stunden trainierst du durchschnittlich pro Woche?
  // Liste: 0, 2-5h, 5h+, Sonstiges
  hoursPerWeek: [
    { name: '0', value: 4 },
    { name: '2-5h', value: 8 },
    { name: '5h+', value: 3 },
    { name: 'Sonstiges', value: 2 },
  ],

  // 2. Was ist dein Rekord im Bankdrücken?
  // Liste: 25kg, 50kg, 75kg, 100kg, 125kg, 150kg, Sonstiges
  benchPressRecord: [
    { name: '25kg', value: 4 },
    { name: '50kg', value: 3 },
    { name: '75kg', value: 0 },
    { name: '100kg', value: 0 },
    { name: '125kg', value: 0 },
    { name: '150kg', value: 1 },
    { name: 'Sonstiges', value: 9 }, // Beinhaltet: 20kg, 0, Keine Ahnung, 30kg, 67kg, noch nie gemacht
  ],

  // 3. Wie oft trainierst du pro Woche?
  // Liste: 1, 2, 3, 4, 5, 6, 7
  frequencyPerWeek: [
    { name: '1', value: 8 },
    { name: '2', value: 2 },
    { name: '3', value: 4 },
    { name: '4', value: 1 },
    { name: '5', value: 2 },
    { name: '6', value: 0 },
    { name: '7', value: 0 },
  ],

  // 4. Wie würdest du dein aktuelles Fitnesslevel einschätzen? auf einer Skala 1-6
  // Liste: 1, 2, 3, 4, 5, 6
  fitnessLevel: [
    { name: '1', value: 5 },
    { name: '2', value: 3 },
    { name: '3', value: 3 },
    { name: '4', value: 5 },
    { name: '5', value: 1 },
    { name: '6', value: 0 },
  ],

  // 5. Was ist deine Lieblingsübung?
  // Liste: Bankdrücken, Kreuzheben, Bizepscurls, Kniebeugen, Klimmzüge, Handy Scrollen, Sonstiges
  favoriteExercise: [
    { name: 'Bankdrücken', value: 1 },
    { name: 'Kreuzheben', value: 1 },
    { name: 'Bizepscurls', value: 4 },
    { name: 'Kniebeugen', value: 3 },
    { name: 'Klimmzüge', value: 1 },
    { name: 'Handy Scrollen', value: 5 },
    { name: 'Sonstiges', value: 2 },
  ],

  // 6. Wie viele Jahre trainierst du schon?
  // Liste: 1, 2, 3, 4, 5, Sonstiges
  yearsTraining: [
    { name: '1', value: 3 },
    { name: '2', value: 2 },
    { name: '3', value: 0 },
    { name: '4', value: 0 },
    { name: '5', value: 3 },
    { name: 'Sonstiges', value: 9 }, // Beinhaltet: 0, 16, Unbekannt, 12, 8, etc.
  ],

  // 7. Welche Trainingsziele hast du?
  // Liste: Muskelaufbau, Fettabbau, Ausdauer, Gesundheit, Beweglichkeit, Stressabbau, Wettkampfvorbereitung, Fette Bizeps man
  trainingGoals: [
    { name: 'Muskelaufbau', value: 7, fullMark: 17 },
    { name: 'Fettabbau', value: 6, fullMark: 17 },
    { name: 'Ausdauer', value: 5, fullMark: 17 },
    { name: 'Gesundheit', value: 9, fullMark: 17 },
    { name: 'Beweglichkeit', value: 5, fullMark: 17 },
    { name: 'Stressabbau', value: 3, fullMark: 17 },
    { name: 'Wettkampfvorbereitung', value: 2, fullMark: 17 },
    { name: 'Fette Bizeps man', value: 3, fullMark: 17 },
  ],

  // 8. Was ist dein primärer Grund, sportlich aktiv zu sein?
  // Liste: Gesundheit, Aussehen, Leistung, Soziales, Dem Lauch sein entkommen
  primaryReason: [
    { name: 'Gesundheit', value: 6 },
    { name: 'Aussehen', value: 4 },
    { name: 'Leistung', value: 1 },
    { name: 'Soziales', value: 2 },
    { name: 'Dem Lauch sein entkommen', value: 4 },
  ],
};
export interface EudoriaEvent {
  month: number; // 0-12
  day: number;
  title: string;
  type: 'birthday' | 'holiday' | 'rest-day' | 'observance';
}

export const EUDORIA_EVENTS: EudoriaEvent[] = [
  // Eudorasis
  { month: 0, day: 1, title: "Bloomday", type: "holiday" },
  { month: 0, day: 4, title: "Eudora's Day", type: "rest-day" },
  { month: 0, day: 7, title: "Prince Sammy's Birthday", type: "birthday" },
  { month: 0, day: 17, title: "Prince Alex's Birthday", type: "birthday" },
  { month: 0, day: 19, title: "Amelia Birthday", type: "birthday" },
  { month: 0, day: 25, title: "Chris & Moana Anniversary", type: "observance" },

  // Primoria
  { month: 1, day: 3, title: "Queen Kalia's Birthday", type: "birthday" },
  { month: 1, day: 4, title: "Deshawn's Birthday", type: "birthday" },
  { month: 1, day: 7, title: "Penina Birthday", type: "birthday" },
  { month: 1, day: 11, title: "Prince Ken", type: "birthday" },
  { month: 1, day: 14, title: "Nature Day", type: "holiday" },
  { month: 1, day: 15, title: "Lani's Birthday", type: "birthday" },
  { month: 1, day: 21, title: "Ay'mor", type: "holiday" },
  { month: 1, day: 22, title: "Jamal's Birthday", type: "birthday" },
  { month: 1, day: 25, title: "Chris Williams's Birthday", type: "birthday" },
  { month: 1, day: 27, title: "Eudora's Day", type: "rest-day" },

  // Sera
  { month: 2, day: 7, title: "Tamah Birthday", type: "birthday" },
  { month: 2, day: 10, title: "Passover Begins", type: "holiday" },
  { month: 2, day: 12, title: "Taniyah Birthday", type: "birthday" },
  { month: 2, day: 16, title: "Passover Ends", type: "holiday" },
  { month: 2, day: 20, title: "Diana Birthday", type: "birthday" },
  { month: 2, day: 23, title: "Eudora's Day", type: "rest-day" },
  { month: 2, day: 25, title: "Mariah, Lulu & Tabitha Birthday", type: "birthday" },
  { month: 2, day: 28, title: "Moana's Birthday", type: "birthday" }, // Assumed 28th based on placement

  // Maunox
  { month: 3, day: 21, title: "Eudora Day", type: "rest-day" },

  // Naimara
  { month: 4, day: 10, title: "Nani Marie Birthday", type: "birthday" },
  { month: 4, day: 11, title: "Nubi Independence / Carla's Birthday", type: "holiday" },
  { month: 4, day: 13, title: "Jouvert de Naime", type: "holiday" },
  { month: 4, day: 14, title: "Deonte Birthday", type: "birthday" },
  { month: 4, day: 15, title: "Eudora's Day", type: "rest-day" },
  { month: 4, day: 18, title: "Sina & Vinny Birthday", type: "birthday" },
  { month: 4, day: 22, title: "Wine & Watah / Meilani's Birthday", type: "holiday" },
  { month: 4, day: 23, title: "Wine & Watah", type: "holiday" },
  { month: 4, day: 24, title: "Wine & Watah", type: "holiday" },

  // Afronox
  { month: 5, day: 10, title: "Eudora's Day", type: "rest-day" },
  { month: 5, day: 12, title: "Danny's Birthday", type: "birthday" },
  { month: 5, day: 20, title: "Rangi's Birthday", type: "birthday" },
  { month: 5, day: 23, title: "Eli Birthday", type: "birthday" },

  // Eudorine
  { month: 6, day: 7, title: "Noga's Day", type: "holiday" },
  { month: 6, day: 18, title: "Eudora's Day", type: "rest-day" },

  // Suliamun
  { month: 7, day: 9, title: "Eudora's Day", type: "rest-day" },

  // Naaviemun
  { month: 8, day: 3, title: "12 Days Fasting Begins / Violet's Birthday", type: "observance" },
  { month: 8, day: 7, title: "Gabi's Birthday", type: "birthday" },
  { month: 8, day: 14, title: "Barak Festival Ends / Eudora's Day", type: "holiday" },
  { month: 8, day: 15, title: "Talia & Tane Birthday", type: "birthday" },
  { month: 8, day: 27, title: "Grazeora", type: "holiday" },
  { month: 8, day: 28, title: "Grazeora", type: "holiday" },

  // Kanythos
  { month: 9, day: 7, title: "Princess Romy's Birthday", type: "birthday" },
  { month: 9, day: 15, title: "Eudora's Day", type: "rest-day" },
  { month: 9, day: 17, title: "Melody's Birthday", type: "birthday" },
  { month: 9, day: 28, title: "Soulfall", type: "holiday" },

  // Zendariyah
  { month: 10, day: 10, title: "Winter's Begin", type: "holiday" },
  { month: 10, day: 12, title: "Eudora's Day", type: "rest-day" },
  { month: 10, day: 15, title: "Winter Break", type: "holiday" },
  { month: 10, day: 25, title: "Winter Break Ends", type: "holiday" },

  // Afrialuna
  { month: 11, day: 7, title: "Naveen's Birthday", type: "birthday" },
  { month: 11, day: 14, title: "Eudora's Day", type: "rest-day" },
  { month: 11, day: 17, title: "Zola's Birthday", type: "birthday" },
  { month: 11, day: 20, title: "Winter Break", type: "holiday" },
  { month: 11, day: 22, title: "Kinlight", type: "holiday" },
  { month: 11, day: 23, title: "Kinlight / Chris Vinji Birthday", type: "holiday" },
  { month: 11, day: 24, title: "Kinlight / Tui Birthday", type: "holiday" },

  // Yahuahor
  { month: 12, day: 1, title: "Yaum Al-Tahrir Begins", type: "holiday" },
  { month: 12, day: 7, title: "Eudora's Day", type: "rest-day" }, // Replaced one 7th entry with rest day
  { month: 12, day: 7, title: "Yaum Al-Tahrir Ends", type: "holiday" },
  { month: 12, day: 10, title: "Winter Break Ends", type: "holiday" },
];

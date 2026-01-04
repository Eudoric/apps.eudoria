// Anchor: Jan 4, 2026 (Gregorian) is Zendariyah 9, Year 3025.
// Zendariyah is month index 10 (11th month).
// Days into Noga year = (10 * 28) + 9 = 289 days.

const ANCHOR_GREGORIAN = new Date(2026, 0, 4); // Jan 4, 2026
const ANCHOR_NOGA_DAY_OF_YEAR = 289; 
const ANCHOR_NOGA_YEAR = 3025;
const NOGA_YEAR_LENGTH = 364;

export interface NogaDate {
  year: number;
  month: number; // 0-12
  day: number;   // 1-28
  dayOfWeek: number; // 0-6 (Day 1 to Day 7)
}

export const MONTH_NAMES = [
  "Eudorasis", "Primoria", "Sera", "Maunox", "Naimara", "Afronox", 
  "Eudorine", "Suliamun", "Naaviemun", "Kanythos", "Zendariyah", 
  "Afrialuna", "Yahuahor"
];

// Eudoria uses numbered days for the week
export const WEEK_DAYS = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"];

export function getNogaDate(date: Date): NogaDate {
  const diffInMs = date.getTime() - ANCHOR_GREGORIAN.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  
  let totalNogaDays = (ANCHOR_NOGA_DAY_OF_YEAR - 1) + diffInDays;
  let year = ANCHOR_NOGA_YEAR;
  
  while (totalNogaDays < 0) {
    totalNogaDays += NOGA_YEAR_LENGTH;
    year--;
  }
  while (totalNogaDays >= NOGA_YEAR_LENGTH) {
    totalNogaDays -= NOGA_YEAR_LENGTH;
    year++;
  }

  const month = Math.floor(totalNogaDays / 28);
  const day = (totalNogaDays % 28) + 1;
  const dayOfWeek = totalNogaDays % 7;

  return { year, month, day, dayOfWeek };
}

export function formatNogaDate(noga: NogaDate): string {
  return `${MONTH_NAMES[noga.month]} ${noga.day}, Year ${noga.year}`;
}

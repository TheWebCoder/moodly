/** Nested structure: year -> month index (0-11) -> day of month -> mood rating (1-5) */
export type MoodData = Record<number, Record<number, Record<number, number>>>;

export type UserData = MoodData;

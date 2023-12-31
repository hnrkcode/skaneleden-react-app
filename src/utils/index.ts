import type { Difficulty } from "../types/commonTypes";

export function convertToKM(value: string): string {
  return `${parseInt(value) / 1000} km`;
}

export function compareName(a: string, b: string, order: string): number {
  const nameA = a.toLowerCase();
  const nameB = b.toLowerCase();

  if (nameA < nameB) {
    return order === "asc" ? -1 : 1;
  }

  if (nameA > nameB) {
    return order === "asc" ? 1 : -1;
  }

  return 0;
}

export function compareDistance(a: number, b: number, order: string): number {
  return order === "asc" ? a - b : b - a;
}

export function compareLowElevation(
  a: number[] | null,
  b: number[] | null,
  order: string
): number {
  const lowestPointA = a ? Math.min(...a) : -9999;
  const lowestPointB = b ? Math.min(...b) : -9999;

  return order === "asc"
    ? lowestPointA - lowestPointB
    : lowestPointB - lowestPointA;
}

export function compareHighElevation(
  a: number[] | null,
  b: number[] | null,
  order: string
): number {
  const highestPointA = a ? Math.max(...a) : -9999;
  const highestPointB = b ? Math.max(...b) : -9999;

  return order === "asc"
    ? highestPointA - highestPointB
    : highestPointB - highestPointA;
}

export function compareDifficulty(a: string, b: string, order: string): number {
  const difficulties: Record<Difficulty, number> = {
    "very-easy": 0,
    easy: 1,
    medium: 2,
    hard: 3,
  };
  const nameA = a.toLowerCase() as Difficulty;
  const nameB = b.toLowerCase() as Difficulty;

  return order === "asc"
    ? difficulties[nameA] - difficulties[nameB]
    : difficulties[nameB] - difficulties[nameA];
}

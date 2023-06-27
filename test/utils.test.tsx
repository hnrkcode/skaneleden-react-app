import { test, expect } from "vitest";
import {
  convertToKM,
  compareName,
  compareDistance,
  compareDifficulty,
} from "../src/utils";

test("Test utils.convertToKM", () => {
  expect(convertToKM("24000")).toEqual("24 km");
});

test("Test utils.compareName ascending order", () => {
  expect(
    compareName("Österslöv - Norra Lingenäset", "Åhus - Nyehusen", "asc")
  ).toEqual(1);
});

test("Test utils.compareName descending order", () => {
  expect(
    compareName("Österslöv - Norra Lingenäset", "Åhus - Nyehusen", "desc")
  ).toEqual(-1);
});

test("Test utils.compareName same values", () => {
  expect(compareName("SL6 Vattenriket", "SL6 Vattenriket", "asc")).toEqual(0);
  expect(compareName("SL6 Vattenriket", "SL6 Vattenriket", "desc")).toEqual(0);
});

test("Test utils.compareDistance ascending order", () => {
  expect(compareDistance(24000, 22000, "asc")).toEqual(2000);
});

test("Test utils.compareDistance descending order", () => {
  expect(compareDistance(500, 1000, "desc")).toEqual(500);
});

test("Test utils.compareDistance same values", () => {
  expect(compareDistance(24000, 24000, "asc")).toEqual(0);
});

test("Test utils.compareDifficulty ascending order", () => {
  expect(compareDifficulty("very-easy", "easy", "desc")).toEqual(1);
  expect(compareDifficulty("very-easy", "medium", "desc")).toEqual(2);
  expect(compareDifficulty("very-easy", "hard", "desc")).toEqual(3);
});

test("Test utils.compareDifficulty descending order", () => {
  expect(compareDifficulty("hard", "very-easy", "desc")).toEqual(-3);
  expect(compareDifficulty("hard", "easy", "desc")).toEqual(-2);
  expect(compareDifficulty("hard", "medium", "desc")).toEqual(-1);
});

test("Test utils.compareDifficulty same value", () => {
  expect(compareDifficulty("very-easy", "very-easy", "desc")).toEqual(0);
  expect(compareDifficulty("hard", "hard", "asc")).toEqual(0);
});

// One Sentence for a Traveler from 1800
// (make.fun bounty u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)
//
// Writes a single sentence, at most 200 characters, to /output/entry.txt.
// The sentence explains the modern internet to someone who has just
// stepped out of the year 1800, using only things a person of that year
// could already picture: a road, letters, books, voices, a horse.
//
// Candidates I weighed before choosing (all my own wording):
//   A. "Imagine a road that runs to every house on earth, carrying letters,
//      books, and voices faster than any horse, at any hour of the day
//      or night." — strong road image, but "every house on earth"
//      overclaims: not every house is on the net, and a literal reader
//      would be misled.
//   B. "It is a post office with no walls, where any letter, book, or voice
//      in the world can be fetched by any man in the blink of an eye."
//      — memorable, but "any letter, book, or voice" overclaims too, and
//      it says nothing about the net carrying talk between people.
//   C. "Picture a library that holds the letters and books of the whole
//      world, open to any man at any hour." — true of reading, but silent
//      on letters sent and voices carried, so it explains only half.
//   D. (chosen) One road, named as the internet itself, joining house to
//      house across the whole earth: it says what the thing is, what it
//      carries (letters, books, voices = mail, knowledge, talk), how fast
//      (faster than any horse — the 1800 measure of speed), and that it
//      never sleeps. Every word but "internet" itself was in use before
//      1800, and "internet" is the name of the thing being explained.
//
// Deterministic, Node.js standard library only, no network, no input.

import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "The internet is a road joining house to house across the whole earth, " +
  "carrying letters, books, and voices faster than any horse, at any hour " +
  "of the day or night.";

// Guard: the gate accepts 1–200 characters and a single sentence.
if (SENTENCE.length > 200) {
  throw new Error(`Sentence is ${SENTENCE.length} characters, over the 200 limit.`);
}
if (SENTENCE.trim().split(/[.!?]/).filter(Boolean).length !== 1) {
  throw new Error("Sentence must be exactly one sentence.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE + "\n", "utf8");

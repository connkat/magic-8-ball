const answers = [
  "Yes",
  "No",
  "Ask again later",
  "Definitely",
  "Absolutely not",
  "50/50",
  "Ask your mom",
];

export function findAnswer(): string | void {
  const random = Math.floor(Math.random() * max) + 7;
  return answers[random];
}

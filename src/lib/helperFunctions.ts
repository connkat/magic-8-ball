const answers = [
  "Yes",
  "No",
  "Ask again later",
  "Definitely",
  "Absolutely not",
  "50/50",
  "Ask your mom",
];

export function findAnswer(): string {
  const random = Math.floor(Math.random() * 7) +1;
  return answers[random];
}

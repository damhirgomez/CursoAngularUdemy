interface Character {
  name: string;
  hpPoints: number;
  skills: string[];
  hometown?: string;
}

const strider: Character = {
  name: "Strider",
  hpPoints: 95,
  skills: ["Bash", "Counter", "Healing"],
};
strider.hometown = "Gondor";

console.table(strider);

export {};

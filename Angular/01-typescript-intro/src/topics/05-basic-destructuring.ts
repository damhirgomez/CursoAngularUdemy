interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "Mess",
  details: {
    author: "Ed Sheeran",
    year: 2019,
  },
};
const song = "New song";
const { song: anotherSong, songDuration: duration, details: detalles } = audioPlayer;

const { author: autor } = detalles;

console.log("Song:", song);
console.log("anotherSong:", anotherSong);
console.log("duration:", duration);
console.log("Author:", autor);

const [, , trunks = "Not found"] = ["Goku", "Vegeta"];

console.log(trunks);

export {};

export const API_KEY = "e82b2dba";
export const URL = `http://www.omdbapi.com/?apikey=${API_KEY}&`;
export const SLIDES_PER_PAGE_MB = 2;
export const SLIDES_PER_PAGE_TB = 3;
export const SLIDES_PER_PAGE_LT = 4;
export const SLIDES_PER_PAGE_DE = 5;
export const mediaQueryConfig = {
  "(min-width: 0px)": SLIDES_PER_PAGE_MB,
  "(min-width: 768px)": SLIDES_PER_PAGE_TB,
  "(min-width: 1440px)": SLIDES_PER_PAGE_LT,
  "(min-width: 1920px)": SLIDES_PER_PAGE_DE,
};

export const devices = [
  {
    icon: "phoneicon",
    device: "smartphone",
    caption:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    icon: "tablet",
    device: "tablet",
    caption:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    icon: "TV",
    device: "smart TV",
    caption:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    icon: "laptop",
    device: "laptops",
    caption:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    icon: "gaming",
    device: "gaming consoles",
    caption:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    icon: "VR",
    device: "VR headsets",
    caption:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
];
const POSTER_MOVIES = {
  action: ["the union", "civil war", "deadpool", "the fall guy"],
  adventure: ["blue beetle", "atlas", "spaceman", "borderlands"],
  comedy: ["fly me to the moon", "incoming", "superbad", "green book"],
  drama: ["war dogs", "waves", "southpaw", "the killer"],
  horro: ["talk to me", "dark harvest", "candyman", "baghead"],
};

const MOVIES = {
  action: [
    "the union",
    "civil war",
    "deadpool",
    "the fall guy",
    "john wick",
    "lift",
    "freelance",
    "hit man",
    "wing women",
    "red notice",
  ],
  adventure: [
    "blue beetle",
    "atlas",
    "spaceman",
    "borderlands",
    "madame web",
    "inception",
    "the creator",
    "interstellar",
    "dolittle",
    "no time to die",
  ],
  comedy: [
    "fly me to the moon",
    "incoming",
    "superbad",
    "green book",
    "scary movie",
    "freaky",
    "the gentlman",
    "getout",
    "magic mike",
    "anyone but you",
  ],
  drama: [
    "war dogs",
    "waves",
    "southpaw",
    "the killer",
    "the hate you give",
    "joker",
    "smile",
    "the black phone",
    "selma",
    "the iron claw",
  ],
  horro: [
    "talk to me",
    "dark harvest",
    "candyman",
    "baghead",
    "seven",
    "a hunted house",
    "split",
    "halloween",
    "the first omen",
    "agness",
  ],
};

const SHOW_POSTERS = {
  action: ["the rookie", "the acolyte", "gotham", "squid game"],
  // prettier-ignore
  adventure: ["game of thrones", "the wheel of time", "smallville", "the flash",],
  comedy: ["modern family", "the nanny", "bad sisters", "emily in paris"],
  drama: ["severance", "tulsa king", "show horses", "shirinking"],
  horro: ["stranger things", "the walking dead", "them", "supernatural"],
};

const SHOWS = {
  action: [
    "the rookie",
    "the acolyte",
    "gotham",
    "squid game",
    "the terminal list",
    "fire country",
    "the old man",
    "arcane",
    "seal team",
    "the equalizer",
  ],
  adventure: [
    "game of thrones",
    "the wheel of time",
    "smallville",
    "the flash",
    "the umbrella academy",
    "vikings",
    "fallout",
    "outlander",
    "sweet tooth",
    "black sails",
  ],
  comedy: [
    "modern family",
    "the nanny",
    "bad sisters",
    "emily in paris",
    "bad monkey",
    "time bandits",
    "pernille",
    "victorious",
    "cobra kai",
    "sunny",
  ],
  drama: [
    "severance",
    "tulsa king",
    "show horses",
    "shirinking",
    "heartstopper",
    "industry",
    "the bear",
    "bridgerton",
    "your honor",
    "yellowstone",
  ],
  horro: [
    "stranger things",
    "the walking dead",
    "them",
    "supernatural",
    "the terror",
    "the last of us",
    "the outsider",
    "chuncky",
    "sweet home",
    "midnight mass",
  ],
};

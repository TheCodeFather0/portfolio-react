import { create } from "zustand";

export const useMyData = create((set) => ({
  myData: {
    username: "TheCodeFather",
    firstName: "Ramin",
    lastName: "Mammadzada",
    profilePhoto: "/profile.png",
    department: "Web developer",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat ut voluptates soluta, aut earum nemo recusandae cumque perferendis! Recusandae alias accusamus atque.",
    profesionalSkils:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit optio id vero amet, alias architecto consectetur error eum eaque sit.",
    skils: [
      { id: 0, name: "html 5", percent: 90 },
      { id: 1, name: "css 3", percent: 80 },
      { id: 2, name: "javascript", percent: 70 },
    ],

    socialMedia: [
      {
        id: 0,
        type: "linkedin",
        link: "https://www.linkedin.com/in/the-code-father/",
      },
      {
        id: 1,
        type: "github",
        link: "https://github.com/TheCodeFather0/",
      },
    ],
  },
}));

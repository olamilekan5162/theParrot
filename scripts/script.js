const storyCollection = [
  {
    title: "The Whispering Woods",
    author: "Emily J. Miller",
    region: "North America",
    theme: "Mystery",
  },
  {
    title: "Sahara Nights",
    author: "Amira Hassan",
    region: "Africa",
    theme: "Romance",
  },
  {
    title: "The Last Leaf",
    author: "Liam Chen",
    region: "Asia",
    theme: "Drama",
  },
  {
    title: "Moonlit Serenade",
    author: "Sofia Rodriguez",
    region: "South America",
    theme: "Romance",
  },
  {
    title: "The Forgotten City",
    author: "Ethan Patel",
    region: "Europe",
    theme: "Adventure",
  },
  {
    title: "Desert Dreams",
    author: "Aisha Ali",
    region: "Middle East",
    theme: "Inspiration",
  },
  {
    title: "The Stormy Night",
    author: "Mia Kim",
    region: "Asia",
    theme: "Thriller",
  },
  {
    title: "The Lost Explorer",
    author: "Jack Taylor",
    region: "North America",
    theme: "Adventure",
  },
  {
    title: "The Secret Garden",
    author: "Lily Lee",
    region: "Europe",
    theme: "Drama",
  },
  {
    title: "The Starry Sky",
    author: "Ahmed Mohamed",
    region: "Africa",
    theme: "Romance",
  },
];

const mainMenu = () => {
  const userChoice = prompt(
    "Enter the value for the service you want \n1. Search for Story by theme \n2. print story list by theme"
  );
  if (userChoice === "1") {
    search();
  } else if (userChoice === "2") {
    storyList();
  }
};

const search = () => {
  const theme = prompt("Search for story by theme name ...");

  try {
    for (const i in storyCollection) {
      if (
        storyCollection[i].theme.toLocaleLowerCase() ===
        theme.toLocaleLowerCase()
      ) {
        console.table(storyCollection[i]);
      } else {
        console.error("No matching story with the theme name");
      }
    }
  } catch (e) {
    console.error(e);
  }
};

const storyList = () => {
  for (const i in storyCollection) {
    console.table(storyCollection[i]);
  }
};

mainMenu();

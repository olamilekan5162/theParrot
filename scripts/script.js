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
    "Enter the value for the service you want \n1. Search for Story by theme \n2. Print total number of story by theme"
  );
  if (userChoice === "1") {
    search();
  } else if (userChoice === "2") {
    themeList();
  }
};

// thought process for searching
// 1. i prompt the user to enter the theme name of the story they are looking for
// 2. I loop through the story collection array and check if the array contains the theme name searched by the user
// 3. if it is found i log all story with the theme name in a table

const search = () => {
  const theme = prompt("Search for story by theme name ...");
  let isfound = false;

  for (let i of storyCollection) {
    if (i.theme.toLocaleLowerCase() === theme.toLocaleLowerCase()) {
      isfound = true;
      console.table(i);
    }
  }
  if (!isfound) {
    console.error("No matching story with the theme name");
  }
};

const themeList = () => {
  const themeCount = {};

  for (let i of storyCollection) {
    if (i.theme in themeCount) {
      themeCount[i.theme]++;
    } else {
      themeCount[i.theme] = 1;
    }
  }

  console.table(themeCount);
};

mainMenu();

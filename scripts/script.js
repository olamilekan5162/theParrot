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
  } else {
    mainMenu();
  }
};

// Thought process for searching
// 1. I prompt the user to enter the theme name of the story they are looking for
// 2. I loop through the story collection array and check if the array contains the theme name searched by the user
// 3. if it is found I log all story with the theme in a table
// 4. then i use an else statement to print "No matching story with the theme name" if the theme is not found but i found out it prints the else statement the amount of time it does not find the theme while looping through the array
// 5. so i resolved to introducing a boolen isFound that gets toggle if at least a single story with the theme is found, thus i can leverage on that to prevent the loop from printing "No matching story with the theme name" even when a story is found

const search = () => {
  const theme = prompt("Search for story by theme name ...");
  let isFound = false;

  for (let i of storyCollection) {
    if (i.theme.toLocaleLowerCase() === theme.toLocaleLowerCase()) {
      isFound = true;
      console.table(i);
    }
  }
  if (!isFound) {
    console.error("No matching story with the theme name");
  }
};

// Thought process for implementing categorizing story by theme
// 1. I initialize an empty object to store the theme and it count as a key and value
// 2. I loop through the story collection array and store all theme as a key and an initial value of 1
// 3. While looping, I check if a theme is already in the initialized object, if it already exist, i increment it value by 1 and the increament goes on as long as the loop hits a theme that is already in the intialized object again and again.

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

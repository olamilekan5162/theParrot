const storyCollection = [
  {
    title: "The Whispering Woods",
    author: "Emily J. Miller",
    region: "North America",
    theme: "Mystery",
    story:
      "ipsum dolor sit amet consectetur adipisicing elit. Quisquam sequi tempora, animi nulla eum excepturi velit architecto reiciendis aliquam maiores exercitationem praesentium veniam repellendus veritatis, temporibus sit natus ex autem perspiciatis commodi, nisi amet illo. Velit, voluptatum quidem doloribus nesciunt culpa sint, impedit quod beatae quaerat necessitatibus, quas fugit. Sit sapiente tenetur ratione nulla explicabo ipsam mollitia dolorem, delectus placeat doloremque eaque modi quis optio nesciunt earum magni perferendis amet? Impedit earum at dolore ratione enim ducimus consequuntur, vel doloribus, a quia molestiae placeat unde officia veritatis? Saepe alias sunt quibusdam. Itaque, rem est quia dolorem debitis ea deserunt sit.",
  },
  {
    title: "Sahara Nights",
    author: "Amira Hassan",
    region: "Africa",
    theme: "Romance",
    story:
      "dolor sit amet consectetur adipisicing elit. Quisquam sequi tempora, animi nulla eum excepturi velit architecto reiciendis aliquam maiores exercitationem praesentium veniam repellendus veritatis, temporibus sit natus ex autem perspiciatis commodi, nisi amet illo. Velit, voluptatum quidem doloribus nesciunt culpa sint, impedit quod beatae quaerat necessitatibus, quas fugit. Sit sapiente tenetur ratione nulla explicabo ipsam mollitia dolorem, delectus placeat doloremque eaque modi quis optio nesciunt earum magni perferendis amet? Impedit earum at dolore ratione enim ducimus consequuntur, vel doloribus, a quia molestiae placeat unde officia veritatis? Saepe alias sunt quibusdam. Itaque, rem est quia dolorem debitis ea deserunt sit.",
  },
  {
    title: "The Last Leaf",
    author: "Emily J. Miller",
    region: "Asia",
    theme: "Drama",
    story:
      "sit amet consectetur adipisicing elit. Quisquam sequi tempora, animi nulla eum excepturi velit architecto reiciendis aliquam maiores exercitationem praesentium veniam repellendus veritatis, temporibus sit natus ex autem perspiciatis commodi, nisi amet illo. Velit, voluptatum quidem doloribus nesciunt culpa sint, impedit quod beatae quaerat necessitatibus, quas fugit. Sit sapiente tenetur ratione nulla explicabo ipsam mollitia dolorem, delectus placeat doloremque eaque modi quis optio nesciunt earum magni perferendis amet? Impedit earum at dolore ratione enim ducimus consequuntur, vel doloribus, a quia molestiae placeat unde officia veritatis? Saepe alias sunt quibusdam. Itaque, rem est quia dolorem debitis ea deserunt sit.",
  },
  {
    title: "Moonlit Serenade",
    author: "Sofia Rodriguez",
    region: "South America",
    theme: "Romance",
    story:
      "amet consectetur adipisicing elit. Quisquam sequi tempora, animi nulla eum excepturi velit architecto reiciendis aliquam maiores exercitationem praesentium veniam repellendus veritatis, temporibus sit natus ex autem perspiciatis commodi, nisi amet illo. Velit, voluptatum quidem doloribus nesciunt culpa sint, impedit quod beatae quaerat necessitatibus, quas fugit. Sit sapiente tenetur ratione nulla explicabo ipsam mollitia dolorem, delectus placeat doloremque eaque modi quis optio nesciunt earum magni perferendis amet? Impedit earum at dolore ratione enim ducimus consequuntur, vel doloribus, a quia molestiae placeat unde officia veritatis? Saepe alias sunt quibusdam. Itaque, rem est quia dolorem debitis ea deserunt sit.",
  },
  {
    title: "The Forgotten City",
    author: "Emily J. Miller",
    region: "Europe",
    theme: "Adventure",
    story:
      "consectetur adipisicing elit. Quisquam sequi tempora, animi nulla eum excepturi velit architecto reiciendis aliquam maiores exercitationem praesentium veniam repellendus veritatis, temporibus sit natus ex autem perspiciatis commodi, nisi amet illo. Velit, voluptatum quidem doloribus nesciunt culpa sint, impedit quod beatae quaerat necessitatibus, quas fugit. Sit sapiente tenetur ratione nulla explicabo ipsam mollitia dolorem, delectus placeat doloremque eaque modi quis optio nesciunt earum magni perferendis amet? Impedit earum at dolore ratione enim ducimus consequuntur, vel doloribus, a quia molestiae placeat unde officia veritatis? Saepe alias sunt quibusdam. Itaque, rem est quia dolorem debitis ea deserunt sit.",
  },
  {
    title: "Desert Dreams",
    author: "Aisha Ali",
    region: "Middle East",
    theme: "Inspiration",
    story:
      "jaga adipisicing elit. Quisquam sequi tempora, animi nulla eum excepturi velit architecto reiciendis aliquam maiores exercitationem praesentium veniam repellendus veritatis, temporibus sit natus ex autem perspiciatis commodi, nisi amet illo. Velit, voluptatum quidem doloribus nesciunt culpa sint, impedit quod beatae quaerat necessitatibus, quas fugit. Sit sapiente tenetur ratione nulla explicabo ipsam mollitia dolorem, delectus placeat doloremque eaque modi quis optio nesciunt earum magni perferendis amet? Impedit earum at dolore ratione enim ducimus consequuntur, vel doloribus, a quia molestiae placeat unde officia veritatis? Saepe alias sunt quibusdam. Itaque, rem est quia dolorem debitis ea deserunt sit.",
  },
  {
    title: "The Stormy Night",
    author: "Mia Kim",
    region: "Asia",
    theme: "Thriller",
    story:
      "adipisicing elit. Quisquam sequi tempora, animi nulla eum excepturi velit architecto reiciendis aliquam maiores exercitationem praesentium veniam repellendus veritatis, temporibus sit natus ex autem perspiciatis commodi, nisi amet illo. Velit, voluptatum quidem doloribus nesciunt culpa sint, impedit quod beatae quaerat necessitatibus, quas fugit. Sit sapiente tenetur ratione nulla explicabo ipsam mollitia dolorem, delectus placeat doloremque eaque modi quis optio nesciunt earum magni perferendis amet? Impedit earum at dolore ratione enim ducimus consequuntur, vel doloribus, a quia molestiae placeat unde officia veritatis? Saepe alias sunt quibusdam. Itaque, rem est quia dolorem debitis ea deserunt sit.",
  },
  {
    title: "The Lost Explorer",
    author: "Jack Taylor",
    region: "North America",
    theme: "Adventure",
    story:
      "elit. Quisquam sequi tempora, animi nulla eum excepturi velit architecto reiciendis aliquam maiores exercitationem praesentium veniam repellendus veritatis, temporibus sit natus ex autem perspiciatis commodi, nisi amet illo. Velit, voluptatum quidem doloribus nesciunt culpa sint, impedit quod beatae quaerat necessitatibus, quas fugit. Sit sapiente tenetur ratione nulla explicabo ipsam mollitia dolorem, delectus placeat doloremque eaque modi quis optio nesciunt earum magni perferendis amet? Impedit earum at dolore ratione enim ducimus consequuntur, vel doloribus, a quia molestiae placeat unde officia veritatis? Saepe alias sunt quibusdam. Itaque, rem est quia dolorem debitis ea deserunt sit.",
  },
  {
    title: "The Secret Garden",
    author: "Mia Kim",
    region: "Europe",
    theme: "Drama",
    story:
      "Quisquam sequi tempora, animi nulla eum excepturi velit architecto reiciendis aliquam maiores exercitationem praesentium veniam repellendus veritatis, temporibus sit natus ex autem perspiciatis commodi, nisi amet illo. Velit, voluptatum quidem doloribus nesciunt culpa sint, impedit quod beatae quaerat necessitatibus, quas fugit. Sit sapiente tenetur ratione nulla explicabo ipsam mollitia dolorem, delectus placeat doloremque eaque modi quis optio nesciunt earum magni perferendis amet? Impedit earum at dolore ratione enim ducimus consequuntur, vel doloribus, a quia molestiae placeat unde officia veritatis? Saepe alias sunt quibusdam. Itaque, rem est quia dolorem debitis ea deserunt sit.",
  },
  {
    title: "The Starry Sky",
    author: "Ahmed Mohamed",
    region: "Africa",
    theme: "Romance",
    story:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sequi tempora, animi nulla eum excepturi velit architecto reiciendis aliquam maiores exercitationem praesentium veniam repellendus veritatis, temporibus sit natus ex autem perspiciatis commodi, nisi amet illo. Velit, voluptatum quidem doloribus nesciunt culpa sint, impedit quod beatae quaerat necessitatibus, quas fugit. Sit sapiente tenetur ratione nulla explicabo ipsam mollitia dolorem, delectus placeat doloremque eaque modi quis optio nesciunt earum magni perferendis amet? Impedit earum at dolore ratione enim ducimus consequuntur, vel doloribus, a quia molestiae placeat unde officia veritatis? Saepe alias sunt quibusdam. Itaque, rem est quia dolorem debitis ea deserunt sit.",
  },
];

const mainMenu = () => {
  const userChoice = prompt(
    "Enter the value for the service you want \n1. Search for Story by theme \n2. Print total number of story by theme \n3. Add a new Story"
  );
  if (userChoice === "1") {
    search();
  } else if (userChoice === "2") {
    themeList();
  } else if (userChoice === "3") {
    addStory();
  } else if (userChoice === "4") {
    longestStory();
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

const addStory = () => {
  const title = prompt("Enter the title of the story");
  const author = "Opeyemi Olalekan";
  const region = prompt("Enter the story region");
  const theme = prompt("Enter the theme of the story");
  const story = prompt("Enter the story");
  storyCollection.push({
    title: title,
    author: author,
    region: region,
    theme: theme,
    story: story,
  });

  console.table(storyCollection);
};

const longestStory = () => {
  let longest = 0;
  let title = "";
  for (i of storyCollection) {
    if (i.story.length > longest) {
      longest = i.story.length;
      title = i.title;
    }
  }
  console.table(title);
};

const booksByAuthors = () => {
  const authorBook = {};
  for (i of storyCollection) {
    if (i.author in authorBook) {
      authorBook[i.author]++;
    } else {
      authorBook[i.author] = 1;
    }
  }
  console.table(authorBook);
};

booksByAuthors();

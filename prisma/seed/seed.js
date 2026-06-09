// 12.0 my requirement is to seed my database with users and movies

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const creatorId = "d8eba808-44ae-4fd4-8e23-cd4ea6b849f0";

const movies = [
  {
    title: "The Last Horizon",
    overview:
      "A retired astronaut embarks on one final mission to save humanity from a dying Earth.",
    releasedYear: 2022,
    genre: ["Sci-Fi", "Adventure"],
    runtime: 142,
    posterUrl: "https://example.com/posters/last-horizon.jpg",
    createdBy: creatorId,
  },
  {
    title: "Shadow of Justice",
    overview:
      "A detective uncovers a conspiracy that reaches the highest levels of government.",
    releasedYear: 2021,
    genre: ["Crime", "Thriller"],
    runtime: 128,
    posterUrl: "https://example.com/posters/shadow-justice.jpg",
    createdBy: creatorId,
  },
  {
    title: "Echoes of Summer",
    overview:
      "Childhood friends reunite after years apart and rediscover forgotten dreams.",
    releasedYear: 2020,
    genre: ["Drama", "Romance"],
    runtime: 115,
    posterUrl: "https://example.com/posters/echoes-summer.jpg",
    createdBy: creatorId,
  },
  {
    title: "Dragon's Legacy",
    overview:
      "A young warrior must unite rival kingdoms to defeat an ancient evil.",
    releasedYear: 2023,
    genre: ["Fantasy", "Action"],
    runtime: 150,
    posterUrl: "https://example.com/posters/dragons-legacy.jpg",
    createdBy: creatorId,
  },
  {
    title: "Code Red",
    overview: "Elite hackers race against time to stop a global cyberattack.",
    releasedYear: 2024,
    genre: ["Action", "Thriller"],
    runtime: 124,
    posterUrl: "https://example.com/posters/code-red.jpg",
    createdBy: creatorId,
  },
  {
    title: "The Silent Forest",
    overview:
      "A family camping trip turns into a fight for survival in a mysterious forest.",
    releasedYear: 2019,
    genre: ["Horror", "Mystery"],
    runtime: 102,
    posterUrl: "https://example.com/posters/silent-forest.jpg",
    createdBy: creatorId,
  },
  {
    title: "Beyond the Waves",
    overview:
      "An inspiring story of a young surfer chasing a world championship dream.",
    releasedYear: 2022,
    genre: ["Sport", "Drama"],
    runtime: 118,
    posterUrl: "https://example.com/posters/beyond-waves.jpg",
    createdBy: creatorId,
  },
  {
    title: "Quantum Rift",
    overview: "Scientists accidentally create a portal to parallel universes.",
    releasedYear: 2025,
    genre: ["Sci-Fi", "Thriller"],
    runtime: 137,
    posterUrl: "https://example.com/posters/quantum-rift.jpg",
    createdBy: creatorId,
  },
  {
    title: "Midnight Heist",
    overview:
      "A team of expert thieves plans the most ambitious robbery in history.",
    releasedYear: 2021,
    genre: ["Action", "Crime"],
    runtime: 131,
    posterUrl: "https://example.com/posters/midnight-heist.jpg",
    createdBy: creatorId,
  },
  {
    title: "The Painter's Secret",
    overview:
      "An art historian uncovers hidden messages in a famous painter's masterpieces.",
    releasedYear: 2023,
    genre: ["Mystery", "Drama"],
    runtime: 109,
    posterUrl: "https://example.com/posters/painters-secret.jpg",
    createdBy: creatorId,
  },
];

async function main() {
  for (const movie of movies) {
    console.log("Seeeding Movies....");

    await prisma.movie.create({
      data: movie,
    });
    console.log(`Created movie ${movie.title}`);
  }
  console.log(`Seeding Completed`);
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

// 12.1 to run the script add seeding script in package.json "seed:movies": "node prisma/seed/seed.js" then run in the terminal "npm run seed:movies"

// 13.1 create a watchListController.js file in controller folder and write the code like this

import { prisma } from "../config/db.js";

const addToWatchList = async (req, res) => {
  const { movieId, status, rating, note } = req.body;

  //13.2 verify if the movie exists in the database
  const movie = await prisma.movie.findUnique({
    where: { id: movieId },
  });

  if (!movie) {
    return res.status(404).json({ error: "Movie not found" });
  }

  //13.5 Check movies exist in the watchlist e.g Result: { id: "1", userId: "user-123", movieId: "movie-456", status: "PLANNED". isMovieInTheWatchlist = truthy → Movie already in watchlist → Block duplicate entry
  const isMovieInTheWatchlist = await prisma.watchList.findUnique({
    where: {
      //  Prisma auto-generates this name from your @@unique([userId, movieId])
      userId_movieId: {
        userId: req.user.id,
        movieId: movieId,
      },
    },
  });

  // 13.6 If the movie is already in the watchlist, return an error response to prevent duplicate entries.
  if (isMovieInTheWatchlist) {
    return res
      .status(400)
      .json({ message: "Movie is already in the wathclist" });
  }
  // 13.7 If the movie is not in the watchlist
  const watchlistItems = await prisma.watchList.create({
    data: {
      userId: req.user.id,
      movieId,
      status: status || "PLANNED",
      note,
      rating,
    },
  });
  res.status(201).json({ status: "success", data: { watchlistItems } });
};

export { addToWatchList };

/*  13.8 Now to Check pass the following data
{
  "movieId": "01KTNGFV7KTBE3GVGCTAFGCCSJ",
  "userId": "d8eba808-44ae-4fd4-8e23-cd4ea6b849f0",
  "status": "PLANNED",
  "note": "Good",
  "rating": 9
}
*/

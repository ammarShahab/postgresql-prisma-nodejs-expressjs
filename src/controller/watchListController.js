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

/*  13.8 Now to Check pass the following data
{
  "movieId": "01KTNGFV7KTBE3GVGCTAFGCCSJ",
  "userId": "d8eba808-44ae-4fd4-8e23-cd4ea6b849f0",
  "status": "PLANNED",
  "note": "Good",
  "rating": 9
}
*/

// 15.0 my requirements is delete the movie from the watchlist

const deleteMovieFromWatchList = async (req, res) => {
  const watchListItem = await prisma.watchList.findUnique({
    where: { id: req.params.id },
  });

  if (!watchListItem) {
    return res.status(404).json({ error: "Watch list item does not exist" });
  }

  if (watchListItem.userId !== req.user.id) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  await prisma.watchList.delete({
    where: { id: req.params.id },
  });

  res
    .status(201)
    .json({ status: "success", message: "Movie Removed from Watch list" });
};

// 16.0 my requirement is update the movie from the watchlist
const updateWatchListMovie = async (req, res) => {
  // console.log("Full req.params:", req.params); // Should show { id: "..." }
  // console.log("req.params.id:", req.params.id); // Should be the actual ID
  const { status, rating, note } = req.body;

  const watchListItem = await prisma.watchList.findUnique({
    where: { id: req.params.id },
  });

  // console.log("watchListItem", watchListItem);

  if (!watchListItem) {
    return res.status(404).json({ error: "Watch list item does not exist" });
  }

  if (watchListItem.userId !== req.user.id) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const updateData = {};

  if (status !== undefined) updateData.status = status;
  if (rating !== undefined) updateData.rating = rating;
  if (note !== undefined) updateData.note = note;

  await prisma.watchList.update({
    where: { id: req.params.id },
    data: updateData,
  });

  res.status(201).json({
    status: "success",
    data: {
      watchlistItem: updateData,
    },
  });
};

export { addToWatchList, deleteMovieFromWatchList, updateWatchListMovie };

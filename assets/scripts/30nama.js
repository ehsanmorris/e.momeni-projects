let films = {
  data: [
    {
      id: 1,
      title: "The Shawshank Redemption",
      poster: "https://moviesapi.ir/images/tt0111161_poster.jpg",
      year: "1994",
      country: "USA",
      imdb_rating: "9.3",
      genres: ["Crime", "Drama"],
      images: [
        "https://moviesapi.ir/images/tt0111161_screenshot1.jpg",
        "https://moviesapi.ir/images/tt0111161_screenshot2.jpg",
        "https://moviesapi.ir/images/tt0111161_screenshot3.jpg",
      ],
    },
    {
      id: 2,
      title: "The Godfather",
      poster: "https://moviesapi.ir/images/tt0068646_poster.jpg",
      year: "1972",
      country: "USA",
      imdb_rating: "9.2",
      genres: ["Crime", "Drama"],
      images: [
        "https://moviesapi.ir/images/tt0068646_screenshot1.jpg",
        "https://moviesapi.ir/images/tt0068646_screenshot2.jpg",
        "https://moviesapi.ir/images/tt0068646_screenshot3.jpg",
      ],
    },
    {
      id: 3,
      title: "The Godfather: Part II",
      poster: "https://moviesapi.ir/images/tt0071562_poster.jpg",
      year: "1974",
      country: "USA",
      imdb_rating: "9.0",
      genres: ["Crime", "Drama"],
      images: [
        "https://moviesapi.ir/images/tt0071562_screenshot1.jpg",
        "https://moviesapi.ir/images/tt0071562_screenshot2.jpg",
        "https://moviesapi.ir/images/tt0071562_screenshot3.jpg",
      ],
    },
    {
      id: 4,
      title: "The Dark Knight",
      poster: "https://moviesapi.ir/images/tt0468569_poster.jpg",
      year: "2008",
      country: "USA, UK",
      imdb_rating: "9.0",
      genres: ["Action", "Crime", "Drama"],
      images: [
        "https://moviesapi.ir/images/tt0468569_screenshot1.jpg",
        "https://moviesapi.ir/images/tt0468569_screenshot2.jpg",
        "https://moviesapi.ir/images/tt0468569_screenshot3.jpg",
      ],
    },
    {
      id: 5,
      title: "12 Angry Men",
      poster: "https://moviesapi.ir/images/tt0050083_poster.jpg",
      year: "1957",
      country: "USA",
      imdb_rating: "8.9",
      genres: ["Crime", "Drama"],
      images: [
        "https://moviesapi.ir/images/tt0050083_screenshot1.jpg",
        "https://moviesapi.ir/images/tt0050083_screenshot2.jpg",
        "https://moviesapi.ir/images/tt0050083_screenshot3.jpg",
      ],
    },
  ],
  metadata: {
    current_page: "1",
    per_page: 10,
    page_count: 25,
    total_count: 250,
  },
};
let list = document.querySelector(".list");
films.data.map(
  (x) =>
    (list.innerHTML += `
        <li class="movie-box">
        <span class="imdb">Imdb: 93%</span>
        <span class="cinema">Cinema: 77%</span>
            <img class="radius-2" src="${x.poster}"/>
            <span class="rate">
            <p>${x.title} ${x.year}</p>
            </span>
        </li>`)
);

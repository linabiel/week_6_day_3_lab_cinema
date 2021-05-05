const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitle = function () {
    const result = this.films.map(film => film.title)
    return result;
  };

Cinema.prototype.findByTitle = function (title) {
  const result = this.films.find(film => film.title === title)
  return result;
};
  // for film in films:
  //   if film.title == title

Cinema.prototype.filterByGenre = function (genre) {
  const result = this.films.filter(film => film.genre === genre)
  return result;
};

Cinema.prototype.filmsByYear = function (year) {
  const result = this.films.some(film => film.year === year)
  return result;
};

Cinema.prototype.checkFilmLength = function (time) {
  const result = this.films.every(film => film.length > time)
  return result;
};

Cinema.prototype.totalRunningTime = function (films) {
  const result = this.films.reduce((total, film) => total += film.length, 0)
  return result;
};

Cinema.prototype.filterByProperty = function (property, value) {
  const result = this.films.filter(film => film[property] === value)
  return result;
};

module.exports = Cinema;

// Cinema.prototype.filterByGenre = function (genre) {
//   const result = this.films.filter(film => film.genre === genre)
//   return result;
// };



// const sumElements = function (numbers) {
//   const total = numbers.reduce((runningTotal, number) => runningTotal += number)
//   return total
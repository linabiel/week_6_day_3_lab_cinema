const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitle = function () {
    const result = this.films.map(film => film.title)
    return result;
  };


  


module.exports = Cinema;

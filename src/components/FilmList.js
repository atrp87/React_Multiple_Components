import React, { Component } from "react";
import Film from "./Film"; 

class FilmList extends Component {
    render() {
        const filmNodes = this.props.movies.map(film => {
            return (
              <Film key={film.id} name={film.name} url={film.url} ></Film>
            );
          });

        return (
          <div>
          <ol>
            {filmNodes}
            </ol>
            <a href="https://www.imdb.com/calendar/?region=gb">More Upcoming Releases</a>
            </div>

             /* <Link to='https://www.imdb.com/calendar/?region=gb'>
            <button type="button" className="btn btn-info">More Upcoming Releases</button>
            </Link>
            </div> */
        );
     }
}
export default FilmList;
import React, { Component } from "react";
import Film from "./Film"; 

// import { Link } from 'react-router-dom'
// import { Button } from 'semantic-ui-react';

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
        );
     }
}


/* <button to="/https://www.imdb.com/calendar/?region=gb" renderAs={Link}>My button linked to react-router-dom</button> */

/* <Button 
as={Link}
to='//https://www.imdb.com/calendar/?region=gb'
> 
Semantic UI button
</Button> */
export default FilmList;
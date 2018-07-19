import React ,{Component} from 'react';

  const urlComponent="https://image.tmdb.org/t/p/w342";

class MovieItem extends Component {

render(){
      return(
      <div>
          <div className="col-sm-12 col-sm-3">
            <div className="thumbnail">
              <img src={urlComponent + this.props.movie.poster_path} alt="..." />
              <div className="caption">
                <h3>{this.props.movie.title}</h3>
                <p>{this.props.movie.overview}</p>
                  <p>Rating - {this.props.movie.vote_average}</p>

                <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
              </div>
            </div>
          </div>
        </div>
      );
    }
}

export default MovieItem;

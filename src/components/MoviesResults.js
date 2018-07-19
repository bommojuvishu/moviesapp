import React, { Component } from 'react';
import Search from './Search';
import { connect } from 'react-redux';
import MovieItem from './MovieItem';

class MoviesResults extends Component {
    render(){
    return(
        <div>
        results
          <Search />
          {this.props.movies.map(item => {
            return <MovieItem  key={item.id} movie={item} />
          }
          )}

        </div>
    );
    }
}

function mapStateToProps(state) {
	console.log( "MoviesResults:",state);
	return {
    movies: state.movies
	}
}
export default connect(mapStateToProps, null)(MoviesResults);

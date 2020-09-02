import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'

function MovieCard(props) {
    return (
            <img src={'https://image.tmdb.org/t/p/w500' + props.movie.poster_path}/>
        )
}

export default MovieCard
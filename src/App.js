import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import MovieCard from './MovieCard'

function App () {

  const [genres, setGenres] = useState([])
  const [movies, setMovies] = useState([])
  const [types, setTypes] = useState([])
  const [pageNumber, setPageNumber] = useState([])

  const API_KEY = 'b56714604235287b729922925d441c67';
  
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const selectType = (e) => {
    let setType = e.target.id;

    async function getGenres(typez) {
      let response = await fetch(`https://api.themoviedb.org/3/genre/${typez}/list?api_key=b56714604235287b729922925d441c67&language=en-US`);
      let genresAsync = await response.json();

      setGenres(genresAsync.genres)
      setTypes(typez)

    }

    if (setType === 'movie') {
      e.target.className += ' button-selected';
      document.getElementById('tv').className = 'button-styles';

      getGenres('movie')
    } else if (setType === 'tv') {
      e.target.className += ' button-selected';
      document.getElementById('movie').className = 'button-styles';

      getGenres('tv')
    } 
  }

  const getValue = (e) => {
    console.log(e.target)
    // console.log('trig')
    const x = document.getElementById('genres-dropdown').selectedIndex;
    const GENRE_ID = document.getElementsByTagName("option")[x].value;

    // console.log(GENRE_ID)
    const PAGE_NUMBER = ((Math.floor(Math.random() * (500 - 0) + 1)))

    // // GET MOVIES IN GENRE
    // // https://api.themoviedb.org/3/discover/movie?api_key=b56714604235287b729922925d441c67&with_genres=28
    fetch(`https://api.themoviedb.org/3/discover/${types}?api_key=${API_KEY}&with_genres=${GENRE_ID}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(console.log(data.total_pages))
      fetch(`https://api.themoviedb.org/3/discover/${types}?api_key=${API_KEY}&with_genres=${GENRE_ID}&page=${PAGE_NUMBER}`)
      .then((res) => res.json())
      .then ((movieData) => {
        let moviesArr = [];
        for (let counter = 0; counter < 3; counter++) {
          let moviesHolder = movieData.results[Math.floor(Math.random() * movieData.results.length)];
          moviesArr.push(moviesHolder)
        }
        setMovies(moviesArr)
      })
    })
  }

  return (
      <Grid container direction='column'>
        <Grid container item>
          <Grid item xs={2}/>
          <Grid item container xs={8}>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <h1 style={{ fontSize: '4rem', letterSpacing: '.5rem', margin: '1rem 0' }}>Nexflix</h1>
            </Grid>
            <Grid item container xs={12} className='intro-and-form-container'>
              <Grid item md={5} className='intro-container container'>
                <p>When you are in the mood to watch something new but don’t know where to start. Fill out the questions below and then click the button to get your results.</p>
              </Grid>
              <Grid item md={2}/>
              <Grid item md={5} container className='form-container container' direction='column'>
                <form onSubmit={(e) => handleSubmit(e)}>
                  <p>Select Movie Or Show</p>
                  <button onClick={(e) => selectType(e)} id='movie' className='button-styles' style={{marginRight: '1rem'}}>Movie</button>
                  <button onClick={(e) => selectType(e)} id='tv' className='button-styles'>Show</button>
                  <p>Select Genre</p>
                  <select id='genres-dropdown'>
                    <option value="" disabled selected hidden></option>
                    {console.log(types)}
                    {genres.map(genre => {
                        return <option key={genre.id} value={genre.id}>{genre.name}</option>
                    })}
                  </select>
                </form>
              </Grid>
            </Grid>
            <button className='button-generator-styles' onClick={(e) => getValue(e)}>Show me my results</button>
            <Grid className='movies-container' item container xs={12}>
                {movies.map(movie => {
                  return <Grid item className='movie-card' md={4} lg={3}>
                    <MovieCard movie={movie}/>
                  </Grid>
                })}
            </Grid>
          </Grid>
          <Grid item xs={2}/>
        </Grid>
      </Grid>
    )
}

export default App
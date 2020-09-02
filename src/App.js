import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'

function App () {

  const [genres, setGenres] = useState([])
  const API_KEY = 'b56714604235287b729922925d441c67';
  useEffect(() => {
    // GET LIST OF GENRES
    // https://api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>&language=en-US
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
    .then((res) => res.json())
    .then((apiData) => {
      setGenres(apiData.genres)
    })
  })

  const getValue = () => {
    const x = document.getElementById('genres-dropdown').selectedIndex;
    const GENRE_ID = document.getElementsByTagName("option")[x].value;
    const PAGE_NUMBER = ((Math.floor(Math.random() * (500 - 0) + 1)))
    // GET MOVIES IN GENRE
    // https://api.themoviedb.org/3/discover/movie?api_key=b56714604235287b729922925d441c67&with_genres=28
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${GENRE_ID}&page=${PAGE_NUMBER}`)
    .then((res) => res.json())
    .then((data) => console.log(data))
  }

  return (
      <Grid container direction='column'>
        <Grid container item>
          <Grid item xs={2}/>
          <Grid item container xs={8}>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <h1 style={{ fontSize: '4rem', letterSpacing: '.5rem' }}>Nexflix</h1>
            </Grid>
            <Grid item container xs={12} className='intro-and-form-container'>
              <Grid item xs={5} className='intro-container container'>
                <p>When you are in the mood to watch something new but don’t know where to start. Fill out the questions below and then click the button to get your results.</p>
              </Grid>
              <Grid item xs={2}/>
              <Grid item xs={5} container className='form-container container' direction='column'>
                <form>
                  <p>Select Movie Or Show</p>
                    <button className='button-styles' style={{marginRight: '1rem'}}>Movie</button>
                    <button className='button-styles'>Show</button>
                  <p>Select Genre</p>
                  <select id='genres-dropdown' required>
                    <option value="" disabled selected hidden></option>
                    {genres.map(genre => {
                        return <option key={genre.id} value={genre.id}>{genre.name}</option>
                    })}
                  </select>
                </form>
              </Grid>
            </Grid>
            <Grid item container>
              <button className='button-generator-styles' onClick={getValue}>Show me my results</button>

            </Grid>
          </Grid>
          <Grid item xs={2}/>
        </Grid>
      </Grid>
    )
}

export default App
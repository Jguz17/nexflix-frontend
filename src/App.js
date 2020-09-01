import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'

function App () {

  const [genres, setGenres] = useState([])

  useEffect(() => {
    let API_KEY = 'b56714604235287b729922925d441c67'
    // GET LIST OF GENRES
    // https://api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>&language=en-US
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
    .then((res) => res.json())
    .then((apiData) => {
      setGenres(apiData.genres)
    })
  })

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
                  <select required>
                    <option value="" disabled selected hidden></option>
                    {genres.map(genre => {
                        return <option>{genre.name}</option>
                    })}
                  </select>
                </form>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}/>
        </Grid>
      </Grid>
    )
}

export default App
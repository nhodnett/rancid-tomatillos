import React, { Component } from 'react';

const apiCalls = (id, handleState) => {
  let movieId = ''
  if (id) movieId = `/${id}`
  fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies${movieId}`)
    .then(response => {
      if(response.status === 200) {
        return response.json()
      }
        // throw new Error(getErrorMessage(response.status))})
    })
    .then(data => {
      if (id) {
        handleState({movieDetails: data.movie})
        getTrailerId(id).then(trailerId => handleState(trailerId))
      } else {
        handleState({movies: data.movies})
      }})
    .catch(error => {
      handleState({errorMessage: error.message})
    })
}

const getTrailerId = (movieId2) => {
  fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieId2}/videos`)
    .then(response => response.json())
    .then(data => {
    if (data.videos.length) {
      return data.videos.find(video => video.type === 'Trailer')
    }
    throw new Error("no trailer available")
    })
    .then(trailer => {
      if (trailer.key) {
        return {trailerId: trailer.key}
      }
      throw new Error("no trailer available")
    })
    .catch(error => console.log(error))
}

// const getErrorMessage = (status) => {
//   switch(true) {
//     case (status >= 300 && status <= 399):
//       return `${status}: Redirection message`
//     break;
//     case (status >= 400 && status <= 499):
//       return `${status}: Client error`
//     break;
//     case (status >= 500):
//       return `${status}: Server error`
//     break;
//     default:
//       return 'I have no idea what this error message is for...';
//   }
// };

export default apiCalls;

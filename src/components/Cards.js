function Cards({movies}) {  
    return (
      movies && movies.results.map(movie => (
          <div className="col-sm-6 col-lg-4 col-xl-2">
              <div class="card h-100 border-0 shadow-sm">
            <img src={`https://image.tmdb.org/t/p/w440_and_h660_face/${movie.poster_path}`} class="card-img-top" alt="product" />
              <div class="card-body">
                  <h5 class="card-title">{movie.title}</h5>   
              </div>
              </div>
          </div>
      ))
    )
  }
  
  export default Cards
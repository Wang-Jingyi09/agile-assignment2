
export const getMovies = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL || ''}/api/movies/tmdb/movies`, {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const getMovie = async (id) => {
  const [, secondElement] = id.queryKey;
  const { mid } = secondElement
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL || ''}/api/movies/tmdb/movie/${mid}`, {
      method: 'GET'
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const login = async (username, password) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL || ''}/api/users`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ username: username, password: password })
  });
  return response.json();
};

export const signup = async (username, password) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL || ''}/api/users?action=register`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ username: username, password: password })
  });
  return response.json();
};

export const getGenres = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL || ''}/api/genres/tmdb/genres`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const getMovieImages = async ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL || ''}/api/movies/tmdb/movies/${id}/images`, {
      method: 'GET',
    }
    );
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const getUpcomingMovies = async (page = 1) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL || ''}/api/movies/tmdb/upcoming?page=${page}`, {
      method: 'GET',
    }
    );
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return await response.json();

  } catch (error) {
    throw error;
  }
};

export const getMovieReviews = async (id) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL || ''}/api/reviews/tmdb/movies/${id}/reviews`, {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};


export const getLatestMovies = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL || ''}/api/movies/tmdb/latest`, {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const getMovieCredits = async (id) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL || ''}/api/actors/tmdb/movies/${id}/credits`, {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
}

export const getTopRatedMovies = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL || ''}/api/movies/tmdb/top_rated`, {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const getTrendingMovies = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL || ''}/api/movies/tmdb/trending`, {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const getMovieRecommendations = async (id) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL || ''}/api/movies/tmdb/movies/${id}/recommendations`, {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

# Movie API Documentation

## Overview
This API provides access to a variety of movie-related data. 
It integrates with The Movie Database (TMDB) for comprehensive movie information. 
Below is a list of available endpoints and their functionality.

## Endpoints

### Local Movie Data
+ `GET /api/users` - Retrieve a list of all users registered in the system.
+ `POST /api/users?action=register` - Register a new user. Requires username and password in the request body.
+ `POST /api/users?action=login`(Auth) - Authenticate a user. Requires username and password in the request body.
+ `PUT /api/users/:id`(Auth) - Update user information. Requires user ID in the path and update details in the request body.
+ `GET /` - Paginated retrieval of movies from the local database. Supports `page` and `limit` query parameters for pagination.
+ `GET /:id` - Retrieve the details of a specific movie from the local database by its ID.

### TMDB Integration
+ `GET /tmdb/movies` - Get a list of movies from TMDB's Discover endpoint. Supports filtering by `year`, `rating`, and pagination using `page`.
+ `GET /tmdb/movie/:id` - Get the details of a specific movie from TMDB by its ID.
+ `GET /tmdb/upcoming` - Retrieve a list of upcoming movies from TMDB. Supports pagination using `page`.
+ `GET /tmdb/movies/:id/images` - Get images for a specific movie from TMDB by its ID.
+ `GET /tmdb/latest` - Retrieve the latest movies from TMDB.
+ `GET /tmdb/top_rated` - Retrieve top-rated movies from TMDB.
+ `GET /tmdb/trending` - Retrieve trending movies from TMDB.
+ `GET /tmdb/movies/:id/recommendations` - Get movie recommendations based on a specific movie ID from TMDB.
+ `GET /tmdb/movies/:id/reviews` - Get reviews for a specific movie from TMDB by its ID.
+ `GET /tmdb/movies/:id/credits` - Get credits (cast and crew) for a specific movie from TMDB by its ID.

## Automated Testing

~~~
    User API Tests
    GET /api/users                                                                                      
      √ should return all users (7570 ms)  
    POST /api/users                                                                                            
      √ should register a new user (1244 ms)                                                                   
      √ should return error for missing username or password (727 ms)                                          
      √ should authenticate an existing user (1563 ms)   
      √ should return error for invalid password (1109 ms)  
    PUT /api/users/:id                                                                                         
      √ should update an existing user (1570 ms)                                                               
      √ should return error for non-existent user (1039 ms)
      
    Movie API Tests
    GET /api/movies
      √ should return paginated movies (11792 ms)
    GET /api/movies/:id                                                                                        
      √ should return a specific movie (4047 ms)                                                               
    GET /api/movies/tmdb/movies                                                                                
      √ should return movies from TMDB (3579 ms)                                                               
    GET /api/movies/tmdb/movie/:id                                                                             
      √ should return a specific movie from TMDB (3858 ms)                                                     
    GET /api/movies/tmdb/upcoming                                                                              
      √ should return upcoming movies from TMDB (4358 ms)                                                      
    GET /api/movies/tmdb/movies/:id/images                                                                     
      √ should return movie images from TMDB (3187 ms)                                                         
    GET /api/movies/tmdb/latest                                                                                
      √ should return the latest movies from TMDB (3340 ms)                                                    
    GET /api/movies/tmdb/top_rated                                                                             
      √ should return top-rated movies from TMDB (3534 ms)                                                     
    GET /api/movies/tmdb/trending                                                                              
      √ should return trending movies from TMDB (1729 ms)                                                      
    GET /api/movies/tmdb/movies/:id/recommendations                                                            
      √ should return movie recommendations from TMDB (1796 ms) 

Test Suites: 2 passed, 2 total
Tests:       17 passed, 17 total
Snapshots:   0 total
Time:        44.239 s
Ran all test suites.
~~~

## Deployments
    https://movie-assignment-2-6033f3e81df0.herokuapp.com/

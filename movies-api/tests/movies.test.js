import request from 'supertest';
import app from '../app';
import mongoose from 'mongoose';
import MovieModel from "../api/movies/movieModel";
import '../db/index.js';
import moviesData from '../initialise-dev/movies';
const SECONDS = 1000;
jest.setTimeout(700 * SECONDS)
describe('Movie API Tests', () => {
    let originalConsoleLog;
    beforeAll(() => {
        originalConsoleLog = console.log;
        console.log = () => {};
    })
    beforeEach(async () => {
        await MovieModel.deleteMany();
        await MovieModel.create(moviesData);
    });

    afterEach(async () => {
        await MovieModel.deleteMany();
    });
    afterAll(async () => {
        await mongoose.disconnect();
        console.log = originalConsoleLog;
    });

    describe('GET /api/movies', () => {
        it('should return paginated movies', async () => {
            const res = await request(app).get('/api/movies').query({ page: 1, limit: 10 });
            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty('results');
            expect(Array.isArray(res.body.results)).toBe(true);
        });
    });

    describe('GET /api/movies/:id', () => {
        it('should return a specific movie', async () => {
            const movieId = 590706;
            const res = await request(app).get(`/api/movies/${movieId}`);
            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty('id', movieId);
        });
    });

    describe('GET /api/movies/tmdb/movies', () => {
        it('should return movies from TMDB', async () => {
            const res = await request(app).get('/api/movies/tmdb/movies').query({ year: 2021, rating: '9+', page: 1 });
            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty('results');
            expect(Array.isArray(res.body.results)).toBe(true);
        });
    });

    describe('GET /api/movies/tmdb/movie/:id', () => {
        it('should return a specific movie from TMDB', async () => {
            const movieId = 550;
            const res = await request(app).get(`/api/movies/tmdb/movie/${movieId}`);
            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty('id', movieId);
        });
    });

    describe('GET /api/movies/tmdb/upcoming', () => {
        it('should return upcoming movies from TMDB', async () => {
            const res = await request(app).get('/api/movies/tmdb/upcoming').query({ page: 1 });
            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty('results');
        });
    });

    describe('GET /api/movies/tmdb/movies/:id/images', () => {
        it('should return movie images from TMDB', async () => {
            const movieId = 550;
            const res = await request(app).get(`/api/movies/tmdb/movies/${movieId}/images`);
            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty('backdrops');
        });
    });

    describe('GET /api/movies/tmdb/latest', () => {
        it('should return the latest movies from TMDB', async () => {
            const res = await request(app).get('/api/movies/tmdb/latest');
            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty('results');
        });
    });

    describe('GET /api/movies/tmdb/top_rated', () => {
        it('should return top-rated movies from TMDB', async () => {
            const res = await request(app).get('/api/movies/tmdb/top_rated');
            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty('results');
        });
    });

    describe('GET /api/movies/tmdb/trending', () => {
        it('should return trending movies from TMDB', async () => {
            const res = await request(app).get('/api/movies/tmdb/trending');
            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty('results');
        });
    });

    describe('GET /api/movies/tmdb/movies/:id/recommendations', () => {
        it('should return movie recommendations from TMDB', async () => {
            const movieId = 550;
            const res = await request(app).get(`/api/movies/tmdb/movies/${movieId}/recommendations`);
            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty('results');
        });
    });

});


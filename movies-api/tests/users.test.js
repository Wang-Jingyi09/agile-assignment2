import request from 'supertest';
import app from '../app';
import User from '../api/users/userModel';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import '../db/index.js';


const testUser = { username: 'testUser', password: 'Password@1234' };
const SECONDS = 1000;
jest.setTimeout(700 * SECONDS)
describe('User API Tests', () => {
    let originalConsoleLog;
    beforeAll(() => {
        originalConsoleLog = console.log;
        console.log = () => {};
    })
    beforeEach(async () => {

        await User.deleteMany({}); // Clear the database
    });

    afterEach(async () => {
        await User.deleteMany({}); // Clear the database
    });

    afterAll(async () => {
        await mongoose.disconnect();
        console.log = originalConsoleLog;
    });

    describe('GET /api/users', () => {
        it('should return all users', async () => {
            const res = await request(app).get('/api/users');
            expect(res.statusCode).toEqual(200);
            expect(Array.isArray(res.body)).toBe(true);
        });
    });

    describe('POST /api/users', () => {
        it('should register a new user', async () => {
            const newUser = testUser;
            const res = await request(app).post('/api/users').query({ action: 'register' }).send(newUser);
            expect(res.statusCode).toEqual(201);
            expect(res.body).toHaveProperty('success', true);
        });

        it('should return error for missing username or password', async () => {
            const res = await request(app).post('/api/users').send({});
            expect(res.statusCode).toEqual(400);
            expect(res.body).toHaveProperty('success', false);
        });

        it('should authenticate an existing user', async () => {
            const user = { username: 'existingUser', password: 'Password@123' };
            await User.create({ username: user.username, password: user.password });

            const res = await request(app).post('/api/users').send(user);
            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty('token');
        });

        it('should return error for invalid password', async () => {
            const user = { username: 'existingUser', password: 'WrongPassword' };
            const res = await request(app).post('/api/users').send(user);
            expect(res.statusCode).toEqual(401);
            expect(res.body).toHaveProperty('success', false);
        });
    });

    describe('PUT /api/users/:id', () => {
        it('should update an existing user', async () => {
            const updateUser = { password: 'NewPassword@123' };
            const user = new User({ username: 'testUser', password: 'Password@123' });
            await user.save();
            const userId = user._id.toString();

            const res = await request(app).put(`/api/users/${userId}`).send(updateUser);
            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty('code', 200);
        });

        it('should return error for non-existent user', async () => {
            const updateUser = { username: 'updatedUser' };
            const nonExistentUserId = new mongoose.Types.ObjectId();
            const res = await request(app).put(`/api/users/${nonExistentUserId}`).send(updateUser);
            expect(res.statusCode).toEqual(404);
        });
    });
});

const request = require('supertest');
const express = require('express');
const app = express();

const eventController = require('../src/controllers/eventController');

app.get('/events', eventController.getAllEvents);

describe('GET /events', () => {
    it('should return all events', async () => {
        const res = await request(app).get('/events');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveLength(2);
    });
});

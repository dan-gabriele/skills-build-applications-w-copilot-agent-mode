"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const baseUrl_1 = require("../utils/baseUrl");
const router = (0, express_1.Router)();
router.get('/users', (_req, res) => {
    res.json({
        message: 'Users endpoint',
        apiBaseUrl: (0, baseUrl_1.getApiBaseUrl)(),
        data: []
    });
});
router.get('/teams', (_req, res) => {
    res.json({
        message: 'Teams endpoint',
        apiBaseUrl: (0, baseUrl_1.getApiBaseUrl)(),
        data: []
    });
});
router.get('/activities', (_req, res) => {
    res.json({
        message: 'Activities endpoint',
        apiBaseUrl: (0, baseUrl_1.getApiBaseUrl)(),
        data: []
    });
});
router.get('/leaderboard', (_req, res) => {
    res.json({
        message: 'Leaderboard endpoint',
        apiBaseUrl: (0, baseUrl_1.getApiBaseUrl)(),
        data: []
    });
});
router.get('/workouts', (_req, res) => {
    res.json({
        message: 'Workouts endpoint',
        apiBaseUrl: (0, baseUrl_1.getApiBaseUrl)(),
        data: []
    });
});
exports.default = router;

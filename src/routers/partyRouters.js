const addParty = require('../controllers/party/addParty');
const getParty = require('../controllers/party/getParty');
const getAllParties = require('../controllers/party/getAllParties');
const deleteParty = require('../controllers/party/deleteParty');
const updateParty = require('../controllers/party/updateParty');
const isAdmin = require('../utils/isAdmin');

const express = require('express');

const Router = express.Router;
const partyRouter = Router();

partyRouter.post('/add', isAdmin, addParty);
partyRouter.get('/get/:id', getParty);
partyRouter.get('/', getAllParties);
partyRouter.delete('/delete/:id', isAdmin, deleteParty);
partyRouter.put('/update/:id', isAdmin, updateParty);

module.exports = partyRouter;
generateMarkdown = require('./utils/generateMarkdown.js');

const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");

let responses = {};

function getUser(userName) {



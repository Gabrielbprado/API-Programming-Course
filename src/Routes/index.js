const Peopleroutes = require('./PeopleRoutes.js');
const Courseroutes = require('./CourseRoutes.js');
const Categoryroutes = require('./CategoryRoutes.js');
const express = require('express');

module.exports = app =>
{
  app.use(express.json(),Peopleroutes,Courseroutes,Categoryroutes);
};


const { Country } = require('../models');

const countryList = [
  'Pakistan',
  'USA',
  'England',
  'Germany',
  'Spain',
  'Japan',
  'Canada',
  'Singapore',
  'Australia',
  'Norway',
  'France',
  'Italy',
  'Netherlands',
  'Iceland',
  'Iceland',
  'Switzerland',
  'Poland',
];

countryList.forEach(country => Country.findOrCreate({ where: { name: country } }));

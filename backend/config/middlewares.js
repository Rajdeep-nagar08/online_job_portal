module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];


/*

This code exports an array of middleware names as strings. 
Each string represents a middleware that is used in a Strapi application.
 The middleware are responsible for performing various tasks, such as handling errors,
  security, cross-origin resource sharing (CORS), adding a "powered by" header, 
  logging, parsing queries, parsing request bodies, managing sessions, serving a 
  favicon, and serving public files. These middleware will be executed in the order 
  they are listed in this array.

  */
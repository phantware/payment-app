//Check if we are int production or in development environment

if (process.env.Node_ENV === 'production') {
  // We are now in production mode
  module.exports = require('./prod');
} else {
  // We are now in development mode.
  module.exports = require('./dev');
}

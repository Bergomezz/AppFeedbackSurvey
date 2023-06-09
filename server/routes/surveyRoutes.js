const requireLogin = require('../middlewares/requireLogin.js');
const requireCredits = require('../middlewares/requireCredits.js');

module.export = app => {
  app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {});
};

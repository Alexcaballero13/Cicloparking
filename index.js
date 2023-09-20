const app = require('./src/App.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.

conn.sync({ alter: true }).then(() => {
    app.listen(3002, () => {
      console.log('DB AND SERVER RUNNING'); // eslint-disable-line no-console
    });
  });
  
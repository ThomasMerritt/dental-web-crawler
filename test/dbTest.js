import { connect } from '../db/connect.js';

(async () => {
    await connect();
    process.exit(0);
})();
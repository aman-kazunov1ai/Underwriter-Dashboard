// db.js
import { Client } from 'pg';

const client = new Client({
  host: 'kazunov1ai-dev.cns2uyc06jie.ap-south-1.rds.amazonaws.com',
  port: 5432,
  user: 'kazunov1aidev',
  password: 'underwriter-team',
  database: 'postgres', // Replace with actual DB name
  ssl: {
    rejectUnauthorized: false,
  },
});

export default client;

const fs = require('fs');

const envContent = `
export const environment = {
  production: true,
  server: '${process.env['server']}',
  mailme: '${process.env['mailme']}',
};
`;

fs.writeFileSync('./src/environments/environment.ts', envContent);
// generate-env.ts
import { writeFileSync } from 'fs';

const envContent = `
export const environment = {
  production: true,
  server: '${process.env['server']}',
};
`;

writeFileSync('./src/environments/environment.ts', envContent);

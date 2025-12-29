const fs = require('fs');
const path = require('path');

// Caminho absoluto para a pasta e o arquivo
const envDir = path.resolve(__dirname, 'projects/seller-backoffice/src/environments');
const envFile = path.join(envDir, 'environment.ts');

// Cria a pasta caso não exista
if (!fs.existsSync(envDir)) {
  fs.mkdirSync(envDir, { recursive: true });
}

// Conteúdo do environment.ts
const envContent = `
export const environment = {
  production: true,
  server: '${process.env['server']}',
  agoraAppId: '${process.env['agoraAppId']}'
};
`;

// Grava o arquivo
fs.writeFileSync(envFile, envContent.trim(), { encoding: 'utf8' });

console.log('✅ Arquivo seller-environment.ts gerado com sucesso!');

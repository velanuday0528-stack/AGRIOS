import fs from 'fs';
import path from 'path';

const publicAssetsDir = path.resolve('public', 'assets');
if (!fs.existsSync(publicAssetsDir)) {
  fs.mkdirSync(publicAssetsDir, { recursive: true });
}

const heroSrc = 'C:/Users/vv846/.gemini/antigravity-ide/brain/565477aa-b24b-4933-a366-13180e6c13e7/agrios_hero_farm_1791116235163.jpg';
const loginSrc = 'C:/Users/vv846/.gemini/antigravity-ide/brain/565477aa-b24b-4933-a366-13180e6c13e7/agrios_login_farm_1791116264468.jpg';

try {
  if (fs.existsSync(heroSrc)) {
    fs.copyFileSync(heroSrc, path.join(publicAssetsDir, 'hero-farm.jpg'));
    console.log('Copied hero-farm.jpg');
  }
  if (fs.existsSync(loginSrc)) {
    fs.copyFileSync(loginSrc, path.join(publicAssetsDir, 'login-farm.jpg'));
    console.log('Copied login-farm.jpg');
  }
} catch (e) {
  console.error('Error copying assets:', e);
}

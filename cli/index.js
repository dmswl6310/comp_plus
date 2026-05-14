#!/usr/bin/env node

const https = require('https');
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);

if (args.length === 0 || args[0] !== 'add') {
  console.log(`
🚀 Uikki CLI
사용법: npx uikki add <category>/<component-name>
예시: npx uikki add ui/button
  `);
  process.exit(1);
}

const componentPath = args[1]; // e.g., ui/button
if (!componentPath || !componentPath.includes('/')) {
  console.error("❌ 잘못된 형식입니다. '카테고리/이름' 형식으로 입력해주세요. (예: ui/button)");
  process.exit(1);
}

const [category, componentName] = componentPath.split('/');

// Convert kebab-case to PascalCase
const toPascalCase = (str) =>
  str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

const pascalName = toPascalCase(componentName);
const fileName = `Custom${pascalName}.tsx`;

// GitHub Raw URL (dev branch)
const repoUrl = `https://raw.githubusercontent.com/dmswl6310/comp_plus/dev/src/data/components/${category}/${componentName}/${fileName}`;

const targetDir = path.join(process.cwd(), 'src', 'components', category);
const targetPath = path.join(targetDir, `${pascalName}.tsx`);

console.log(`⬇️  '${componentName}' 컴포넌트를 가져오는 중...`);

https.get(repoUrl, (res) => {
  if (res.statusCode === 404) {
    console.error(`❌ 컴포넌트를 찾을 수 없습니다: ${category}/${componentName}`);
    process.exit(1);
  }

  if (res.statusCode !== 200) {
    console.error(`❌ 네트워크 에러 발생: ${res.statusCode}`);
    process.exit(1);
  }

  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    // 1. Create directory if not exists
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    // 2. Clean up code slightly (Remove export type CustomAvatarProps and rename to Avatar)
    let cleanedCode = data;
    // We can replace 'CustomAvatar' with 'Avatar' to make it cleaner for the consumer
    const regexCustom = new RegExp(`Custom${pascalName}`, 'g');
    cleanedCode = cleanedCode.replace(regexCustom, pascalName);

    // 3. Write to file
    fs.writeFileSync(targetPath, cleanedCode);

    console.log(`✅ 성공적으로 추가되었습니다: ${targetPath}`);
    
    // Check for common dependencies (heuristics)
    const deps = [];
    if (cleanedCode.includes('lucide-react')) deps.push('lucide-react');
    if (cleanedCode.includes('framer-motion')) deps.push('framer-motion');
    if (cleanedCode.includes('clsx') || cleanedCode.includes('tailwind-merge')) deps.push('clsx tailwind-merge');

    if (deps.length > 0) {
      console.log(`\n📦 추가 설치가 필요한 패키지가 발견되었습니다:`);
      console.log(`npm install ${deps.join(' ')}`);
    } else {
      console.log(`\n🎉 추가 설치가 필요한 의존성이 없습니다. 바로 사용하세요!`);
    }
  });
}).on('error', (err) => {
  console.error(`❌ 에러 발생: ${err.message}`);
});

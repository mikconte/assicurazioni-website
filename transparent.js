const sharp = require('./node_modules/sharp');
const fs = require('fs');

async function processLogos() {
  const logos = ['allianz', 'allianz-next', 'bene', 'hdi', 'axa'];
  
  for (const name of logos) {
    const inputPath = `images/partners/${name}.jpg`;
    const outputPath = `images/partners/${name}.png`;
    
    // Load image raw pixels
    const image = sharp(inputPath);
    const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    
    // Convert light/white pixels to transparent alpha 0
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      // If pixel is very light/white (RGB > 230), set alpha to 0
      if (r > 230 && g > 230 && b > 230) {
        data[i + 3] = 0;
      }
    }
    
    // Save processed transparent PNG
    await sharp(data, {
      raw: {
        width: info.width,
        height: info.height,
        channels: 4
      }
    })
    .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toFile(outputPath);
    
    console.log('Successfully created transparent PNG:', outputPath);
  }
}

processLogos().catch(err => console.error(err));

const fs = require('fs');
const path = require('path');

async function fetchRewards() {
  console.log('📦 Fetching rewards from eccisland...');
  
  try {
    const response = await fetch('https://eccisland.is/mm-gifts/api/rewards.php');
    const data = await response.json();
    
    if (data.success && data.rewards && data.rewards.length > 0) {
      const formattedRewards = data.rewards
        .filter(reward => reward.is_active === true)
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .slice(0, 30)
        .map(reward => ({
          id: reward.id,
          type: reward.type || 'coins',
          amount: reward.amount,
          description: reward.description || '',
          reward_link: reward.reward_link,
          is_active: reward.is_active,
          created_at: reward.created_at,
          updated_at: reward.updated_at
        }));
      
      // Data folder - check karo src hai ya nahi
      let dataDir;
      if (fs.existsSync(path.join(process.cwd(), 'src'))) {
        dataDir = path.join(process.cwd(), 'src', 'data');
      } else {
        dataDir = path.join(process.cwd(), 'data');
      }
      
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      
      const jsContent = `// Auto-generated from eccisland.is/sgh-coins/api/rewards.php
// Last updated: ${new Date().toISOString()}
export const staticRewards = ${JSON.stringify(formattedRewards, null, 2)};
`;
      const jsPath = path.join(dataDir, 'static-rewards.js');
      fs.writeFileSync(jsPath, jsContent);
      
      console.log(`✅ Generated ${formattedRewards.length} static rewards`);
      console.log(`📁 Saved to: ${jsPath}`);
      
    } else {
      console.log('⚠️ No active rewards found');
      
      // Fallback
      const fallbackRewards = [
        {
          id: "1",
          type: "coins",
          amount: 50,
          description: "",
          reward_link: "https://eccisland.is/sgh-coins/reward.php?slug=fallback_1",
          is_active: true,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }
      ];
      
      let dataDir;
      if (fs.existsSync(path.join(process.cwd(), 'src'))) {
        dataDir = path.join(process.cwd(), 'src', 'data');
      } else {
        dataDir = path.join(process.cwd(), 'data');
      }
      
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      
      const jsContent = `export const staticRewards = ${JSON.stringify(fallbackRewards, null, 2)};`;
      fs.writeFileSync(path.join(dataDir, 'static-rewards.js'), jsContent);
      console.log(`✅ Created fallback`);
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

fetchRewards();

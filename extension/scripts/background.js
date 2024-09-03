let adSites = [];

function updateAdSites() {
  fetch('https://eta-adblock.netlify.app/.netlify/functions/getAdSites')
    .then(response => response.json())
    .then(data => {
      console.log('Fetched ad sites:', data);
      adSites = data || [];
      setAdBlockRules(adSites);
    })
    .catch(error => console.error('Error fetching ad sites:', error));
}

function setAdBlockRules(sites) {
  const rules = sites.map((site, index) => ({
    id: index + 1, 
    priority: 1,
    action: { type: 'block' },
    condition: { urlFilter: `*://${site}/*`, resourceTypes: ['main_frame'] }
  }));

  console.log('Generated rules:', rules);

  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: rules.map(rule => rule.id),
    addRules: rules
  }, () => {
    if (chrome.runtime.lastError) {
      console.error('Error setting rules:', chrome.runtime.lastError);
    } else {
      console.log('Rules set successfully');
    }
  });
}

chrome.declarativeNetRequest.getDynamicRules((rules) => {
  console.log('Current dynamic rules:', rules);
});

updateAdSites();

chrome.runtime.onInstalled.addListener(() => {
  updateAdSites();
  setInterval(updateAdSites, 60000); 
});




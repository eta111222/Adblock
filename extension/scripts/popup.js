document.getElementById('mark-ad-site').addEventListener('click', function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const currentUrl = new URL(tabs[0].url).hostname;

    fetch('https://eta-adblock.netlify.app/.netlify/functions/addAdSite', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: currentUrl })
    }).then(response => {
      if (response.ok) {
        alert('Site marked as Ad site!');
      } else {
        response.text().then(text => {
          console.error('Error response:', text);
          alert('Failed to mark site.');
        });
      }
    }).catch(error => {
      console.error('Fetch error:', error);
      alert('Failed to mark site.');
    });
    
  });
});


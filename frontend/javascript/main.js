document.addEventListener('DOMContentLoaded', async () => {
  try {
    const res = await fetch('https://resumchallengfunapp-g2a7e9dfh8b4eceq.centralus-01.azurewebsites.net/api/GetResumeCounter?code=idngy4K9PEdSOSK228W76xtZdmAANVCM0XHGqDuGDgzMAzFuw-gCaA==');
    const data = await res.json();
    document.getElementById('visitCount').innerText = data.count;
  } catch (err) {
    document.getElementById('visitCount').innerText = 'Unavailable';
  }
});

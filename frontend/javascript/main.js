document.addEventListener('DOMContentLoaded', async () => {
  try {
    const res = await fetch('');
    const data = await res.json();
    document.getElementById('visitCount').innerText = data.count;
  } catch (err) {
    document.getElementById('visitCount').innerText = 'Unavailable';
  }
});

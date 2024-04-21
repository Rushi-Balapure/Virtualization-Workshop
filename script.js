function submitForm() {
    const name = document.getElementById('name').value;
    const displayArea = document.getElementById('challenge-area');
    displayArea.innerHTML = `<p>Hello, ${name}!</p>`;
  }
  
  document.querySelector("#challenge-form").addEventListener('submit', (e) => e.preventDefault())
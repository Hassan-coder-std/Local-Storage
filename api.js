// Example of API integration to fetch some data and display on home page

document.addEventListener("DOMContentLoaded", function() {
    // Simulate an API request
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        let apiContent = '<h3>API Data:</h3><ul>';
        data.slice(0, 5).forEach(post => {
          apiContent += `<li><strong>${post.title}</strong>: ${post.body}</li>`;
        });
        apiContent += '</ul>';
        document.getElementById('apiData').innerHTML = apiContent;
      })
      .catch(error => console.error('Error fetching API:', error));
  });
  
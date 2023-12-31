async function fetchGitHubUserData() {
    try {
        const response = await fetch('https://api.github.com/users/Vrohs');
        const userData = await response.json();

        // Call the function to display the data in the table
        displayUserData(userData);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayUserData(userData) {
    const table = document.getElementById('userTable');
    const row = table.insertRow();

    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);

    cell1.innerHTML = userData.name || 'No name provided';
    cell2.innerHTML = `<a href="${userData.html_url}" target="_blank">${userData.html_url}</a>`;
    cell3.innerHTML = `<img src="${userData.avatar_url}" alt="Avatar" style="width: 50px; height: 50px;">`;
}

// Call the function when the script loads
fetchGitHubUserData();

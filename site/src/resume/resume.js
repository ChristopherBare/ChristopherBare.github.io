// Header.js
import {siteColors} from '../styles/styles'
function getApiData() {
    // Define the URL of the API you want to fetch data from
    const apiUrl = 'https://sp14jyfina.execute-api.us-east-1.amazonaws.com/prod/resume';

// Make a GET request to the API using the fetch function
    fetch(apiUrl)
        .then(response => {
            // Check if the response status is OK (200)
            if (response.status === 200) {
                // Parse the response body as JSON
                return response.json();
            } else {
                throw new Error('Failed to fetch data');
            }
        })
        .then(data => {
            // Handle the JSON data received from the API
            console.log('Data from the API:', data);
            // You can do further processing here
        })
        .catch(error => {
            console.error('Error:', error);
        });

}
function Resume() {
    return (
        <header className="App-header" id="resume">
            <div className="Header justify-content-end" style={{fontFamily: 'NotoMono-Regular'}}>
                <h1>This is the resume page.</h1>
                <p style={{color: siteColors.green}}>{getApiData()}</p>
            </div>
        </header>
    );
}

export default Resume;

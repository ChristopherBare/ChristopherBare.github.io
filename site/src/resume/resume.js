// Header.js
import {siteColors} from '../styles/styles'
import useAPI from '../custom-hooks/useAPI'


function Resume() {
    const apiUrl = 'https://sp14jyfina.execute-api.us-east-1.amazonaws.com/prod/resume'
    const { data, isLoading, error } = useAPI(apiUrl)

    return (
        <header className="App-header" id="resume">
            <div className="Header justify-content-end" style={{fontFamily: 'NotoMono-Regular'}}>
                <h1>This is the resume page.</h1>
                {isLoading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p style={{ color: 'red' }}>Error: {error.message}</p>
                ) : (
                    //this will be a styled code block component in the future
                    //TODO implement code block component here after getting resume api to work
                    <p style={{ color: siteColors.green }}>{data}</p>
                )}
            </div>
        </header>
    );
}

export default Resume;

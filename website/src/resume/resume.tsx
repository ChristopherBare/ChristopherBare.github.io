import React from 'react';
import useAPI from '../custom-hooks/useAPI';
import CodeBlockComponent from '../helper-components/code-block';
import { SiteColors } from '../styles/styles'; // Assuming SiteColors is the interface for your siteColors object

interface ResumeProps {}

const Resume: React.FC<ResumeProps> = () => {
    const apiUrl = 'https://sp14jyfina.execute-api.us-east-1.amazonaws.com/prod/resume';
    const { data, isLoading, error } = useAPI(apiUrl);
    const jsonString = JSON.stringify(data, null, 2);
    const formattedCode = JSON.stringify(JSON.parse(jsonString), null, 2);

    const siteColors: SiteColors = {
        // Define your site colors here if it's not already imported as an object
        // bg: '#112340',
        // ... rest of the colors
    };

    return (
        <header className="App-header" id="resume">
            <div className="Header" style={{ fontFamily: 'NotoMono-Regular' }}>
                <h1>Resume</h1>
                <p style={{ color: siteColors.green }}>
                    This is my{' '}
                    <a style={{ textDecoration: 'none' }} href="https://github.com/ChristopherBare/resum-api">
                        resum-api
                    </a>
                </p>
                {isLoading ? (
                    <p>
                        <span className="loading loading-ring loading-lg"></span>
                    </p>
                ) : error ? (
                    <p style={{ color: 'red' }}>Error: {error.message}</p>
                ) : (
                    <CodeBlockComponent code={formattedCode} lang="json" showLineNumbers={true} />
                )}
            </div>
        </header>
    );
};

export default Resume;

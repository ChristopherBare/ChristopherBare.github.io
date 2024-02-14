import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs'; // Import the Dracula style

import '../styles/code-block.css';

interface CodeBlockProps {
    code: string;
    lang: string;
}

const CodeBlockComponent: React.FC<CodeBlockProps> = ({ code, lang }) => {
    return (
        <div
            style={{
                maxWidth: '1000px',
                maxHeight: '600px',
                overflowX: 'auto',
                overflowY: 'auto',
                overflow: 'auto',
                borderRadius: '10px',
            }}
        >
            <SyntaxHighlighter class="json-code-block" language={lang} style={dracula}>
                {code}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeBlockComponent;

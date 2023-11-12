import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs'; // Import the Dracula style
import PropTypes from 'prop-types';
import '../styles/code-block.css'

const CodeBlockComponent = ({ code, lang }) => {
    return (
        <div style={{ maxWidth: '1000px',maxHeight: '600px', overflow: 'auto', borderRadius: "10px"}}>
            <SyntaxHighlighter className="json-code-block" language={lang} style={dracula}>
                {code}
            </SyntaxHighlighter>
        </div>
    );
};

CodeBlockComponent.propTypes = {
    code: PropTypes.string.isRequired,
    lang: PropTypes.string.isRequired,
};

export default CodeBlockComponent;

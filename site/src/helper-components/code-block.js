import React, {useEffect} from 'react';
import Prism from 'prismjs';
import './_styles/assets/prism.css';

const Codeblock = ({code, lang}) => {
    useEffect(() => {
        Prism.highlightAll();
    }, [code]);
    return (<div className="codeblock">
   <pre className="line-numbers">
   <code className={`language-${lang}`}>
     {code}
   </code>
   </pre>
        </div>
    );
}

export default Codeblock;
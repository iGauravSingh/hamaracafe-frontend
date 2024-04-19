import { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';


function CopyCheck({textToCopy}) {
    const [copied, setCopied] = useState(false);
  
    // const textToCopy = 'This is the text you want to copy.'; // Replace with your variable
  
    const onCopy = () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Optional: Reset copied state after 2 seconds
    };
  
    return (
      <div>
        <CopyToClipboard text={textToCopy} onCopy={onCopy}>
          <button className=' px-4 py-2 bg-[#e62e56] text-white rounded-lg'>{copied ? 'Copied!' : 'Copy'}</button>
        </CopyToClipboard>
      </div>
    );
  }
  
  export default CopyCheck;
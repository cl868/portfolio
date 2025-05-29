import { useEffect, useState } from "react"; 

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "<Chelci Lee/>";

    useEffect(() => {
        let currentIndex = 0;
        const animateText = () => {
            if (currentIndex <= fullText.length) {
                setText(fullText.substring(0, currentIndex));
                currentIndex++;
                setTimeout(animateText, 200);
            } else {
                setTimeout(() => {
                    onComplete?.();
                }, 1000);
            }
        };
        
        animateText();
    }, []);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#eee7e1',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 50
        }}>
            <div style={{
                marginBottom: '2rem',
                fontSize: '2.5rem',
                fontFamily: 'monospace',
                fontWeight: 'bold'
            }}>
                Chelci Lee <span style={{ animation: 'blink 1s step-start infinite' }}>|</span>
            </div>
            
            <div style={{
                marginBottom: '1rem',
                fontSize: '1.5rem',
                fontFamily: 'monospace',
                color: '#000000',
                minHeight: '2rem',
                padding: '1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '0.5rem'
            }}>
                Welcome: {text}
            </div>
            
            <div style={{
                width: '200px',
                height: '2px',
                backgroundColor: '#1f2937',
                borderRadius: '1px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    width: '40%',
                    height: '100%',
                    backgroundColor: '#ece7e1',
                    boxShadow: '0 0 15px #3b82f6',
                    animation: 'loading 0.8s ease infinite'
                }}></div>
            </div>
        </div>
    );
};

// Add this to globals.css if not already there
const styles = `
  .shadow-glow {
    box-shadow: 0 0 15px #3b82f6;
  }
`;
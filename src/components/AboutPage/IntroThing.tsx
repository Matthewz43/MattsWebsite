




import { useState, useEffect , useRef} from 'react';

// Assuming characters and getRandomChar are defined somewhere accessible,
// for this example, they are inside the component.
const characters = "abcdefghijklmnopqrstuvwxyzQWERTYUIOPASDFGHJKLZXCVBNM1234567890@#"
function getRandomChar() {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters.charAt(randomIndex);
}

function IntroThing() {

    // 1. Create a state variable to hold the random text
    const [randomText, setRandomText] = useState(getRandomText());
    const myElementRef = useRef<HTMLDivElement>(null); 
    // Define the function that generates the long string
    function getRandomText() {
        let randomString = "";
        const totalChars = 2500;
        for (let i = 0; i < totalChars; i++) {
            randomString += getRandomChar();
        }
        return randomString;
    }

    // 2. Use the useEffect hook to handle the mouse move event
    useEffect(() => {
        // 3. Define the event handler function
        const handleMouseMove = () => {
            // Update the state with new random text
            setRandomText(getRandomText());
        };

        const element = myElementRef.current;
        // 4. Add the event listener to the document
        if (element) {
            element.addEventListener('mousemove', handleMouseMove);
        }
        // 5. Return a cleanup function
        // This function runs when the component unmounts,
        // preventing memory leaks by removing the listener.
        return () => {
            element?.removeEventListener('mousemove', handleMouseMove);
        };
    }, []); // The empty dependency array [] ensures this effect runs only once on component mount

    return (
        <section ref ={myElementRef} id="intro" className="container bg-warning text-break introbox">
            {/* 6. Render the state variable */}
            <p className = "card-letters">{randomText}</p>
            <div className = "container"> This should be on top of an element</div>

        </section>
    );
}

export default IntroThing;
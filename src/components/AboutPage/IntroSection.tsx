




import { useState, useRef, useEffect, useCallback } from 'react';

function wait(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}


interface itemInformation {
  contents: string;
  fontsize: string;

}

function IntroductoryPart({contents, fontsize }: itemInformation) {

    const STARTERTEXT = contents
    // A better implementation of getRandom()
    const getRandom = useCallback(() => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < 12; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }, []); // Empty dependency array, so this function is memoized


    const [randomText, setRandomText] = useState(STARTERTEXT);
    const TextRef = useRef<HTMLDivElement>(null); 

    function getRandomBasic(curIter: number, curWord: string) {
        // helper function for getiteration, def could have a better way,
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        // const lowerLetters = 'abcdefghijklmnopqrstuvwxyz'
        let word = curWord.slice(0, curIter);
        for (let i =curIter; i<curWord.length; i++) {
            if (curWord[i] === ' ') {
                word+= ' ';
            } else {
                let x = Math.floor(Math.random() * (letters.length - 1))
            
                word += letters[x];
            }
        }
        return word;
    }



    


    useEffect(() => {
        const getIterationOfWords = async () =>  {
        const DELAY_IN_MS = 67;
        let max = STARTERTEXT.length;

        let curWord = getRandomBasic(0, STARTERTEXT);

        for (let i = 0; i < max+1; i++) {
            curWord = getRandomBasic(i, STARTERTEXT);
            //console.log(curWord); // omg it works
            setRandomText(curWord);
            await wait(DELAY_IN_MS);
        }
    }

        const element = TextRef.current;
        // just place here to run at the start
        getIterationOfWords();
        if (element) {
            // It's 'mouseover', not 'mousemove'
            element.addEventListener('mouseover', getIterationOfWords);
        }

        return () => {
            if (element) {
                element.removeEventListener('mouseover', getIterationOfWords);
            }
        };
    }, [getRandom]); // Now the dependency array correctly includes the memoized function


    if (fontsize === "h3") {
        return (
            <h2  ref={TextRef} id="im the goat"> {randomText}</h2>

    );
    }

    return (
            <h1 className={`${fontsize} `} ref={TextRef} id="im the goat"> {randomText}</h1>

    );
}


function IntroSection() {




    return (
        <>
        <div id="app">
            
        <div id="star-container">
          <div id="star-pattern"></div>

            <div  className="bg-transparent container text-center center middle-div" style={{ zIndex: 3}}>
                <IntroductoryPart contents = "Hi, I'm Matt" fontsize = ''/>
                <ul>
                    <IntroductoryPart contents = "soy soy soy" fontsize = 'h3' />
                </ul>
                
            </div>
            
           
          <div id="star-gradient-overlay"></div>
        </div>
      </div>
      </>

    )
}

export default IntroSection;
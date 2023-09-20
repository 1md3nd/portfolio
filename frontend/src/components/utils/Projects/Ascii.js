import React,{useState} from 'react';
import css from './Ascii.module.css';
import axios from 'axios';

function Ascii() {
     const [text, setText] = useState('');
    const [font, setFont] = useState('');
    const [result, setResult] = useState('');

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleFontChange = (event) => {
        setFont(event.target.value);
    };

    const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    const response = await axios.get('/api/textasciiart', {
      params: {
        text,
        font,
      },
    });
    const generatedResult = response.data.result; // Adjust the response structure
    setResult(generatedResult);
  } catch (error) {
    console.error('Error fetching ASCII art:', error);
    setResult('Error fetching ASCII art');
  }
};
    return(
        <>
        <div className={css.container}>
            <form onSubmit={handleSubmit} className={css.form}>
                <div className={css.inputbox}>
                    <input required="required" type="text"/>
                        <span>Write Something</span>
                        <i></i>
                    </div>
                <div  className={css.font_select}>

                <select name="font" value={font} onChange={handleFontChange} />
                </div>
                
                <div  className={css.submit}>

                <button type="submit" >Submit</button>
                </div>
            </form>
        </div>
        <div className={css.result}>
            <pre>{result}</pre>
        </div>
        </>
    )
};

export default Ascii;
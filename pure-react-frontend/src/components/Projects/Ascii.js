import React, { useEffect, useState } from 'react';
import css from './Ascii.module.css';
import axios from 'axios';

function Ascii() {
  const [text, setText] = useState('');
  const [font, setFont] = useState('');
  const [result, setResult] = useState('');
  const [fontOptions, setFontOptions] = useState([]);
  useEffect(() => {
    const fetchFontOptions = async () => {
      try {
        const response = await axios.get('/api/getFontOptions');
        setFontOptions(response.data);
      } catch (error) {
        console.error('Error fetching font options', error);
      }
    };
    fetchFontOptions();
  }, []);
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
      // console.log(response);
      const generatedResult = response.data; // Adjust the response structure
      setResult(generatedResult);
    } catch (error) {
      console.error('Error fetching ASCII art:', error);
      setResult('Error fetching ASCII art');
    }
  };
  return (
    <>
      <div className={css.container}>
        <form onSubmit={handleSubmit} className={css.form}>
          <div className={css.inputbox}>
            <input
              required="required"
              type="text"
              value={text}
              onChange={handleTextChange} />
            <span>Write Something good</span>
            <i></i>
          </div>
          <div className={css.font_select}>

            <select name="font" value={font} onChange={handleFontChange}>
              {fontOptions.map((fontOption) => (
                <option key={fontOption} value={fontOption}>
                  {fontOption}
                </option>))}
            </select>
          </div>

          <div className={css.submit}>

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
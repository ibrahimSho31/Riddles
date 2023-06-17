import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  
  useEffect(() => {
    getJoke();
  }, []);

  function getJoke() {
    axios
      .get(`https://api.api-ninjas.com/v1/riddles`)
      .then((response) => {
        setData(response.data);
        setQuestion(response.data[0].question);
        setAnswer('');
      })
      .catch((error) => {
        console.error('Error fetching joke:', error);
      });
  }

  function getAnswer() {
    if (data.length > 0) {
      setAnswer(data[0].answer);
    }
  }

  let apiKey = "Gw3tcN5LZG2oW1L/BJpVCw==YR80Ob5bfND1qydI";

  return (
    <div className="App">
      <header>
        <div className='head animate__animated animate__bounce'>
          <h1>RIDDLE</h1>
          <h2>TOWN!!</h2>
          <h3>by Lani Sho</h3>
        </div>
      </header>

      <section className='body'>
      <div className='qa'>
      <div className='joke'>
          <h1>Riddle: {question}</h1>
        </div>

        {answer && (
          <div className='ans joke'>
            <h1>Answer: {answer}</h1>
          </div>
        )}
      </div>
      </section>

      <section className='btns'>
        <div className='gn-btn'>
          <button onClick={getJoke} className='generate-q'>Next Riddle <i className='bx bx-chevron-right'></i></button>
        </div>
        <div className='gn-btn'>
          <button onClick={getAnswer} className='generate-ans'>View Answer <i className='bx bx-chevron-right'></i></button>
        </div>
        <div className='num'>
          <h1>2023</h1>
        </div>
      </section>
      <footer>
        <a href='https://twitter.com/tolani_is?s=21&t=5kREoGoxMqsgn4YGzJUj4g' target='_blank' rel='noopener noreferrer'><i className='bx bxl-twitter'></i></a>
        <a href='https://github.com/ibrahimSho31' target='_blank' rel='noopener noreferrer'><i className='bx bxl-github' ></i></a>
        <a href='https://www.linkedin.com/in/ibrahim-shokoya-85a032258/' target='_blank' rel='noopener noreferrer'><i className='bx bxl-linkedin-square' ></i></a>
      </footer>
    </div>
  );
}

export default App;

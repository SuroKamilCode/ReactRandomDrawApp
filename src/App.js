import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [choosedRandom, setChoosedRandom] = useState('');
  const [draws, setDraws] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [headInputValue, setHeadInputValue] = useState('');
  const [headValue, setHeadValue] = useState('');
  const [propertiesArray, setPropertiesArray] = useState([]);
  const [isHeadClicked, setIsHeadClicked] = useState(false);
  const randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];


  const handleDrawClick = () => {
    if (propertiesArray.length > 1) {
      setChoosedRandom(random.name);
      setIsClicked(true);
      setDraws(draws + 1);
    } else {
      alert('Brak danych, wpisz minimum dwie właściwości do wylosowania!');
    }
  };

  const handleResetClick = () => {
    setIsClicked(false);
    setPropertiesArray([]);
    setHeadValue('');
    setIsHeadClicked(false);
    setDraws(0);
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    let writtenProperty = e.target.value;
    setInputValue(writtenProperty);
  };

  const handleAddProperty = (e) => {
    if (e.target.value > ''){
      setPropertiesArray(propertiesArray.concat({name: `${e.target.value}`, key: `${e.target.value}` + randomArray[Math.floor(Math.random() * randomArray.length)]}));
    setInputValue(''); }
    else {
      alert('Właściwość musi mieć minimum jeden znak!');
    }
  };

  const handleOnChangeHead = (e) => {
    e.preventDefault();
    let writtenHeadProperty = e.target.value;
    setHeadInputValue(writtenHeadProperty);
  };

  const handleHeadNameClick = (e) => {
    if (e.target.value > '') {
    setIsHeadClicked(true);
    setHeadValue(e.target.value);
    setHeadInputValue(''); 
  } else {
    alert('Tytuł musi mieć minimum jeden znak!');
  }
  };

  const handleRemoveProperty = (e) => {
const name = e.target.value
setPropertiesArray(propertiesArray.filter(item => item.name !== name))
}


  let random =
  propertiesArray[Math.floor(Math.random() * propertiesArray.length)];

  
const propertiesMap = propertiesArray.map((property) => (
    <div className="single_item">
    <li key={property.key}>{property.name}</li>
    <button value={property.name} onClick={handleRemoveProperty}>Usuń</button>
    </div>
));

  return (
    <div className="main_container">
      <h1 className="head">
        {isHeadClicked ? `${headValue}` : `Tytuł Twojego losowania`}
      </h1>
      <div className='add_container'>
      <input
        className="draw_name"
        type="text"
        placeholder="Wpisz tytul losowania"
        value={headInputValue}
        onChange={handleOnChangeHead}
      />
      <button
        className="draw_name_button"
        onClick={handleHeadNameClick}
        onChange={handleOnChangeHead}
        value={headInputValue}
      >
        Dodaj tytuł losowania
      </button>
      </div>
      <label className="draw_properties">
        Wpisz właściwości (imiona, cyfry, nazwy itp.)
      </label>
      <div className="properties_container">
      <input
        className="property_input"
        type="text"
        placeholder="Wpisz właściwość"
        value={inputValue}
        onChange={handleOnChange}
      />
      <button
        onClick={handleAddProperty}
        onChange={handleOnChange}
        value={inputValue}
      >
        Dodaj właściwość
      </button>
      </div>
        <p className="properties_head">Właściwości biorące udział w losowaniu to:</p> 
    <ul className="properties_inside">{propertiesMap}</ul>
      {isClicked ? (
        <p className="draw_result">Wylosowano: {choosedRandom}</p>
      ) : (
        <p className="draw_result">
          Kliknij w przycisk by poznać wynik losowania
        </p>
      )}
      <button className="draw_button" onClick={handleDrawClick}>
        WYLOSUJ
      </button>
      <p className="draw_quantity">
        Ilość losowań: {draws ? draws : 'jeszcze nie było losowań'}
      </p>
      <button className="reset_btn" onClick={handleResetClick}>
        Reset właściwości
      </button>
    </div>
  );
};

export default App;

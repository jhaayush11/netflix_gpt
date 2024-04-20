import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { Background_Image } from '../utils/constants';

const GptSearch = () => {
  return (
    <div className="">
      <img src={Background_Image} alt="Error" className="absolute -z-10 " />
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
}

export default GptSearch;

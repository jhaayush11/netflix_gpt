import React from 'react';
import { lang } from '../utils/LanguageConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
  const language_code = useSelector(store => store.config.lang);
  return (
    <div className="pt-[12%]  flex justify-center ">
      <form
        action=""
        className="bg-black p-4 w-1/2 grid grid-cols-12 rounded-lg shadow-lg shadow-black "
      >
        <input
          type="text"
          placeholder={lang[language_code].gptSearchPlaceHolder}
          className=" rounded-lg p-2 col-span-9  text-lg"
        />
        <button className=" bg-red-600 text-white ml-4 p-2 rounded-lg shadow-lg col-span-3 hover:bg-red-500 font-bold text-lg" >
          {lang[language_code].search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar

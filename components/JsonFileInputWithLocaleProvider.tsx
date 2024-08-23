import React from 'react';
import { InputProps } from 'sanity';
import { LocaleProvider } from '../context/LocaleContext';
import JsonFileInput from './JsonFileInput';

const JsonFileInputWithLocaleProvider: React.FC<InputProps> = (props) => {
    return (
      <LocaleProvider>
        <JsonFileInput {...props} />
      </LocaleProvider>
    );
  };

export default JsonFileInputWithLocaleProvider;
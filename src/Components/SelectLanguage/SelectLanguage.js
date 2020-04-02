import React from "react";
import { langs } from "../../data/supportedLanguages";

export const SelectLanguage = ({ selectLang }) => {
  return (
    <select onChange={e => selectLang(e.target.value)}>
      {langs.map(item => {
        return (
          <option value={item.code} key={item.code}>
            {item.lang}
          </option>
        );
      })}
    </select>
  );
};

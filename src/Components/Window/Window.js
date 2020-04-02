import React, { useState, useEffect } from "react";
import axios from "axios";
import { langs } from "../../data/supportedLanguages";
import { SelectLanguage } from "../SelectLanguage/SelectLanguage";

import styles from "./Window.module.css";

export const Window = () => {
  const [inputText, setInputText] = useState("");
  const [selectedLang, setSelectedLang] = useState(langs[0].code);
  const [translatedText, setTranslatedText] = useState("");

  const getTranslation = () => {
    if (inputText) {
      axios
        .get(
          `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190409T183835Z.eaf4d3d10ac5dab5.97be973af651913b93ab4476473668024436e374&text=${inputText}&lang=en-${selectedLang}`
        )
        .then(
          res => {
            setTranslatedText(res.data.text);
          },
          err => {
            console.log(err);
          }
        );
    }
  };

  useEffect(() => {
    getTranslation();
  }, [selectedLang]);

  return (
    <section className='grid-container'>
      <div className='grid-x grid-margin-x'>
        <div className={["grid-x", "grid-margin-x", styles.Window].join(" ")}>
          <div className='cell small-12 medium-12 large-6'>
            <h4> Enter text here </h4>

            <textarea
              placeholder='For a real time translation...'
              onKeyUp={e => {
                setInputText(e.target.value);
                getTranslation();
              }}
            />
          </div>

          <div className='cell small-12 medium-12 large-6'>
            <SelectLanguage selectLang={setSelectedLang} />
            <p>{translatedText}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

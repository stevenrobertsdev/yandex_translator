import React, {Component} from 'react';

import axios from 'axios';

import styles from "./Window.module.css";


class Window extends Component {

    state = {
        inputText: "",
        selectedLang: "de",
        translatedText: ""
    }

    componentDidUpdate(prevProps, prevState) {
        if((prevState.selectedLang !== this.state.selectedLang) && this.state.inputText) {
            axios.get(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190409T183835Z.eaf4d3d10ac5dab5.97be973af651913b93ab4476473668024436e374&text=${this.state.inputText}&lang=en-${this.state.selectedLang}`)
            .then(res => {
                this.setState({translatedText: res.data.text})
            },(err) => {
                console.log(err);
            })
            
        }
    }

    collectTextHandler = (e) => {  
        this.setState({inputText: e.target.value});
        this.translateText(e);
    }

    collectLangHandler = (e) => {  
        this.setState({selectedLang: e.target.value});
    }

    translateText = (e) => {
        if(this.state.inputText) {
            axios.get(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190409T183835Z.eaf4d3d10ac5dab5.97be973af651913b93ab4476473668024436e374&text=${this.state.inputText}&lang=en-${this.state.selectedLang}`)
            .then(res => {
                this.setState({translatedText: res.data.text})
            },(err) => {
                console.log(err);
            })
        }
    }

    render(){
        return (
            <section className='grid-container'>
                <div className="grid-x grid-margin-x">
                    <div className={['grid-x', 'grid-margin-x', styles.Window].join(" ")}>
                        <div className="cell small-12 medium-12 large-6">
                            <h4>English </h4>
                            <textarea placeholder="Enter text here..."
                                onKeyUp={e => {this.collectTextHandler(e)}}/>
                        </div>

                        <div className="cell small-12 medium-12 large-6">
                            <select onChange={e => {this.collectLangHandler(e)}}>
                                <option value="de">German</option>
                                <option value="fr">French</option>
                                <option value="es">Spanish</option>
                                <option value="it">Italian</option>
                                <option value="ga">Irish</option>
                                <option value="el">Greek</option>
                                <option value="zh">Chinese</option>
                                <option value="pl">Polish</option>
                                <option value="ru">Russian</option>
                                <option value="da">Danish</option>
                                <option value="ja">Japanese</option>
                                
                            </select>
                            <p>{this.state.translatedText}</p>
                        </div>
                    </div>
                </div>
            </section>
        ) // return 
    } // render()
} // class



export default Window;
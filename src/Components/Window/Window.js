import React, {Component} from 'react';

import styles from "./Window.module.css";

class Window extends Component {
    render(){
        return (
            <section className='grid-container'>
                <div className="grid-x grid-margin-x">
                    <div className={['grid-x', 'grid-margin-x', styles.Window].join(" ")}>
                        <div className="cell small-12 medium-6">
                        <select>
                                <option disabled selected >Please select a language</option>
                                <option value="English">English</option>
                                <option value="German">German</option>
                                <option value="French">French</option>
                                <option value="Spanish">Spanish</option>
                                <option value="Greek">Greek</option>
                                <option value="Chinese">Chinese</option>
                            </select>
                            <textarea placeholder="Enter text here..."/>
                        </div>

                        <div className="cell small-12 medium-6">
                            <select>
                                <option disabled selected >Please select a language</option>
                                <option value="English">English</option>
                                <option value="German">German</option>
                                <option value="French">French</option>
                                <option value="Spanish">Spanish</option>
                                <option value="Greek">Greek</option>
                                <option value="Chinese">Chinese</option>
                            </select>
                            <p>...</p>
                        </div>
                    </div>
                </div>
            </section>
        ) // return 
    } // render()
} // class



export default Window;
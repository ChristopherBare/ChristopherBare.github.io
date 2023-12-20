import React from 'react';
import {siteColors} from "../styles/styles.ts";
import qr from '../assets/images/coffee_QR.png';

interface DonateProps {}

const Donate: React.FC<DonateProps> = () => {

    // @ts-ignore
    return (
        <header className="App-header" id="donate">
            <div className="container" style={{ width: '40rem' }}>
                <div className="Header columns-2" style={{ fontFamily: 'NotoMono-Regular' }}>
                    <div>
                        <h3 style={{ color: siteColors.green }}>donations are welcome.</h3>
                        <img src={qr} className="h-80 px-2" alt="qr" />
                    </div>

                    <div className="card w-80 h-auto shadow-xl" style={{ background: siteColors.lineHighlight }}>
                        <div className="card-body items-center text-center">
                            <stripe-buy-button
                                buy-button-id="buy_btn_1OMEf4HjClUQ3dBDl8EFroYG"
                                publishable-key="pk_live_oS0nV3njDMfcqwvucZBFw94l00837Bw8HE"
                            ></stripe-buy-button>
                        </div>
                    </div>
                    <br/>
                </div>
            </div>
        </header>
    );
};

export default Donate;

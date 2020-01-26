import React, { Component } from 'react';
import ColumnLeft from './ColumnLeft';
import Bouquet from '../assets/images/bride_bouquet.jpg'
import Party from '../assets/images/party_flowers.jpg';
import Sad from '../assets/images/sad.jpg';
import ColumnRight from './ColumnRight';
import '../css/serviceAndColumns.css';
import { Link } from 'react-router-dom';

export default class ServiceSection extends Component {
    textOne = "Från stort och pampigt kyrkbröllop till en enkel vigsel vid havet, vi hjälper till med att skapa rätt stämning och känsla i allt från brudbukett, corsage, blommor till brudsällskapet, dekorationer till kyrkan och festlokalen."
    textTwo = "Lyft din fest hemma, på företaget eller i eventlokalen med sprakande bordsdekorationer och färgglada arrangemang. Vi arbetar på plats eller skickar färdiga dekorationer. Och vi skapar gladeligen festdukningar för över 1000 gäster. "
    textThree = "Att ta farväl av nära och kära kan vara tungt. Begravningsblommor kan bidra till att skapa ett ljust och vackert minne. Vi gör allt från kransar, dekorationer och hjärtan till kistor och hela kyrkomiljöer. Något som blir väldigt vackert är när vi får möjlighet att harmonisera helheten, allt från kransarna till kistdekorationen. "
    render() {
        return (
            <div className="section servicesAndOffers">
                <div style={news}>
                    <h1>Blommor för alla tillfällen</h1>
                    <div className="columnsInService">
                        <ColumnLeft headerText={'Bröllop'} image={Bouquet} text={this.textOne} altText="bride holding a bouquet"/>
                        <ColumnRight headerText={'Fest'}text={this.textTwo} image={Party} altText="Tracey Hocking party flowers"/>
                        <ColumnLeft headerText={'Begravning'} image={Sad} text={this.textThree} altText="flowers floating in the water"/>
                    </div>
                    <Link to="/contact"><button style={buttonStylezz} className="ui button">Kontakta oss</button></Link>
                </div>
            </div>
        )
    }
}

const news: React.CSSProperties = {
    fontFamily: "Dancing_Script"
}

const buttonStylezz: React.CSSProperties = {
    fontFamily: "Dancing_Script", 
    fontSize: "2em",
    backgroundColor: "rgba(198, 237, 228, 0.95)",
    color: "rgba(0, 0, 0, 0.95)",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)"
}


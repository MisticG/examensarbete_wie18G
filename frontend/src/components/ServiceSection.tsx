import React, { Component } from 'react';
import ColumnLeft from './ColumnLeft';
import Bouquet from '../assets/images/bride_bouquet.jpg'
import Party from '../assets/images/party_flowers.jpg';
import Sad from '../assets/images/sad.jpg';
import ColumnRight from './ColumnRight';

export default class ServiceSection extends Component {
    textOne = "Bröllop Från stort och pampigt kyrkbröllop till en enkel vigsel vid havet, vi hjälper till med att skapa rätt stämning och känsla i allt från brudbukett, corsage, blommor till brudsällskapet, dekorationer till kyrkan och festlokalen."
    textTwo = "Fest Lyft din fest hemma, på företaget eller i eventlokalen med sprakande bordsdekorationer och färgglada arrangemang. Vi arbetar på plats eller skickar färdiga dekorationer. Och vi skapar gladeligen festdukningar för över 1000 gäster. "
    textThree = "Begravning Att ta farväl av nära och kära kan vara tungt. Begravningsblommor kan bidra till att skapa ett ljust och vackert minne. Vi gör allt från kransar, dekorationer och hjärtan till kistor och hela kyrkomiljöer. Något som blir väldigt vackert är när vi får möjlighet att harmonisera helheten, allt från kransarna till kistdekorationen. "
    render() {
        return (
            <div className="section servicesAndOffers" style={outer}>
                <div style={news}>
                    <h1>Blommor för alla tillfällen</h1>
                    <div style={{padding: "0 6em"}}>
                        <ColumnLeft image={Bouquet} text={this.textOne} />
                        <ColumnRight text={this.textTwo} image={Party}/>
                        <ColumnLeft image={Sad} text={this.textThree} />
                    </div>
                </div>
            </div>
        )
    }
}

const news: React.CSSProperties = {
    fontFamily: "Dancing_Script"
}

const outer: React.CSSProperties = {
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)"
}
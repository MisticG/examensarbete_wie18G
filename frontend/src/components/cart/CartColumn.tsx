import React from 'react';

export default function CartColumns() {
    //Styla mobilt
    return (
        <div className="ui fluid container" style={{marginTop: "2em"}}>
            <div className="ui equal width centered column grid"style={{margin: "auto"}}>
                <div className="column"><h3>Produkter</h3></div>
                <div className="column"><h3>Namn</h3></div>
                <div className="column"><h3>Pris</h3></div>
                <div className="column"><h3>Antal</h3></div>
                <div className="column"><h3>Ta bort</h3></div>
                <div className="column"><h3>Total summa</h3></div>
            </div>
        </div>
    )
}
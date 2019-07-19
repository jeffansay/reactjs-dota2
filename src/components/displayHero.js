import React, { Component } from 'react';
import { Card } from 'reactstrap'

class DisplayHero extends Component {
    render() {
        // console.log(this.props, '--id hero')
        const { idHero, heroFile} = this.props
        let findHero = heroFile.find(id => console.log(idHero, 'chejeksjsj'))
        console.log(findHero, 'hero check!!!!!')
        return (
            <div>
                <Card className="sticky-top">
                    <p>HERO! id: {this.props.idHero}</p>
                </Card>
            </div>
        );
    }
}

export default DisplayHero;

import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import { Fade, Zoom, LightSpeed } from 'react-reveal';
import Confirmation from './Confirmation';
import Fond1 from '../Assets/Symbole-famille-au-creux-des-mains.png';
import {
  BrowserRouter,
  NavLink,
  Switch,
  Route
} from 'react-router-dom';
import '../CSS/gif.css'

class FairePart extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div className='bodyColor'>
        <Zoom><Fade><Image className="displayFond" src={Fond1} /></Fade></Zoom><br /><br />
        <Fade><LightSpeed cascade><div className='displaytext'>
          <div className='gif'>
            <h2>
              Chère famille, chers amis,
            </h2>
            <h3>
              Nous avons décidé après bientôt 7 ans de vie commune pendant lesquels notre amour n'a cessé de croître,
              après avoir été tellement comblé par notre première fille Thénaïs nous avons décidé d'agrandir notre famille avec l'arrivée de Charlie
              et c'est tous ensemble que nous vous invitons à célébrer cet amour dans l'intimité et la simplicité le jour de notre union
            </h3>
            <h3>
              le 5 octobre 2019 à 17h à la mairie de Thil
            </h3><br /><br />
          </div>
        </div></LightSpeed></Fade>
        <BrowserRouter>
          <NavLink to="/confirmation"><h1 className="displayLink2">Veuillez Confirmer ici</h1></NavLink><br />
          <Switch>
            <Route path="/confirmation" component={Confirmation} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default FairePart;
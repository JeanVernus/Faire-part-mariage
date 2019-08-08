import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { Bounce } from 'react-reveal';
import Swal from 'sweetalert2';
import Axios from 'axios';
import '../CSS/Confirmation.css';

class Confirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      Nombre: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.sendForm = this.sendForm.bind(this);
  }

  handleChange(event, key) {
    console.log(this.state);
    this.setState({ [(event.target.name)]: event.target.value });
    if (key === 'Prénom') { this.setState({ firstName: event.target.value }) };
    if (key === 'Nom') { this.setState({ lastName: event.target.value }) };
    if (key === 'Nombre') { this.setState({ job: event.target.value }) };
  }

  sendForm(event) {
    const { firstName, lastName, Nombre } = this.state;
    event.preventDefault();
    Axios.post('https://www.jeanvernus.fr/sendForm', {
      firstName,
      lastName,
      Nombre,
    })
      .then(res => {
        if (res.data === 'badMail'){
          Swal.fire({
            title: 'Merci !',
            text: 'Nous avons reçu votre confirmation',
            imageUrl: 'https://media3.giphy.com/media/3ohs7JG6cq7EWesFcQ/200w.webp?cid=790b76115d4af733625554676f912184&rid=200w.webp',
            imageWidth: 290,
            imageHeight: 220,
            imageAlt: 'ok',
            animation: false
          })
        }
        console.log(res.data)
      })

  }

  render() {
    return (
      <div>
        <Bounce cascade top><div className="displayLink2">
          <div className="paddingForm">
            <Form onSubmit={this.sendForm}>
              <Form.Group widths='equal'>
                <Form.Input name="Prénom" placeholder='Prénom' onChange={event => this.handleChange(event, "Prénom")} />
                <Form.Input name="Nom" placeholder='Nom' onChange={event => this.handleChange(event, "Nom")} />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Input type="Number" name="Nombre" placeholder='Nombre' onChange={event => this.handleChange(event, "Nombre")} />
              </Form.Group>
              <Button type='submit'>Soumettre</Button>
            </Form>
            <h1>Merci!</h1>
          </div>
        </div></Bounce>
      </div>
    );
  }
}

export default Confirmation;
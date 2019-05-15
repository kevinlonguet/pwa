import { LitElement, html, css } from 'lit-element';

export default class Todo extends LitElement {
  constructor(){
    super();
    this.title = "";
    this.description = "";
    this.src = "";
    this.placeholder = "";
    this.id="";
  }

  static get properties() {
    return {
      title: {type: String}, 
      description: {type: String}, 
      src: {type: String}, 
      placeholder: {type: String},
      id: {type:Number} 
    }
  }

  static get styles() {

    return css`
    * {
        box-sizing: border-box;
      }
      
      body {
        font-family: Arial, Helvetica, sans-serif;
      }
      
      /* Float four columns side by side */
      .column {
        float: left;
        width: 25%;
        padding: 0 10px;
      }
      
      /* Remove extra left and right margins, due to padding */
      .row {margin: 0 -5px;}
      
      /* Clear floats after the columns */
      .row:after {
        content: "";
        display: table;
        clear: both;
      }
      
      /* Responsive columns */
      @media screen and (max-width: 600px) {
        .column {
          width: 100%;
          display: block;
          margin-bottom: 20px;
        }
      }
      
      /* Style the counter cards */
      .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        padding: 10px;
        margin-bottom:8px;
        text-align: center;
        background-color: #FFFFFF;
    `;
  }


  initTodo(placeholder, title, description, id) {
    this.title = title;
    this.description = description;
    this.placeholder = placeholder;
    this.id = id;
  }


  render() {
    return html`
  <div class="column">
    <div class="card">
      <h3>${this.title}</h3>
      <p>${this.description}</p>
      <div>
  <input type="checkbox" id="check" name="check">
  <label for="check"></label>
</div>
    </div>
  </div>

    `;
  }
}

customElements.define('app-todo', Todo);

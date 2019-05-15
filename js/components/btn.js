import { LitElement, html, css } from 'lit-element';

export default class Btn extends LitElement {
  constructor(){
    super();
    this.title = "";
    this.description = "";
    this.placeholder ="";
    this.id ="";

  }

  static get properties() {
    return {
      title: {type: String}, 
      description: {type: String}, 
      placeholder: {type:String},
      id: {type:Number}
    }
  }

  static get styles() {

    return css`

    .container__item {
        display:block;
        text-align:center;
        position:relative;
    }

    .form__field {
            width: 150px;
            background: #fff;
            color: $input-text-color;
            font: inherit;
            box-shadow: 0 6px 10px 0 rgba(0, 0, 0 , .1);
            border: 0;
            outline: 0;
            padding: 22px 18px;
            margin-bottom:10px;
            border-radius:15px;
        }

        .btn {
            background-color:#7892c2;
            -moz-border-radius:28px;
            -webkit-border-radius:28px;
            border-radius:15px;
            border:1px solid #4e6096;
            display:inline-block;
            cursor:pointer;
            color:#ffffff;
            font-family:Arial;
            font-size:19px;
            padding:13px 34px;
            text-decoration:none;
            text-shadow:0px 1px 0px #283966;
            margin-bottom:3px;
        }
        .btn:hover {
            background-color:#476e9e;
        }
        .btn:active {
            position:relative;
            top:1px;
        }

        .btn-delete {
            background-color:#933B3C;
            -moz-border-radius:28px;
            -webkit-border-radius:28px;
            border-radius:15px;
            border:1px solid #491D1E;
            display:inline-block;
            cursor:pointer;
            color:#ffffff;
            font-family:Arial;
            font-size:19px;
            padding:13px 34px;
            text-decoration:none;
            text-shadow:0px 1px 0px #283966;
        }

        .container {
            padding-top:10px;
            padding-bottom:20px;
        }


    `;
  }

  addTodo() {
    let newTodo = this.shadowRoot.querySelectorAll('.form__field');
        const event = new CustomEvent('new-todo', {
            detail:[
                newTodo[0].value,
                newTodo[1].value]
        });
        document.dispatchEvent(event);
        newTodo.value = '';
    }

    deleteTodo() {
        const event = new CustomEvent('delete-todo', {

        })
            document.dispatchEvent(event);
            app2.innerHTML = '';
    }   

    firstUpdated(_changeProperty) {
        const btn = this.shadowRoot.querySelector('.btn');
        btn.addEventListener('click', () => {
            this.addTodo();
        });

        const btn2 = this.shadowRoot.querySelector('.btn-delete');
        btn2.addEventListener('click', () => {
            this.deleteTodo();
        });

        const input = this.shadowRoot.querySelector('input');
    input.addEventListener('keydown', e => {
        if (e.keyCode == 13) {
            btn.click();
        }
    })
    
}

  render() {
    return html`
            <div class="container">
                <div class="container__item">
                    <label for="titre"><input type="text" class="form__field" placeholder="Titre" id="titre"/></label>
                    <label for="description"><input type="text" class="form__field" placeholder="Description" id="description"/></label>
  </div>
                <div class="container__item"></div>
                    <label for="bouton add"><button class="btn">Ajouter une tâche</button></label>
                    <label for="bouton add"><button id="delete" class="btn-delete">Tout supprimer</button></label>
                </div>
            </div>

            
        
    `;
  }
}

customElements.define('add-btn', Btn);
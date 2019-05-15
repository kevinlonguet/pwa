import Todo from '/js/components/todo/todo.js';
import { openDB, deleteDB } from '../node_modules/idb/build/esm/index.js';
import checkConnectivity from '/js/connection.js'

(async function(document) {
    const app = document.querySelector('#app');
    const app2 = document.querySelector('#app2');

    checkConnectivity();
    document.addEventListener('connection-changed', ({ detail }) => {
    console.log(detail);

    
  });
  
    try {
      const data = await fetch('/js/data/afaire.json');
      const json = await data.json();
  
      const database = await openDB('app-store',1, {
          upgrade(db) {
              db.createObjectStore('todo');
          }
      });

      let allTodo = await database.get('todo', 'todo');
  
      if(navigator.onLine){
        await database.put('todo', json, 'todo');
      }
      const todos = await database.get('todo','todo');
  

    
        todos.map(item => {
        const todosElement = new Todo();    
        
        todosElement.initTodo( 
          item.placeholder,
          item.content.title,
          item.content.description,
          item.id);
        app2.appendChild(todosElement);
  
        return todosElement;
    });
      document.addEventListener('new-todo', e => {
          let it = allTodo.length;
        allTodo.push({
            title : e.detail[0],
            description: e.detail[1],
            id: it,
        });
        database.put('todo', allTodo, 'todo');
        //création de l'element dans le dom
        const todosElement = new Todo();
        todosElement.initTodo(null,e.detail[0],e.detail[1],it);
        app2.appendChild(todosElement);
        return todosElement;
    });

    document.addEventListener('delete-todo', e => {
        deleteDB('todo');
      });

    } catch(error) {
    }
  })(document);
  

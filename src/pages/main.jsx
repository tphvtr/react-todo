import React from 'react';

class Main extends React.Component {
    todos = [];
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            todos: []
        };
    }

    addTodo(name) {
        this.todos.push({name, id: new Date().getTime()});
        this.setState({todos: this.todos});
    }

    delete(i) {
        this.todos.splice(i, 1);
        this.setState({todos: this.todos});
    }

    search(query) {
        const todos = this.todos.filter(item => item.name.toLocaleLowerCase().includes(query));
        this.setState({todos});
    }

    render() {
        return (
            <>
                <h1>Todo list</h1>
                <div style={{display: 'flex', 'marginBottom': '20px'}}>
                    <div>
                        <input type="text"
                               placeholder="ToDo name"
                               maxLength="50" 
                               value={this.state.name}
                               onChange={(e) => this.setState({ name: e.target.value })}
                        />
                        <p style={{margin: '0', color: this.state.name.length < 50 ? 'grey' : 'red'}}>{this.state.name.length}/50</p>
                    </div>
                    <button style={{height: 'max-content'}}
                            onClick={() => this.addTodo(this.state.name)}
                            disabled={!this.state.name.length}>Create</button>
                </div>
                <input type="text" placeholder="search" onChange={(e) => this.search(e.target.value)}/>

                {
                    this.state.todos.length 
                        ? this.state.todos?.map((todo, i) => {
                            return (
                                <article style={{marginTop: '20px'}} key={todo.id} className="todo-item">
                                    <span>{todo.name}</span>
                                    <span onClick={() => this.delete(i)}>X</span>
                                </article>
                            )})
                        :  []
                }
            </>
        )
    };
}

export default Main;
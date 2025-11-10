const { Component } = React;

class TarefaApp extends Component {
  constructor(props) {
    super(props);
    this.state = { tarefas: [], item: "" };
  }

  handleChange = (event) => {
    this.setState({ item: event.target.value });
  };

  add = () => {
    const { tarefas, item } = this.state;
    if (item.length === 0) {
      alert("Digite uma tarefa para adicionar!");
    } else {
      this.setState({ tarefas: tarefas.concat(item), item: "" });
    }
  };

  check = (e) => {
    e.target.prentElement, querySelector(".check").style;
  };

  del = (id) => {};

  render = () => {
    const { tarefas, item } = this.state;
    return (
      <div>
        <header className="header">
          <h1>Lista Tarefas</h1>
          <input
            onChange={this.handleChange}
            value={item}
            type="text"
            placeholder="Digite a sua tarefa..."
          />
          <span onClick={this.add}>
            <i className="fas fa-plus-cicle"></i>
          </span>
        </header>
        <ul>
          {tarefas.map((item, index) => (
            <li key={index}>
              <i className="fas fa-check-cicle check"></i>
              <span>{item}</span>
              <i className="fa-solid fa-trash-can close"></i>
            </li>
          ))}
        </ul>
      </div>
    );
  };
}

const root = ReactDom.createRoot(document.querySelector("#root"));
root.render(<TarefaApp />);

import React from 'react';
import AvailabeItems from './AvailableItems'
import TodoItem from './TodoItem'

class Main extends React.Component{

  constructor(){
    super()
    this.state = {
      available_items : AvailabeItems
    }
    this.timeChange = this.timeChange.bind(this)
    this.changeStatus = this.changeStatus.bind(this)
  }

  changeStatus(e){

    let checked = e.target.checked;
    let id = (e.target.id);

    this.setState(prevState => {
      const updatedTodos = prevState.available_items.map(todo => {
        
        if(todo.id === id){
          console.log(todo.id)
          if(checked){
            todo.status = "Complete" 
          } else{
            todo.status = "Incomplete" 
          }
        }
        return todo
      })

      return {available_items : updatedTodos}
    })

  }

  timeChange(){
    this.setState({available_items : AvailabeItems.slice(0,3)})
  }

  render(){
    const TodoItems = this.state.available_items.map(todoItem => <TodoItem key={todoItem.id} id={todoItem.id} name={todoItem.name} start_time={todoItem.start_time} 
      end_time={todoItem.end_time} changeStatus={this.changeStatus} timeChange={this.timeChange}/>)

    return (

        <main>

        <div className="taskSelection">
          
          <form className="todoInput">
            <p className="selectItemHeading">Select items to add to your Todo list</p>

            <table className="itemsHolder">
                <thead className="selectItemsHeaders">
                  <tr>
                    <th align="left">Item Name</th>
                    <th align="left">Start</th>
                    <th align="left">End</th>
                  </tr>
                </thead>
                <tbody>{TodoItems}</tbody>
              
                
            </table>
            <div className="add-row-btn">+ Add Row</div>
            
          </form>

        </div>
        </main>
    );
  }

}

export default Main;

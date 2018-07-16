var a = [];
i = 0;
class ToDoList {
    constructor (id,desc,title){ 
        this.todo = new ToDo(id,desc,title);
        this.addToDo();
    }
    addToDo(){
        a.push(this);
    }
    showTask(){
        this.todo.showToDoTask();
    }
    completeToDo(){
        this.todo.markComplete();
    }
    removeToDo(){
        if (this.todo.isComplete==false){
            console.log("This Task Is Not Complete");
        }
        else{
            a.pop();
        }
    }
}

class ToDo {
    constructor (id,desc,title){
        this.id = id;
        this.desc = desc;
        this.title = title;
        this.isComplete = false;
    }
    markComplete(){
        this.isComplete = true;
    }
    showToDoTask(){
        console.log(`Id = ${this.id}`);
        console.log(`Title = ${this.title}`);
        console.log(`Desc = ${this.desc}`);
        console.log(`Status = ${this.isComplete}`);
    }
}

var Task1 = new ToDoList(1,'Brush','Clean');
var Task2 = new ToDoList(2,'Breakfast','Eat');
var Task3 = new ToDoList(3,'Go To Work','Travel');
Task1.showTask();
Task2.showTask();
Task3.showTask();
console.log(a);
Task3.removeToDo();
Task3.completeToDo();
Task3.removeToDo();
console.log(a);
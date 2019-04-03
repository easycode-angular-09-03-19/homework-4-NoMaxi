import { Component, OnInit } from '@angular/core';

import { Todo } from '../../interfaces/todo';

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
    todos: Todo[] = [
        // some todo-items are initially added for testing simplification
        {
            id: 1,
            text: 'Buy bread in the shop',
            completed: false
        },
        {
            id: 2,
            text: 'Make EasyCode homework',
            completed: false
        },
        {
            id: 3,
            text: 'Clean the flat',
            completed: false
        }
    ];

    constructor() {}

    ngOnInit() {}

    /** Get the boolean value representing the completion state of all todo-items */
    get allTasksCompleted(): boolean {
        return this.todos.every(item => item.completed);
    }

    /** Toggle the completion state of all todo-items */
    toggleAllTasksComplete(): void {
        const areAllTasksCompleted = this.allTasksCompleted;
        this.todos.forEach(item => {
            item.completed = !areAllTasksCompleted;
        });
    }

    /** Add the new todo-item to todos array based on the event in the child <app-todo-add-form> component */
    onTodoAddFormEvent(item): void {
        this.todos.push(Object.assign({}, item));
    }

    /** Remove the existing todo-item from todos array based on the todo-item id received from the child <app-todo-item> component */
    onTodoItemEvent(itemId): void {
        const taskDeletionConfirmed = confirm('Do you really want to delete this todo item?');
        if (taskDeletionConfirmed) {
            this.todos = this.todos.filter(el => el.id !== itemId);
        }
    }
    
    onTodoItemToggleComplete(item): void {
        this.todos.forEach(el => {
            if (el.id === item.id) {
                el.completed = !item.completed;
            }
        });
    }
}

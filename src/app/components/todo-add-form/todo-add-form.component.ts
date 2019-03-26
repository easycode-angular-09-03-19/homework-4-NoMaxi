import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

import { Todo } from '../../interfaces/todo';

@Component({
    selector: 'app-todo-add-form',
    templateUrl: './todo-add-form.component.html',
    styleUrls: ['./todo-add-form.component.css']
})
export class TodoAddFormComponent implements OnInit {
    @Input() currentTodosNumber: number;
    @Output() addItem: EventEmitter<Todo> = new EventEmitter<Todo>();
    @ViewChild('addTodoForm') form: HTMLFormElement;

    addedItem: Todo;

    constructor() {}

    /** Initialize the current todo-item properties */
    ngOnInit(): void {
        this.addedItem = {
            id: this.currentTodosNumber + 1,
            text: '',
            completed: false
        };
    }

    /** Event of submitting the form to the parent <app-todos> component */
    onSubmitAddTask(): void {
        if (this.form.invalid) { return; }
        this.addItem.emit(this.addedItem);
        this.addedItem.id += 1;
        this.form.resetForm();
    }
}

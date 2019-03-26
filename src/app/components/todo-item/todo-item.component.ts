import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Todo } from '../../interfaces/todo';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
    @Input() item: Todo;
    @Output() deleteItem: EventEmitter<number> = new EventEmitter<number>();

    constructor() {}

    ngOnInit() {}

    /** Delete the current todo-item from the todos array of the parent <app-todos> component by emitting the item id to the parent component */
    deleteTask(): void {
        this.deleteItem.emit(this.item.id);
    }

    /** Toggle the completion state of the current todo-item */
    toggleTaskComplete(): void {
        this.item.completed = !this.item.completed;
    }
}

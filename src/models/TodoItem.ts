/// <reference path='../reference.ts' />

module todos {
    'use strict';

    export class TodoItem {
        constructor(
            public title: string,
            public completed: boolean
        ) { }
    }
}

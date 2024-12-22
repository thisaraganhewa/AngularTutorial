import { Routes } from '@angular/router';

export const routes: Routes = [{

    path: '',
    pathMatch: 'full',
    loadComponent: () => {

        return import('./Pages/home/home.component').then(m => m.HomeComponent)

    }

},
{

    path: 'todos',
    loadComponent: () =>{

        return import('./Pages/todos/todos.component').then(m => m.TodosComponent)

    }

}
];

import { Routes } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { ROUTES } from 'src/core/constants/routes.const';

export const routes: Routes = [
    { path: "**", redirectTo: "feature-a" },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: ROUTES.FEATURE_A.BASE,
    },
    {
        path: ROUTES.FEATURE_A.BASE,
        loadChildren: () => 
            import('../routes/feature.routes').then(m => m.FeatureRoutes)
    },
];

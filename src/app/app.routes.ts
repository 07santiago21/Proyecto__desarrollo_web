import { provideServerRendering } from '@angular/platform-server';
import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/pages/home/home.component';
import { IndexComponent } from './index/index.component';
import { signalSetFn } from '@angular/core/primitives/signals';
import { SignInComponent } from './auth/pages/sign-in/sign-in.component';
import { SignUpComponent } from './auth/pages/sign-up/sign-up.component'; 
import { ProfileSettingsComponent } from './features/profile/pages/profile-settings/profile-settings.component';
import { OwnerFilteringComponent } from './features/owner-filtering/pages/owner-filtering/owner-filtering.component';
import { AddPropertyComponent } from './features/properties/add-property/add-property.component';
import { EditPropertyComponent } from './features/properties/edit-property/edit-property.component';  



export const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'index', component: IndexComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'profile-settings', component: ProfileSettingsComponent},
  {path: 'owner-filtering', component: OwnerFilteringComponent},
  {path: 'add-property', component: AddPropertyComponent},
  {path: 'edit-property', component: EditPropertyComponent}
];
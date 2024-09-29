import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { signalSetFn } from '@angular/core/primitives/signals';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component'; 
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { OwnerFilteringComponent } from './owner-filtering/owner-filtering.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'index', component: IndexComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'profile-settings', component: ProfileSettingsComponent},
  {path: 'owner-filtering', component: OwnerFilteringComponent}
];
import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabase.url,
      environment.supabase.secret
    );
  }

  async upload(file: File, filename: string, foldername: string){
      const { error } = await this.supabase.storage.from('images').upload(`${foldername}/${filename}`, file);
      if (error) {
        alert(error.message);
        return;
      }
      
      const { data } = await this.supabase.storage.from('images').getPublicUrl(`${foldername}/${filename}`);
      
    return data.publicUrl;
    }

}
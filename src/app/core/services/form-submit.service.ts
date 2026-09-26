import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// FormSubmit.co: no account, no API key — mail just goes to this address
// once it's been confirmed via the one-time link FormSubmit emails on the
// first submission.
const ENDPOINT = 'https://formsubmit.co/ajax/hatemalhushkey@gmail.com';

@Injectable({ providedIn: 'root' })
export class FormSubmitService {
  private readonly http = inject(HttpClient);

  submit(subject: string, data: Record<string, unknown>) {
    return this.http.post(ENDPOINT, { ...data, _subject: subject, _template: 'table' });
  }
}

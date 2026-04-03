// src/app.service.ts:
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `
      <html>
        <body style="display:flex; justify-content:center; align-items:center; height:100vh; margin:0;">
          <h1>¡Hola Mundo!</h1>
        </body>
      </html>
    `;
  }
}
// src/utils/fileReader.ts
import * as fs from 'fs';

export class FileReader {
  readFile(path: string): string {
    return fs.readFileSync(path, 'utf-8');
  }
}

import { join } from 'path';
import { BadRequestException, Injectable } from '@nestjs/common';
import { existsSync } from 'fs';

@Injectable()
export class FilesService {
  
    getStaticProductFile(fileName: string) {
        const path = join(__dirname, '../../static/products', fileName);
        
        if(!existsSync(path)) 
            throw new BadRequestException(`No product found with image ${fileName}`);
        
        return path;
    }
}

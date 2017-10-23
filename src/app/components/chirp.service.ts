import { Injectable } from '@angular/core';

import { Chirp } from './chirp';
import { CHIRPS } from './mock-chirps';

@Injectable()
export class ChirpService {
    getChirps(): Promise<Chirp[]> {
        return Promise.resolve(CHIRPS);
    }
}
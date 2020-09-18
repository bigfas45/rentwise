import {scrypt, randomBytes} from 'crypto'
import {promisify} from 'util'


const scryptAsync = promisify(scrypt)

export class Pin {
    static async toHash(pin : string) {
        const salt = randomBytes(8).toString('hex');
        const buf = (await scryptAsync(pin, salt, 64))as Buffer;

        return `${
            buf.toString('hex')
        }.${salt}`

    }

    static async compare(storedPin : string, suppliedPin : string) {
        const [hashedPin, salt] = storedPin.split('.');
        const buf = (await scryptAsync(suppliedPin, salt, 64))as Buffer;

        return buf.toString('hex') === hashedPin;

    }
}

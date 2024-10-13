import { hashSync, compare } from "bcryptjs";

export function hashPassword(text:string):string{
    return hashSync(text,12)
}

export function comparePassword(hashPassword: string, plainPassword: string): Promise<boolean> {
    return compare(plainPassword, hashPassword);
}
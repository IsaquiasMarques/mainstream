export abstract class StorageEntity {
    protected static getItem(prefix: string): string{
        return localStorage.getItem('mainstream_' + prefix) || '';
    }
    
    protected static setItem(prefix: string, value: string): void{
        window.localStorage.setItem('mainstream_' + prefix, value);
    }

    protected static removeItem(prefix: string): void{
        localStorage.removeItem('mainstream_' + prefix);
    }
}
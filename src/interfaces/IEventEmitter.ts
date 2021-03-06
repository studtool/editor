interface IEventEmitter {
    on (event: string, callback: (data: any) => void): void;
    emit (event: string, data: any): void;
}

export class EventEmitter<T> {

    eventListenerMap:any = {};


    constructor() {
        this.eventListenerMap = {};
    }

    listen(eventName:T,listener){
        if(!this.eventListenerMap[eventName]){
            this.eventListenerMap[eventName] = [];
        }
        this.eventListenerMap[eventName].push(listener);
    }


    emit(eventName:T,data){
        if(!this.eventListenerMap[eventName]){
            return;
        }
        this.eventListenerMap[eventName].forEach((listener)=>{
            listener(data);
        })
    }

}
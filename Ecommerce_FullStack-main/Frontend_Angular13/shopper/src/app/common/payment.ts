export class Payment {
    private _amount?:number;

    public setAmount(amount:number){
        this._amount=amount;
    }
    public getAmount(){
        return this._amount;
    }

    constructor(){
        
    }
}

export class CartProduct {
    private email?:any;
    private productId?:number;
    private productQuantity?:number;
    private totalPrize?:number;
    private productstatus?:string;
    private orderdId?:number;


    public setEmail(email:any){
        this.email=email;
    }
    public getEmail(){
        return this.email;
    }

    public setproductId(productId:number){
        this.productId=productId;
    }
    public getproductId(){
        return this.productId;
    }

    public setproductQuantity(productQuantity:number){
        this.productQuantity=productQuantity;
    }
    public getproductQuantity(){
        return this.productQuantity;
    }

    public settotalPrize(totalPrize:number){
        this.totalPrize=totalPrize;
    }
    public gettotalPrize(){
        return this.totalPrize;
    }

    public setorderdId(orderdId:number){
        this.orderdId=orderdId;
    }
    public getorderdId(){
        return this.orderdId;
    }

    public setproductstatus(productstatus:string){
        this.productstatus=productstatus;
    }
    public getproductstatus(){
        return this.productstatus;
    }


}

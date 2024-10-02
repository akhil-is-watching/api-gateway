import { IsNotEmpty, IsString } from "class-validator"

export class SignedTransactionRequestDTO {

    @IsNotEmpty()
    @IsString()
    payer: string
    
    @IsNotEmpty()
    @IsString()
    signer: string

    @IsNotEmpty()
    @IsString()
    transaction: string
}

export class TransactionCheckDTO {

    @IsNotEmpty()
    @IsString()
    signature: string
}
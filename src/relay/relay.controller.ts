import { Body, Controller, Get, Inject, Post, Query } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { SignedTransactionRequestDTO, TransactionCheckDTO } from "./relay.dto";

@Controller()
export class RelayController {

    constructor(@Inject("NATS_SERVICE") private natsClient: ClientProxy) {}


    @Post("relay")
    async relay(@Body() body: SignedTransactionRequestDTO) {
        return this.natsClient.send({cmd: 'tx.relay'}, body)
    }

    @Get("transaction")
    async getTransaction(@Query("signature") signature: string) {
        console.log(signature)
        const output: TransactionCheckDTO = {
            signature: signature
        }
        return this.natsClient.send({cmd: 'tx.check'}, output)
    }
}
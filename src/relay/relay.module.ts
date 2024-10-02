import { Module } from "@nestjs/common";
import { NatsModule } from "src/nats/nats.module";
import { RelayController } from "./relay.controller";

@Module({
    imports: [ NatsModule ],
    controllers: [ RelayController ],
    providers: [],
})
export class RelayModule { }
import "reflect-metadata";
import { container } from "./container";
import { TYPES } from "./types";
import { ServerInterface } from "./application/http/ServerInterface";

const start = async (): Promise<void> => {
    const server: ServerInterface = container.get<ServerInterface>(TYPES.ServerInterface);
    console.log(server); // TODO Bug ici au niveau de l'injection du Service Server corespondand au ServeurInterface
    return server.startServer();
};

start();

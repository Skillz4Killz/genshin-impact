import type { EventHandlers } from "../../deps.ts";

// This interface is a placeholder that allows you to easily add on custom events for your need.
export interface CustomEvents extends EventHandlers {
messageDelete: (partial: any,message: any) => Promise<void>;
    commandsSent: (message: any) => Promise<void>;
    messageSent: (message: any) => Promise<void>;
    messageEdit: (message: any) => Promise<void>;
}

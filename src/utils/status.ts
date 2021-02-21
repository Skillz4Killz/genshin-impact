// import {
//   ActivityPayload,
//   botGatewayData,
//   GatewayOpcode,
//   sendWS,
//   StatusType,
// } from "../../deps.ts";
// 
// export interface WolfsStatusPayload {
//   status: StatusType;
//   activity: Omit<ActivityPayload, "created_at">;
// }
// 
// export function wolfsStatusFunction(payload: WolfsStatusPayload) {
//   for (let id = 0; id < botGatewayData.shards; id++) {
//     sendWS({
//       op: GatewayOpcode.StatusUpdate,
//       d: {
//         since: null,
//         activities: [payload.activity],
//         status: payload.status,
//         afk: false,
//       },
//     }, id);
//   }
// }
// 
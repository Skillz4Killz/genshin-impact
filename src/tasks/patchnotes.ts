// import { botCache } from "../../deps.ts";
// import { Milliseconds } from "../utils/constants/time.ts";

// botCache.tasks.set("patchnotes", {
//   name: "patchnotes",
//   // interval: 5000,
//   interval: Milliseconds.HOUR,
//   execute: async function () {
//     const result = await fetch("https://genshin.mihoyo.com/en/news/detail/7466", {
//       headers: {
//         "user-agent":
//           "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.120 Safari/537.36",
//       },
//     }).then((res) => res.text());
//     console.log(result.substring(result.indexOf("buttombar")));
//   },
// });

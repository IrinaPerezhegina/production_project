import { lazy } from "react";

export const AboutPageAsync=lazy(()=>new Promise(resolve=>{
    //@ts-ignore
     //нельзя для реальных проектов ignore включать
    setTimeout(() => resolve(import("./AboutPage")),1500)
}))
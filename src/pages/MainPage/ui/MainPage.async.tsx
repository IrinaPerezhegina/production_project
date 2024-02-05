import { lazy } from "react";

export const MainPageAsync=lazy(()=>new Promise(resolve=>{
    //@ts-ignore
    //нельзя для реальных проектов ignore включать
    setTimeout(() => resolve(import("./MainPage")),1500)
}))
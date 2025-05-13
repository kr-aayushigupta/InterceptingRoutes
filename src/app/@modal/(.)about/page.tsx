"use client"

import {useEffect,useRef} from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React from "react";
import Login from "@/app/components/Login";



function page() {

    const router=useRouter();
    const dialogref=useRef<HTMLDialogElement>(null)
    
    useEffect (()=>{
        dialogref.current?.showModal();
    },[])



  return (
    <dialog ref={dialogref} onClose={()=>router.back()} className="m-auto p-4  relative backdrop:bg-slate-300/50 rounded-xl bg-pink-100">

        <button onClick={()=>dialogref.current?.close()}>&times;</button>
        <h2>Login</h2>
        <Login></Login>
    </dialog>
  )
}

export default page
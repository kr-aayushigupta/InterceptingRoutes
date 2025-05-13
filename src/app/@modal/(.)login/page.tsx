"use client";

import React from "react";
import Login from "@/app/components/Login";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

function LoginModal() {
  const router = useRouter();
  const dialogref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    dialogref.current?.showModal();
  }, []);

  return (
          <dialog ref={dialogref} onClose={() => router.back()} className="m-auto p-4  relative backdrop:bg-slate-300/50 rounded-xl bg-pink-100">
        <button onClick={() => dialogref.current?.close()} className="absolute top-2 right-4 text-red-600 hover:cursor-pointer">&times;</button>
        <h1 className="text-3xl text-center text-pink-700 font-bold mb-4">로그인</h1>
        <Login></Login>
    
      </dialog>
    );
}

export default LoginModal;

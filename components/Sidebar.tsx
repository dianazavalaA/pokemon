import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Sidebar = () => {

return (
 <>
     <aside className="w-20 h-screen bg-[#5F4B8B] text-white flex flex-col items-center py-6 gap-10">
        <Link href="/home">
            <Image
                src="/ico.png"
                alt="Icono"
                width={40}
                height={40}
            />
        </Link>
     </aside>
 </>
)

}
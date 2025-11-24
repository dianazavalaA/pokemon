import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      <div>
        <h1 className="text-lg font-semibold text-gray-800">Torres Cataluña</h1>
        <p className="text-sm text-gray-500">Paquete: Lead Scoring</p>
      </div>

    <div className="flex items-center gap-3"> 
      <div>
        <Link href="/mail">
          <Image
            src="/mail.svg"
            alt="IconMail"
            width={40}
            height={40}
          />
        </Link>
      </div>
      
      <div>
        <Link href="/notifications">
          <Image 
            src="/notification.svg"
            alt="IconNotifications"
            width={40}
            height={40}
          />
        </Link>
      </div>

      <div>
        <Link href="/configuration">
          <Image 
            src="/configuration.svg"
            alt="IconConfiguration"
            width={40}
            height={40}
          />
        </Link>
      </div>
  </div>
    </header>
  );
};

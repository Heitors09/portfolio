// biome-ignore assist/source/organizeImports: <explanation>
/** biome-ignore-all lint/a11y/noSvgWithoutTitle: <explanation> */

import { AlertCircle, Heart, Phone, XIcon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const contactInfo = [
  {
    id: 'email',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="sm:w-6 sm:h-6 text-zinc-700"
      >
        <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
      </svg>
    ),
    label: 'heitorao32@gmail.com',
    copyText: 'heitorao32@gmail.com',
  },
  {
    id: 'phone',
    icon: <Phone className="size-5" />,
    label: '+55 85 986598249',
    copyText: '+55 85 986598249',
  },
  {
    id: 'discord',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="sm:w-6 sm:h-6 text-zinc-700"
      >
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    ),
    label: 'kefka_palazzo06',
    copyText: 'kefka_palazzo06',
  },
];

export default function CardHeader() {
  const [activePopover, setActivePopover] = useState(null);

  const handleClick = (id: any) => {
    setActivePopover(activePopover === id ? null : id);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="w-full max-w-[800px] ring-1 ring-[#E3DAE3]  max-sm:overflow-y-auto sm:h-auto mx-auto overflow-hidden rounded-[8px] relative z-10 bg-white/50 backdrop-blur-md p-1 sm:pt-6 shadow-2xl">
      <div className="w-full h-12 bg-zinc-100 absolute border-b border-[#E3DAE3] top-0 left-0 flex items-center justify-end px-4">
        <div className="flex  gap-2">
          <div className="p-1 rounded-md shadow-md bg-white">
            <Heart fill="" className="size-3" />
          </div>
          <div className="p-1 rounded-md shadow-md bg-white">
            <XIcon className="size-3" />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify- max-md:py-12 sm:flex-row w-full mt-4 p-3 sm:p-6 items-center md:items-start gap-4">
        <div className="mt-7 relative sm:mt-0 size-40 rounded-md ring-2 ring-zinc-300 shadow-md overflow-hidden flex-shrink-0">
          <Image
            src="/me.jpeg"
            alt="eu"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col gap-1 text-center sm:text-left">
          <h3 className="font-bold text-zinc-800 font-orbitron text-2xl sm:text-xl">
            Olá! Me chamo Heitor
          </h3>
          <span className="text-sm text-pink-500">
            Front-End Developer | UI/UX
          </span>
          <p className=" text-zinc-500 text-xs max-w-[600px] leading-relaxed font-orbitron">
            Fala, galera! Sou desenvolvedor front-end apaixonado por criar
            interfaces atraentes, responsivas e focadas na melhor experiência do
            usuário.{' '}
            <strong>Tenho experiência prática em desenvolvimento web</strong>.
          </p>
          <div className="flex mt-2 max-sm:justify-center items-center gap-2">
            {contactInfo.map((item) => (
              <div key={item.id} className="relative">
                <button
                  type="button"
                  onClick={() => handleClick(item.id)}
                  className="hover:opacity-80 transition-colors"
                >
                  {item.icon}
                </button>

                {activePopover === item.id && (
                  <>
                    <div
                      className="fixed inset-0 bg-black/20 z-40 sm:hidden"
                      onClick={() => setActivePopover(null)}
                    />

                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 pointer-events-none">
                      <div className="bg-zinc-100 px-4 py-3 rounded-lg border border-zinc-800 shadow-xl min-w-[230px] pointer-events-auto">
                        <div className="flex items-center justify-between gap-3">
                          <p className="font-medium text-sm break-all text-zinc-900">
                            {item.label}
                          </p>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              copyToClipboard(item.copyText);
                            }}
                            className="flex-shrink-0 text-zinc-600 hover:text-zinc-900 transition-colors"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <rect
                                width="14"
                                height="14"
                                x="8"
                                y="8"
                                rx="2"
                                ry="2"
                              />
                              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                        <div className="border-[6px] border-transparent border-t-zinc-800" />
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          <p className="text-xs mt-2 shadow-md  font-semibold items-center gap-2 text-zinc-900 bg-zinc-200 rounded-md flex p-3">
            <AlertCircle className="size-4 hidden sm:block" /> clique nos icones
            para ver as informações de contato.
          </p>
        </div>
      </div>
    </div>
  );
}

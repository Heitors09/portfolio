// biome-ignore assist/source/organizeImports: <explanation>
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Image from 'next/image';
import ProjectLink from '../ProjectLink';

export default function Card() {
  return (
    <div className="w-full max-w-[900px] h-screen max-sm:overflow-y-auto  sm:h-auto mx-auto overflow-hidden rounded-[8px] relative z-10 bg-white/10 backdrop-blur-md p-1 sm:p-6 relative shadow-2xl">
      <div className="w-full h-12 bg-[#2D2D2D] absolute top-0 left-0 flex items-center px-4">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row w-full mt-4 p-3 sm:p-6 items-center gap-4">
        <div className="ring-1 mt-7 sm:mt-0 ring-white/20 w-[80px] h-[80px] sm:w-[99px] sm:h-[99px] rounded-full overflow-hidden flex-shrink-0">
          <Image src="/eu.png" alt="eu" width={100} height={100} />
        </div>
        <div className="flex flex-col gap-1 text-center sm:text-left">
          <h3 className="text-white/90 font-bold font-orbitron text-lg sm:text-xl">
            Olá! Me chamo Heitor
          </h3>
          <p className="text-white/90 text-xs sm:text-sm max-w-[600px] leading-relaxed font-orbitron">
            fala galera! sou dev front-end e minha paixão é codar interfaces
            bonitas que funcionam em qualquer tela. Tenho experiencia prática de
            mais de um ano em desenvolvimento web onde já trabalhei como
            freelancer e em uma empresa de tecnologia.
          </p>
          <div className="flex justify-center sm:justify-start gap-4 mt-2">
            <a
              href="https://github.com/Heitors09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white/90 transition-colors"
            >
              {/** biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="sm:w-6 sm:h-6"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/heitor-alves1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white/90 transition-colors"
            >
              {/** biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="sm:w-6 sm:h-6"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div className="text-white/70 hover:text-white/90 transition-colors">
                    {/** biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="sm:w-6 sm:h-6"
                    >
                      <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
                    </svg>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="bg-zinc-900 px-4 py-3 rounded-lg border border-zinc-800 shadow-xl">
                  <p className="text-white/90 font-medium">
                    heitorao32@gmail.com
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div className="text-white/70 hover:text-white/90 transition-colors">
                    {/** biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="sm:w-6 sm:h-6"
                    >
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                    </svg>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="bg-zinc-900 px-4 py-3 rounded-lg border border-zinc-800 shadow-xl">
                  <p className="text-white/90 font-medium">he_toris</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 px-3 sm:px-6">
        <div>
          <h2 className="font-orbitron text-white/90 text-sm sm:text-base font-bold mb-4 text-center sm:text-left">
            Stack Tecnológica
          </h2>
          <div className="flex flex-wrap justify-center sm:justify-start gap-2">
            <span className="text-white/70 text-xs sm:text-sm font-orbitron border border-white/10 px-2 sm:px-3 py-1 rounded-full hover:text-white/90 transition-colors">
              Javascript
            </span>
            <span className="text-white/70 text-xs sm:text-sm font-orbitron border border-white/10 px-2 sm:px-3 py-1 rounded-full hover:text-white/90 transition-colors">
              React
            </span>
            <span className="text-white/70 text-xs sm:text-sm font-orbitron border border-white/10 px-2 sm:px-3 py-1 rounded-full hover:text-white/90 transition-colors">
              Next.js
            </span>
            <span className="text-white/70 text-xs sm:text-sm font-orbitron border border-white/10 px-2 sm:px-3 py-1 rounded-full hover:text-white/90 transition-colors">
              TypeScript
            </span>
            <span className="text-white/70 text-xs sm:text-sm font-orbitron border border-white/10 px-2 sm:px-3 py-1 rounded-full hover:text-white/90 transition-colors">
              Node.js
            </span>
            <span className="text-white/70 text-xs sm:text-sm font-orbitron border border-white/10 px-2 sm:px-3 py-1 rounded-full hover:text-white/90 transition-colors">
              Prisma
            </span>
            <span className="text-white/70 text-xs sm:text-sm font-orbitron border border-white/10 px-2 sm:px-3 py-1 rounded-full hover:text-white/90 transition-colors">
              Supabase
            </span>
          </div>
        </div>

        <div>
          <h2 className="font-orbitron text-white/90 text-xl sm:text-2xl italic font-bold text-center sm:text-left">
            Principais Projetos :
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-3 sm:px-6 py-4">
        <ProjectLink
          url="https://air-notes-six.vercel.app/"
          image="/airnote.png"
          title="AirNote"
          description="Air Note é uma aplicação web prática que permite criar, organizar suas notas, ajudando você a lembrar de tarefas"
        />
        <ProjectLink
          url="https://csv-to-json-seven.vercel.app/"
          image="/csv-to-json.png"
          title="CSV to JSON"
          description="Plataforma onde você pode converter arquivos CSV para JSON e baixar de forma gratuita"
        />
      </div>
    </div>
  );
}

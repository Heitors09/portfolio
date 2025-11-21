'use client';

import { FolderGit2 } from 'lucide-react';
import Image from 'next/image';
import Linkify from 'react-linkify';

type ProjectType = 'Web Dev' | 'Design' | 'Mobile' | 'Backend';

interface ProjectLinkProps {
  url: string;
  title?: string;
  image?: string;
  description?: string;
  projectType: ProjectType;
}

export default function ProjectLink({
  url,
  title,
  image,
  description,
  projectType,
}: ProjectLinkProps) {
  return (
    <div className="group max-w-[400px] relative">
      <Linkify>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="block gap-3  rounded-lg text-[#252226]  "
        >
          <div className="flex shadow-md bg-gradient-to-br from-zinc-100 to-zinc-200 ring-1 ring-zinc-300 p-2 rounded-md justify-between">
            <h2 className="mr-5 text-zinc-600 gap-2 font-semibold text-sm  flex items-center justify-center rounded-md  ">
              <FolderGit2 className="size-4" /> <p>{title}</p>
            </h2>
            <div
              className={
                'text-white bg-zinc-700 text-xs py-1 px-3 rounded-md font-bold'
              }
            >
              {projectType}
            </div>
          </div>
          <section className="flex my-4 flex-col border-l-2 px-5 border-[#756E78] gap-2">
            <span className="text-xs  text-pink-500">{url}</span>
            <p className="text-sm text-[#756E78]">{description}</p>
          </section>
          {image && (
            <div className="relative overflow-hidden rounded-md mb-3">
              <Image
                src={image}
                alt={title || 'Projeto'}
                width={400}
                height={400}
                className="w-full h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                priority
              />
            </div>
          )}
        </a>
      </Linkify>
    </div>
  );
}

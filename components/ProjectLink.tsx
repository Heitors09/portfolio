'use client';

import Image from 'next/image';
import Linkify from 'react-linkify';

interface ProjectLinkProps {
  url: string;
  title?: string;
  image?: string;
  description?: string;
}

export default function ProjectLink({
  url,
  title,
  image,
  description,
}: ProjectLinkProps) {
  return (
    <div className="group relative">
      <Linkify>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="block  rounded-lg text-[#252226]  "
        >
          {image && (
            <div className="relative overflow-hidden rounded-md mb-3">
              <Image
                src={image}
                alt={title || 'Projeto'}
                width={400}
                height={128}
                className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                priority
              />
            </div>
          )}
          <h3 className="font-orbitron  font-semibold mb-2">
            {title || 'Projeto'}
          </h3>
          <p className=" text-sm text-[#9e94a1] leading-relaxed mb-2">
            {description || 'Descrição do projeto...'}
          </p>
          <span className="text-[#ed55cd] text-xs font-mono">{url}</span>
        </a>
      </Linkify>
    </div>
  );
}

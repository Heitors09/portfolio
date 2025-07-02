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
          className="block p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
        >
          {image && (
            <div className="relative overflow-hidden rounded-lg mb-3">
              <Image
                src={image}
                alt={title || 'Projeto'}
                width={400}
                height={128}
                className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          )}
          <h3 className="font-orbitron font-bold text-white/90 mb-2">
            {title || 'Projeto'}
          </h3>
          <p className="text-white/70 text-sm leading-relaxed mb-2">
            {description || 'Descrição do projeto...'}
          </p>
          <span className="text-pink-400 text-xs font-mono">{url}</span>
        </a>
      </Linkify>
    </div>
  );
}

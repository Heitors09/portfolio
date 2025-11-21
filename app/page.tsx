'use client';

import ProjectLink from '@/components/ProjectLink';
import CardHeader from '@/components/project/Card';
import { Archive, Code2, FolderGit2, Palette } from 'lucide-react';
import { useState } from 'react';

type ProjectType = 'Web Dev' | 'Design' | 'Mobile' | 'Backend';
type ProjectsDataType = {
  url: string;
  title?: string;
  image?: string;
  description?: string;
  projectType: ProjectType;
};

const projectsData = [
  {
    title: 'CSV to JSON',
    description:
      'Converta arquivos CSV em JSON de forma rápida, segura e gratuita!',
    url: 'https://air-notes-six.vercel.app/',
    image: '/csv-to-json.png',
    projectType: 'Web Dev',
  },

  {
    title: 'AirNotes',
    description:
      'Air Note é uma aplicação web prática que permite criar, salvar e organizar suas notas.',
    url: 'https://air-notes-six.vercel.app/',
    image: '/airnote.png',
    projectType: 'Web Dev',
  },
] as ProjectsDataType[];

const availableProjectTypes = [
  { name: 'Todos', icon: <FolderGit2 className="size-4" /> },
  { name: 'Web Dev', icon: <Code2 className="size-4" /> },
  { name: 'Design', icon: <Palette className="size-4" /> },
];

export default function Home() {
  const [valueToFilter, setValueToFilter] = useState('Todos');
  const handleFilterProjectValue = (value: string) => {
    if (value === 'Todos') {
      return projectsData;
    }

    const filteredProjectsDataValue = projectsData.filter(
      (projects) => projects.projectType === value
    );

    return filteredProjectsDataValue;
  };

  const projectDataFilteredValue = handleFilterProjectValue(valueToFilter);

  const getButtonStyle = (name: string, isActive: boolean) => {
    if (!isActive) {
      return 'bg-zinc-200 text-zinc-800 hover:bg-zinc-300';
    }

    switch (name) {
      case 'Design':
        return 'bg-zinc-700 text-white';
      case 'Web Dev':
        return 'bg-zinc-700 text-white';
      case 'Todos':
        return 'bg-zinc-700 text-white';
      default:
        return 'bg-zinc-700 text-white';
    }
  };

  return (
    <div className="bg-[#F0EAF0] w-full   sm:pt-24 h-screen">
      <CardHeader />
      <div className="max-w-[800px] max-h-[600px] bg-white rounded-md shadow-md my-12  p-6 flex flex-col gap-6 mx-auto">
        <h2 className="flex items-center text-xl font-bold gap-2 ">
          <Archive className="size-5" /> Projetos
        </h2>
        <div className="flex items-center text-sm gap-3 w-full">
          {availableProjectTypes.map((availableProjects) => (
            <button
              onClick={() => setValueToFilter(availableProjects.name)}
              key={availableProjects.name}
              disabled={availableProjects.name === 'Design'}
              type="button"
              className={`font-bold disabled:opacity-50 rounded-md flex py-1 px-2 items-center gap-2 transition-all ${getButtonStyle(
                availableProjects.name,
                valueToFilter === availableProjects.name
              )}`}
            >
              {availableProjects.icon}
              {availableProjects.name}
            </button>
          ))}
        </div>
        <div className="w-full grid grid-cols-2 max-h-[600px] overflow-y-scroll gap-3 ">
          {projectDataFilteredValue.map((project, index) => (
            <ProjectLink
              key={`${project.title}-${index}`}
              title={project.title}
              projectType={project.projectType}
              url={project.url}
              description={project.description}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

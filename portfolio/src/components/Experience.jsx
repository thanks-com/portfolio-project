import React from "react";
import { Code2, Activity, Cpu, Layers, Network, Binary } from "lucide-react";

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  icon: Icon,
}) => (
  <div className="group relative overflow-hidden">
    {/* Hexagon background pattern */}
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGwyMCAxMGwtMjAgMTB6IiBmaWxsPSIjMkQ0MjU2IiBmaWxsLW9wYWNpdHk9IjAuMiIvPjwvc3ZnPg==')] opacity-20" />

    {/* Glowing border */}
    <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 blur transition-all duration-500" />

    <div className="relative bg-gray-900 rounded-lg p-6 h-full border border-gray-800 shadow-lg transform group-hover:scale-105 transition-all duration-500 ease-in-out">
      {/* Neon line accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

      {/* Icon with glow effect */}
      <div className="relative mb-4">
        <div className="absolute -inset-2" />
        <Icon className="w-10 h-10 text-blue-400 relative z-10" />
      </div>

      {/* Content */}
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        <div className="text-gray-400 flex justify-between items-center">
          <span className="text-blue-400">{company}</span>
          <span className="text-sm font-mono">{period}</span>
        </div>
        <p className="text-gray-300 border-l-2 border-blue-500 pl-4 mt-4">
          {description}
        </p>
      </div>

      {/* Animated corner accents */}
      <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-0 right-0 w-4 h-[2px] bg-cyan-500" />
        <div className="absolute top-0 right-0 w-[2px] h-4 bg-cyan-500" />
      </div>
      <div className="absolute bottom-0 left-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute bottom-0 left-0 w-4 h-[2px] bg-purple-500" />
        <div className="absolute bottom-0 left-0 w-[2px] h-4 bg-purple-500" />
      </div>
    </div>
  </div>
);

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Network,
      title: "Website Developer",
      company: "Peopleperhour",
      period: "2013 - 2024",
      description:
        "Worked on developing and customizing websites for clients globally.",
    },
    {
      icon: Layers,
      title: "Full Stack Developer",
      company: "Programmer",
      period: "2022 - 2025",
      description:
        "Assisted in building and optimizing user interfaces with a focus on responsive and interactive designs.",
    },
    {
      icon: Code2,
      title: "JavaScript Developer",
      company: "Create Task magament app",
      period: "2023 - Present",
      description:
        "Contributed to developing JavaScript Task management app and enhancing functionalities.",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-900 relative overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMkQ0MjU2IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10" />

        {/* Content container */}
        <div className="relative container mx-auto px-4 py-24">
          {/* Section header with cyber effect */}
          <div className="flex flex-col items-center space-y-6 mb-16">
            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-500 bg-clip-text">
                Professional Journey
              </h2>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-400/30 to-indigo-400/30 blur-xl rounded-xl" />
            </div>
            <p className="text-sm md:text-lg text-gray-400 font-medium italic tracking-wide">
              "Crafting stories, one milestone at a time..."
            </p>
            <div className="animate-pulse mt-4 w-6 h-6 border-4 border-dashed border-cyan-400 rounded-full" />
          </div>

          {/* Experience grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>

        {/* Glowing orbs background effect */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse delay-700" />
      </div>
    </>
  );
};

export default ExperienceSection;

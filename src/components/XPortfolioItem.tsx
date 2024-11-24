import { PortfolioItem } from "@/types/types";
import { ExternalLink, Github } from "lucide-react";

interface XPortfolioItemProps {
  portfolioItem: PortfolioItem;
}

const XPortfolioItem = ({ portfolioItem }: XPortfolioItemProps) => {
  const { title, description, githubLink, deploymentLink } = portfolioItem;
  return (
    <div className="border-[0.5px] border-gray-200 p-2 rounded-lg shadow-lg flex flex-col space-y-4 transition-colors hover:bg-red-800 hover:text-white">
      <a
        href={deploymentLink}
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold text-lg"
      >
        {title}
      </a>
      <a href={deploymentLink} target="_blank" rel="noopener noreferrer" className="text-xs">
        {description}
      </a>
      <div className="flex justify-between">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 border-[0.5px] border-gray-200 p-2 rounded-xl"
        >
          <p className="text-sm">Repo</p>
          <Github className="h-4 w-4" />
        </a>
        <a
          href={deploymentLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 border-[0.5px] border-gray-200 p-2 rounded-xl"
        >
          <p className="text-sm">Site</p>
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default XPortfolioItem;

import { PortfolioItem } from "@/types/types";
import { ExternalLink, Github } from "lucide-react";

interface XPortfolioItemProps {
  portfolioItem: PortfolioItem;
}

const XPortfolioItem = ({ portfolioItem }: XPortfolioItemProps) => {
  const { title, description, githubLink, deploymentLink } = portfolioItem;
  return (
    <div className="border-[0.5px] border-gray-200 p-2 rounded-lg shadow:lg flex flex-col space-y-2">
      <div className="h-20 w-full bg-gray-200">Thumbnail</div>
      <div className="font-bold text-lg">{title}</div>
      <div className="text-gray-600 text-xs">{description}</div>
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

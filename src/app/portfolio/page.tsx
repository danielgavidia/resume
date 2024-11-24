import XPortfolioItem from "@/components/XPortfolioItem";
import { portfolioData } from "@/lib/portfolioData";

const Page = () => {
  return (
    <div className="p-4 flex flex-col space-y-2">
      {portfolioData.map((item, key) => (
        <XPortfolioItem key={key} portfolioItem={item} />
      ))}
    </div>
  );
};

export default Page;

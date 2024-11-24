import XPortfolioItem from "@/components/XPortfolioItem";
import { portfolioData } from "@/lib/portfolioData";

const Page = () => {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {portfolioData.map((item, key) => (
        <XPortfolioItem key={key} portfolioItem={item} />
      ))}
    </div>
  );
};

export default Page;

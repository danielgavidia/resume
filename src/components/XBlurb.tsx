import React from "react";

const XBlurb = () => {
  return (
    <div className="flex flex-col space-y-2">
      <div>Fullstack engineer.</div>
      <div>
        Unique experience combining 1) software engineering at{" "}
        <a href="https://esai.ai" target="_blank" rel="noopener noreferrer" className="underline">
          ESAI
        </a>{" "}
        and{" "}
        <a
          href="https://www.marshmclennan.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Marsh McLennan
        </a>
        , 2) a Duke MBA (full-ride merit scholarship), and 3) classroom leadership (Teach for
        America).
      </div>
      <div>
        At ESAI, I've led major infrastructure projects including AWS migration, analytics
        architecture, and full-stack feature development. Previously built and deployed production
        apps with NYC startups:{" "}
        <a
          href="https://docs.mixpeek.com/overview/introduction"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Mixpeek
        </a>{" "}
        (multimodal AI RAG),{" "}
        <a
          href="https://getseam.xyz/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Seam
        </a>{" "}
        (social platform), and{" "}
        <a
          href="http://www.openbook.nyc/#/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Open Book Club
        </a>{" "}
        (e-commerce).
      </div>
      <div>Specialized in modern full-stack development with:</div>
      <ul className="list-disc pl-10">
        <li>Frontend: Next.js, React, Tailwind, Zustand</li>
        <li>Backend: Node, Express, FastAPI, Django, Docker</li>
        <li>Data & Analytics: Tableau, Google Analytics, Grafana Loki</li>
        <li>Infrastructure: AWS (EC2/RDS/Secrets Manager), Github Actions</li>
        <li>Databases: PostgreSQL, Redis, Prisma</li>
        <li>APIs: OpenAI, Stripe, Klaviyo, Twilio</li>
      </ul>
      <div>
        I love taking applications from 0 to 1, driving growth through technical innovation, and
        building impactful products.
      </div>
    </div>
  );
};

export default XBlurb;

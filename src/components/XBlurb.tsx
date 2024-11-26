import React from "react";

const XBlurb = () => {
  return (
    <div className="flex flex-col space-y-2">
      <div>Fullstack engineer.</div>
      <div>
        Unique experience combining 1) backend engineering + corporate finance at a Fortune 200
        (Marsh McLennan), 2) a Duke MBA (full-ride merit scholarship), and 3) classroom leadership
        (Teach for America).
      </div>
      <div>Specialized in all the tools necessary for building production-grade applications:</div>
      <ul className="list-disc pl-10">
        <li>Fullstack frameworks: Next, Django</li>
        <li>Backend engineering in both TS and Python: Node, Express, FastAPI, Dagster</li>
        <li>Databases: Prisma, Redis, SQL</li>
        <li>Auth: Firebase, Clerk, PropelAuth</li>
        <li>Deployment: VPS, AWS EC2/S3, Github Actions, Vercel, Docker</li>
        <li>Testing: Vitest, Storybook, Postman</li>
        <li>APIs: Stripe, OpenAI, Twilio</li>
      </ul>
      <div>
        I have a track record of deploying to production with NYC startups: Open Book Club
        (e-commerce), Seam (social platform).
      </div>
      <div>In short, if you want something built, I can do it.</div>
      <div>
        Seeking to join an early-stage startup to build impactful products and drive growth.
      </div>
    </div>
  );
};

export default XBlurb;

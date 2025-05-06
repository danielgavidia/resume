import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const Page = () => {
  return (
    <Card className="max-w-4xl mx-auto p-6 sm:p-8 print:shadow-none border-none">
      <CardContent className="p-0 space-y-3">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">DANIEL GAVIDIA</h1>
          <div className="text-muted-foreground flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm">
            <span className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              dgavidia1@gmail.com
            </span>
            <span className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              +1 (786) 383-7175
            </span>
            <span className="flex items-center gap-1 underline">
              <Github className="h-4 w-4" />
              <a href="https://github.com/danielgavidia" target="_blank" rel="noopener noreferrer">
                github.com/danielgavidia
              </a>
            </span>
            <span className="flex items-center gap-1 underline">
              <Linkedin className="h-4 w-4" />
              <a
                href="https://www.linkedin.com/in/danielgavidia1"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/danielgavidia1
              </a>
            </span>
          </div>
        </div>

        <Separator />

        {/* Experience Section */}
        <section>
          <h2 className="text-xl font-bold mb-2">EXPERIENCE</h2>
          <div className="space-y-3">
            {/* ESA */}
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start">
                <h3 className="font-bold">ESAI | Software Engineer</h3>
                <span className="text-muted-foreground text-sm">2025 - Present</span>
              </div>
              <ul className="list-disc ml-5 mt-1 text-muted-foreground text-sm">
                <li>
                  Led migration to AWS (EC2/RDS/Secrets Manager) and optimized CI/CD pipeline while
                  consolidating dual backends, eliminating 4K+ lines of tech debt
                </li>
                <li>
                  Architected company&apos;s analytics infrastructure with Tableau dashboards,
                  AI-powered data scrapers, and Google Analytics/Stripe integration
                </li>
                <li>
                  Developed key full-stack features including dynamic filtering system, Klaviyo
                  integrations, mobile UI revamps, and enterprise logging with Grafana Loki
                </li>
              </ul>
            </div>

            {/* Fractal Tech */}
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start">
                <h3 className="font-bold">FRACTAL TECH | Software Engineer</h3>
                <span className="text-muted-foreground text-sm">2024</span>
              </div>
              <ul className="list-disc ml-5 mt-1 text-muted-foreground text-sm">
                <li>
                  Built and deployed 10 fullstack apps with 1300+ commits and 350+ pull requests
                </li>
                <li>
                  <div className="mb-2">Deployed to production with NYC startups:</div>
                  <ul>
                    <li>
                      <span className="font-semibold">
                        -{" "}
                        <a
                          href="https://studio.mixpeek.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline"
                        >
                          Mixpeek
                        </a>{" "}
                        (multimodal AI RAG):{" "}
                      </span>
                      Built user dashboard with multimodal AI RAG functionality
                    </li>
                    <li>
                      <span className="font-semibold">
                        -{" "}
                        <a
                          href="https://getseam.xyz/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline"
                        >
                          Seam
                        </a>{" "}
                        (social platform):{" "}
                      </span>
                      Built React meme generator app for mobile; deployed on App Store
                    </li>
                    <li>
                      <span className="font-semibold">
                        -{" "}
                        <a
                          href="http://www.openbook.nyc/#/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline"
                        >
                          Open Book Club
                        </a>{" "}
                        (e-commerce):{" "}
                      </span>
                      Built Twilio customer notification system; deployed on AWS EC2 crontab
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Marsh McLennan */}
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start">
                <h3 className="font-bold">MARSH MCLENNAN | Backend Engineer + Finance Associate</h3>
                <span className="text-muted-foreground text-sm">2022 - 2024</span>
              </div>
              <ul className="list-disc ml-5 mt-1 text-muted-foreground text-sm">
                <li>
                  Built enterprise data pipeline infrastructure using Docker, Dagster, and Azure
                  Blob API, automating workflows for CIS Innovation team
                </li>
                <li>
                  Developed Python automation suite for web application KPIs and product line
                  analytics, powering leadership reporting dashboards
                </li>
                <li>
                  Led implementations for ML-based renewal modeling and variance tagging automation
                  systems
                </li>
              </ul>
            </div>

            {/* Teach for America */}
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start">
                <h3 className="font-bold">TEACH FOR AMERICA | Educator</h3>
                <span className="text-muted-foreground text-sm">2017 - 2020</span>
              </div>
              <ul className="list-disc ml-5 mt-1 text-muted-foreground text-sm">
                <li>
                  Taught English/History to 300+ HS students; led college preparation program
                  resulting in 65+ successful college placements including two full-ride
                  scholarships
                </li>
              </ul>
            </div>
          </div>
        </section>

        <Separator />

        {/* Tech Stack Section */}
        <section>
          <h2 className="text-xl font-bold mb-2">TECH STACK</h2>
          <div className="text-muted-foreground text-sm">
            <p>
              <span className="font-semibold">Frontend:</span> React, Next.js, Tailwind CSS,
              Zustand, Shadcn, Vite, DaisyUI, Strapi
            </p>
            <p>
              <span className="font-semibold">Backend:</span> Node.js, Express, FastAPI, Bun,
              Docker, Django, Dagster, Bash, Crontab, Puppeteer, Nginx
            </p>
            <p>
              <span className="font-semibold">Database & Auth:</span> Redis, PostgreSQL, Prisma,
              Supabase, Neon, Firebase, Clerk, PropelAuth, AWS RDS, AWS Secrets Manager
            </p>
            <p>
              <span className="font-semibold">Deployment:</span> Hostinger VPS, Render, Railway,
              Vercel, AWS EC2/S3, Github Actions, Nginx
            </p>
            <p>
              <span className="font-semibold">Testing & APIs:</span> Vitest, Storybook, Postman,
              Stripe, Twilio, OpenAI, Klaviyo, Shopify GraphQL, Discord, Github API
            </p>
            <p>
              <span className="font-semibold">Monitoring & Analytics:</span> Grafana Loki, Tableau,
              Google Analytics, Mixpanel, PowerBI, QlikSense
            </p>
          </div>
        </section>

        <Separator />

        {/* Education Section */}
        <section>
          <h2 className="text-xl font-bold mb-2">EDUCATION</h2>
          <div className="space-y-1 text-sm">
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start">
                <h3 className="font-bold">MBA | Duke University</h3>
                <span className="text-muted-foreground">2020-2022</span>
              </div>
              <p className="ml-2 mt-1 text-muted-foreground">
                Full-tuition merit scholarship; Finance Club cabinet; interned with CloudFactory
                (presented to C-suite)
              </p>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start">
                <h3 className="font-bold">BA | University of Southern California</h3>
                <span className="text-muted-foreground">2013 - 2017</span>
              </div>
              <p className="ml-2 mt-1 text-muted-foreground">
                Full-tuition merit scholarship; created and produced{" "}
                <a
                  href="https://trojanvision.usc.edu/shows/sound-stage/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  <strong>Soundstage</strong>
                </a>{" "}
                (live-music TV show that runs to this day)
              </p>
            </div>
          </div>
        </section>
      </CardContent>
    </Card>
  );
};

export default Page;

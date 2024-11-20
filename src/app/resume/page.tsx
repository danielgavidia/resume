import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, Github } from "lucide-react";

export default function Component() {
  return (
    <Card className="max-w-4xl mx-auto p-8 print:shadow-none border-none">
      <CardContent className="p-0 space-y-3">
        {/* Header */}
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-bold tracking-tight">DANIEL GAVIDIA</h1>
          <p className="text-muted-foreground flex items-center justify-center gap-4">
            <span className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              dgavidia1@gmail.com
            </span>
            <span className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              (786) 383-7175
            </span>
            <span className="flex items-center gap-1">
              <Github className="h-4 w-4" />
              github.com/danielgavidia
            </span>
          </p>
        </div>

        {/* Experience Section */}
        <section>
          <h2 className="text-xl font-bold mb-2">EXPERIENCE</h2>
          <div className="space-y-4">
            {/* Fractal Tech */}
            <div>
              <div className="flex justify-between items-start">
                <h3 className="font-bold">FRACTAL TECH | Software Engineer</h3>
                <span className="text-muted-foreground">2024</span>
              </div>
              <ul className="list-disc ml-5 mt-1 text-muted-foreground text-sm">
                <li>
                  Built and deployed 10 fullstack apps with 1300+ commits and 350+ pull requests
                </li>
                <li>
                  Key projects: Fringe (Hinge/LinkedIn hybrid), Snack Safari (e-commerce), Gavidia
                  Enterprise (Jira-style)
                </li>
                <li>
                  Deployed to production with 4 startups: Mixpeek (CV API), Sitepass (IoT security),
                  Seam (social platform), and Open Book Club (e-commerce)
                </li>
              </ul>
            </div>

            {/* Marsh McLennan */}
            <div>
              <div className="flex justify-between items-start">
                <h3 className="font-bold">MARSH MCLENNAN</h3>
                <span className="text-muted-foreground">2021 - 2024</span>
              </div>
              <div className="mt-2 space-y-4">
                <div>
                  <h4 className="font-semibold">Backend Engineer (2022-2024)</h4>
                  <ul className="list-disc ml-5 mt-1 text-muted-foreground text-sm">
                    <li>
                      Developed containerized tools for CIS Innovation: Anaplan API, Azure Blob API,
                      and Dagster automated workflows
                    </li>
                    <li>
                      Led PowerBI dashboard implementation for Finance Command Center, serving 50+
                      colleagues in managing 3000+ accounts
                    </li>
                    <li>
                      Automated consolidation of Marsh product line data using Python for weekly
                      leadership reports
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Finance Associate (2021-2024)</h4>
                  <ul className="list-disc ml-5 mt-1 text-muted-foreground text-sm">
                    <li>
                      Led strategic projects in variance tagging automation, ML renewal modeling,
                      and ARCS reconciliation
                    </li>
                    <li>
                      Managed US & Canada FP&A core processes including forecasting and budgeting
                    </li>
                    <li>
                      Created system tracking $400M+ in net benefits across 20+ internal projects;
                      presented to C-suite leadership
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Teach for America */}
            <div>
              <div className="flex justify-between items-start">
                <h3 className="font-bold">TEACH FOR AMERICA | Educator</h3>
                <span className="text-muted-foreground">2017 - 2020</span>
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
          <div className="space-y-1 text-muted-foreground text-sm">
            <p>
              <span className="font-semibold">Frontend:</span> React, Tailwind CSS, Zustand, Shadcn,
              Vite, DaisyUI
            </p>
            <p>
              <span className="font-semibold">Backend:</span> Node.js, Express, FastAPI, Bun,
              Docker, Dagster, Bash, Crontab, Puppetteer
            </p>
            <p>
              <span className="font-semibold">Fullstack & Auth:</span> Next.js, Django, Firebase,
              Clerk, PropelAuth
            </p>
            <p>
              <span className="font-semibold">Database:</span> Redis, PostgreSQL, Prisma, Supabase,
              Neon
            </p>
            <p>
              <span className="font-semibold">Deployment:</span> Hostinger VPS, Render, Railway,
              Vercel, AWS EC2/S3, Github Actions, Nginx
            </p>
            <p>
              <span className="font-semibold">APIs:</span> Stripe, Twilio, OpenAI, Shopify GraphQL
            </p>
            <p>
              <span className="font-semibold">Testing:</span> Vitest, Storybook, Postman
            </p>
            <p>
              <span className="font-semibold">Business Intelligence:</span> PowerBI, QlikSense,
              Oracle Hyperion, Anaplan, Dremio
            </p>
          </div>
        </section>

        <Separator />

        {/* Education Section */}
        <section>
          <h2 className="text-xl font-bold mb-2">EDUCATION</h2>
          <div className="space-y-2 text-sm">
            <div>
              <div className="flex justify-between items-start">
                <h3 className="font-bold">MBA | Duke University, Fuqua School of Business</h3>
                <span className="text-muted-foreground">2020-2022</span>
              </div>
              <p className="ml-5 mt-1 text-muted-foreground">
                Full-tuition merit scholarship recipient; Finance Club cabinet
              </p>
            </div>
            <div>
              <div className="flex justify-between items-start">
                <h3 className="font-bold">BA | University of Southern California</h3>
                <span className="text-muted-foreground">2013 - 2017</span>
              </div>
              <p className="ml-5 mt-1 text-muted-foreground">
                Full-tuition merit scholarship recipient
              </p>
            </div>
          </div>
        </section>
      </CardContent>
    </Card>
  );
}

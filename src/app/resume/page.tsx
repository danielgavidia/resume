import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Component() {
  return (
    <Card className="max-w-4xl mx-auto p-8 print:shadow-none">
      <CardContent className="p-0 space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">DANIEL GAVIDIA</h1>
          <p className="text-muted-foreground">
            dgavidia1@gmail.com · (786) 383-7175 · github.com/danielgavidia
          </p>
        </div>

        {/* Experience Section */}
        <section>
          <h2 className="text-xl font-bold mb-4">EXPERIENCE</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-start">
                <h3 className="font-bold">SOFTWARE ENGINEER | Fractal Tech</h3>
                <span className="text-muted-foreground">2024</span>
              </div>
              <ul className="list-disc ml-5 mt-2 text-muted-foreground">
                <li>
                  Built and deployed 20 fullstack apps with 1300+ commits and 350+ pull requests
                </li>
                <li>
                  Key projects: Fringe (Hinge/LinkedIn hybrid), Snack Safari (e-commerce), Gavidia
                  Enterprise (Jira-style)
                </li>
                <li>Completed externships with Seam, Open Book Club, Mixpeek, and Sitepass</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start">
                <h3 className="font-bold">MARSH MCLENNAN</h3>
                <span className="text-muted-foreground">2021 - 2024</span>
              </div>
              <div className="mt-2 space-y-4">
                <div>
                  <h4 className="font-semibold">Backend Engineer (2022-2024)</h4>
                  <ul className="list-disc ml-5 mt-1 text-muted-foreground">
                    <li>
                      Developed containerized tools for CIS Innovation: Anaplan API, Azure Blob API,
                      and Dagster automated schedulers
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
                  <h4 className="font-semibold">Finance Associate (2021-2022)</h4>
                  <ul className="list-disc ml-5 mt-1 text-muted-foreground">
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

            <div>
              <div className="flex justify-between items-start">
                <h3 className="font-bold">TEACH FOR AMERICA | Miami, FL</h3>
                <span className="text-muted-foreground">2017 - 2020</span>
              </div>
              <ul className="list-disc ml-5 mt-2 text-muted-foreground">
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
          <h2 className="text-xl font-bold mb-4">TECH STACK</h2>
          <div className="space-y-2 text-muted-foreground">
            <p>
              <span className="font-semibold">Frontend:</span> React, Tailwind CSS, Shadcn, Vite
            </p>
            <p>
              <span className="font-semibold">Backend:</span> Node.js, Express, Python, FastAPI,
              Bun, Docker, Dagster
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
              Vercel, AWS EC2/S3
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
          <h2 className="text-xl font-bold mb-4">EDUCATION</h2>
          <div className="space-y-4">
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

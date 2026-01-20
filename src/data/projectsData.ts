export type Project = {
  title: string;
  description: string;
  link: string;
  tags: string[];
};

export const defaultProjects: Project[] = [
  {
    title: "Email Validator",
    description: "A tool to validate email addresses for correctness and deliverability.",
    link: "https://github.com/nischitshr/csv_email_validator_nestjs_backend",
    tags: ["React", "CSS","TypeScript", "NestJs"],
  },
  {
    title: "BlogAPI",
    description: "A RESTful API for managing blog posts and comments.",
    link: "https://github.com/nischitshr/BlogAPI",
    tags: ["Django", "Python", "REST"],
  },
  {
    title: "Grievance System",
    description: "A web application backend for submitting and tracking grievances within an organization",
    link: "https://github.com/nischitshr/NI-Grievance-System",
    tags: ["Typescript", "NodeJs"],
  },
];

export const projectsData: Project[] = [
  ...defaultProjects,
];

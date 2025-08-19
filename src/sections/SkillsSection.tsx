import ScrollAnimation from "../components/ScrollAnimation";

// Imports same as before
import NodeIcon from "../assets/tech-icons/runtime/Node.js.svg";
import NestIcon from "../assets/tech-icons/runtime/Nest.js.svg";
import BunIcon from "../assets/tech-icons/runtime/Bun.svg";
import TypeScriptIcon from "../assets/tech-icons/lang/TypeScript.svg";
import PythonIcon from "../assets/tech-icons/lang/Python.svg";
import ClojureIcon from "../assets/tech-icons/lang/Clojure.svg";
import PostgresIcon from "../assets/tech-icons/dbs/PostgresSQL.svg";
import MongoIcon from "../assets/tech-icons/dbs/MongoDB.svg";
import MySQLIcon from "../assets/tech-icons/dbs/MySQL.svg";
import AWSIcon from "../assets/tech-icons/infra/AWS.svg";
import AzureIcon from "../assets/tech-icons/infra/Azure.svg";
import GoogleCloudIcon from "../assets/tech-icons/infra/Google Cloud.svg";
import DockerIcon from "../assets/tech-icons/infra/Docker.svg";
import KubernetesIcon from "../assets/tech-icons/infra/Kubernetes.svg";
import TerraformIcon from "../assets/tech-icons/infra/Terraform.svg";
import GitHubIcon from "../assets/tech-icons/code-eco/GitHub.svg";
import AzureDevOpsIcon from "../assets/tech-icons/code-eco/Azure Devops.svg";
import PostmanIcon from "../assets/tech-icons/tools/Postman.svg";
import RabbitMQIcon from "../assets/tech-icons/tools/RabbitMQ.svg";
import ElasticSearchIcon from "../assets/tech-icons/tools/Elastic Search.svg";
import FigmaIcon from "../assets/tech-icons/tools/Figma.svg";
import GrafanaIcon from "../assets/tech-icons/tools/Grafana.svg";

// Category arrays
const row1 = [
  {
    category: "Runtime",
    items: [
      { name: "Node.js", icon: NodeIcon },
      { name: "Nest.js", icon: NestIcon },
      { name: "Bun", icon: BunIcon },
    ],
  },
  {
    category: "Languages",
    items: [
      { name: "TypeScript", icon: TypeScriptIcon },
      { name: "Python", icon: PythonIcon },
      { name: "Clojure", icon: ClojureIcon },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgresSQL", icon: PostgresIcon },
      { name: "MongoDB", icon: MongoIcon },
      { name: "MySQL", icon: MySQLIcon },
    ],
  },
];

const row2 = [
  {
    category: "Infrastructure",
    items: [
      { name: "AWS", icon: AWSIcon },
      { name: "Azure", icon: AzureIcon },
      { name: "Google Cloud", icon: GoogleCloudIcon },
      { name: "Docker", icon: DockerIcon },
      { name: "Kubernetes", icon: KubernetesIcon },
      { name: "Terraform", icon: TerraformIcon },
    ],
  },
  {
    category: "Code & Version Control",
    items: [
      { name: "GitHub", icon: GitHubIcon },
      { name: "Azure DevOps", icon: AzureDevOpsIcon },
    ],
  },
];

const row3 = [
  {
    category: "Tools",
    items: [
      { name: "Postman", icon: PostmanIcon },
      { name: "RabbitMQ", icon: RabbitMQIcon },
      { name: "Elastic Search", icon: ElasticSearchIcon },
      { name: "Figma", icon: FigmaIcon },
      { name: "Grafana", icon: GrafanaIcon },
    ],
  },
];

const SkillsSection = () => {
  const renderRow = (row: typeof row1) => (
    <div className="flex flex-wrap justify-center gap-12 mb-12">
      {row.map((category, index) => (
        <div key={index} className="text-center">
          <h3 className="text-2xl font-semibold text-white mb-4">
            {category.category}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {category.items.map((tech, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-3 flex items-center justify-center border border-white/20 hover:scale-110 transition-transform duration-300"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-10 h-10 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <ScrollAnimation
      id="tech-stack"
      className="min-h-screen flex flex-col items-center justify-center px-8 py-20"
    >
      <div className="max-w-7xl w-full text-center">
        <h2 className="text-6xl font-bold text-white mb-16 font-heebo">
          Tech Stack
        </h2>

        {renderRow(row1)}
        {renderRow(row2)}
        {renderRow(row3)}
      </div>
    </ScrollAnimation>
  );
};

export default SkillsSection;

"use client";

import { Icons } from "@/components/icons";
import { Colors } from "@/components/colors";

export const Technologies = () => {
  const allTechnologies = [
    {
      label: "reactJS",
      color: Colors.reactjs,
      icon: Icons.reactjs,
    },
    {
      label: "nextJS",
      color: Colors.nextjs,
      icon: Icons.nextjs,
    },
    {
      label: "typeScript",
      color: Colors.typescript,
      icon: Icons.typescript,
    },
    {
      label: "python",
      color: Colors.python,
      icon: Icons.python,
    },
    {
      label: "pyTorch",
      color: Colors.pytorch,
      icon: Icons.pytorch,
    },
    {
      label: "pyTorchLightning",
      color: Colors.pytorchlightning,
      icon: Icons.pytorchlightning,
    },
    {
      label: "scikitLearn",
      color: Colors.scikitlearn,
      icon: Icons.scikitlearn,
    },
    {
      label: "pandas",
      color: Colors.pandas,
      icon: Icons.pandas,
    },
    {
      label: "Jupyter",
      color: Colors.jupyter,
      icon: Icons.jupyter,
    },
    {
      label: "Terraform",
      color: Colors.terraform,
      icon: Icons.terraform,
    },
  ];

  return (
    <div className="grid grid-cols-6">
      {allTechnologies.map((tech) => (
        <div
          key={tech.label}
          className={`w-full col-span-1 flex justify-center items-center p-2 w-18 h-18 text-[${tech.color}]`}
        >
          <tech.icon height={48} width={48} />
        </div>
      ))}
    </div>
  );
};

export default Technologies;

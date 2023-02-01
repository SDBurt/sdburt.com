"use client";

import { Icons } from "@/components/icons";
import { Colors } from "@/components/colors";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const Technologies = () => {
  const defaultStyle =
    "w-full col-span-1 flex flex-col justify-center items-center m-2 p-2 w-18 h-18 rounded ";

  const allTechnologies = [
    {
      label: "ReactJS",
      color: Colors.reactjs,
      icon: Icons.reactjs,
      class: cn(defaultStyle, `hover:bg-neutral-900 hover:text-[#61dafb]`),
      href: "https://reactjs.org/",
    },
    {
      label: "NextJS",
      color: Colors.nextjs,
      icon: Icons.nextjs,
      class: cn(defaultStyle, `hover:bg-neutral-900 hover:text-[#000000]`),
      href: "https://nextjs.org/",
    },
    {
      label: "TypeScript",
      color: Colors.typescript,
      icon: Icons.typescript,
      class: cn(defaultStyle, `hover:bg-neutral-900 hover:text-[#3178c6]`),
      href: "https://www.typescriptlang.org/",
    },
    {
      label: "Python",
      color: Colors.python,
      icon: Icons.python,
      class: cn(defaultStyle, `hover:bg-neutral-900 hover:text-[#3776ab]`),
      href: "https://www.python.org/",
    },
    {
      label: "PyTorch",
      color: Colors.pytorch,
      icon: Icons.pytorch,
      class: cn(defaultStyle, `hover:bg-neutral-900 hover:text-[#ee4c2c]`),
      href: "https://pytorch.org/",
    },
    {
      label: "PyTorch Lightning",
      color: Colors.pytorchlightning,
      icon: Icons.pytorchlightning,
      class: cn(defaultStyle, `hover:bg-neutral-900 hover:text-[#792ee5]`),
      href: "https://www.pytorchlightning.ai/",
    },
    {
      label: "Scikit-learn",
      color: Colors.scikitlearn,
      icon: Icons.scikitlearn,
      class: cn(defaultStyle, `hover:bg-neutral-900 hover:text-[#f7931e]`),
      href: "https://scikit-learn.org/stable/index.html",
    },
    {
      label: "Pandas",
      color: Colors.pandas,
      icon: Icons.pandas,
      class: cn(defaultStyle, `hover:bg-neutral-900 hover:text-[#150458]`),
      href: "https://pandas.pydata.org/",
    },
    {
      label: "Jupyter",
      color: Colors.jupyter,
      icon: Icons.jupyter,
      class: cn(defaultStyle, `hover:bg-neutral-900 hover:text-[#f37626]`),
      href: "https://jupyter.org/",
    },
    {
      label: "Terraform",
      color: Colors.terraform,
      icon: Icons.terraform,
      class: cn(defaultStyle, `hover:bg-neutral-900 hover:text-[#7b42bc]`),
      href: "https://www.terraform.io/",
    },
  ];

  return (
    <div className="grid grid-cols-6">
      {allTechnologies.map((tech) => (
        <Link
          key={tech.label}
          target="_blank"
          rel="noreferrer"
          href={tech.href}
          className={tech.class}
        >
          <tech.icon height={48} width={48} />
          <p className="mt-2 font-semibold text-center">{tech.label}</p>
        </Link>
      ))}
    </div>
  );
};

export default Technologies;

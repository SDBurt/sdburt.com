import { bio, services } from "@/lib/info";

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>
      {/* <p className="my-5 text-neutral-800 dark:text-neutral-200">
        {"Sean Burt is a software engineering graduate with a specialty in AI from the University of Victoria. He worked at Hummingbird Drones where he was the sole developer of the Fire AI project for the first few months before the team expanded. He implemented all aspects of the app, which included the web app, cloud infrastructure, and machine learning components. He's passionate about web development, machine learning, and data science."}
      </p>
      <p>
        {"During his free time, he works on personal projects and learning, such as machine-learning notebooks on Kaggle, courses on Udemy, or additions to his portfolio site."}
      </p> */}
      <p className="my-5 text-neutral-800 dark:text-neutral-200">{bio()}</p>
      <p className="my-5  text-neutral-800 dark:text-neutral-200">
        {services()}
      </p>
    </section>
  );
}

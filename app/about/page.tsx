import { bio, services, priorities } from "@/lib/info";
import Books from "@/components/books";

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
      <h2 className="my-5 font-semibold text-xl font-serif">Skill</h2>
      <p className="text-neutral-800 dark:text-neutral-200">{bio()}</p>

      {/* What I bring to a team */}
      <h2 className="my-5 font-semibold text-xl font-serif">
        What I bring to a Team
      </h2>
      <p className="my-5  text-neutral-800 dark:text-neutral-200">
        {services()}
      </p>

      {/* Priorities */}
      <h2 className="my-5 font-semibold text-xl font-serif">Priorities</h2>
      <p className="my-5  text-neutral-800 dark:text-neutral-200">
        {priorities()}
      </p>

      {/* Books */}
      <div className="py-2">
        <h1 className="font-bold text-3xl font-serif">Interests</h1>
        <p className="my-5 text-neutral-800 dark:text-neutral-200">
          I am pretty introverted, but I do enjoy going out for coffee with
          friends, working on side projects, or trying out Kaggle Competitions.
        </p>
        <h2 className="my-5 font-semibold text-xl font-serif">Books</h2>
        <p className="my-5 text-neutral-800 dark:text-neutral-200">
          Here are some of the books I am currently reading.
        </p>
        <Books />
      </div>
    </section>
  );
}

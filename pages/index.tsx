import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div>
        <div>
          <h1 className="text-3xl font-extrabold">Hello</h1>
          <p>
            Welcome to my site. I'm Sean, a software engineer with two years of experience
            specializing in web development and machine learning. I have experience collaborating in
            a startup environment, am quick to productivity, and continually seek the opportunity to
            learn new skills and technologies.
          </p>
        </div>

        <ul>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/tags">Tags</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/about">About me</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

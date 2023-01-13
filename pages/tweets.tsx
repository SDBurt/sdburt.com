import Tweet from '@/components/twitter/Tweet'
import { getTweets } from '@/lib/twitter'

export default function Tweets({ tweets }) {
  return (
    <div>
      <div className="mx-auto mb-16 flex max-w-2xl flex-col items-start justify-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          Tweets
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          This is a collection of tweets I've enjoyed.
        </p>
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} {...tweet} />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const tweets = await getTweets([
    '1602774017546817536',
    '1602318657325072385',
    '1457018296847437824',
    '1598740730423349248',
  ])

  return { props: { tweets } }
}

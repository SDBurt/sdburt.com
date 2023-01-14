import Umami from '@/components/analytics/Umami'
import { siteMetadata } from '@/data/siteMetadata'
import { Analytics as VercelAnalytics } from '@vercel/analytics/react'

const isProduction = process.env.NODE_ENV === 'production'

const Analytics = () => {
  return (
    <>
      {isProduction && siteMetadata.analytics.umamiWebsiteId && <Umami />}
      {isProduction && siteMetadata.analytics.vercelAnalytics && <VercelAnalytics />}
    </>
  )
}

export default Analytics

'use client';

import { siteMetadata } from '@/data/siteMetadata';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';

const isProduction = process.env.NODE_ENV === 'production';

const Analytics = () => {
  return <>{isProduction && siteMetadata.analytics.vercelAnalytics && <VercelAnalytics />}</>;
};

export default Analytics;

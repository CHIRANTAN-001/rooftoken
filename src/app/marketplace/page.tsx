'use client';

import Container from '@/components/layout/Container';
import Sidebar from '@/components/layout/Sidebar';
import Tab from '@/modules/Marketplace/Tab';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { Suspense } from 'react';
import PropertyCardsGroup from '@/modules/Marketplace/PropertyCardsGroup';
import Header from '@/components/layout/Header';

const MarketplacePageContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const propertyType: string | null = searchParams.get('propertyType');

  React.useEffect(() => {
    if (!searchParams.has('propertyType')) {
      const params = new URLSearchParams(searchParams?.toString());
      params.set('propertyType', 'all');
      router.replace(`/marketplace?${params.toString()}`);
    }
  }, [searchParams, router]);

  const handleFilterChange = (value: string): void => {
    const params = new URLSearchParams(searchParams?.toString());
    params.set('propertyType', value);
    router.replace(`/marketplace?${params.toString()}`);
  };

  return (
    <Container>
      <Sidebar>
        <Header />
        <Tab
          propertyType={propertyType || 'all'}
          handleFilterChange={handleFilterChange}
        />
        <PropertyCardsGroup propertyType={propertyType || 'all'} />
      </Sidebar>
    </Container>
  );
};

const MarketplacePage = () => {
  return (
    <Suspense fallback={<div className="">Loading...</div>}>
      <MarketplacePageContent />
    </Suspense>
  );
};

export default MarketplacePage;

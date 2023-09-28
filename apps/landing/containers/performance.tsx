import React from 'react';
import { ClassShareTable } from './class-share-table';

export const Performance = () => {
  return (
    <div className='container flex flex-col pt-40'>
      <div className='bg-gradient ml-1 h-[10px] w-[60px]'></div>
      <p className='font-headline text-[80px] uppercase leading-[1]'>Performance*</p>
      <p className='bg-foreground mb-[100px] mt-[10px] h-[5px] w-full'></p>
      <div className='grid grid-cols-2 gap-x-5 gap-y-[60px]'>
        <div className='flex flex-col gap-4'>
          <div className='font-headline bg-background before:bg-gradient relative w-[364px] border-[3px] border-transparent bg-clip-padding px-4 py-[14px] uppercase before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-[-1] before:m-[-3px] before:content-[""]'>
            USD Share Class, %
          </div>
          <ClassShareTable />
        </div>
        <div className='flex flex-col gap-4'>
          <div className='font-headline bg-background before:bg-gradient relative w-[364px] border-[3px] border-transparent bg-clip-padding px-4 py-[14px] uppercase before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-[-1] before:m-[-3px] before:content-[""]'>
            ETH Share Class, %
          </div>
          <ClassShareTable />
        </div>
        <div className='flex flex-col gap-4'>
          <div className='font-headline bg-background before:bg-gradient relative w-[364px] border-[3px] border-transparent bg-clip-padding px-4 py-[14px] uppercase before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-[-1] before:m-[-3px] before:content-[""]'>
            BTC Share Class, %
          </div>
          <ClassShareTable />
        </div>
        <div className='flex flex-col gap-4'>
          <div className='font-headline bg-background before:bg-gradient relative w-[364px] border-[3px] border-transparent bg-clip-padding px-4 py-[14px] uppercase before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-[-1] before:m-[-3px] before:content-[""]'>
            MATIC Share Class, %
          </div>
          <ClassShareTable />
        </div>
      </div>
      <p className='mt-[66px] text-xs font-medium w-[79%]'>
        <span className='font-bold'>* PAST RESULTS ARE NOT INDICATIVE OF FUTURE RESULTS.</span>{' '}
        Performance figures for the Fund are net numbers and include the application of management
        fees, admin fees, fund accrued expenses and carry. The performance for some months has NOT
        been professionally audited nor confirmed by a fund administrator at the time of
        publication. <br />
        <br /> Performance figures for the Fund are net numbers and include the application of
        management fees, admin fees, fund accrued expenses and carry. The performance for some
        months has NOT been professionally audited nor confirmed by a fund administrator at the time
        of publication. <br /> <br /> Net returns for BTC, ETH, MATIC (“Digital Assets” Share
        Classes) are simulation based on USD share class performance and converted to respective
        tokens per methodology of the Fund’s administrator. These in-kind subscriptions are treated
        by the Fund Administrator in the same way as they would be done for subscriptions in
        different FX. The Fund will calculate its NAV in USD and returns will be converted into
        digital assets at the end of the month by the Fund administrator for share classes. The fee
        structure and terms are the same as in the existing share classes. See Fund’s PPM for
        details.
      </p>
    </div>
  );
};

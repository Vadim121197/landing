import React from 'react';

export const Strategy = () => {
  return (
    <div className='container flex flex-col pt-[164px]'>
      <div className='bg-gradient h-[10px] w-[60px] ml-1'></div>
      <p className='font-headline text-[80px] uppercase leading-[1]'>Strategy</p>
      <p className='bg-foreground mb-[76px] mt-[10px] h-[5px] w-full'></p>
      <p className='font-headline mb-7 w-[40%] text-[34px] uppercase leading-10'>
        Market-Neutral Digital Macro Fund
      </p>
      <p className='mb-[58px] w-[52%]'>
        The Edge DeFi Fund strategy is a market-neutral macro strategy utilizing decentralized
        finance (DeFi) protocols. The Fund’s main strategy is market-making in DeFi protocols while
        hedged for directional risk combined with opportunistic market-neutral macro trades in
        digital assets that includes funding rate basis trades, cross-chain arbitrage, and inverse
        funding rate trades.
      </p>
      <div className='flex flex-col gap-[46px]'>
        <div className='relative border-[2px] pb-7 pl-[30px] pt-[34px]'>
          <div className='bg-gradient text-muted-foreground absolute top-[-17px] flex h-[34px] w-[315px] items-center px-4 font-semibold'>
            / Allocations
          </div>
          <p className='w-[80%]'>
            Substantial part of the portfolio will be staked in DeFi liquidity pools that comprise
            of stablecoins and non-stable coins as well as algo hedging on centralized exchnages.
            Directional exposure is typically fully hedged with futures, option or using repo.
            Arbitrate trades are based on using futures and derivatives.
          </p>
        </div>
        <div className='relative border-[2px] pb-5 pl-[30px] pt-[34px]'>
          <div className='bg-gradient text-muted-foreground absolute top-[-17px] flex h-[34px] w-[315px] items-center px-4 font-semibold'>
            / Sizing and turnover
          </div>
          <p className='w-[80%]'>
            Individual positions are sized as a function of potential PnL, risks, liquidity, and
            correlation among positions. <br /> – Typical number of positions: 5-20 <br /> – Typical
            position size: 3-25% of AUM <br /> – Typical holding period of a position: 1-2 months{' '}
            <br /> – Portfolio annual turnover: 10x
          </p>
        </div>
        <div className='relative border-[2px] pb-7 pl-[30px] pt-[34px]'>
          <div className='bg-gradient text-muted-foreground absolute top-[-17px] flex h-[34px] w-[315px] items-center px-4 font-semibold'>
					/ Risk management
          </div>
          <p className='w-[80%]'>
					Embedded in portfolio construction, with continuous stress-testing, strict risk limits, and independent risk monitoring and controls. Hedges are typically implemented via buying protection on liquid crypto assets (in traditional markets with payments settled in USD outside of the digital space). In certain cases, cyber insurance is purchased against smart contract failures.
          </p>
        </div>
      </div>
    </div>
  );
};

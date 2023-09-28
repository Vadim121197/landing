export const About = () => {
  return (
    <div>
      <div className='mt-40 h-[776px] bg-[url("/center-bg.webp")] bg-cover bg-no-repeat'>
        <div className='container flex flex-col pt-[252px]'>
          <div className='bg-gradient ml-1 h-[10px] w-[68px]'></div>
          <p className='font-headline text-muted-foreground mb-14 text-[80px] uppercase leading-[1]'>
            About Edge Capital
          </p>
          <div className='relative flex justify-between '>
            <p className='text-muted-foreground w-[30%]'>
              Edge Capital is an innovative alternative investment manager focused on digital
              assets, blockchain and decentralized finance (DeFi) markets.
            </p>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='106'
              height='106'
              viewBox='0 0 106 106'
              fill='none'
              className='absolute right-10 top-6'
            >
              <path
                d='M0.666667 100C0.666667 102.946 3.05448 105.333 6 105.333C8.94552 105.333 11.3333 102.946 11.3333 100C11.3333 97.0545 8.94552 94.6667 6 94.6667C3.05448 94.6667 0.666667 97.0545 0.666667 100ZM94.6667 6C94.6667 8.94552 97.0545 11.3333 100 11.3333C102.946 11.3333 105.333 8.94552 105.333 6C105.333 3.05448 102.946 0.666667 100 0.666667C97.0545 0.666667 94.6667 3.05448 94.6667 6ZM6.70711 100.707L100.707 6.70711L99.2929 5.29289L5.29289 99.2929L6.70711 100.707Z'
                fill='white'
              />
            </svg>
            <div className='absolute top-5'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='1453'
                height='137'
                viewBox='0 0 1453 137'
                fill='none'
              >
                <path
                  d='M0.666667 131C0.666667 133.946 3.05448 136.333 6 136.333C8.94552 136.333 11.3333 133.946 11.3333 131C11.3333 128.054 8.94552 125.667 6 125.667C3.05448 125.667 0.666667 128.054 0.666667 131ZM1322 131V132H1322.41L1322.71 131.707L1322 131ZM1441.67 6C1441.67 8.94552 1444.05 11.3333 1447 11.3333C1449.95 11.3333 1452.33 8.94552 1452.33 6C1452.33 3.05448 1449.95 0.666667 1447 0.666667C1444.05 0.666667 1441.67 3.05448 1441.67 6ZM6 132H1322V130H6V132ZM1322.71 131.707L1447.71 6.70711L1446.29 5.29289L1321.29 130.293L1322.71 131.707Z'
                  fill='white'
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className='container mt-[148px] flex flex-col'>
        <p className='font-headline mb-8 w-[84%] text-[34px] uppercase leading-10'>
          We apply a proprietary, fundamentally-driven approach to identifying investment
          opportunities that can deliver outsized returns, while providing strong diversification
          benefits to traditional investment portfolios
        </p>
        <p className='mb-10 w-[46%]'>
          Edge is a team of native DeFi traders and researches that manages Edge DeFi Fund focused
          on liquid investment. Edge Team are active on-chain traders: 3-years of active DeFi usage:
          150+ protocols and 15+ blockchains, 8000+ on-chain transactions and $3b in volume.
        </p>
        <div className='grid grid-cols-2 gap-5'>
          {[
            'Multidisciplinary expertise in macro trading and analysis',
            'DeFi First-Hand Experience: Edge staked in 150+ protocols and 20 chains, did 10k on-chain transactions and $3b in volume',
            'Native DeFi traders and researchers',
            'Exclusive expertise in DeFi and blockchain technologies',
          ].map((i, index) => (
            <div
              className='bg-background before:bg-gradient relative flex h-[170px] items-center justify-start rounded-[5px] border-[3px] border-transparent bg-clip-padding px-10 font-bold before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-[-1] before:m-[-3px] before:content-[""] before:rounded-[5px]'
              key={index}
            >
              <p className='w-[65%]'>{i}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

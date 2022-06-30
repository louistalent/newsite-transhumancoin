

const Footer = () => {
    return (
        <section className="z-10 relative">
            <footer className="bg-midnight-gradient text-white">
                <div className="decoration bg-no-repeat bg-left-top svelte-gd5e8d">
                    <div className="container py-6 pt-12 md:pt-24 md:pb-8">
                        <div className="px-8 lg:px-0">
                            <h2 className="text-2xl capitalize text-white md:text-4xl svelte-gd5e8d">
                                Transhumancoin activates the blockchain ecosystem.
                            </h2>
                            <hr className="mb-10 mt-10 border-grey-10pm" />
                            <div className="flex flex-wrap justify-between text-sm text-grey-8pm mb-6">
                                <div className="flex flex-wrap justify-between lg:col-4">
                                    <div className="w-full lg:col-2">
                                        <div className="text-grey-6pm mb-3">Registered Address</div>
                                        <div className="whitespace-pre">THC Foundation</div>
                                    </div>
                                    <div className="w-full mt-8 lg:col-2 lg:mt-0">
                                        <div className="whitespace-pre"></div>
                                    </div>
                                </div>
                                <div className="lg:col-6 mt-8">
                                    <div>
                                        <span>Transhumanism is the ideology of enhancing human life through Science and Technology. The Transhuman Coin is the first and only token dedicated to Transhumanism. As a project driven by a devoted community, 2% of every Transaction is redistributed to holders, another 2% is sent to the Marketing Wallet, and 2% is sent to the Liquidity Pool.</span>

                                        {/* <a className="text-green-highlight inline-block" href="https://www.iota.org/privacy-policy">Privacy Policy</a> <span>, </span>
                                    <a className="text-green-highlight inline-block" href="https://www.iota.org/impressum">Impressum</a> 
                                    <span>, </span>
                                    <a className="text-green-highlight inline-block" href="https://www.iota.org/trademark">Trademark Policy</a> */}
                                    </div>
                                    {/* <div>
                                    <span>Get in touch:</span>
                                    <a className="text-green-highlight inline-block" href="https://www.iota.org/connect/contact">Contact Us</a>
                                </div>
                                <div><span>Board of Directors:</span> <span>Dominik Schiener and Navin Ramachandran</span> </div>

                                <div><span>ID/Company No.:</span> <span>3416/1234/2</span> </div>

                                <div><span>EU public ID number in the EU Transparency Register:</span> <span>500027331119-04</span> </div>

                                <div><span>VAT ID:</span> <span>DE329624902</span> </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="w-full flex justify-center items-center py-4 px-2 relative z-0 svelte-1jlquqf" style={{ backgroundColor: '#131F37', width: '16.666666666666668%' }}>
                        <img className="w-5 lg:mr-2" src="/assets/second-slide/youtube.svg" alt="Youtube" />
                        <div className="hidden lg:block ">Youtube</div>
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-full flex justify-center items-center py-4 px-2 relative z-0 svelte-1jlquqf" style={{ backgroundColor: '#2C3850', width: '16.666666666666668%' }}>
                        <img className="w-5 lg:mr-2" src="/assets/second-slide/Github.svg" alt="GitHub" />
                        <div className="hidden lg:block ">GitHub</div>
                    </a>
                    <a href="https://discord" target="_blank" rel="noopener noreferrer" className="w-full flex justify-center items-center py-4 px-2 relative z-0 svelte-1jlquqf" style={{ backgroundColor: '#4B576F', width: '16.666666666666668%' }}>
                        <img className="w-5 lg:mr-2" src="/assets/second-slide/Discord.svg" alt="Discord" />
                        <div className="hidden lg:block ">Discord</div>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-full flex justify-center items-center py-4 px-2 relative z-0 svelte-1jlquqf" style={{ backgroundColor: '#6A768E', width: '16.666666666666668%' }}>
                        <img className="w-5 lg:mr-2" src="/assets/second-slide/twitter.svg" alt="Twitter" />
                        <div className="hidden lg:block ">Twitter</div>
                    </a>
                    <a href="https://www.reddit.com" target="_blank" rel="noopener noreferrer" className="w-full flex justify-center items-center py-4 px-2 relative z-0 svelte-1jlquqf" style={{ backgroundColor: '#7D89A1', width: '16.666666666666668%' }}>
                        <img className="w-5 lg:mr-2" src="/assets/second-slide/Reddit.svg" alt="Reddit" />
                        <div className="hidden lg:block ">Reddit</div>
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-full flex justify-center items-center py-4 px-2 relative z-0 svelte-1jlquqf" style={{ backgroundColor: '#8995AD', width: '16.666666666666668%' }}>
                        <img className="w-5 lg:mr-2" src="/assets/second-slide/linkedin.svg" alt="Linkedin" />
                        <div className="hidden lg:block ">Linkedin</div>
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="w-full flex justify-center items-center py-4 px-2 relative z-0 svelte-1jlquqf" style={{ backgroundColor: '#99A5BD', width: '16.666666666666668%' }}>
                        <img className="w-5 lg:mr-2" src="/assets/second-slide/instagram.svg" alt="Instagram" />
                        <div className="hidden lg:block ">Instagram</div>
                    </a>
                </div>
            </footer>
        </section>
    )
}
export default Footer;
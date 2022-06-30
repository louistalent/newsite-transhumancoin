
import { useEffect, useState } from 'react';
import Content from "./faqContent/faqContent1";
// import { Markup } from 'interweave';

function Faq() {

    const [activeIndex1, setActiveIndex1] = useState(null);
    const handleOnClickForleft = index => {
        if (activeIndex1 === index) {
            setActiveIndex1(null);
        } else {
            setActiveIndex1(index);
        }
    };
    const [activeIndex2, setActiveIndex2] = useState(null);
    const handleOnClickForRight = index => {
        if (activeIndex2 === index) {
            setActiveIndex2(null);
        } else {
            setActiveIndex2(index);
        }
    };

    return (
        <section className="pt5 pb5 z-10 overflow-hidden py-10 md:py-20 relative  undefined svelte-am2ffe lazyloaded" style={{ background: 'center / cover no-repeat #F6F8FC', paddingTop: '80px' }} >
            <div className="container ">
                <div className='faq po-re mauto mt4'>
                    <div className='tc'>
                        <h2>
                            Frequently Asked Questions
                        </h2>
                        <h4>
                            Everything You Need to Understand Transhuman Coin Is Here.
                        </h4>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 ismobile-mt-none">
                            {
                                Content.map((data, index) => (
                                    <div key={index} className="green-border faq-content p2">
                                        <ul className="menu">
                                            <li>
                                                <a key={index} onClick={() => handleOnClickForleft(index)} className={`${activeIndex1 === index ? 'active' : ''} `} >
                                                    {data.question}
                                                </a>
                                                <ul className={`${activeIndex1 === index ? 'content-visable' : ''}`}>
                                                    <li className='dis-f'>
                                                        <div dangerouslySetInnerHTML={{ __html: data.answer }} />
                                                        {/* <Markup content={data.answer} /> */}
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default Faq;
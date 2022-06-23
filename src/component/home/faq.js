
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import gang4 from '../../assets/home-img/gang4.png';
import FAQTitle from '../../assets/home-img/faq-title.png';
import leftPart from './faqContent/faqContent1';
import rightPart from './faqContent/faqContent2';
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
        <div className='container'>
            {/* - faq */}
            <div className='p4 dis-n-1000'></div>
            <div className='faq po-re mauto mt7'>
                <div className='tc'>
                    <img draggable={false} className='mauto img-title-faq' src={FAQTitle}></img>
                </div>
                <div className="row">
                    <div className="col-md-6 ismobile-mt-none">
                        {
                            leftPart.map((data, index) => (
                                <div className="red-border faq-content p2">
                                    <ul className="menu">
                                        <li>
                                            <a key={index} onClick={() => handleOnClickForleft(index)} className={`${activeIndex1 === index ? 'active' : ''} `} >
                                                {data.question}
                                            </a>
                                            <ul className={`${activeIndex1 === index ? 'content-visable' : ''}`}>
                                                <li>
                                                    {data.answer}
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                    <div className="col-md-6">
                        {
                            rightPart.map((data, index) => (
                                <div className="red-border faq-content p2">
                                    <ul className="menu">
                                        <li>
                                            <a key={index} onClick={() => handleOnClickForRight(index)} className={`${activeIndex2 === index ? 'active' : ''} `} >
                                                {data.question}
                                            </a>
                                            <ul className={`${activeIndex2 === index ? 'content-visable' : ''}`}>
                                                <li>
                                                    {data.answer}
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div style={{ position: 'absolute', left: '-19%', top: '-50%' }}>
                    <img draggable={false} className='gang-n' src={gang4} style={{ height: '400px' }} />
                </div>
                <div className='faq-bar po-re mt4 mb4 justify'>
                    <h2 className='white'>CONTACT US FOR ANY QUERIES?</h2>
                    <div>
                        <button className='btn yellow-gradient yellow-hover'><span className='bold grey'>Contact Us</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Faq;
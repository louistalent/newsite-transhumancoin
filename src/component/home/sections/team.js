
import { GitSvg, LinkedinSvg, MediumSvg, TwitterSvg, ScholarSvg } from "../../../assets/svg/svg";
import { AiFillFacebook } from "react-icons/ai";

const url = "/assets/team-members/";
const img_a_class = "image-wrapper block my-1 mx-auto mb-6 relative z-0 svelte-1xhtrrh";
const members = [
    {
        name: 'Peter Xing',
        photo: 'peter.jpg',
        roll: 'Co-Founder, Transhuman Coin',
        content: '',
        twitter: '',
        linkedin: '',
        medium: '',
        github: '',
        scholar: '',
    },
    {
        name: 'Dr. Charles Awuzie',
        photo: 'charles.jpg',
        roll: 'Co-Founder & CEO, Transhuman Coin',
        content: '',
        twitter: '',
        linkedin: '',
        medium: '',
        github: '',
        scholar: '',
    },
    {
        name: 'Alyse Sue',
        photo: 'alyse.jpg',
        roll: 'Co-Founder And Management Team',
        content: '',
        twitter: '',
        linkedin: '',
        medium: '',
        github: '',
        scholar: '',
    },
    {
        name: 'Dr.Avinash Singh',
        photo: 'avinash.jpg',
        roll: 'Co-Founder, Transhuman Coin',
        content: 'Leader Of Scientific Advisory Board, Transhuman Coin',
        twitter: '',
        linkedin: '',
        medium: '',
        github: '',
        scholar: '',
    },
    {
        name: 'Beau',
        photo: 'beau.jpg',
        roll: 'Dev Team Leader',
        content: '',
        twitter: '',
        linkedin: '',
        medium: '',
        github: '',
        scholar: '',
    },
    {
        name: 'Dr. José Luis Cordeiro Mateo',
        photo: 'jose.jpg',
        roll: 'Scientific Adviser of Transhuman Coin',
        content: '',
        twitter: '',
        linkedin: '',
        medium: '',
        github: '',
        scholar: '',
    },
    {
        name: 'ZANE MA',
        photo: 'zane.jpg',
        roll: 'CEO at Taslyhealthpac Fort Healthcare Pty Ltd',
        content: '',
        twitter: '',
        linkedin: '',
        medium: '',
        github: '',
        scholar: '',
    },
    {
        name: 'JABU NKEHLI',
        photo: 'jabu.jpg',
        roll: 'Medical Doctor specializing in Dermatology',
        content: '',
        twitter: '',
        linkedin: '',
        medium: '',
        github: '',
        scholar: '',
    },
    {
        name: 'JONATHAN WOODS',
        photo: 'jonathan.jpg',
        roll: 'Top Investor In Transhuman Coin Project',
        content: '',
        twitter: '',
        linkedin: '',
        medium: '',
        github: '',
        scholar: '',
    },
    {
        name: 'ADETOLA MOWO-WALE',
        photo: 'adetola.jpg',
        roll: 'Top Investor in Transhuman Coin',
        content: '',
        twitter: '',
        linkedin: '',
        medium: '',
        github: '',
        scholar: '',
    },
    {
        name: 'ART RAMON',
        photo: 'art.jpg',
        roll: 'One of the first to adopt THC from the USTP',
        content: '',
        twitter: '',
        linkedin: '',
        medium: '',
        github: '',
        scholar: '',
    },
    {
        name: 'Andrew Corkran',
        photo: 'andrew.jpg',
        roll: 'Community Moderator',
        content: '',
        twitter: '',
        linkedin: '',
        medium: '',
        github: '',
        scholar: '',
    },
]

const Team = () => {
    return (
        <section className="pt5 pb5 z-10 overflow-hidden py-10 md:py-20 relative  undefined svelte-am2ffe lazyloaded" style={{ background: 'center / cover no-repeat #F6F8FC', paddingTop: '80px' }} >
            <div className="container ">
                <h2 className="team-section-title svelte-1xhtrrh" id="executive-team">Our Team</h2>
                <div className="headline-stick size-l"></div>
                <div className="members flex flex-wrap items-start mx-3 svelte-1xhtrrh">
                    {
                        members.map((member, index) => (
                            <div key={index} className="member py-6 px-5 svelte-1xhtrrh">
                                <a href="" target="_blank" className={img_a_class} rel="noreferrer">
                                    <div className="overflow-hidden rounded-full w-full h-full flex justify-center items-center">
                                        <img className="w-full" src={url + member.photo} alt={member.name} /></div>
                                    <div className="circle rounded-full bg-grey-4pm absolute w-full h-full svelte-1xhtrrh"></div>
                                </a>
                                <h4 className="text-center mb-2">{member.name}</h4>
                                <div className="text-grey-10pm text-center">{member.roll}</div>
                                <div className="w-full mt-2 flex justify-center icon-color">
                                    <a className="social_link svelte-1xhtrrh" target="_blank" rel="noreferrer" href={`https://www.linkedin.com/` + member.linkedin}>
                                        <LinkedinSvg />
                                    </a>
                                    <a className="social_link svelte-1xhtrrh" target="_blank" rel="noreferrer" href={`https://twitter.com/` + member.twitter}>
                                        <TwitterSvg />
                                    </a>
                                    <a className="social_link svelte-1xhtrrh" target="_blank" rel="noreferrer" href={`https://twitter.com/` + member.twitter}>
                                        <AiFillFacebook fontSize={'32px'} className="svelte-1xhtrrh" fill="#C3D0E4" />
                                    </a>

                                    {/* <a className="social_link svelte-1xhtrrh" target="_blank" rel="noreferrer" href={`https://medium.com/` + member.medium}>
                                        <MediumSvg />
                                    </a>
                                    <a className="social_link svelte-1xhtrrh" target="_blank" rel="noreferrer" href={`https://github.com/` + member.github}>
                                        <GitSvg />
                                    </a>
                                    <a className="social_link svelte-1xhtrrh" target="_blank" rel="noreferrer" href={`https://scholar.google.com.br/` + member.scholar}>
                                        <ScholarSvg />
                                    </a> */}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
export default Team;
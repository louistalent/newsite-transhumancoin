
import { useState } from "react";
import { scrollTo } from "../../accessories/scrollTo";
import { useTranslation } from 'react-i18next'

const Header = () => {
    const [isHam, setIsHam] = useState(false);
    const [lang, setLang] = useState('en');
    const { t } = useTranslation();

    const menuClick = (id) => {
        scrollTo({ id });
        if (isHam) {
            setIsHam(false);
        }
    }

    const languages = [
        { "text": "Afghanistan", "value": "en" },
        { "text": "Afghanistan", "value": "af" },
        { "text": "Åland Islands", "value": "ax" },
        { "text": "Albania", "value": "al" },
        { "text": "Algeria", "value": "dz" },
        { "text": "American Samoa", "value": "as" },
        { "text": "AndorrA", "value": "ad" },
        { "text": "Angola", "value": "ao" },
        { "text": "Anguilla", "value": "ai" },
        { "text": "Antarctica", "value": "aq" },
        { "text": "Antigua and Barbuda", "value": "ag" },
        { "text": "Argentina", "value": "ar" },
        { "text": "Armenia", "value": "am" },
        { "text": "Aruba", "value": "aw" },
        { "text": "Australia", "value": "au" },
        { "text": "Austria", "value": "at" },
        { "text": "Azerbaijan", "value": "az" },
        { "text": "Bahamas", "value": "bs" },
        { "text": "Bahrain", "value": "bh" },
        { "text": "Bangladesh", "value": "bd" },
        { "text": "Barbados", "value": "bb" },
        { "text": "Belarus", "value": "by" },
        { "text": "Belgium", "value": "be" },
        { "text": "Belize", "value": "bz" },
        { "text": "Benin", "value": "bj" },
        { "text": "Bermuda", "value": "bm" },
        { "text": "Bhutan", "value": "bt" },
        { "text": "Bolivia", "value": "bo" },
        { "text": "Bosnia and Herzegovina", "value": "ba" },
        { "text": "Botswana", "value": "bw" },
        { "text": "Bouvet Island", "value": "bv" },
        { "text": "Brazil", "value": "br" },
        { "text": "British Indian Ocean Territory", "value": "io" },
        { "text": "Brunei Darussalam", "value": "bn" },
        { "text": "Bulgaria", "value": "bg" },
        { "text": "Burkina Faso", "value": "bf" },
        { "text": "Burundi", "value": "bi" },
        { "text": "Cambodia", "value": "kh" },
        { "text": "Cameroon", "value": "cm" },
        { "text": "Canada", "value": "ca" },
        { "text": "Cape Verde", "value": "cv" },
        { "text": "Cayman Islands", "value": "ky" },
        { "text": "Central African Republic", "value": "cf" },
        { "text": "Chad", "value": "td" },
        { "text": "Chile", "value": "cl" },
        { "text": "China", "value": "cn" },
        { "text": "Christmas Island", "value": "cx" },
        { "text": "Cocos (Keeling) Islands", "value": "cc" },
        { "text": "Colombia", "value": "co" },
        { "text": "Comoros", "value": "km" },
        { "text": "Congo", "value": "cg" },
        { "text": "Congo, The Democratic Republic of the", "value": "cd" },
        { "text": "Cook Islands", "value": "ck" },
        { "text": "Costa Rica", "value": "cr" },
        { "text": "Croatia", "value": "hr" },
        { "text": "Cuba", "value": "cu" },
        { "text": "Cyprus", "value": "cy" },
        { "text": "Czech Republic", "value": "cz" },
        { "text": "Denmark", "value": "dk" },
        { "text": "Djibouti", "value": "dj" },
        { "text": "Dominica", "value": "dm" },
        { "text": "Dominican Republic", "value": "do" },
        { "text": "Ecuador", "value": "ec" },
        { "text": "Egypt", "value": "eg" },
        { "text": "El Salvador", "value": "sv" },
        { "text": "Equatorial Guinea", "value": "gq" },
        { "text": "Eritrea", "value": "er" },
        { "text": "Estonia", "value": "ee" },
        { "text": "Ethiopia", "value": "et" },
        { "text": "Falkland Islands (Malvinas)", "value": "fk" },
        { "text": "Faroe Islands", "value": "fo" },
        { "text": "Fiji", "value": "fj" },
        { "text": "Finland", "value": "fi" },
        { "text": "France", "value": "fr" },
        { "text": "French Guiana", "value": "gf" },
        { "text": "French Polynesia", "value": "pf" },
        { "text": "French Southern Territories", "value": "tf" },
        { "text": "Gabon", "value": "ga" },
        { "text": "Gambia", "value": "gm" },
        { "text": "Georgia", "value": "ge" },
        { "text": "Germany", "value": "de" },
        { "text": "Ghana", "value": "gh" },
        { "text": "Gibraltar", "value": "gi" },
        { "text": "Greece", "value": "gr" },
        { "text": "Greenland", "value": "gl" },
        { "text": "Grenada", "value": "gd" },
        { "text": "Guadeloupe", "value": "gp" },
        { "text": "Guam", "value": "gu" },
        { "text": "Guatemala", "value": "gt" },
        { "text": "Guernsey", "value": "gg" },
        { "text": "Guinea", "value": "gn" },
        { "text": "Guinea-Bissau", "value": "gw" },
        { "text": "Guyana", "value": "gy" },
        { "text": "Haiti", "value": "ht" },
        { "text": "Heard Island and Mcdonald Islands", "value": "hm" },
        { "text": "Holy See (Vatican City State)", "value": "va" },
        { "text": "Honduras", "value": "hn" },
        { "text": "Hong Kong", "value": "hk" },
        { "text": "Hungary", "value": "hu" },
        { "text": "Iceland", "value": "is" },
        { "text": "India", "value": "in" },
        { "text": "Indonesia", "value": "id" },
        { "text": "Iran, Islamic Republic Of", "value": "ir" },
        { "text": "Iraq", "value": "iq" },
        { "text": "Ireland", "value": "ie" },
        { "text": "Isle of Man", "value": "im" },
        { "text": "Israel", "value": "il" },
        { "text": "Italy", "value": "it" },
        { "text": "Jamaica", "value": "jm" },
        { "text": "Japan", "value": "jp" },
        { "text": "Jersey", "value": "je" },
        { "text": "Jordan", "value": "jo" },
        { "text": "Kazakhstan", "value": "kz" },
        { "text": "Kenya", "value": "ke" },
        { "text": "Kiribati", "value": "ki" },
        { "text": "Korea, Republic of", "value": "kr" },
        { "text": "Kuwait", "value": "kw" },
        { "text": "Kyrgyzstan", "value": "kg" },
        { "text": "Latvia", "value": "lv" },
        { "text": "Lebanon", "value": "lb" },
        { "text": "Lesotho", "value": "ls" },
        { "text": "Liberia", "value": "lr" },
        { "text": "Libyan Arab Jamahiriya", "value": "ly" },
        { "text": "Liechtenstein", "value": "li" },
        { "text": "Lithuania", "value": "lt" },
        { "text": "Luxembourg", "value": "lu" },
        { "text": "Macao", "value": "mo" },
        { "text": "Macedonia, The Former Yugoslav Republic of", "value": "mk" },
        { "text": "Madagascar", "value": "mg" },
        { "text": "Malawi", "value": "mw" },
        { "text": "Malaysia", "value": "my" },
        { "text": "Maldives", "value": "mv" },
        { "text": "Mali", "value": "ml" },
        { "text": "Malta", "value": "mt" },
        { "text": "Marshall Islands", "value": "mh" },
        { "text": "Martinique", "value": "mq" },
        { "text": "Mauritania", "value": "mr" },
        { "text": "Mauritius", "value": "mu" },
        { "text": "Mayotte", "value": "yt" },
        { "text": "Mexico", "value": "mx" },
        { "text": "Micronesia, Federated States of", "value": "fm" },
        { "text": "Moldova, Republic of", "value": "md" },
        { "text": "Monaco", "value": "mc" },
        { "text": "Mongolia", "value": "mn" },
        { "text": "Montserrat", "value": "ms" },
        { "text": "Morocco", "value": "ma" },
        { "text": "Mozambique", "value": "mz" },
        { "text": "Myanmar", "value": "mm" },
        { "text": "Namibia", "value": "na" },
        { "text": "Nauru", "value": "nr" },
        { "text": "Nepal", "value": "np" },
        { "text": "Netherlands", "value": "nl" },
        { "text": "Netherlands Antilles", "value": "an" },
        { "text": "New Caledonia", "value": "nc" },
        { "text": "New Zealand", "value": "nz" },
        { "text": "Nicaragua", "value": "ni" },
        { "text": "Niger", "value": "ne" },
        { "text": "Nigeria", "value": "ng" },
        { "text": "Niue", "value": "nu" },
        { "text": "Norfolk Island", "value": "nf" },
        { "text": "Northern Mariana Islands", "value": "mp" },
        { "text": "Norway", "value": "no" },
        { "text": "Oman", "value": "om" },
        { "text": "Pakistan", "value": "pk" },
        { "text": "Palau", "value": "pw" },
        { "text": "Palestinian Territory, Occupied", "value": "ps" },
        { "text": "Panama", "value": "pa" },
        { "text": "Papua New Guinea", "value": "pg" },
        { "text": "Paraguay", "value": "py" },
        { "text": "Peru", "value": "pe" },
        { "text": "Philippines", "value": "ph" },
        { "text": "Pitcairn", "value": "pn" },
        { "text": "Poland", "value": "pl" },
        { "text": "Portugal", "value": "pt" },
        { "text": "Puerto Rico", "value": "pr" },
        { "text": "Qatar", "value": "qa" },
        { "text": "Reunion", "value": "re" },
        { "text": "Romania", "value": "ro" },
        { "text": "Russian Federation", "value": "ru" },
        { "text": "RWANDA", "value": "rw" },
        { "text": "Saint Helena", "value": "sh" },
        { "text": "Saint Kitts and Nevis", "value": "kn" },
        { "text": "Saint Lucia", "value": "lc" },
        { "text": "Saint Pierre and Miquelon", "value": "pm" },
        { "text": "Saint Vincent and the Grenadines", "value": "vc" },
        { "text": "Samoa", "value": "ws" },
        { "text": "San Marino", "value": "sm" },
        { "text": "Sao Tome and Principe", "value": "st" },
        { "text": "Saudi Arabia", "value": "sa" },
        { "text": "Senegal", "value": "sn" },
        { "text": "Serbia and Montenegro", "value": "cs" },
        { "text": "Seychelles", "value": "sc" },
        { "text": "Sierra Leone", "value": "sl" },
        { "text": "Singapore", "value": "sg" },
        { "text": "Slovakia", "value": "sk" },
        { "text": "Slovenia", "value": "si" },
        { "text": "Solomon Islands", "value": "sb" },
        { "text": "Somalia", "value": "so" },
        { "text": "South Africa", "value": "za" },
        { "text": "South Georgia and the South Sandwich Islands", "value": "gs" },
        { "text": "Spain", "value": "es" },
        { "text": "Sri Lanka", "value": "lk" },
        { "text": "Sudan", "value": "sd" },
        { "text": "Surivalue", "value": "sr" },
        { "text": "Svalbard and Jan Mayen", "value": "sj" },
        { "text": "Swaziland", "value": "sz" },
        { "text": "Sweden", "value": "se" },
        { "text": "Switzerland", "value": "ch" },
        { "text": "Syrian Arab Republic", "value": "sy" },
        { "text": "Taiwan, Province of China", "value": "tw" },
        { "text": "Tajikistan", "value": "tj" },
        { "text": "Tanzania, United Republic of", "value": "tz" },
        { "text": "Thailand", "value": "th" },
        { "text": "Timor-Leste", "value": "tl" },
        { "text": "Togo", "value": "tg" },
        { "text": "Tokelau", "value": "tk" },
        { "text": "Tonga", "value": "to" },
        { "text": "Trinidad and Tobago", "value": "tt" },
        { "text": "Tunisia", "value": "tn" },
        { "text": "Turkey", "value": "tr" },
        { "text": "Turkmenistan", "value": "tm" },
        { "text": "Turks and Caicos Islands", "value": "tc" },
        { "text": "Tuvalu", "value": "tv" },
        { "text": "Uganda", "value": "ug" },
        { "text": "Ukraine", "value": "ua" },
        { "text": "United Arab Emirates", "value": "ae" },
        { "text": "United Kingdom", "value": "gb" },
        { "text": "United States", "value": "us" },
        { "text": "United States Minor Outlying Islands", "value": "um" },
        { "text": "Uruguay", "value": "uy" },
        { "text": "Uzbekistan", "value": "uz" },
        { "text": "Vanuatu", "value": "vu" },
        { "text": "Venezuela", "value": "ve" },
        { "text": "Viet Nam", "value": "vn" },
        { "text": "Virgin Islands, British", "value": "vg" },
        { "text": "Virgin Islands, U.S.", "value": "vi" },
        { "text": "Wallis and Futuna", "value": "wf" },
        { "text": "Western Sahara", "value": "eh" },
        { "text": "Yemen", "value": "ye" },
        { "text": "Zambia", "value": "zm" },
        { "text": "Zimbabw", "value": "zn" }
    ]

    const handleChange = e => {
        setLang(e.target.value);
        let loc = "http://localhost:4500/";
        window.location.replace(loc + "?lng=" + e.target.value);
    }


    return (
        <div className="Nav w-full svelte-1emr6uv">
            <div className="background-blur md:flex relative svelte-1emr6uv">
                <div className="h-20 px-4 flex self-center justify-between md:container mx-auto relative md:static z-10">
                    <a id="logo-home-link" className="flex flex-row items-center z-10" href="https://www.transhumancoin.finance" aria-label="Home">
                        <div className="logo">
                            <img className=" svelte-1emr6uv" src="./assets/logo.png" alt="THC" />
                        </div>
                        {/* <img className="hidden ml-4 lg:block svelte-1emr6uv" src="./assets/logo.png" alt="THC"/> */}
                    </a>
                    <div className="flex justify-center items-center">
                        <nav className={`h-full svelte-1emr6uv ${isHam ? 'isMenuOpen' : ''}`}>
                            <ul className="container svelte-1emr6uv">
                                <div id="first-level-navigation-category-get-started" className="FirstLevelNavigationCategory my-4 lg:my-0 svelte-laz1ta">
                                    <div className="flex justify-between items-center cursor-pointer">
                                        <div onClick={() => { menuClick('tokenomics_id') }} className="first-level-link svelte-laz1ta">
                                            Tokenomics
                                            <div className="stick svelte-laz1ta"></div>
                                        </div>
                                    </div>

                                </div>

                                <div id="first-level-navigation-category-foundation" className="FirstLevelNavigationCategory my-4 lg:my-0 svelte-laz1ta">
                                    <div className="flex justify-between items-center cursor-pointer">
                                        <div onClick={() => { menuClick('buy_id') }} className="first-level-link svelte-laz1ta">
                                            THC BUY
                                            <div className="stick svelte-laz1ta"></div>
                                        </div>
                                    </div>
                                </div>

                                <div id="first-level-navigation-category-connect" className="FirstLevelNavigationCategory my-4 lg:my-0 svelte-laz1ta">
                                    <div className="flex justify-between items-center cursor-pointer">
                                        <div onClick={() => { menuClick('whitepaper_id') }} className="first-level-link svelte-laz1ta">
                                            Whitepaper
                                            <div className="stick svelte-laz1ta"></div>
                                        </div>
                                    </div>
                                </div>

                                <div id="first-level-navigation-category-connect" className="FirstLevelNavigationCategory my-4 lg:my-0 svelte-laz1ta">
                                    <div className="flex justify-between items-center cursor-pointer">
                                        <div onClick={() => { menuClick('team_id') }} className="first-level-link svelte-laz1ta">
                                            Our team
                                            <div className="stick svelte-laz1ta"></div>
                                        </div>
                                    </div>
                                </div>

                                <div id="first-level-navigation-category-connect" className="FirstLevelNavigationCategory my-4 lg:my-0 svelte-laz1ta">
                                    <div className="flex justify-between items-center cursor-pointer">
                                        <div onClick={() => { menuClick('faq_id') }} className="first-level-link svelte-laz1ta">
                                            FAQ
                                            <div className="stick svelte-laz1ta"></div>
                                        </div>
                                    </div>
                                </div>

                                <div id="first-level-navigation-category-solutions" className="FirstLevelNavigationCategory my-4 lg:my-0 svelte-laz1ta">
                                    <div className="flex justify-between items-center cursor-pointer">
                                        <div onClick={() => { menuClick('roadmap_id') }} className="first-level-link svelte-laz1ta">
                                            Roadmap
                                            <div className="stick svelte-laz1ta"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="lg:hidden">
                                    <div id="first-level-navigation-category-ecosystem" className="FirstLevelNavigationCategory my-4 lg:my-0 svelte-laz1ta">
                                        <div className="flex justify-between items-center cursor-pointer">
                                            <div className="first-level-link svelte-laz1ta">Ecosystem
                                                <div className="stick svelte-laz1ta"></div>
                                            </div>
                                            <svg className="mr-5 lg:hidden svelte-laz1ta" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g opacity="0.5">
                                                    <path d="M6 13L11 8L6 3" stroke="#131F37" strokeWidth="1.72854"></path>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div> */}
                            </ul>

                            {/* <div className="menu-button px-8 text-grey-2pm font-bold text-sm items-center z-30 cursor-pointer svelte-18o960n"> */}
                            {/* <div className="mr-4">Language</div>
                                <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="3" height="2.79176" rx="1.39588" transform="matrix(-1 0 0 1 19 7.22266)" fill="white"></rect>
                                    <rect width="3" height="2.79175" rx="1.39588" transform="matrix(-1 0 0 1 19 0.708984)" fill="white"></rect>
                                    <rect width="3" height="2.79176" rx="1.39588" transform="matrix(-1 0 0 1 3 13.7373)" fill="white"></rect>
                                    <rect width="3" height="2.79176" rx="1.39588" transform="matrix(-1 0 0 1 11 7.22266)" fill="white"></rect>
                                    <rect width="3" height="2.79175" rx="1.39588" transform="matrix(-1 0 0 1 11 0.708984)" fill="white"></rect>
                                    <rect width="3" height="2.79175" rx="1.39588" transform="matrix(-1 0 0 1 3 0.708984)" fill="white"></rect>
                                    <rect width="3" height="2.79176" rx="1.39588" transform="matrix(-1 0 0 1 19 13.7373)" fill="white"></rect>
                                    <rect width="3" height="2.79176" rx="1.39588" transform="matrix(-1 0 0 1 11 13.7373)" fill="white"></rect>
                                    <rect width="3" height="2.79176" rx="1.39588" transform="matrix(-1 0 0 1 3 7.22266)" fill="white"></rect>
                                </svg> */}
                            {/* <select className="selectpicker" style={{ color: 'black' }} defaultValue={lang} onChange={handleChange}>
                                    {languages.map(item => {
                                        return (<option key={item.value}
                                            value={item.value}>{item.text}</option>);
                                    })}
                                </select> */}
                            {/* </div> */}
                            {/* after Language click  */}
                            {/* <div className="ecosystem-menu bg-grey-2pm w-full svelte-18o960n">
                                <div className="ecosystem-content flex flex-wrap container pt-8 pb-12 svelte-18o960n">
                                    <div className="flex justify-end w-full">
                                        <svg className="cursor-pointer p2" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="20.5318" height="2.09549" transform="matrix(-0.707102 0.707112 -0.707102 -0.707112 24 9.48169)" fill="#131F37"></rect>
                                            <rect width="20.5318" height="2.09549" transform="matrix(-0.707102 -0.707111 0.707102 -0.707112 22.5181 24)" fill="#131F37"></rect>
                                        </svg>
                                    </div>
                                    <a href="https://shop.iotashops.com/" target="_blank" rel="noopener noreferrer" className="flex menu-item px-5 rounded-lg svelte-mrpoax">
                                        <div className="item-content flex items-start svelte-mrpoax">
                                            <div className="item-image mr-4 svelte-mrpoax"><img src="./123123123_files/iota-shops.icon.svg" alt="IOTA Merch (Partner)" /></div>
                                            <div className="text-sm">
                                                <div className="font-semibold text-grey-10pm mb-1">IOTA Merch (Partner)</div>
                                                <div className="text-grey-8pm">
                                                    <div className="rich-text-block" style={{}}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div> */}


                        </nav>
                        <button onClick={() => { setIsHam(false) }} className={`z-10 cursor-pointer p-2 lg:hidden ${isHam ? '' : 'hidden'}`}>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="20.5318" height="2.09549" transform="matrix(-0.707102 0.707112 -0.707102 -0.707112 24 9.48169)" fill="#131F37"></rect>
                                <rect width="20.5318" height="2.09549" transform="matrix(-0.707102 -0.707111 0.707102 -0.707112 22.5181 24)" fill="#131F37"></rect>
                            </svg>
                        </button>
                        <button onClick={() => { setIsHam(true) }} className={`p-2 lg:hidden ${isHam ? 'hidden' : ''}`}>
                            <img src="./assets/burguer-menu.svg" alt="menu" className="svelte-1emr6uv" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;

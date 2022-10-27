import React from "react"
import Link from "next/link"

export default function HomeComponent() {
    return (
        <main>
            <section className="homeMain" id="home">
                <h1>Education for the Future Generation</h1>
                <p className="homeDescription">Our teams central mission is to inspire the future generation and to educate them in the principals of STEM and the ideals of FIRST!</p>
                <a href="#about">
                    <button className="homeAboutButton">About</button>        
                </a>
                <div className="homeImageGrid">
                    <img src="https://kaipereira.github.io/reybots/1.png" />
                    <img src="https://kaipereira.github.io/reybots/2.png" />
                    <img src="https://kaipereira.github.io/reybots/3.png" />
                    <img src="https://kaipereira.github.io/reybots/5.png" />
                    <img src="https://kaipereira.github.io/reybots/4.png" />
                </div>
            </section>
            <section className="competitionsMain" id="competitions">
                <div className="compeitionsHeaders">
                    <h1>Competitions</h1>
                    <p>A collection of our past entries into the FIRST high school robotics/technology competition!</p>
                </div>
                <div className="allCompetitions">
                    <div className="compeitionElement">
                        <img src="https://kaipereira.github.io/reybots/compeition1.jpg" className="compeitionElementImage" />
                        <div className="competitionElementTextAlign">
                            <div>
                                <h2>Canadian Pacific Regional</h2>
                                <p>On March 6th, 2019, at the save-on memorial center we competed against 35 teams in the FIRST Canadian Pacific Regional Robotics Competition in Victoria, BC. Here, we managed to win the Rookie all Star award that let us compete in the championship robotics competition in Houstan, Texas</p>
                                <Link href="https://www.thebluealliance.com/team/7787" target="_blank" rel="noreferrer">
                                    <button>See More</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="compeitionElement compeitionElement2">
                        <img src="https://kaipereira.github.io/reybots/compeition2.jpg" className="compeitionElementImage" />
                        <div className="competitionElementTextAlign">
                            <div>
                                <h2>Championship</h2>
                                <p>On April 17, 2019, at the George Brown Convention Center we competed against 70 internation teams in the FIRST Houston Championship Robotics Competition in well Houston. Sadly we did not qualify but we had so much fun participating against the best of the best!</p>
                                <Link href="https://www.thebluealliance.com/team/7787" target="_blank" rel="noreferrer">
                                    <button>See More</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sponsorsMain" id="sponsors">
                <div className="sponsorsHeaders">
                    <h1>Sponsors</h1>
                    <p>Everyone who is currently sponsoring the Reybots and helping to fund our robots!</p>
                </div>
                <div className="sponsorsSection">
                    <div className="sponsorContainer">
                        <img src="https://kaipereira.github.io/reybots/bernhardt.png" />
                    </div>
                    <div className="sponsorContainer">
                        <img src="https://kaipereira.github.io/reybots/finning.jpg" />
                    </div>
                    <div className="sponsorContainer">
                        <p>Could Be You Here...</p>
                    </div>
                </div>
            </section>
            <section className="aboutMain" id="about">
                <div className="aboutContainer">
                    <div className="aboutContainerText">
                        <p className="aboutSubheader">About Us</p>
                        <h3>Way More Than Just Building Robots</h3>
                        <p className="aboutDescription">The Reynolds Reybots club is not just about building robots. It’s about working in the community, teaching the fundamentals of STEM and inspiring others! All of our students learn so much by getting hands-on with actually building something and collaborating with others! Many of our students grow up and decided to pursue passions in the area of STEM or just use the skills they used while building the robot like creativity and collaboration!</p>
                        <Link href="https://www.thebluealliance.com/team/7787" target="_blank" rel="noreferrer">
                            <button>See More</button>
                        </Link>
                    </div>
                    <img src="aboutImage.png" />
                </div>
            </section> 
            <section className="pricingMain" id="pricing">
                <div className="pricingHeaders">
                    <h1>Sponsor Us</h1>
                    <p>Help us fund our new robots for 2022 and also receive fantastic benefits in the process!</p>
                </div>
                <div className="pricingComponents">

                    <div className="pricingComponent">
                        <div className="pricingComponentRelative">
                            <div className="pricingComponentSubheader">FRIENDS</div>
                            <div className="pricingComponentPricing">
                                <p className="pricingComponentPricingHeader">$50</p>
                                <p className="pricingComponentPricingToAndYear">-200 / Year</p>
                            </div>
                            <div className="seperationLine"></div>
                            <div className="pricingComponentBenefits">
                                <div className="pricingComponentBenefit">
                                    <div>
                                        <img src="https://kaipereira.github.io/reybots/benefitCheckmark.png" />
                                    </div>
                                    <p>Your company acknoledged on the sponsors page of our team website!</p>
                                </div>
                                <div className="pricingComponentBenefit">
                                    <div>
                                        <img src="https://kaipereira.github.io/reybots/benefitCheckmark.png" />
                                    </div>
                                    <p>Certificate of appreciation that can be displayed at your business!</p>
                                </div>
                            </div>
                            <Link href="/get-started">
                                <button className="pricingComponentButton">Get Started</button>
                            </Link>
                        </div>
                    </div>

                    <div className="pricingComponent">
                        <div className="pricingComponentRelative">
                            <div className="pricingComponentSubheader">GENEROUS</div>
                            <div className="pricingComponentPricing">
                                <p className="pricingComponentPricingHeader">$200</p>
                                <p className="pricingComponentPricingToAndYear">-500 / Year</p>
                            </div>
                            <div className="seperationLine"></div>
                            <div className="pricingComponentBenefits">
                                <div className="pricingComponentBenefit">
                                    <div>
                                        <img src="https://kaipereira.github.io/reybots/benefitCheckmark.png" />
                                    </div>
                                    <p>We will include contact information, a logo and an active link to your site on our sponsors page!</p>
                                </div>
                                <div className="pricingComponentBenefit">
                                    <div>
                                        <img src="https://kaipereira.github.io/reybots/benefitCheckmark.png" />
                                    </div>
                                    <p>Certificate of appreciation that can be displayed at your business!</p>
                                </div>
                                <div className="pricingComponentBenefit">
                                    <div>
                                        <img src="https://kaipereira.github.io/reybots/benefitCheckmark.png" />
                                    </div>
                                    <p>Photo with the Reybots team!</p>
                                </div>
                            </div>
                            <Link href="/get-started">
                                <button className="pricingComponentButton">Get Started</button>
                            </Link>
                        </div>
                    </div>

                    <div className="pricingComponent">
                        <div className="pricingComponentRelative">
                            <div className="pricingComponentSubheader">SILVER</div>
                            <div className="pricingComponentPricing">
                                <p className="pricingComponentPricingHeader">$500</p>
                                <p className="pricingComponentPricingToAndYear">+ / Year</p>
                            </div>
                            <div className="seperationLine"></div>
                            <div className="pricingComponentBenefits">
                                <div className="pricingComponentBenefit">
                                    <div>
                                        <img src="https://kaipereira.github.io/reybots/benefitCheckmark.png" />
                                    </div>
                                    <p>We will include contact information, a logo and an active link to your site on our sponsors page!</p>
                                </div>
                                <div className="pricingComponentBenefit">
                                    <div>
                                        <img src="https://kaipereira.github.io/reybots/benefitCheckmark.png" />
                                    </div>
                                    <p>Appreciation plaque that can be displayed at your business!</p>
                                </div>
                                <div className="pricingComponentBenefit">
                                    <div>
                                        <img src="https://kaipereira.github.io/reybots/benefitCheckmark.png" />
                                    </div>
                                    <p>Photo with the Reybots team!</p>
                                </div>
                            </div>
                            <Link href="/get-started">
                                <button className="pricingComponentButton">Get Started</button>
                            </Link>
                        </div>
                    </div>

                    <div className="pricingComponent pricingComponentGold">
                        <div className="pricingComponentRelative">
                            <div className="pricingComponentSubheader">GOLD</div>
                            <div className="pricingComponentPricing">
                                <p className="pricingComponentPricingHeader">$1000</p>
                                <p className="pricingComponentPricingToAndYear">+ / Year</p>
                            </div>
                            <div className="seperationLine"></div>
                            <div className="pricingComponentBenefits">
                                <div className="pricingComponentBenefit">
                                    <div>
                                        <img src="https://kaipereira.github.io/reybots/benefitCheckmark.png" />
                                    </div>
                                    <p>Place on the homepage for your company logo and active link!</p>
                                </div>
                                <div className="pricingComponentBenefit">
                                    <div>
                                        <img src="https://kaipereira.github.io/reybots/benefitCheckmark.png" />
                                    </div>
                                    <p>Inclusion in any social media posts as a logo!</p>
                                </div>
                                <div className="pricingComponentBenefit">
                                    <div>
                                        <img src="https://kaipereira.github.io/reybots/benefitCheckmark.png" />
                                    </div>
                                    <p>Appreciation plaque that can be displayed at your business!</p>
                                </div>
                                <div className="pricingComponentBenefit">
                                    <div>
                                        <img src="https://kaipereira.github.io/reybots/benefitCheckmark.png" />
                                    </div>
                                    <p>Team robot demonstration at place of business</p>
                                </div>
                                <div className="pricingComponentBenefit">
                                    <div>
                                        <img src="https://kaipereira.github.io/reybots/benefitCheckmark.png" />
                                    </div>
                                    <p>Photo with the Reybots team!</p>
                                </div>
                            </div>
                            <Link href="/get-started">
                                <button className="pricingComponentButton">Get Started</button>
                            </Link>
                        </div>
                    </div>

                    <div className="pricingComponent pricingComponentPlatinum">
                        <div className="pricingComponentRelative">
                            <div className="pricingComponentSubheader">PLATINUM</div>
                            <div className="pricingComponentPricing">
                                <p className="pricingComponentPricingHeader">$5000</p>
                                <p className="pricingComponentPricingToAndYear">+ / Year</p>
                            </div>
                            <div className="seperationLine"></div>
                            <div className="pricingComponentBenefits">
                                <div className="pricingComponentBenefit">
                                    <div>
                                        <img src="https://kaipereira.github.io/reybots/benefitCheckmark.png" />
                                    </div>
                                    <p>Extra large logo of business on our robot and on our t-shirt design!</p>
                                </div>
                                <div className="pricingComponentBenefit">
                                    <div>
                                        <img src="https://kaipereira.github.io/reybots/benefitCheckmark.png" />
                                    </div>
                                    <p>Seperate primary sponsor banner at competition and outreach!</p>
                                </div>
                                <div className="pricingComponentBenefit">
                                    <div>
                                        <img src="https://kaipereira.github.io/reybots/benefitCheckmark.png" />
                                    </div>
                                    <p>Special mention and shoutout as a major sponsor in any of our Media posts and Videos!</p>
                                </div>
                                <div className="pricingComponentBenefit">
                                    <div>
                                        <img src="https://kaipereira.github.io/reybots/benefitCheckmark.png" />
                                    </div>
                                    <p>Appreciation plaque that can be displayed at your business!</p>
                                </div>
                                <div className="pricingComponentBenefit">
                                    <div>
                                        <img src="https://kaipereira.github.io/reybots/benefitCheckmark.png" />
                                    </div>
                                    <p>Place on the homepage for your company logo and active link!</p>
                                </div>
                                <div className="pricingComponentBenefit">
                                    <div>
                                        <img src="https://kaipereira.github.io/reybots/benefitCheckmark.png" />
                                    </div>
                                    <p>Team robot demonstration at place of business</p>
                                </div>
                                <div className="pricingComponentBenefit">
                                    <div>
                                        <img src="https://kaipereira.github.io/reybots/benefitCheckmark.png" />
                                    </div>
                                    <p>Photo with the Reybots team!</p>
                                </div>
                            </div>
                            <Link href="/get-started">
                                <button className="pricingComponentButton">Get Started</button>
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    )
}

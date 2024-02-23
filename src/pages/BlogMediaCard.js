import React from "react";
import { Row, Col } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import NavigationLinks from "../components/NavigationLinks";
import Footer from "../components/Footer";
import "./Gallery.css";
import "./BlogMediaCard.css";

const BlogMediaCard = () => {    
    const blogHeading = "Carla’s Journey: Empowering Youth, Advocating for Change, and Mastering the Art of Debate";
    const blogMediaCover= '/blog-media-card-cover-default.jpg'

    return (
    
        <div class="home">
            <section className="top-level">
                <div className="figma-logo" style={{gap: '25px'}}>
                    <NavigationLinks />
                    
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li >
                                <a href="/" style={{fontSize:'30px'}}>
                                    <img src="/home.png">
                                    </img>
                                </a>
                            </li>      
                            <li class="breadcrumb-item"></li>                      
                            <li class=" active" style={{fontSize: '18px', color:'#F1B537', marginTop:'15px' }} >  Blog & Media  </li>
                            <li class="breadcrumb-item"></li>                      
                            <li class=" active" style={{fontSize: '18px', color:'#878D92', marginTop:'15px' }} >  {blogHeading}  </li>
                        </ol>
                    </nav>
                </div>

                
            </section>


            <Container>
                <Row >
                    <Col xs="12" md='2' lg='2' className=" fusion-layout-column"> 
                        <span className="fusion-imageframe">
                            <img src={blogMediaCover} alt="" className="blog-media-card-cover-img"></img>
                        </span>
                    </Col>
                    <Col className="blog-media-col2">
                        <Row>
                            <p className="blog-media-col2-para">{blogHeading}</p>
                        </Row>
                        <Row>                        
                            <p className="blog-media-content-para">
                                <span>
                                <img src="/Carla’s-Journey.jpeg" className="carla-journeys" />
                                Carla Bartoli, a passionate and ambitious Grade 11 student from the International School of Palermo, Italy, discovered her love for leadership, public speaking, and global politics in a small town in Sicily. Despite limited opportunities in her hometown, Carla’s determination to make a difference led her to pursue various initiatives and advocate for causes close to her heart. One such cause is the participation of young women in politics, which she believes is essential for shaping a better future. Let’s delve into Carla’s journey, her accomplishments, and the invaluable lessons she learned along the way.
                                </span>
                            </p>
                            
                            <p className="blog-media-content-para">
                                <b>The Debating Boot Camp Experience:</b>
                            </p>

                            <p className="blog-media-content-para mt-1">
                                <span>
                                Carla had the privilege of attending the Debating Boot Camp by Harvard Student Agencies. This experience was instrumental in honing her debating skills, gaining global perspectives, and meeting like-minded individuals from around the world. The program emphasized the importance of research, constructing compelling arguments, and effectively countering opponents’ claims. The skills Carla acquired during the boot camp have since helped her excel in debates and discussions, both academically and in advocacy work.
                                </span>
                            </p>                            

                            <p className="blog-media-content-para">
                                <b>Carla interacting with Enrico Letta, ex-Italian prime minister and ex-secretary of the democratic party in Italy</b>
                                <b>Discovering a Passion for Advocacy:</b>
                            </p>
                            
                            <p className="blog-media-content-para mt-1">
                                <span>Growing up in Favara, a town near Agrigento, Sicily, Carla cherished the warm weather, friendly people, and close-knit community. However, she soon realized that her town lacked opportunities for personal and intellectual growth. Eager to expand her horizons, Carla made the bold decision to move abroad and pursue an exchange program in France. This experience sparked her interest in politics, international relations, and women’s empowerment.</span>
                            </p>

                            <p className="blog-media-content-para">
                                <b>The Power of Everyday Politics:</b>
                            </p>
                            <p className="blog-media-content-para mt-1">
                                <span>Carla firmly believes that one doesn’t need to be a politician to make a difference in politics. She learned that politics encompasses every aspect of our lives and that everyone has the power to effect change. Carla shares a heartwarming example from her own life, where she organized a successful fundraising campaign to help Ukrainian refugees during the Russia-Ukraine conflict. By leveraging social media and mobilizing the local community, she managed to raise funds and arrange transportation for these displaced individuals, ultimately connecting them with Sicilian families.</span>
                            </p>
                            
                            <p className="blog-media-content-para">
                                <b>Motivating Others to Take Action</b>
                                <span>
                                    <img src="/Carla’s-Journey-2.jpeg" className="carla-journeys" />                                    
                                    When it comes to motivating others to take action, Carla emphasizes the importance of having a support system. Her friends and family played a crucial role in encouraging her to pursue her dreams and make a positive impact. Carla’s advice to young students is to not be afraid of failure and to keep trying. She believes that failure is just a stepping stone toward success and that perseverance is key. By learning from those who excel and continuously challenge themselves, anyone can contribute meaningfully to society.
                                </span>
                            </p>

                            <p className="blog-media-content-para">
                                <b>Overcoming Challenges:</b>                                
                            </p>
                            
                            <p className="blog-media-content-para mt-1">
                                <span>Following her dreams wasn’t without challenges for Carla. Moving abroad and living independently presented difficulties, particularly the sense of loneliness and the absence of an adult figure for guidance. Yet, Carla’s unwavering determination and the support of her loved ones helped her overcome these obstacles. She advises others to embrace challenges as opportunities for personal growth and learning. Carla’s mother instilled in her the belief that learning never stops, and even when surrounded by more accomplished people, there is always something to be gained.</span>
                            </p>

                            <p className="blog-media-content-para">
                                <span>Carla’s journey serves as an inspiration to youth worldwide, showcasing the power of determination, compassion, and the pursuit of knowledge. From her small town in Sicily to international platforms, she continues to advocate for women’s participation in politics, raise awareness about global issues, and empower others to take action. Calra’s story is a testament to the fact that age and circumstances should never limit one’s ability to create positive change.</span>
                            </p>


                        </Row>
                    </Col>
                </Row>
            </Container>
            

            <Footer /> 

        </div>
    )
  };
  
  export default BlogMediaCard;
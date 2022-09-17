import React from 'react'
import "./home.css"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
export default function Home() {
    return (
        <>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 col-lg-6 d-flex justify-content-center offset-sm-3 ">
                        <div className="card my-3">
                            <div className="card-body">
                                <div className="d-flex justify-content-center my-3">
                                    <img className='img-fluid rounded-3 ho' src="https://www.verywellmind.com/thmb/FB1FgYH2cYKRDUmxZmjTlNu7wJI=/330x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/IMG_9791-89504ab694d54b66bbd72cb84ffb860e.jpg" alt="" />
                                </div>
                                <div className=" p-4">
                                    <h1>Kendra Cherry</h1>
                                    <div><strong>Education qualification</strong> Boise State University, Idaho State University
                                    </div>
                                    <div>
                                        <strong>Speciality</strong>  Psychology, Child Psychology, Personality, Research
                                    </div>
                                    <div><strong>Experience</strong>Kendra Cherry, MS, is an author and educator with more than 15 of years experience helping students make sense of psychology.</div>
                                    <button type="button" class="ho btn btn-info mt-3">Book Clinic Visit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-lg-6  offset-sm-3 ">
                        <Tabs className='mt-3'>
                            <Tab className='bg-light p-5' eventKey="home" title="Highlights">
                                <h5>Author of the "Everything Psychology Book (2nd Edition)"
                                    Educational consultant and speaker focused on helping students learn about and enjoy psychology
                                    As a psychosocial rehabilitation specialist, helped children suffering from emotional disturbances to overcome maladaptive behaviors</h5>
                            </Tab>
                            <Tab className='bg-light p-5' eventKey="profile" title="Experience">
                                <h5>As a psychosocial rehabilitation specialist, Kendra utilized behavioral, cognitive, and socialization strategies to help her young clients cope with family relationships, peer interactions, aggression, social skills, and academic difficulties. Her work has been referenced by numerous media outlets and publications including The New York Times, CNN, Psychology Today, The Telegraph, The Huffington Post, Business Insider, and The Guardian.
                                    She is also the founder of Explore Psychology, an educational website that offers study guides and resources for psychology students.</h5>
                            </Tab>
                            <Tab className='bg-light p-5' eventKey="contact" title="About Verywell Mind">
                                <h5>Verywell Mind, a Dotdash Meredith Brand, is an award-winning, trusted, and compassionate online resource that provides the guidance you need to improve your mental health and find balance. We take a human approach to health and wellness, and reach more than 150 million readers annually. Verywell Mind content is fact checked and reviewed by our Review Board for accuracy and integrity. Learn more about us and our editorial process.</h5>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-lg-6  offset-sm-3 my-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex justify-content-center my-3">
                                    <img className='img-fluid rounded-3 ho' src="https://static.medmonks.com/home/img/doctors/1548739534.jpeg" alt="" />
                                </div>
                                <div className="p-4">
                                    <h1>Dr.Vishal Chhabra</h1>
                                    <div><strong>Education qualification</strong>  MBBS │ DNB│ DPM
                                    </div>
                                    <div>
                                        <strong>Speciality</strong>  Psychology, Child Psychology, Personality, Research
                                    </div>
                                    <div><strong>Experience</strong> 17 Years</div>
                                    <button type="button" class="ho btn btn-info mt-3">Book Clinic Visit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 offset-sm-3 col-lg-6">
                        <Tabs className='mt-4'>
                            <Tab className='bg-light p-5' eventKey="home" title="Professional statement">
                                <h4>MBBS DNB DPM - Psychiatry</h4>

                                <h5>Dr. Vishal Chhabra is a Senior Consultant Psychiatrist.</h5>
                                <h5>He did his graduation (MBBS) and post graduation (DPM & DNB Psychiatry) from KMC Manipal.</h5>
                                <h5>He carries out patient awareness programs within the community.</h5>

                            </Tab>
                            <Tab className='bg-light p-5' eventKey="profile" title="Education">
                                <h5>
                                    <div>MBBS DNB DPM - Psychiatry</div>
                                    <div>MBBS - Kasturba Medical College, 2000</div>
                                    <div>DPM (Psychiatry) - Kasturba Medical College, 2002</div>
                                    <div>DNB - Psychiatry - Kasturba Medical College, 2005</div>
                                </h5>
                            </Tab>
                            <Tab className='bg-light p-5' eventKey="contact" title="About Verywell Mind">
                                <h5>Verywell Mind, a Dotdash Meredith Brand, is an award-winning, trusted, and compassionate online resource that provides the guidance you need to improve your mental health and find balance. We take a human approach to health and wellness, and reach more than 150 million readers annually. Verywell Mind content is fact checked and reviewed by our Review Board for accuracy and integrity. Learn more about us and our editorial process.</h5>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-lg-6 offset-sm-3">
                        <div className="card my-5">
                            <div className="card-body">
                                <div className="d-flex justify-content-center my-3">
                                    <img className='rounded-3m ho' height={300} width={270} src="https://static.medmonks.com/home/img/doctors/1560488323.jpg" alt="" />
                                </div>
                                <div className="p-4">
                                    <h1>Dr. Gorav Gupta</h1>
                                    <div><strong>Education qualification</strong>  MBBS │ DNB│ DPM
                                    </div>
                                    <div>
                                        <strong>Speciality</strong>  Psychology, Child Psychology, Personality, Research
                                    </div>
                                    <div><strong>Experience</strong> 17 Years</div>
                                    <button type="button" class="ho btn btn-info mt-3">Book Clinic Visit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-lg-6 offset-sm-3">
                        <Tabs className='mt-3'>
                            <Tab className='bg-light p-5' eventKey="home" title="Professional statement">
                                <h4>MBBS DNB DPM - Psychiatry</h4>

                                <h5>Dr. Vishal Chhabra is a Senior Consultant Psychiatrist.</h5>
                                <h5>He did his graduation (MBBS) and post graduation (DPM & DNB Psychiatry) from KMC Manipal.</h5>
                                <h5>He carries out patient awareness programs within the community.</h5>
                            </Tab>
                            <Tab className='bg-light p-5' eventKey="profile" title="Education">
                                <h5>
                                    <div>MBBS DNB DPM - Psychiatry</div>
                                    <div>MBBS - Kasturba Medical College, 2000</div>
                                    <div>DPM (Psychiatry) - Kasturba Medical College, 2002</div>
                                    <div>DNB - Psychiatry - Kasturba Medical College, 2005</div>
                                </h5>
                            </Tab>
                            <Tab className='bg-light p-5' eventKey="contact" title="About Verywell Mind">
                                <h5>Verywell Mind, a Dotdash Meredith Brand, is an award-winning, trusted, and compassionate online resource that provides the guidance you need to improve your mental health and find balance. We take a human approach to health and wellness, and reach more than 150 million readers annually. Verywell Mind content is fact checked and reviewed by our Review Board for accuracy and integrity. Learn more about us and our editorial process.</h5>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>

        </>
    )
}

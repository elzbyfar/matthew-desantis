import React, { useState } from 'react';
import Images from '../Helpers/Images';

import Bio from '../Components/About/Bio';
import Press from '../Components/About/Press';
import Contact from '../Components/Book/Contact';
import Gallery from '../Components/About/Gallery';
import Music from '../Components/Catalogue/Music';
import Video from '../Components/Catalogue/Video';

import Schedule from '../Components/Book/Schedule';
import Navigation from '../NavBars/Navigation';
import FooterInfo from '../Components/FooterInfo';
import BookSidebar from '../NavBars/BookSidebar';
import Testimonials from '../Components/About/Testimonials';
import AboutSidebar from '../NavBars/AboutSidebar';
import CatalogueSidebar from '../NavBars/CatalogueSidebar';

import '../Styles/HomeContainer.css';

const HomeContainer = () => {
	const [ about, setAbout ] = useState(false);
	const [ bio, setBio ] = useState(true);
	const [ gallery, setGallery ] = useState(false);
	const [ press, setPress ] = useState(false);
	const [ testimonials, setTestimonials ] = useState(false);

	const [ book, setBook ] = useState(false);
	const [ schedule, setSchedule ] = useState(true);
	const [ contact, setContact ] = useState(false);

	const [ catalogue, setCatalogue ] = useState(false);
	const [ music, setMusic ] = useState(true);
	const [ videos, setVideos ] = useState(false);

	return (
		<div className="home-container-container">
			<div className="home-body">
				<img src={Images.logo} className={about || book || catalogue ? 'small-logo' : 'logo'} />
				<div className={about || book || catalogue ? 'content' : 'content-closed'}>
					{about && (
						<div className="about-content-container">
							<AboutSidebar
								bio={bio}
								gallery={gallery}
								press={press}
								testimonials={testimonials}
								setBio={setBio}
								setGallery={setGallery}
								setPress={setPress}
								setTestimonials={setTestimonials}
							/>
							<div className="about-content">
								{bio && <Bio />}
								{gallery && <Gallery />}
								{press && <Press />}
								{testimonials && <Testimonials />}
							</div>
						</div>
					)}

					{book && (
						<div className="about-content-container">
							<BookSidebar
								schedule={schedule}
								contact={contact}
								setSchedule={setSchedule}
								setContact={setContact}
							/>
							<div className="about-content">
								{schedule && <Schedule />}
								{contact && <Contact />}
							</div>
						</div>
					)}

					{catalogue && (
						<div className="about-content-container">
							<CatalogueSidebar 
								music={music} 
								videos={videos} 
								setMusic={setMusic} 
								setVideos={setVideos} 
							/>
							<div className="about-content">
								{music && <Music />}
								{videos && <Video />}
							</div>
						</div>
					)}
				</div>
				<Navigation
					about={about}
					book={book}
					catalogue={catalogue}
					setAbout={setAbout}
					setBook={setBook}
					setCatalogue={setCatalogue}
				/>
			</div>
			<FooterInfo />
		</div>
	);
};

export default HomeContainer;

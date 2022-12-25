import React, { useState } from "react";
import Modal from "./Modal/Modal";

function id() { 
	let d = new Date().getTime();//Timestamp
	let d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		let r = Math.random() * 16;
		if(d > 0){
			r = (d + r)%16 | 0;
			d = Math.floor(d/16);
		} else {
			r = (d2 + r)%16 | 0;
			d2 = Math.floor(d2/16);
		}
		return (c === 'x' ? r : (r && 0x3 | 0x8)).toString(16);
	});
}

const arr = [
		{
			id: id(),
			gunre: 'punk',
			show: false,
			track: 'Joan Jett - Bad Reputation',
			src: './audio/punk/01.mp3',
			info: 'Punk rock (also known as simply punk) is a music genre that emerged in the mid-1970s. Rooted in 1960s garage rock, punk bands rejected the perceived excesses of mainstream 1970s rock music. They typically produced short, fast-paced songs with hard-edged melodies and singing styles, stripped-down instrumentation, and often shouted political, anti-establishment lyrics. Punk embraces a DIY ethic; many bands self-produce recordings and distribute them through independent record labels.',
		    img: './img/punk.jpg',
			bgColor: 'linear-gradient(269.85deg, #790000 0.13%, #1F1F1F 98.83%)',
		},
		{
			id: id(),
			gunre: 'grunge',
			show: false,
			track: 'Nirvana - In Bloom',
			src: './audio/grunge/01.mp3',
			info: 'Grunge is an alternative rock genre and subculture that emerged during the mid-1980s in the American Pacific Northwest state of Washington, particularly in Seattle and nearby towns. Grunge fuses elements of punk rock and heavy metal, but without punk structure and speed. The genre featured the distorted electric guitar sound used in both genres, although some bands performed with more emphasis on one or the other. Like these genres, grunge typically uses electric guitar, bass guitar, drums and vocals. Grunge also incorporates influences from indie rock bands such as Sonic Youth.',
			img: './img/grunge.jpg',
			bgColor: 'linear-gradient(269.85deg, black 0.13%, #1F1F1F 98.83%)',
		},
		{
			id: id(),
			gunre: 'lo-fi',
			show: false,
			track: 'Catholic Spray - Amazon Hunt',
			src: './audio/lo-fi/01.mp3',
			info: 'Lo-fi (also typeset as lofi or low-fi; short for low fidelity) is a music or production quality in which elements usually regarded as imperfections in the context of a recording or performance are present, sometimes as a deliberate choice. The standards of sound quality (fidelity) and music production have evolved throughout the decades, meaning that some older examples of lo-fi may not have been originally recognized as such. Lo-fi began to be recognized as a style of popular music in the 1990s, when it became alternately referred to as DIY music (from "do it yourself").',
			img: './img/lo-fi.jpg',
			bgColor:"linear-gradient(269.85deg, #1a4653 0.13%, #1F1F1F 98.83%)",
		},
		{
			id: id(),
			gunre: 'idm',
			show: false,
			track: 'АЛ90 - Векторная Эйфория',
			src: './audio/idm/01.mp3',
			info: 'Intelligent dance music (commonly abbreviated as IDM) is a style of electronic music originating in the early 1990s, defined by idiosyncratic experimentation rather than specific genre constraints. It emerged from the culture and sound palette of electronic and rave music styles such as ambient techno, acid house, Detroit techno and breakbeat; it has been regarded as better suited to home listening than dancing.',
			img: './img/idm.jpg',
			bgColor:'linear-gradient(269.85deg, #3f5070 0.13%, #1F1F1F 98.83%)'
		},
		{
			id: id(),
			gunre: 'disco',
			show: false,
			track: 'Patrick Cowley, Sylvester - Do you Wanna Funk',
			src: './audio/disco/01.mp3',
			info: 'Disco is a genre of dance music and a subculture that emerged in the 1970s from the United States urban nightlife scene. Its sound is typified by four-on-the-floor beats, syncopated basslines, string sections, horns, electric piano, synthesizers, and electric rhythm guitars.',
			img: './img/disco.jpg',
			bgColor:'linear-gradient(269.85deg, #312111 0.13%, #1F1F1F 98.83%)',
		},
		{
			id: id(),
			gunre: 'hardcore punk',
			show: false,
			track:'7Seconds - Skins, Brains  & Guts',
			src: './audio/hardcore punk/01.mp3',
			info: 'Hardcore punk (also known as simply hardcore) is a punk rock music genre and subculture that originated in the late 1970s. It is generally faster, harder, and more aggressive than other forms of punk rock. Its roots can be traced to earlier punk scenes in San Francisco and Southern California which arose as a reaction against the still predominant hippie cultural climate of the time. It was also inspired by Washington D.C. and New York punk rock and early proto-punk. Hardcore punk generally disavows commercialism, the established music industry and "anything similar to the characteristics of mainstream rock" and often addresses social and political topics with "confrontational, politically-charged lyrics."',
			img: './img/hardcore punk.jpg',
			bgColor: 'linear-gradient(269.85deg, black 0.13%, #1F1F1F 98.83%)',
		},
		{
			id: id(),
			gunre: 'happy hardcore',
			show: false,
			track: '3 Steps Ahead - Drop It',
			src: './audio/happy hardcore/01.mp3',
			info: 'Happy hardcore, also known as 4-beat or happycore, is a subgenre of hardcore dance music or "hard dance". It emerged both from the UK breakbeat hardcore rave scene, and Belgian, German and Dutch hardcore techno scenes in the early 1990s.',
			img: './img/happy hardcore.jpg',
			bgColor:'linear-gradient(269.85deg, rgb(129 0 83) 0.13%, rgb(31, 31, 31) 98.83%)',
		},
		
];

export default function App() {

const [show0, setShow0] = useState(false);
const [show1, setShow1] = useState(false);
const [show2, setShow2] = useState(false);
const [show3, setShow3] = useState(false);
const [show4, setShow4] = useState(false);
const [show5, setShow5] = useState(false);
const [show6, setShow6] = useState(false);


return (<div className="container">
<div className="content">
	<h1 className="content__logo">MUSIC</h1>
	<img className="content__cursor" src="./img/Group 1.svg" alt="/"></img>
	<p className="content__text">listen<br/> to your <br/>favorite <br/>tracks</p>
	<img className="content__cursor-two" src="./img/Group 2.svg" alt="/"></img>
	<p className="content__footer">ENJOY</p>
	
</div>
    <div className='items'>
      
        <button className="item-zero" onClick={() => setShow0(true)}>{arr[0].gunre}</button>
        <Modal 
		   title={arr[0].gunre} 
		   onClose={() => setShow0(false)} 
		   show={show0} 
		   info={arr[0].info}
		   src={arr[0].src}
		   image={arr[0].img}
		   bgColor={arr[0].bgColor}
		   track={arr[0].track}>
        </Modal>
     
        <button className="item-one" onClick={() => setShow1(true)}>{arr[1].gunre}</button>
        <Modal 
		   title={arr[1].gunre} 
		   onClose={() => setShow1(false)} 
		   show={show1} 
		   info={arr[1].info}
		   src={arr[1].src}
		   image={arr[1].img}
		   bgColor={arr[1].bgColor}
		   track={arr[1].track}>
        </Modal>

        <button className="item-two" onClick={() => setShow2(true)}>{arr[2].gunre}</button>
        <Modal 
		   title={arr[2].gunre} 
		   onClose={() => setShow2(false)} 
		   show={show2} 
		   info={arr[2].info}
		   src={arr[2].src}
		   image={arr[2].img}
		   bgColor={arr[2].bgColor}
		   track={arr[2].track}>
        </Modal>
 
        <button className="item-three" onClick={() => setShow3(true)}>{arr[3].gunre}</button>
        <Modal 
		   title={arr[3].gunre} 
		   onClose={() => setShow3(false)} 
		   show={show3} 
		   info={arr[3].info}
		   src={arr[3].src}
		   image={arr[3].img}
		   bgColor={arr[3].bgColor}
		   track={arr[3].track}>
        </Modal>
  
        <button className="item-four" onClick={() => setShow4(true)}>{arr[4].gunre}</button>
        <Modal 
		   title={arr[4].gunre} 
		   onClose={() => setShow4(false)} 
		   show={show4} 
		   info={arr[4].info}
		   src={arr[4].src}
		   image={arr[4].img}
		   bgColor={arr[4].bgColor}
		   track={arr[4].track}>
        </Modal>

        <button className="item-five" onClick={() => setShow5(true)}>{arr[5].gunre}</button>
        <Modal 
		   title={arr[5].gunre} 
		   onClose={() => setShow5(false)} 
		   show={show5} 
		   info={arr[5].info}
		   src={arr[5].src}
		   image={arr[5].img}
		   bgColor={arr[5].bgColor}
		   track={arr[5].track}>
        </Modal>
  
        <button className="item-six" onClick={() => setShow6(true)}>{arr[6].gunre}</button>
        <Modal 
		   title={arr[6].gunre} 
		   onClose={() => setShow6(false)} 
		   show={show6} 
		   info={arr[6].info}
		   src={arr[6].src}
		   image={arr[6].img}
		   bgColor={arr[6].bgColor}
		   track={arr[6].track}>
        </Modal>
  
    </div>
	</div>
  );
}




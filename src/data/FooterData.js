import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const iconStyle = (Icon) => <Icon />;

export const footerSocialData1 = [
	{
		name: 'Facebook',
		icon: iconStyle(FaFacebook),
	},


];
export const footerSocialData2 = [
	{
		name: 'Instagram',
		icon: iconStyle(FaInstagram),
	},
];
export const footerSocialData3 = [
	{
		name: 'YouTube',
		icon: iconStyle(FaLinkedin),
	},
];


export const footerData = [
	{
		title: 'Main',
		links: ['Blog', 'FAQs', 'Support', 'About us'],
	},
	{
		title: 'Product',
		links: ['Login', 'Personal', 'Business', 'Team'],
	},
	{
		title: 'Press',
		links: ['Logos', 'Events', 'Stories', 'Office'],
	},
	{
		title: 'Legal',
		links: ['GDPR', 'Privacy Policy', 'Terms of Service', 'Disclaimer'],
	},
];
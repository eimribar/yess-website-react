import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';
import { SplitText } from 'gsap/SplitText';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { TextPlugin } from 'gsap/TextPlugin';
import { useGSAP } from '@gsap/react';

// Register all GSAP plugins
gsap.registerPlugin(ScrollTrigger, Flip, SplitText, ScrollSmoother, ScrollToPlugin, TextPlugin);

export { gsap, ScrollTrigger, Flip, SplitText, ScrollSmoother, ScrollToPlugin, TextPlugin, useGSAP };

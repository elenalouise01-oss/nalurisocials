// All site copy lives here, separated from presentation, so it can be
// updated without touching component code.

export const nav = {
  logo: 'naluri',
  tagline: 'Your Social Media Side Kick',
  links: [
    { label: 'Work With Me', href: '#work-with-me' },
    { label: 'About', href: '#about' },
    { label: 'Coming Soon', href: '#coming-soon' },
  ],
  cta: 'Apply Now',
};

export const announcement = {
  enabled: true,
  text: 'Applications are open — let’s build a presence that actually feels like you.',
  cta: { label: 'Apply Now', href: '#apply' },
};

export const hero = {
  eyebrow: 'Social media & content, built around you',
  headlineLines: ['Live Freely,', 'Create Confidently'],
  sub: 'Turn your story into content that connects — without chasing trends, burning out, or becoming a full-time influencer.',
  audience:
    'For entrepreneurs & personal brands who know they need to show up online… but don’t want social media to run their life.',
  ctaPrimary: 'Apply Now',
  ctaSecondary: 'Explore',
  marquee: ['Voice', 'Confidence', 'Consistency', 'Freedom', 'Clarity'],
  // Drop an .mp4 at public/videos/hero.mp4 and set this to '/videos/hero.mp4'
  // to swap the placeholder for a full-bleed background video.
  videoSrc: null as string | null,
};

export const problem = {
  label: 'The Cringe Cycle',
  headline: 'Social media matters. So why does posting feel like this?',
  intro: [
    'You know your business needs visibility.',
    'You know social media matters.',
    'But every time you go to post, you feel stuck.',
  ],
  advice: [
    {
      quote: '“Just be authentic!”',
      reality: '…but you freeze up on camera and hate your voice.',
    },
    {
      quote: '“Post consistently!”',
      reality: '…which feels like a second, unpaid job.',
    },
    {
      quote: '“Create viral content!”',
      reality: '…so you chase trends that have nothing to do with your real expertise.',
    },
  ],
  cycleLabel: 'This creates the',
  cycleName: 'Cringe Cycle',
  cycleSteps: ['Forced content', 'Awkward filming', 'Inconsistent posting', 'Attracting the wrong people'],
  closing: 'It’s exhausting.',
};

export const bigIdea = {
  kicker: 'The Big Idea',
  statement: 'You are the content.',
  substatement: ['Not the trends.', 'Not the hooks everyone’s recycling.', 'You.'],
  body: [
    'That’s what I believe social media should be built on: clarity, authenticity, and freedom — not hustle, performance, or constantly trying to keep up.',
    'You shouldn’t have to perform, chase trends, or spend hours every week trying to figure out what to post. Your content should sound like you, reflect what you actually do, and make it easier for the right people to find you.',
    'We’re not creating content for the sake of posting. We’re creating a presence that supports your business — and your life.',
  ],
};

export const transformation = {
  label: 'The Shift',
  headline: 'Imagine Instead…',
  items: [
    {
      number: '01',
      title: 'Clarity',
      body: 'You know what to post because you understand what parts of your life, work and experience are content.',
    },
    {
      number: '02',
      title: 'A Voice That Sounds Like You',
      body: 'Your content feels natural, recognisable and connected to your actual personality.',
    },
    {
      number: '03',
      title: 'Confidence',
      body: 'You can show up without overthinking every word, filming everything ten times or trying to sound like someone else.',
    },
    {
      number: '04',
      title: 'A Content Flow',
      body: 'Your ideas have somewhere to go. Content moves through a simple process rather than starting from zero every time.',
    },
    {
      number: '05',
      title: 'Freedom',
      body: 'Your social media supports your business and your life instead of consuming both.',
    },
  ],
};

export const mainOffer = {
  label: 'Work With Me',
  eyebrow: 'The Offer',
  headline: 'Human-First Social Media',
  lede:
    'You don’t need another generic content strategy. You need a social media presence that actually sounds like you.',
  body: [
    'Together, we’ll uncover your unique voice, clarify what you want to say, and turn your stories, expertise, personality and everyday business moments into content that connects.',
    'I’ll work alongside you to create, refine and build your confidence — while developing a simple content flow that makes showing up consistently feel easier, not heavier.',
  ],
  cta: 'Apply Now',
};

export const chapters = <const>[
  {
    number: '01',
    tag: 'Find Your Voice',
    headline:
      'We’ll uncover your stories, values, personality and perspective, then turn them into a clear brand voice and content direction you can actually use.',
    clarityLabel: 'You’ll gain clarity around',
    clarityLines: ['what to say', 'how to say it', 'what makes your voice different'],
    includes: [
      'Voice & story discovery',
      'Brand voice & messaging',
      'Social media content audit',
      'Content pillars',
      'Messaging direction',
    ],
  },
  {
    number: '02',
    tag: 'Build Confidence',
    headline:
      'This is where we get out of your head and into action. We’ll create content together, work through perfectionism and awkwardness, and help you become more natural with storytelling, filming, hooks and showing up online.',
    includes: [
      'Content strategy',
      'Co-creating content',
      'Storytelling',
      'Hooks',
      'Caption development',
      'Camera confidence',
      'Filming support',
      'Content creation feedback',
      'Accountability',
    ],
    statement: 'You don’t need to become an influencer. You just need to become comfortable being yourself.',
  },
  {
    number: '03',
    tag: 'Stay Consistent',
    headline:
      'Once your voice and confidence are there, we build a content flow that makes showing up consistently much easier.',
    body: 'We’ll streamline the entire process — from capturing ideas and turning them into content, through to refining, repurposing and getting posts ready to go.',
    automation: {
      label: 'Where something can be automated:',
      statement: 'we automate it.',
    },
    goal: 'The goal is to create a content pipeline that keeps moving without you having to start from scratch every time.',
    builtAroundLabel: 'The system is built around',
    builtAround: ['your voice', 'your ideas', 'your brand'],
    caveat: 'Automation should never make the content feel robotic or generic.',
    statement: 'The system does the heavy lifting. You stay in control of the voice.',
    includes: [
      'Content system development',
      'Content workflows',
      'AI-powered content workflows',
      'Automated content pipelines',
      'Repurposing systems',
      'Content refinement',
      'Strategic check-ins',
      'Ongoing support',
    ],
  },
];

export const inclusions = {
  label: 'What Working With Me Can Include',
  intro: 'This is a collaborative service, not a rigid package — the exact combination depends on you.',
  items: [
    'Voice & Story Discovery',
    'Brand Voice & Messaging',
    'Content Strategy',
    'Content Pillars & Ideas',
    'Co-Creating Content',
    'Storytelling & Hooks',
    'Camera Confidence',
    'Content Creation',
    'Content Feedback',
    'Automated Content Pipelines',
    'AI-Powered Workflows',
    'Content Systems',
    'Ongoing Refinement',
    'Accountability',
  ],
};

export const outcome = {
  label: 'The Outcome',
  headline: 'The goal isn’t to create more content.',
  statement: 'It’s to create better content, more naturally — in a way you can actually sustain.',
  stops: [
    'You stop wondering what to post.',
    'You stop trying to sound like everyone else.',
    'You stop overthinking every piece of content.',
  ],
  insteadLabel: 'Instead, you have:',
  instead: [
    'A clear voice.',
    'A content direction that feels like you.',
    'A system that keeps content moving.',
    'A way to show up consistently without social media taking over your life.',
  ],
};

export const about = {
  label: 'About Elena',
  greeting: 'Hi, I’m Elena.',
  intro: [
    'I grew an audience of 30,000+ combined on Instagram and TikTok by posting every day, chasing trends, and performing.',
    'It worked. But the cost was my freedom. I was building a performance, not a life.',
  ],
  shift:
    'Everything shifted when I stopped chasing the algorithm and started speaking directly to one person. I got clear, showed my real life, shared my truth — and started attracting people who actually resonated.',
  pullquote: 'I posted less. Worked less. And built more.',
  closing: [
    'That’s what I want for you too.',
    'Not hustle. Not performance. Not creating content for the sake of creating content.',
  ],
  finalLine: 'A presence that supports the life you want.',
};

export const testimonials = [
  {
    quote:
      'For the first time, my content actually sounds like me. I stopped dreading posting and started looking forward to it.',
    name: 'Client Name',
    role: 'Founder, Placeholder Studio',
    placeholder: true,
  },
  {
    quote:
      'Elena helped me get out of my own head. I went from overthinking every caption to having a system that just works.',
    name: 'Client Name',
    role: 'Coach & Personal Brand',
    placeholder: true,
  },
  {
    quote:
      'I show up consistently now without it taking over my week. My content finally feels sustainable — and like me.',
    name: 'Client Name',
    role: 'Entrepreneur',
    placeholder: true,
  },
];

export const finalCta = {
  headline: 'Ready to show up online in a way that actually feels like you?',
  body: 'Let’s create a social presence that connects with the right people — without losing yourself in the process.',
  ctaPrimary: 'Apply Now',
  ctaSecondary: 'DM Me',
  supporting: 'Apply now or DM me to learn more and see if we’re the right fit.',
};

export const comingSoon = {
  label: 'Coming Soon',
  headline: 'Something for the not-yet-ready-for-1:1 season.',
  body: 'Self-paced resources, digital tools and frameworks designed to help you create more confidently, build better content systems and use AI to streamline your content without losing your voice.',
  note: 'Not available yet — this is what’s brewing.',
};

export const footer = {
  tagline: 'You are the content.',
  ctaLabel: 'Ready to talk?',
  cta: 'Apply Now',
  socials: [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'TikTok', href: 'https://tiktok.com' },
  ],
  legal: `© ${new Date().getFullYear()} Naluri Socials. All rights reserved.`,
};

const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, LevelFormat, PageBreakBefore } = require('docx');
const fs = require('fs');
const path = require('path');

// CCPSA Colors
const colors = {
  navy: '1A3050',
  blue: '4A6E91',
  amber: 'AA9070',
  darkGray: '2C3E50',
  lightGray: 'F5F5F5',
  white: 'FFFFFF',
  black: '000000'
};

// Helper functions for consistent styling
const heading1 = (text) => new Paragraph({
  heading: HeadingLevel.HEADING_1,
  spacing: { before: 240, after: 120 },
  children: [
    new TextRun({
      text: text,
      bold: true,
      size: 32,
      color: colors.navy,
      font: 'Calibri'
    })
  ]
});

const heading2 = (text) => new Paragraph({
  heading: HeadingLevel.HEADING_2,
  spacing: { before: 160, after: 100 },
  children: [
    new TextRun({
      text: text,
      bold: true,
      size: 28,
      color: colors.blue,
      font: 'Calibri'
    })
  ]
});

const heading3 = (text) => new Paragraph({
  heading: HeadingLevel.HEADING_3,
  spacing: { before: 120, after: 80 },
  children: [
    new TextRun({
      text: text,
      bold: true,
      size: 26,
      color: colors.darkGray,
      font: 'Calibri'
    })
  ]
});

const bodyText = (text) => new Paragraph({
  spacing: { after: 100, line: 360, lineRule: 'auto' },
  children: [
    new TextRun({
      text: text,
      size: 24,
      color: colors.black,
      font: 'Calibri'
    })
  ]
});

const bulletPoint = (text) => new Paragraph({
  numbering: { reference: 'bullets', level: 0 },
  spacing: { after: 80, line: 360, lineRule: 'auto' },
  children: [
    new TextRun({
      text: text,
      size: 24,
      color: colors.black,
      font: 'Calibri'
    })
  ]
});

const subbulletPoint = (text) => new Paragraph({
  numbering: { reference: 'bullets', level: 1 },
  spacing: { after: 60, line: 360, lineRule: 'auto' },
  children: [
    new TextRun({
      text: text,
      size: 24,
      color: colors.black,
      font: 'Calibri'
    })
  ]
});

const spacer = () => new Paragraph({
  spacing: { after: 100 },
  children: [new TextRun({ text: '' })]
});

// Page break using pageBreakBefore
const pageBreak = () => new Paragraph({
  pageBreakBefore: true,
  children: [new TextRun({ text: '' })]
});

// Title page
const titlePageElements = [
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 600, after: 200 },
    children: [
      new TextRun({
        text: 'CCPSA Website',
        bold: true,
        size: 56,
        color: colors.navy,
        font: 'Calibri'
      })
    ]
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 400 },
    children: [
      new TextRun({
        text: 'Next.js Conversion Roadmap',
        bold: true,
        size: 48,
        color: colors.blue,
        font: 'Calibri'
      })
    ]
  }),
  spacer(),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 80 },
    children: [
      new TextRun({
        text: 'Strategic Planning Document',
        italic: true,
        size: 28,
        color: colors.darkGray,
        font: 'Calibri'
      })
    ]
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 20 },
    children: [
      new TextRun({
        text: 'Critical Care Pulmonary and Sleep Associates',
        size: 24,
        color: colors.darkGray,
        font: 'Calibri'
      })
    ]
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 600 },
    children: [
      new TextRun({
        text: 'March 2026',
        size: 24,
        color: colors.darkGray,
        font: 'Calibri'
      })
    ]
  })
];

// Purpose section - starts on new page
const purposeElements = [
  pageBreak(),
  heading1('Purpose'),
  bodyText('This document outlines what a Next.js conversion involves, when to consider it, and estimated scope. It serves as a reference for future planning.'),
  bodyText('The CCPSA website currently runs as a static HTML site hosted on Vercel. A Next.js conversion would modernize the technical foundation, enabling dynamic content management, improved performance, and simplified editing workflows for non-technical staff.'),
  spacer()
];

// When to Consider Converting section
const whenToConvertElements = [
  heading1('When to Consider Converting'),
  bodyText('A Next.js conversion becomes justified when one or more of the following conditions apply:'),
  bulletPoint('You want a blog or news section with regularly updated content'),
  bulletPoint('You want a CMS visual editor (like WordPress) for non-technical editing'),
  bulletPoint('You need server-side functionality (appointment booking, patient intake forms that write to a database)'),
  bulletPoint('You want per-page SEO metadata and structured data (Schema.org)'),
  bulletPoint('You are managing 10+ pages and content changes are frequent'),
  bulletPoint('You want built-in image optimization (auto-resizing, WebP conversion)'),
  spacer()
];

// What the Conversion Involves section
const conversionScopeElements = [
  heading1('What the Conversion Involves'),
  bodyText('A full Next.js conversion encompasses the following technical scope:'),
  heading2('Technical Implementation'),
  bulletPoint('Convert 4 HTML pages into React components (.tsx files)'),
  bulletPoint('Set up Next.js 14 project with App Router'),
  bulletPoint('Extract shared components (Header, Footer, Navigation) into reusable modules'),
  bulletPoint('Move provider data from inline JavaScript to a data file (JSON or CMS)'),
  bulletPoint('Configure Tailwind CSS as a build-time dependency (replacing CDN)'),
  heading2('Content Management & Publishing'),
  bulletPoint('Set up a headless CMS (recommended: Sanity, Contentful, or Decap CMS) for visual editing'),
  bulletPoint('Implement image optimization with next/image'),
  bulletPoint('Add SEO metadata and Schema.org structured data'),
  heading2('Deployment & Testing'),
  bulletPoint('Test and deploy to Vercel (zero-downtime swap)'),
  spacer()
];

// Timeline and Cost section
const timelineCostElements = [
  heading1('Estimated Timeline and Cost'),
  heading2('Self-Service (AI-Assisted)'),
  subbulletPoint('Duration: 2-4 sessions with Claude or similar AI assistant'),
  subbulletPoint('Cost: No direct cost (beyond AI tool subscription if you use one)'),
  subbulletPoint('Best for: Teams comfortable with technical review and iteration'),
  heading2('Freelance Developer'),
  subbulletPoint('Duration: 20-40 hours of development time'),
  subbulletPoint('Cost: $2,000–$5,000 estimated (varies by experience and location)'),
  subbulletPoint('Best for: Organizations wanting hands-on expertise without long-term commitment'),
  heading2('Agency/Full Service'),
  subbulletPoint('Duration: 4-8 weeks with ongoing support'),
  subbulletPoint('Cost: $5,000–$15,000 with ongoing maintenance contract'),
  subbulletPoint('Best for: Organizations wanting managed transition and post-launch support'),
  bodyText('Note: These are rough estimates and vary significantly based on final scope, CMS choice, and feature complexity.'),
  spacer()
];

// CMS Options section
const cmsElements = [
  heading1('Recommended CMS Options'),
  bodyText('After conversion, a CMS enables non-technical staff to edit content through a visual editor rather than code. Here are the top options:'),
  heading2('Sanity.io'),
  subbulletPoint('Visual editor with flexible schema design'),
  subbulletPoint('Generous free tier (up to 5 concurrent users)'),
  subbulletPoint('Excellent developer experience and documentation'),
  subbulletPoint('Recommendation: Best balance of ease-of-use and capability for CCPSA'),
  heading2('Decap CMS'),
  subbulletPoint('Open source—no external vendor'),
  subbulletPoint('Sits on top of Git (syncs with GitHub automatically)'),
  subbulletPoint('No separate hosting needed'),
  subbulletPoint('Best for: Organizations with developer resources and preference for open-source tools'),
  heading2('Contentful'),
  subbulletPoint('Enterprise-grade API and content model flexibility'),
  subbulletPoint('More complex setup but very capable'),
  subbulletPoint('Higher cost than Sanity'),
  subbulletPoint('Best for: Large organizations with complex content structures'),
  bodyText('Recommendation: Sanity.io provides the best balance for CCPSA\'s use case.'),
  spacer()
];

// What You Keep section
const whatYouKeepElements = [
  heading1('What You\'d Keep'),
  bodyText('A Next.js conversion preserves everything your organization values about the current website:'),
  bulletPoint('All current design and branding (colors, layout, typography)'),
  bulletPoint('All provider data and photographs'),
  bulletPoint('Vercel hosting and GitHub repository'),
  bulletPoint('Domain configuration'),
  spacer()
];

// Changes for Staff section
const staffChangesElements = [
  heading1('What Changes for Staff'),
  heading2('With a CMS (Recommended)'),
  bodyText('Editing becomes similar to WordPress: staff log into a visual editor in their browser and can publish changes without touching code.'),
  heading2('Without a CMS'),
  bodyText('Editing requires understanding React/JSX syntax—significantly harder than editing HTML. Not recommended for non-technical staff.'),
  heading2('Deployment'),
  bodyText('Deployment stays automatic: push changes to GitHub, and Vercel deploys to production within seconds.'),
  spacer()
];

// Next Steps section
const nextStepsElements = [
  heading1('Next Steps When Ready'),
  bulletPoint('Decide whether to add a CMS (recommendation: yes)'),
  bulletPoint('Choose a CMS platform (recommendation: Sanity.io)'),
  bulletPoint('Decide on scope: basic conversion only, or add blog and dynamic features'),
  bulletPoint('Engage a developer or use AI-assisted approach'),
  new Paragraph({
    spacing: { before: 200, after: 200, line: 360, lineRule: 'auto' },
    children: [
      new TextRun({
        text: 'Contact your development team to discuss timeline and resource allocation.',
        italic: true,
        size: 24,
        color: colors.black,
        font: 'Calibri'
      })
    ]
  })
];

// Footer information
const footerElements = [
  new Paragraph({
    spacing: { before: 400, after: 100 },
    children: [
      new TextRun({
        text: '___________________________________________________________________________',
        size: 20,
        color: colors.darkGray,
        font: 'Calibri'
      })
    ]
  }),
  new Paragraph({
    spacing: { after: 40 },
    children: [
      new TextRun({
        text: 'Document prepared for: Critical Care Pulmonary and Sleep Associates',
        size: 20,
        color: colors.darkGray,
        font: 'Calibri'
      })
    ]
  }),
  new Paragraph({
    spacing: { after: 40 },
    children: [
      new TextRun({
        text: 'Date: March 27, 2026',
        size: 20,
        color: colors.darkGray,
        font: 'Calibri'
      })
    ]
  })
];

// Combine all sections
const sections = [
  ...titlePageElements,
  ...purposeElements,
  ...whenToConvertElements,
  ...conversionScopeElements,
  ...timelineCostElements,
  ...cmsElements,
  ...whatYouKeepElements,
  ...staffChangesElements,
  ...nextStepsElements,
  ...footerElements
];

// Create document with proper numbering config
const doc = new Document({
  numbering: {
    config: [
      {
        reference: 'bullets',
        levels: [
          {
            level: 0,
            format: LevelFormat.BULLET,
            text: '•',
            alignment: AlignmentType.LEFT,
            style: {
              paragraph: {
                indent: { left: 720, hanging: 360 }
              }
            }
          },
          {
            level: 1,
            format: LevelFormat.BULLET,
            text: '◦',
            alignment: AlignmentType.LEFT,
            style: {
              paragraph: {
                indent: { left: 1440, hanging: 360 }
              }
            }
          }
        ]
      }
    ]
  },
  sections: [
    {
      children: sections,
      properties: {
        page: {
          size: {
            width: 12240,
            height: 15840
          },
          margins: {
            top: 1440,
            right: 1440,
            bottom: 1440,
            left: 1440
          }
        }
      }
    }
  ]
});

// Generate and save the document
Packer.toBuffer(doc).then(buffer => {
  const outputPath = path.join(__dirname, 'CCPSA-Website-NextJS-Conversion-Roadmap.docx');
  fs.writeFileSync(outputPath, buffer);
  console.log(`Document created successfully at: ${outputPath}`);
});

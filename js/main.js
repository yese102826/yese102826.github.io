// Mobile menu toggle
function toggleMobileMenu() {
  const navMenu = document.getElementById('navMenu');
  navMenu.classList.toggle('active');
}

// Search functionality
function searchTools() {
  const searchBox = document.getElementById('searchBox');
  const searchTerm = searchBox.value.toLowerCase();
  const toolCards = document.querySelectorAll('.tool-card');
  
  toolCards.forEach(card => {
    const tags = card.getAttribute('data-tags') || '';
    const title = card.querySelector('h3').textContent.toLowerCase();
    const description = card.querySelector('p').textContent.toLowerCase();
    
    if (tags.includes(searchTerm) || title.includes(searchTerm) || description.includes(searchTerm)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Copy to clipboard
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showNotification('Copied to clipboard!');
  }).catch(err => {
    console.error('Failed to copy:', err);
  });
}

// Show notification
function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'success-message';
  notification.textContent = message;
  notification.style.position = 'fixed';
  notification.style.bottom = '20px';
  notification.style.right = '20px';
  notification.style.zIndex = '9999';
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Show error
function showError(message, containerId) {
  const container = document.getElementById(containerId);
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message';
  errorDiv.textContent = message;
  container.appendChild(errorDiv);
  
  setTimeout(() => {
    errorDiv.remove();
  }, 5000);
}

// Format JSON
function formatJSON(input, output) {
  try {
    const parsed = JSON.parse(input);
    const formatted = JSON.stringify(parsed, null, 2);
    document.getElementById(output).value = formatted;
    return true;
  } catch (e) {
    return false;
  }
}

// Minify JSON
function minifyJSON(input, output) {
  try {
    const parsed = JSON.parse(input);
    const minified = JSON.stringify(parsed);
    document.getElementById(output).value = minified;
    return true;
  } catch (e) {
    return false;
  }
}

// URL Encode
function urlEncode(input, output) {
  const encoded = encodeURIComponent(input);
  document.getElementById(output).value = encoded;
}

// URL Decode
function urlDecode(input, output) {
  const decoded = decodeURIComponent(input);
  document.getElementById(output).value = decoded;
}

// Timestamp to Date
function timestampToDate(timestamp) {
  const date = new Date(timestamp * 1000);
  return date.toLocaleString();
}

// Date to Timestamp
function dateToTimestamp(dateString) {
  const date = new Date(dateString);
  return Math.floor(date.getTime() / 1000);
}

// Hex to RGB
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

// Regex test
function testRegex(text, pattern) {
  try {
    const regex = new RegExp(pattern);
    return regex.test(text);
  } catch (e) {
    return false;
  }
}

const toolSeoMap = {
  '/tools/dev/json-to-typescript.html': {
    name: 'JSON to TypeScript',
    description: 'JSON to TypeScript tool helps frontend teams convert raw API payloads into clean TypeScript interfaces in seconds. It is built for React, Vue, Angular, and Node.js projects where strong typing prevents runtime bugs. Developers, tech leads, and API integrators can paste nested JSON and immediately reuse generated interfaces in real code. Typical use cases include onboarding new endpoints, documenting response contracts, and speeding up mock data setup. The core advantage is consistent type inference without manual interface writing, plus easy copy-and-paste output that fits modern TS workflows. If you need a reliable JSON to TypeScript tool for fast schema drafting, this page gives a practical, production-ready shortcut.',
    metaDescription: 'JSON to TypeScript - Free Online Use - toolable.top. Convert nested JSON into TypeScript interfaces for React, Vue, Angular, and API workflows.',
    relatedTools: [
      { name: 'JSON to Dart', href: '/tools/dev/json-to-dart.html' },
      { name: 'JSON to Python', href: '/tools/dev/json-to-python.html' },
      { name: 'JSON to Go', href: '/tools/dev/json-to-go.html' },
      { name: 'CSV to JSON', href: '/tools/dev/csv-to-json.html' }
    ]
  },
  '/tools/dev/json-to-dart.html': {
    name: 'JSON to Dart',
    description: 'JSON to Dart tool is designed for Flutter developers who want to turn JSON responses into strongly typed Dart model classes quickly. It supports nested objects and arrays, making it useful for real mobile API payloads instead of only simple demos. The best-fit users are Flutter engineers, app freelancers, and teams building clean architecture with data models. Common scenarios include parsing REST responses, reducing serialization mistakes, and speeding up feature delivery when backend fields change often. Its key strength is eliminating repetitive manual model writing while keeping code readable and ready to paste into your app. For anyone searching a practical JSON to Dart tool, this converter improves consistency and saves real development time.',
    metaDescription: 'JSON to Dart - Free Online Use - toolable.top. Convert API JSON into Flutter-ready Dart model classes with support for nested objects and arrays.',
    relatedTools: [
      { name: 'JSON to TypeScript', href: '/tools/dev/json-to-typescript.html' },
      { name: 'JSON to Python', href: '/tools/dev/json-to-python.html' },
      { name: 'JSON to Go', href: '/tools/dev/json-to-go.html' },
      { name: 'Timestamp Converter', href: '/tools/dev/timestamp-converter.html' }
    ]
  },
  '/tools/dev/json-to-python.html': {
    name: 'JSON to Python',
    description: 'JSON to Python tool converts structured JSON into Python classes so backend and automation projects can start with a clear data model. It is useful for developers working with FastAPI, Django, Flask, and data processing scripts that consume external APIs. Target users include Python engineers, data analysts, and technical teams that need quick schema prototypes before full validation logic. Typical scenarios are API integration, ETL scripts, and converting mock payloads into maintainable class definitions. The core advantage is faster model scaffolding with fewer hand-written mistakes, especially when handling deep nesting and mixed value types. If you need a dependable JSON to Python tool to accelerate implementation and improve readability, this page is built for that workflow.',
    metaDescription: 'JSON to Python - Free Online Use - toolable.top. Convert JSON payloads into Python class structures for API integration, scripts, and backend development.',
    relatedTools: [
      { name: 'JSON to TypeScript', href: '/tools/dev/json-to-typescript.html' },
      { name: 'JSON to Dart', href: '/tools/dev/json-to-dart.html' },
      { name: 'JSON to Go', href: '/tools/dev/json-to-go.html' },
      { name: 'Regex Tester', href: '/tools/dev/regex-tester.html' }
    ]
  },
  '/tools/dev/json-to-go.html': {
    name: 'JSON to Go',
    description: 'JSON to Go tool helps Golang developers generate struct definitions directly from sample JSON, reducing setup time for APIs and microservices. It supports nested keys and list data, which makes it practical for real-world endpoint payloads. This page is ideal for backend engineers, cloud developers, and teams building typed services where clear models are important for maintenance. Common use cases include bootstrapping new handlers, creating test fixtures, and mapping third-party API responses to Go structs. The major benefit is quick, consistent code generation that avoids repetitive manual struct writing and field-type mismatches. For anyone looking for a straightforward JSON to Go tool to improve development speed and code quality, this converter provides an efficient starting point.',
    metaDescription: 'JSON to Go - Free Online Use - toolable.top. Generate Go struct definitions from nested JSON for backend APIs and microservice development.',
    relatedTools: [
      { name: 'JSON to TypeScript', href: '/tools/dev/json-to-typescript.html' },
      { name: 'JSON to Dart', href: '/tools/dev/json-to-dart.html' },
      { name: 'JSON to Python', href: '/tools/dev/json-to-python.html' },
      { name: 'CSV to JSON', href: '/tools/dev/csv-to-json.html' }
    ]
  },
  '/tools/dev/url-encode.html': {
    name: 'URL Encode Tool',
    description: 'URL Encode tool lets you safely encode and decode query strings so special characters do not break links, API calls, or tracking parameters. It is made for developers, marketers, and automation users who frequently pass data in URLs. Typical scenarios include building webhook callbacks, handling UTF-8 text in query parameters, and debugging failed requests caused by unescaped symbols. This URL Encode tool is especially useful when integrating multiple systems that treat spaces, ampersands, or slashes differently. The key advantage is immediate and accurate percent-encoding output with one-click reuse, helping you reduce encoding bugs and speed up troubleshooting. If you need a practical URL Encode tool for daily API or campaign operations, this page fits that exact need.',
    metaDescription: 'URL Encode Tool - Free Online Use - toolable.top. Encode and decode URL parameters for APIs, webhooks, and campaign tracking links safely.',
    relatedTools: [
      { name: 'Regex Tester', href: '/tools/dev/regex-tester.html' },
      { name: 'Timestamp Converter', href: '/tools/dev/timestamp-converter.html' },
      { name: 'CSV to JSON', href: '/tools/dev/csv-to-json.html' },
      { name: 'JSON to TypeScript', href: '/tools/dev/json-to-typescript.html' }
    ]
  },
  '/tools/dev/timestamp-converter.html': {
    name: 'Timestamp Converter',
    description: 'Timestamp Converter is built for developers and analysts who need fast conversion between Unix epoch time and human-readable date formats. It supports debugging across logs, API payloads, and database records where time values are often stored as integers. Backend engineers, QA testers, and operations teams use this tool to verify event order, compare timezone outputs, and reproduce production incidents accurately. Common scenarios include parsing webhook logs, validating token expiration, and checking historical data imports. The main strength is instant two-way conversion that reduces manual mistakes and context switching during troubleshooting. If you often work with epoch values in software workflows, this Timestamp Converter gives you a reliable and efficient utility in one place.',
    metaDescription: 'Timestamp Converter - Free Online Use - toolable.top. Convert Unix epoch values to readable date-time and back for logs, APIs, and debugging.',
    relatedTools: [
      { name: 'URL Encode Tool', href: '/tools/dev/url-encode.html' },
      { name: 'Regex Tester', href: '/tools/dev/regex-tester.html' },
      { name: 'JSON to Go', href: '/tools/dev/json-to-go.html' },
      { name: 'JSON to Python', href: '/tools/dev/json-to-python.html' }
    ]
  },
  '/tools/dev/hex-to-rgb.html': {
    name: 'Hex to RGB',
    description: 'Hex to RGB tool converts color values for frontend implementation, design handoff, and CSS customization without manual math. It serves web developers, UI designers, and no-code creators who switch between design files and production stylesheets. Typical scenarios include translating brand palettes, writing rgba overlays, and matching design tokens in Tailwind or custom theme systems. By entering a hex code, users quickly get RGB output that can be copied into projects right away. The biggest advantage is fast, error-free conversion that keeps colors consistent across components and marketing assets. Whether you are polishing a landing page or building a full design system, this Hex to RGB tool helps you move from visual reference to implementation with minimal friction.',
    metaDescription: 'Hex to RGB - Free Online Use - toolable.top. Convert HEX color codes to RGB values for CSS, design systems, and frontend UI development.',
    relatedTools: [
      { name: 'Canva Color Extract', href: '/tools/design/canva-color.html' },
      { name: 'Markdown Table', href: '/tools/dev/markdown-table.html' },
      { name: 'CSV to JSON', href: '/tools/dev/csv-to-json.html' },
      { name: 'URL Encode Tool', href: '/tools/dev/url-encode.html' }
    ]
  },
  '/tools/dev/regex-tester.html': {
    name: 'Regex Tester',
    description: 'Regex Tester helps developers validate regular expression patterns before adding them to production code. It is useful for engineers, QA specialists, and data teams who need quick checks for matching rules such as email formats, IDs, or custom text parsing logic. Practical scenarios include form validation, log filtering, and automation scripts that rely on precise pattern extraction. Instead of repeatedly running local scripts, users can test patterns and adjust syntax instantly in one interface. The core value is faster iteration with fewer regex mistakes, especially when debugging edge cases and escaping special characters. If you are searching for a reliable Regex Tester to improve validation accuracy and reduce trial-and-error in development, this tool provides a clean and efficient workflow.',
    metaDescription: 'Regex Tester - Free Online Use - toolable.top. Test and validate regular expressions for forms, scripts, logs, and text parsing workflows.',
    relatedTools: [
      { name: 'URL Encode Tool', href: '/tools/dev/url-encode.html' },
      { name: 'Timestamp Converter', href: '/tools/dev/timestamp-converter.html' },
      { name: 'JSON to Python', href: '/tools/dev/json-to-python.html' },
      { name: 'Markdown Table', href: '/tools/dev/markdown-table.html' }
    ]
  },
  '/tools/dev/markdown-table.html': {
    name: 'Markdown Table',
    description: 'Markdown Table tool is made for technical writers and developers who need clean table syntax for GitHub, docs, and README files. It suits engineers, product teams, and open-source maintainers who frequently document APIs, feature comparisons, or setup guides. Common usage includes generating aligned markdown tables, editing column structures quickly, and avoiding formatting errors that appear after commit. This Markdown Table tool improves productivity by removing manual pipe-counting and spacing fixes, so users can focus on content quality. The main advantage is fast visual editing with immediate markdown output that can be copied directly into repositories or wiki pages. If documentation speed and consistency matter in your workflow, this utility delivers a practical upgrade.',
    metaDescription: 'Markdown Table - Free Online Use - toolable.top. Build and edit markdown tables for GitHub README files, docs pages, and technical documentation.',
    relatedTools: [
      { name: 'CSV to JSON', href: '/tools/dev/csv-to-json.html' },
      { name: 'Regex Tester', href: '/tools/dev/regex-tester.html' },
      { name: 'Hex to RGB', href: '/tools/dev/hex-to-rgb.html' },
      { name: 'JSON to TypeScript', href: '/tools/dev/json-to-typescript.html' }
    ]
  },
  '/tools/dev/csv-to-json.html': {
    name: 'CSV to JSON',
    description: 'CSV to JSON tool converts spreadsheet-style rows into structured JSON for API integration, automation, and data migration tasks. It is built for developers, analysts, and operations teams who work with exported reports from CRM, ads platforms, or ecommerce systems. Typical scenarios include preparing fixtures for frontend testing, feeding batch data into scripts, and transforming flat tables into machine-readable objects. This converter is valuable when you need to cleanly bridge non-technical data sources with modern applications. Its core advantage is quick transformation with minimal manual editing, which reduces import errors and speeds up data workflows. If you need a dependable CSV to JSON tool for practical day-to-day engineering or business operations, this page is a strong fit.',
    metaDescription: 'CSV to JSON - Free Online Use - toolable.top. Convert CSV files into JSON objects for APIs, data scripts, testing fixtures, and migrations.',
    relatedTools: [
      { name: 'Markdown Table', href: '/tools/dev/markdown-table.html' },
      { name: 'JSON to TypeScript', href: '/tools/dev/json-to-typescript.html' },
      { name: 'JSON to Go', href: '/tools/dev/json-to-go.html' },
      { name: 'Shopify CSV', href: '/tools/ecommerce/shopify-csv.html' }
    ]
  },
  '/tools/design/youtube-thumbnail.html': {
    name: 'YouTube Thumbnail',
    description: 'YouTube Thumbnail tool helps creators add clear text overlays and improve thumbnail readability before publishing videos. It is suitable for YouTubers, media editors, and social teams who need fast visual iteration without opening heavy design software. Common scenarios include testing headline contrast, preparing consistent series covers, and creating quick variants for A/B testing ideas. This page focuses on speed: upload, edit, and export in a lightweight workflow. The biggest advantage is reducing production friction so creators can move from idea to upload faster while keeping brand style consistent. If you need a practical YouTube Thumbnail tool for everyday channel management, this utility supports quick content packaging with creator-friendly controls.',
    metaDescription: 'YouTube Thumbnail - Free Online Use - toolable.top. Create thumbnail text overlays and optimize visuals for channel branding and video click-through.',
    relatedTools: [
      { name: 'TikTok Caption Splitter Tool', href: '/tools/design/tiktok-caption.html' },
      { name: 'Instagram Hashtag', href: '/tools/design/instagram-hashtag.html' },
      { name: 'Discord Emoji', href: '/tools/design/discord-emoji.html' },
      { name: 'Twitch Banner', href: '/tools/design/twitch-banner.html' }
    ]
  },
  '/tools/design/tiktok-caption.html': {
    name: 'TikTok Caption Splitter Tool',
    description: 'TikTok Caption Splitter Tool is built for creators who need to format long captions into readable parts that fit platform limits. It works well for influencers, social media managers, and cross-border content teams publishing frequent short videos. Typical scenarios include splitting storytelling captions, organizing hashtag blocks, and preparing multilingual posts without losing structure. This 抖音字幕分割工具 style workflow saves time compared with manual character counting in notes apps. The key benefit is clean segmentation that keeps content readable and easier to copy in sequence during posting. If you want a reliable TikTok caption splitter tool for high-volume publishing and better post formatting, this page provides a simple and fast solution.',
    metaDescription: 'TikTok Caption Splitter Tool - Free Online Use - toolable.top. Split long TikTok captions into clean parts with readable structure and copy-ready output.',
    relatedTools: [
      { name: 'YouTube Thumbnail', href: '/tools/design/youtube-thumbnail.html' },
      { name: 'Instagram Hashtag', href: '/tools/design/instagram-hashtag.html' },
      { name: 'Notion Template', href: '/tools/design/notion-template.html' },
      { name: 'Discord Emoji', href: '/tools/design/discord-emoji.html' }
    ]
  },
  '/tools/design/instagram-hashtag.html': {
    name: 'Instagram Hashtag',
    description: 'Instagram Hashtag tool supports creators and marketers who need stronger tag combinations for reach, relevance, and content categorization. It is helpful for small businesses, UGC creators, and growth teams managing campaigns across different niches. Practical scenarios include planning hashtag sets by topic, testing post positioning, and creating reusable templates for content calendars. Instead of manually researching each post, users can generate and refine hashtag groups faster. The major advantage is workflow efficiency: better tag organization, less repetitive planning, and quicker publishing decisions. If your team wants a practical Instagram Hashtag tool to improve social posting consistency and discoverability, this page provides a focused utility for day-to-day content operations.',
    metaDescription: 'Instagram Hashtag - Free Online Use - toolable.top. Analyze and generate hashtag ideas for creators, businesses, and social content growth workflows.',
    relatedTools: [
      { name: 'TikTok Caption Splitter Tool', href: '/tools/design/tiktok-caption.html' },
      { name: 'YouTube Thumbnail', href: '/tools/design/youtube-thumbnail.html' },
      { name: 'Canva Color Extract', href: '/tools/design/canva-color.html' },
      { name: 'Notion Template', href: '/tools/design/notion-template.html' }
    ]
  },
  '/tools/design/discord-emoji.html': {
    name: 'Discord Emoji',
    description: 'Discord Emoji tool helps community managers and gamers convert images into upload-ready emoji assets with suitable dimensions. It is ideal for Discord server owners, stream teams, and online communities that need custom reactions quickly. Common scenarios include building branded emoji packs, resizing fan art for events, and preparing visual assets for moderation or role channels. This tool simplifies the process by reducing manual editing steps in heavier software. The core advantage is fast, repeatable output that stays aligned with Discord upload constraints, helping teams keep server branding consistent. If you need an easy Discord Emoji tool for community operations, campaign launches, or creator collaboration spaces, this page delivers a practical and efficient workflow.',
    metaDescription: 'Discord Emoji - Free Online Use - toolable.top. Resize and prepare custom emoji images for Discord servers with quick upload-ready output.',
    relatedTools: [
      { name: 'Twitch Banner', href: '/tools/design/twitch-banner.html' },
      { name: 'YouTube Thumbnail', href: '/tools/design/youtube-thumbnail.html' },
      { name: 'TikTok Caption Splitter Tool', href: '/tools/design/tiktok-caption.html' },
      { name: 'Canva Color Extract', href: '/tools/design/canva-color.html' }
    ]
  },
  '/tools/design/twitch-banner.html': {
    name: 'Twitch Banner',
    description: 'Twitch Banner tool allows streamers to resize graphics for channel banners, offline screens, and panel assets without design friction. It targets Twitch creators, esports teams, and agency operators managing multiple channel brands. Common use cases include adjusting sponsor visuals, refreshing seasonal themes, and producing accurate dimensions for account setup updates. Instead of guessing export sizes, users can upload once and generate correctly scaled outputs. The main value is speed plus consistency, reducing formatting issues that hurt channel presentation. If you are looking for a reliable Twitch Banner tool for creator branding and stream-ready assets, this page offers a straightforward workflow built around practical channel requirements.',
    metaDescription: 'Twitch Banner - Free Online Use - toolable.top. Resize Twitch channel graphics for offline banners, panels, and creator branding assets.',
    relatedTools: [
      { name: 'Discord Emoji', href: '/tools/design/discord-emoji.html' },
      { name: 'YouTube Thumbnail', href: '/tools/design/youtube-thumbnail.html' },
      { name: 'Canva Color Extract', href: '/tools/design/canva-color.html' },
      { name: 'Amazon ASIN to Link', href: '/tools/ecommerce/amazon-asin.html' }
    ]
  },
  '/tools/design/notion-template.html': {
    name: 'Notion Template',
    description: 'Notion Template tool helps users convert pages into reusable template formats for team onboarding, project planning, and daily operations. It is suitable for freelancers, startup teams, and content operators who organize workflows in Notion. Typical scenarios include duplicating SOP pages, sharing repeatable client dashboards, and standardizing workspace structures across departments. This utility reduces repetitive setup by making template conversion faster and easier to distribute. The strongest advantage is operational consistency: teams can reuse proven page structures while keeping documentation clean. If you need a practical Notion Template tool to improve collaboration and reduce setup overhead in knowledge management workflows, this page provides a direct and simple solution.',
    metaDescription: 'Notion Template - Free Online Use - toolable.top. Convert pages into reusable Notion templates for team SOPs, planning systems, and workflows.',
    relatedTools: [
      { name: 'TikTok Caption Splitter Tool', href: '/tools/design/tiktok-caption.html' },
      { name: 'Instagram Hashtag', href: '/tools/design/instagram-hashtag.html' },
      { name: 'Markdown Table', href: '/tools/dev/markdown-table.html' },
      { name: 'YouTube Thumbnail', href: '/tools/design/youtube-thumbnail.html' }
    ]
  },
  '/tools/design/canva-color.html': {
    name: 'Canva Color Extract',
    description: 'Canva Color Extract tool helps designers and marketers pull accurate color palettes from images for consistent brand visuals. It is ideal for social media teams, ecommerce creatives, and content creators working with Canva-based workflows. Typical use cases include extracting hero-image tones, matching campaign colors across channels, and building quick palette references for templates. Instead of manually sampling values in multiple apps, users can identify useful colors in one step. The core benefit is speed and consistency when moving from inspiration images to production assets. If you need a dependable Canva Color Extract tool for practical design execution and faster visual decision-making, this page gives a streamlined workflow for day-to-day creative work.',
    metaDescription: 'Canva Color Extract - Free Online Use - toolable.top. Extract image color palettes for Canva templates, brand kits, and social media design.',
    relatedTools: [
      { name: 'Hex to RGB', href: '/tools/dev/hex-to-rgb.html' },
      { name: 'YouTube Thumbnail', href: '/tools/design/youtube-thumbnail.html' },
      { name: 'Instagram Hashtag', href: '/tools/design/instagram-hashtag.html' },
      { name: 'Discord Emoji', href: '/tools/design/discord-emoji.html' }
    ]
  },
  '/tools/ecommerce/amazon-asin.html': {
    name: 'Amazon ASIN to Link',
    description: 'Amazon ASIN to Link tool converts product ASIN codes into direct product URLs for marketplace operations and affiliate workflows. It is useful for Amazon sellers, PPC teams, and content publishers who need clean links quickly. Typical scenarios include preparing campaign landing links, auditing catalog records, and sharing product pages with clients or teammates. This 亚马逊 ASIN 转链接 workflow avoids manual URL assembly errors and speeds up repetitive listing tasks. The key advantage is fast, standardized output that can be copied into ads, spreadsheets, or tracking systems immediately. If you are searching for an efficient Amazon ASIN to link converter, this page is built for practical ecommerce execution and link management.',
    metaDescription: 'Amazon ASIN to Link - Free Online Use - toolable.top. Convert ASIN codes to product URLs for seller operations, affiliates, and catalog workflows.',
    relatedTools: [
      { name: 'Shopify CSV', href: '/tools/ecommerce/shopify-csv.html' },
      { name: 'Ebay Title', href: '/tools/ecommerce/ebay-title.html' },
      { name: 'Invoice Generator', href: '/tools/ecommerce/invoice-generator.html' },
      { name: 'URL Encode Tool', href: '/tools/dev/url-encode.html' }
    ]
  },
  '/tools/ecommerce/shopify-csv.html': {
    name: 'Shopify CSV',
    description: 'Shopify CSV tool helps merchants prepare bulk product import files in the correct structure for faster catalog updates. It is designed for store owners, virtual assistants, and ecommerce agencies managing large SKU sets. Common scenarios include launching seasonal collections, migrating products from other platforms, and updating inventory details in batches. By simplifying CSV formatting, this tool reduces failed imports and repetitive spreadsheet cleanup. The main advantage is operational efficiency: users can generate consistent import-ready rows and move quickly to store deployment. If your workflow depends on reliable product data uploads, this Shopify CSV tool offers a practical way to speed up listing operations while keeping data organized.',
    metaDescription: 'Shopify CSV - Free Online Use - toolable.top. Generate structured Shopify product CSV data for bulk imports, migrations, and catalog updates.',
    relatedTools: [
      { name: 'Amazon ASIN to Link', href: '/tools/ecommerce/amazon-asin.html' },
      { name: 'Ebay Title', href: '/tools/ecommerce/ebay-title.html' },
      { name: 'CSV to JSON', href: '/tools/dev/csv-to-json.html' },
      { name: 'Invoice Generator', href: '/tools/ecommerce/invoice-generator.html' }
    ]
  },
  '/tools/ecommerce/ebay-title.html': {
    name: 'Ebay Title',
    description: 'Ebay Title tool helps sellers craft optimized listing titles that use character space effectively while staying readable for shoppers. It is built for marketplace sellers, dropshipping teams, and ecommerce operators who publish many SKUs. Typical scenarios include improving product discoverability, testing keyword variations, and standardizing title structures across categories. This utility supports practical listing SEO by making it easier to balance search terms with clear product information. The core advantage is faster title optimization with less guesswork, which can improve click quality and listing clarity. If you need a straightforward Ebay Title tool for daily listing management and better marketplace visibility, this page offers a focused, seller-friendly workflow.',
    metaDescription: 'Ebay Title - Free Online Use - toolable.top. Optimize eBay listing titles with keyword-focused structure for better visibility and click-through.',
    relatedTools: [
      { name: 'Amazon ASIN to Link', href: '/tools/ecommerce/amazon-asin.html' },
      { name: 'Shopify CSV', href: '/tools/ecommerce/shopify-csv.html' },
      { name: 'Invoice Generator', href: '/tools/ecommerce/invoice-generator.html' },
      { name: 'Instagram Hashtag', href: '/tools/design/instagram-hashtag.html' }
    ]
  },
  '/tools/ecommerce/invoice-generator.html': {
    name: 'Invoice Generator',
    description: 'Invoice Generator tool allows freelancers and small businesses to create clean invoices quickly without installing accounting software. It is useful for service providers, online sellers, and agencies that need fast billing documents for client communication. Common use cases include one-off project invoices, recurring service billing, and preparing records for bookkeeping. This tool reduces formatting overhead and helps teams issue professional invoices with consistent structure. Its biggest advantage is speed: enter details, generate output, and share the invoice immediately. If you need a practical Invoice Generator for lightweight business operations and faster payment workflows, this page gives you a simple, reliable billing utility.',
    metaDescription: 'Invoice Generator - Free Online Use - toolable.top. Create professional invoice documents for freelancers, agencies, and ecommerce business workflows.',
    relatedTools: [
      { name: 'Shopify CSV', href: '/tools/ecommerce/shopify-csv.html' },
      { name: 'Ebay Title', href: '/tools/ecommerce/ebay-title.html' },
      { name: 'Amazon ASIN to Link', href: '/tools/ecommerce/amazon-asin.html' },
      { name: 'Weight Loss Calculator', href: '/tools/ecommerce/weight-loss.html' }
    ]
  },
  '/tools/ecommerce/weight-loss.html': {
    name: 'Weight Loss Calculator',
    description: 'Weight Loss Calculator helps users estimate TDEE and calorie targets for structured fat-loss planning based on daily activity and body metrics. It serves fitness beginners, coaches, and health-focused professionals who need quick baseline numbers before building routines. Typical scenarios include planning calorie deficits, tracking progress phases, and adjusting intake when training volume changes. This tool offers practical guidance for daily planning without requiring complex spreadsheets. The key advantage is clarity: users receive simple, actionable calorie references that support consistent habits. If you want a straightforward Weight Loss Calculator for routine goal setting, coaching support, or personal health planning, this page provides an accessible and efficient starting point.',
    metaDescription: 'Weight Loss Calculator - Free Online Use - toolable.top. Estimate TDEE, daily calories, and practical fat-loss targets for fitness planning.',
    relatedTools: [
      { name: 'Invoice Generator', href: '/tools/ecommerce/invoice-generator.html' },
      { name: 'Timestamp Converter', href: '/tools/dev/timestamp-converter.html' },
      { name: 'Notion Template', href: '/tools/design/notion-template.html' },
      { name: 'Ebay Title', href: '/tools/ecommerce/ebay-title.html' }
    ]
  }
};

function applyToolSeoEnhancements() {
  const normalizedPath = window.location.pathname.replace(/\/+$/, '');
  const currentConfig = toolSeoMap[normalizedPath];

  if (!currentConfig) {
    return;
  }

  document.title = `${currentConfig.name} - Free Online Use - toolable.top`;

  let metaDescriptionTag = document.querySelector('meta[name="description"]');
  if (!metaDescriptionTag) {
    metaDescriptionTag = document.createElement('meta');
    metaDescriptionTag.setAttribute('name', 'description');
    document.head.appendChild(metaDescriptionTag);
  }
  metaDescriptionTag.setAttribute('content', currentConfig.metaDescription);

  const toolContent = document.querySelector('.tool-content');
  if (toolContent && !document.querySelector('.tool-seo-content')) {
    const seoBlock = document.createElement('section');
    seoBlock.className = 'tool-seo-content';
    seoBlock.innerHTML = `<h2>${currentConfig.name} Use Cases</h2><p>${currentConfig.description}</p>`;
    toolContent.insertAdjacentElement('afterend', seoBlock);
  }

  const relatedToolsContainer = document.querySelector('.related-tools');
  if (relatedToolsContainer) {
    const heading = relatedToolsContainer.querySelector('h3');
    const list = relatedToolsContainer.querySelector('ul');
    if (heading) {
      heading.textContent = 'Related Tools';
    }
    if (list) {
      list.innerHTML = currentConfig.relatedTools
        .map(tool => `<li><a href="${tool.href}">${tool.name}</a></li>`)
        .join('');
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  applyToolSeoEnhancements();
});

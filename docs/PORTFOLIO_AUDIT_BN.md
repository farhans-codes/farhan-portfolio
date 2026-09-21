# পোর্টফোলিও অডিট ও উন্নয়নের তালিকা

অডিটের তারিখ: **২১ সেপ্টেম্বর ২০২৬**

পরীক্ষিত snapshot: **`f3c796b`**, বর্তমান `index.html`, `styles.css`, assets, scripts এবং hosting configuration।

## ১. মূল মূল্যায়ন

পোর্টফোলিওটির ভিত্তি ভালো। নিজের ভিজ্যুয়াল পরিচয় আছে, Flutter specialization পরিষ্কার, বাস্তব প্রজেক্ট ও গবেষণার লিংক আছে, এবং সাইট চালাতে JavaScript বা framework লাগে না। নতুন করে বানানো বা framework-এ নেওয়ার প্রয়োজন দেখা যায়নি।

সবচেয়ে বড় ঘাটতি **কাজের প্রমাণ উপস্থাপনে**: কী বানিয়েছ বলা আছে, কিন্তু কেন বানিয়েছ, তোমার নির্দিষ্ট অবদান, কঠিন সিদ্ধান্ত এবং ফলাফল যথেষ্ট নেই। এর সঙ্গে ছোট স্ক্রিনের hero, চলমান technology strip, social preview এবং build-এর কয়েকটি নির্দিষ্ট সমস্যা ঠিক করলে সাইটের মান বাড়বে।

পরীক্ষিত অংশে সাইট অচল করে দেওয়া P0/P1 সমস্যা পাওয়া যায়নি। এটি সম্পূর্ণ নিরাপত্তা বা WCAG certification নয়। নিচের P2/P3 হলো কাজ সাজানোর অগ্রাধিকার; সব পরামর্শ software defect নয়।

## ২. কী পরীক্ষা করা হয়েছে

| ক্ষেত্র | পদ্ধতি ও ফলাফল |
|---|---|
| সোর্স | সম্পূর্ণ HTML/CSS, README, build/check/CV scripts, hosting config এবং asset তালিকা পড়া |
| বর্তমান সাইট | `http://127.0.0.1:3000/`-এর HTML বর্তমান workspace-এর সঙ্গে byte-for-byte মিলে গেছে |
| ব্রাউজার | Codex in-app browser-এ desktop, tablet, mobile, landscape screenshot এবং DOM geometry পরীক্ষা |
| লোকাল integrity | `python3 scripts/check_site.py` সফল; output-এ 59 links/assets references রিপোর্ট করেছে |
| Build | আলাদা temporary copy-তে build এবং পুরোনো asset থেকে যাওয়ার reproduction |
| CV | আসল PDF-এর দুই পৃষ্ঠা PNG-তে render করে দেখা, text extraction ও PDF metadata পরীক্ষা |
| বাইরের লিংক | HTML-এর ১০টি unique HTTPS destination-এ GET; ৮টি HTTP 200, ২টি automated access restriction |
| গবেষণা | arXiv record ও Crossref DOI metadata দিয়ে প্রকাশনার পরিচয়/বছর মিলিয়ে দেখা |
| অ্যাক্সেসিবিলিটি | semantic structure, accessible names, focus rules, motion CSS ও মূল palette contrast গণনা; প্রথম Tab-এ skip link focus নিশ্চিত |

এটি documentation-only কাজ। এই অডিটে application code, CV বা assets বদলানো হয়নি; stage, commit, push বা deployment করা হয়নি। আগে থেকে থাকা পরিবর্তনও এই কাজের অংশ হিসেবে পরিবর্তন করা হয়নি।

### যাচাইয়ের সীমা

- কোনো production domain এই কাজের জন্য নিশ্চিত করা হয়নি। ফলে production HTTPS, redirect, cache/compression/security headers, indexing ও Search Console পরীক্ষা হয়নি।
- Lighthouse/PageSpeed/CrUX চালানো হয়নি; performance score বা বাস্তব LCP/INP/CLS দাবি করা হচ্ছে না।
- আলাদা Safari/Firefox, physical phone, VoiceOver, সম্পূর্ণ keyboard traversal, 200% text enlargement ও 400% zoom পরীক্ষা বাকি।
- reduced-motion ও print stylesheet সোর্সে পড়া হয়েছে; OS preference বদলে runtime পরীক্ষা হয়নি।
- private employment contribution, CGPA বা ব্যক্তিগত তথ্য স্বাধীনভাবে যাচাই করা সম্ভব হয়নি। লেখা দেখে সেগুলো সত্য/মিথ্যা নির্ধারণ করা হয়নি।
- browser viewport override-এ touch input বা আসল mobile browser emulation করা হয়নি।

| পরীক্ষিত viewport | দেখা ফল |
|---|---|
| 1440×900 | Hero ও featured project ঠিক; section anchor কাজ করেছে |
| 390×844 | Hero এবং contact ঠিক; email এক লাইনে এসেছে |
| 320×568 | Portrait প্রায় 47px-এ নেমেছে; email ভেঙে পড়লেও panel-এর মধ্যে রয়েছে |
| 844×390 | Landscape hero-তে CTA ও portrait দৃশ্যমান; hero-copy-তে overflow পাওয়া যায়নি |
| 768×1024 | Tablet-এ সব hero content আছে, portrait-এর ওপরে বড় ফাঁকা জায়গা |

এই পাঁচ আকারে document-level horizontal overflow পাওয়া যায়নি। In-app browser-এর scrollbar প্রায় 15px জায়গা নেয়; তাই 320px viewport-এ measured content width ছিল 305px।

## ৩. যেগুলো ভালো আছে—ধরে রাখো

1. **স্বল্প জটিলতার স্থাপত্য।** HTML/CSS ও local assets যথেষ্ট। npm, hydration, third-party script বা framework maintenance নেই। একটি portfolio-র জন্য এটি উপযুক্ত।
2. **পরিচিতি ও ভিজ্যুয়াল সামঞ্জস্য।** গাঢ় background, নীল accent, বড় নাম, portrait ও chapter অনুযায়ী accent colours একটি সঙ্গত পরিচয় তৈরি করে। Desktop-এ hero এবং featured project পরিষ্কার।
3. **সরাসরি প্রধান action।** “Explore my work” ও “Download CV” প্রথম screen-এ আছে; শেষের email, LinkedIn, GitHub ও phone যোগাযোগ সহজ করে।
4. **ব্যক্তিগত ও চাকরির কাজ আলাদা।** One Ummah employer project হিসেবে আছে; AI Limit Status independent community project। এই attribution বিশ্বাসযোগ্যতা বাড়ায় (`index.html:255`, `:323`)।
5. **বাস্তব visual proof আছে।** AI Limit Status-এর আসল screenshot, source ও release link আছে; সব project-কে শুধু mockup দিয়ে দেখানো হয়নি।
6. **গবেষণার পরিচয় পরিষ্কার।** Journal article ও arXiv preprint আলাদা বলা হয়েছে; co-author পরিচয় ও reference links আছে।
7. **অ্যাক্সেসিবিলিটির ভালো ভিত্তি।** English `lang`, skip link, একটি h1, h2/h3 hierarchy, named navigation, section labels, image alt এবং icon-only publication link-এর accessible name আছে। Duplicate technology row screen reader থেকে লুকানো।
8. **মূল text contrast ভালো।** opacity 1-এ সাধারণ text/background প্রায় 17.19:1, muted hero text/background 7.74:1, primary button/contact text 8.91:1, journey muted/card 10.25:1। এগুলো palette গণনা; প্রতিটি animated pixel-এর audit নয়।
9. **Token-ভিত্তিক styling।** রং, semantic font sizes ও line heights `:root`-এ আছে; responsive overrides-ও tokens ব্যবহার করে (`styles.css:18`)।
10. **উপযুক্ত asset loading।** Local WOFF2, `font-display: swap`, hero image-এ high fetch priority, নিচের screenshot lazy-loaded; image dimensions দেওয়া আছে।
11. **Progressive enhancement।** Scroll animation `@supports`-এর মধ্যে; unsupported browser-এ base content দৃশ্যমান। Reduced-motion rules-ও আছে।
12. **CV পরিষ্কার।** দুই পৃষ্ঠায় clipping/overlap চোখে পড়েনি, লেখা selectable, A4 layout ও page number আছে, মাত্র 6,353 bytes। তবে selectable হওয়া tagged/সম্পূর্ণ accessible PDF হওয়ার সমান নয়।
13. **রক্ষণাবেক্ষণের ভিত্তি।** README-তে content/asset locations, local server, build ও check commands আছে; font/icon license notices রাখা হয়েছে।

## ৪. অগ্রাধিকার ও ট্র্যাকার

**P2:** পরের বাস্তব উন্নয়নচক্রে করা উচিত। **P3:** সুযোগমতো polish/maintenance। সময়গুলো ছোট বাস্তবায়নের আনুমানিক পরিশ্রম; content সংগ্রহ ও মালিকের review আলাদা। কাজ সম্পন্ন হলে checkbox টিক দিয়ে তারিখ ও verification note রাখো।

| সম্পন্ন | ID | অগ্রাধিকার | কাজ | ধরন | আনুমানিক সময় |
|---|---|---|---|---|---|
| [ ] | A01 | P2 | ছোট স্ক্রিনে hero portrait collapse ঠিক করা | নিশ্চিত visual সমস্যা | ১–২ ঘণ্টা |
| [ ] | A02 | P2 | Technology strip স্থির করা বা accessible pause দেওয়া | নিশ্চিত interaction ঘাটতি | ৩০–৯০ মিনিট |
| [ ] | A03 | P2 | প্রধান দুই project-এ নিজের অবদান ও ফলাফলের case study | কনটেন্ট | ২–৪ ঘণ্টা + তথ্য |
| [ ] | A04 | P2 | Target audience অনুযায়ী hero/contact copy স্পষ্ট করা | কনটেন্ট | ৩০–৬০ মিনিট |
| [ ] | A05 | P2 | Social preview image ও production URL metadata | SEO/share | ১–২ ঘণ্টা |
| [ ] | A06 | P2 | পুনরায় build-এ stale asset সরানো | নিশ্চিত build সমস্যা | ৩০–৬০ মিনিট |
| [ ] | A07 | P2 | বিদ্যমান checker-কে publish build-এ ব্যবহার | প্রতিরোধমূলক | ৩০–৬০ মিনিট |
| [ ] | A08 | P2 | CV-তে project links ও ফলাফল যোগ | কনটেন্ট | ১–২ ঘণ্টা |
| [ ] | A09 | P2 | Linked project repositories-এর README উন্নত করা | বাইরের repo | ১–৩ ঘণ্টা |
| [ ] | A10 | P3 | Portrait/screenshot-এর delivery size মেপে কমানো | পারফরম্যান্স | ১–২ ঘণ্টা |
| [ ] | A11 | P3 | প্রকাশযোগ্য output থেকে unused PNG master বাদ | Build hygiene | ৩০ মিনিট |
| [ ] | A12 | P3 | Skills-এর প্রমাণ ও নামকরণ স্পষ্ট করা | কনটেন্ট | ৩০–৬০ মিনিট |
| [ ] | A13 | P3 | দীর্ঘ journey আরও দ্রুত scan করার উপযোগী করা | UX | ১–২ ঘণ্টা |
| [ ] | A14 | P3 | README-এর ZIP নির্দেশনা ও checker wording ঠিক করা | Documentation | ৩০ মিনিট |
| [ ] | A15 | P3 | HTML/CV update checklist ও অল্প dead CSS cleanup | Maintenance | ৩০–৬০ মিনিট |
| [ ] | A16 | P3 | বাকি accessibility, browser ও print QA | যাচাই বাকি | ১–২ ঘণ্টা |
| [ ] | A17 | P3 | Production launch checks ও performance baseline | domain-নির্ভর | ১–২ ঘণ্টা |

### A01 — ছোট স্ক্রিনে portrait প্রায় অদৃশ্য হয়ে যায়

**প্রমাণ:** `styles.css:238`-এর hero `height: calc(100svh - var(--height-header))`; mobile grid-এ portrait `minmax(0, 1fr)` row-তে (`:1051`)। 320×568 viewport-এ portrait container **46.73px**, hero copy **337.91px**, nameplate **71.67px** হয়েছে। Screenshot-এ মুখটি ক্ষুদ্র thumbnail-এর মতো। 390×844-এ portrait প্রায় 324px; সেখানে সমস্যা দেখা যায়নি।

**প্রভাব:** মোবাইলের ছোট screen-এ প্রধান visual identity নষ্ট হয়। 768×1024 tablet-এ portrait নিচের দিকে বসে ওপরের অংশে বড় ফাঁকা জায়গাও দেখা গেছে; এটি আলাদা visual tuning-এর বিষয়।

**ছোট সমাধান:** ছোট portrait layout-এ content অনুযায়ী hero বাড়তে দাও; প্রয়োজনমতো `min-height` ব্যবহার এবং portrait-এর উপযুক্ত minimum/aspect ratio রাখো। পুরো hero-কে এক screen-এ রাখার জন্য portrait সংকুচিত করা এড়িয়ে যাও। `.hero-copy`-র inner scrolling প্রয়োজন কি না পর্যালোচনা করো।

**সম্পন্ন ধরা হবে যখন:** 320×568, 375×667, 390×844 এবং tablet-এ portrait অর্থপূর্ণ আকারে থাকবে, সব CTA পড়া/চাপা যাবে, page-level horizontal overflow হবে না। 200% text enlargement-ও দেখবে।

### A02 — স্বয়ংক্রিয় technology strip থামানোর পূর্ণ নিয়ন্ত্রণ নেই

**প্রমাণ:** `styles.css:393`-এ `30s linear infinite`; `:423`-এ কেবল hover pause। `index.html:84`-এর group-এ pause/resume control নেই। Reduced-motion support আছে, কিন্তু সাধারণ motion preference-এ keyboard/touch দিয়ে স্থায়ী pause নেই।

**প্রভাব:** চলমান লেখা পড়া ও মনোযোগ ধরে রাখা কঠিন হতে পারে। পাঁচ সেকেন্ডের বেশি স্বয়ংক্রিয় চলমান কনটেন্টের জন্য pause/stop/hide-এর প্রয়োজন নিয়ে [WCAG 2.2.2](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide) প্রযোজ্য নির্দেশনা দেয়।

**ছোট সমাধান:** technology list স্থির ও wrap করা। চলমান রাখলে keyboard/touch-এ ব্যবহারযোগ্য pause/resume control দাও; শুধু hover বা focus ধরে রাখাকে পূর্ণ সমাধান ধরো না।

**সম্পন্ন ধরা হবে যখন:** ব্যবহারকারী mouse ছাড়াই motion বন্ধ করে অন্য content পড়তে পারেন, অথবা strip নিজেই স্থির থাকে। Reduced-motion-এও সব skill সহজে পাওয়া যায়।

### A03 — Project descriptions আছে, engineering evidence কম

**প্রমাণ:** `index.html:291`–`:388`-এ feature summary, stack ও links আছে; ব্যক্তিগত role, কঠিন সমস্যা, সিদ্ধান্ত, সীমাবদ্ধতা ও যাচাইযোগ্য outcome অনুপস্থিত। Experience-এও বেশিরভাগ দায়িত্বের বিবরণ (`:232`, `:255`)।

**প্রভাব:** দর্শক app-এর কাজ বোঝেন, কিন্তু তোমাকে নিয়োগ দিলে তুমি কোন সমস্যার সমাধান করতে পারবে তা বিচার করতে অতিরিক্ত অনুসন্ধান করতে হয়।

**ছোট সমাধান:** AI Limit Status ও Task Manager-এর জন্য প্রথমে একই page-এ ছোট case study যোগ করো। চাইলে native `<details>` ব্যবহার করা যায়; নতুন router/CMS দরকার নেই। প্রতিটিতে:

- সমস্যা ও ব্যবহারকারী: কার কী অসুবিধা ছিল।
- নিজের role: কোন অংশ নিজে বানিয়েছ, কোন অংশ team/template/library থেকে এসেছে।
- একটি বাস্তব technical challenge এবং কেন নির্দিষ্ট সিদ্ধান্ত নিয়েছ।
- screenshot/ছোট demo ও source/release link।
- ফলাফল: verified user/download count, কাজের পরিবর্তন, release বা documented behaviour। সংখ্যা না থাকলে বানাবে না; qualitative result যথেষ্ট।

**সম্পন্ন ধরা হবে যখন:** বাইরের repo না খুলেও দর্শক “কী”, “তুমি কী করেছ” এবং “কেন ভালো হয়েছে”—এই তিনটি বুঝতে পারবেন। Employer contribution লিখতে team ownership বজায় রাখবে।

### A04 — Hero ও contact-এর উদ্দেশ্য আরও নির্দিষ্ট করা যায়

**প্রমাণ:** “A developer. A builder at heart.” (`index.html:41`) ব্যক্তিত্বপূর্ণ হলেও generic; পরিচিতি Flutter/mobile/desktop বলে। Contact headline (`:512`) কোন ধরনের কাজ বা আলোচনা চাও তা বলে না।

**ছোট সমাধান:** প্রধান audience আগে বেছে নাও—recruiter, client, নাকি open-source collaborator। বিদ্যমান সত্য অনুযায়ী এক বাক্যে Flutter specialization ও কাজের ক্ষেত্র বলো; contact-এ কী নিয়ে যোগাযোগ করা যায় যোগ করো। চাকরি খুঁজছ/ফ্রিল্যান্সে available/নির্দিষ্ট সময়ের মধ্যে reply দেবে—এসব নিশ্চিত না হয়ে লিখবে না।

**সম্পন্ন ধরা হবে যখন:** প্রথম screen পড়েই specialization, কাজের প্রমাণে যাওয়ার পথ এবং যোগাযোগের কারণ পরিষ্কার। ব্যক্তিত্বপূর্ণ tagline রাখা যেতে পারে।

আরেকটি ছোট সুযোগ: page title ও share title-এ শুধু “Farhan”-এর বদলে পছন্দের সম্পূর্ণ professional name দিলে একই নামের অন্যদের থেকে পরিচয় আলাদা করা সহজ হবে। এটি ranking penalty সংশোধনের দাবি নয়।

### A05 — Social preview অসম্পূর্ণ; স্থায়ী URL configuration নেই

**প্রমাণ:** `index.html:6`–`:14`-এ title/description/কিছু Open Graph আছে; `og:image`, `og:url`, canonical এবং Twitter card metadata নেই।

**প্রভাব:** শেয়ার করলে image preview অনুপস্থিত বা platform-নির্ভর হতে পারে। স্থায়ী URL না থাকায় একাধিক host/path-এ প্রকাশের সময় preferred address অস্পষ্ট থাকে; canonical না থাকা মানেই Google index করবে না—এমন নয়।

**ছোট সমাধান:** আসল production domain স্থির হলে absolute canonical, `og:url`, meaningful share image/alt/dimensions এবং প্রয়োজনীয় card metadata যোগ করো। [Open Graph specification](https://ogp.me/) basic metadata নির্ধারণ করে; [Google canonical guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls) duplicate URL consolidation ব্যাখ্যা করে।

**সম্পন্ন ধরা হবে যখন:** production URL fetch করলে সঠিক metadata পাওয়া যায়, image public 200 দেয় এবং একটি বাস্তব share preview-তে নাম/ভূমিকা/image ঠিক দেখা যায়। localhost বা অনুমান করা domain hardcode করবে না।

### A06 — Rebuild-এ source থেকে সরানো asset `dist`-এ রয়ে যায়

**প্রমাণ:** `scripts/build.sh:5`–`:7` শুধু `mkdir` ও copy করে। আলাদা temporary copy-তে প্রথম build, source asset removal ও দ্বিতীয় build-এর পর পুরোনো file `dist`-এ থেকে গেছে।

**প্রভাব:** স্থানীয়ভাবে পুনরায় বানানো deployment artifact-এ পুরোনো asset প্রকাশ হতে পারে। প্রতিবার clean environment-এ build হলে একই পরিস্থিতি নাও ঘটতে পারে।

**ছোট সমাধান:** repository root নিশ্চিত করে শুধু generated `dist` নতুন করে বানাও, তারপর copy করো। Source/assets মুছবে না।

**সম্পন্ন ধরা হবে যখন:** isolated copy-তে source থেকে asset সরিয়ে rebuild করলে output-এও সেটি থাকে না।

### A07 — Publish build বিদ্যমান validation চালায় না

**প্রমাণ:** `netlify.toml:2` শুধু `sh scripts/build.sh`; build script missing local reference যাচাই করে না। বর্তমান checker আলাদাভাবে চালালে সফল হয়।

**ছোট সমাধান:** build workflow-এ বিদ্যমান Python checker চালাও এবং failure হলে publish বন্ধ করো। নতুন test framework দরকার নেই। Build environment-এ Python থাকা নিশ্চিত করো।

**সম্পন্ন ধরা হবে যখন:** temporary copy-তে referenced asset অনুপস্থিত করলে build fail হবে; স্বাভাবিক source ও output উভয় check pass করবে।

### A08 — CV থেকে project যাচাই করতে বাড়তি ধাপ লাগে

**প্রমাণ:** আসল PDF-এ project summaries আছে, কিন্তু তিন project-এর সরাসরি link নেই; generator `scripts/create_cv.py:48`–`:53` একই অবস্থা। Header-এ GitHub/email আছে, LinkedIn বা portfolio URL নেই (`:32`–`:33`)।

**ছোট সমাধান:** প্রতিটি project-এ readable clickable URL, verified contribution/result; header-এ final portfolio URL ও LinkedIn যোগ করো। Web ও CV-র skill naming মিলিয়ে রাখো। নতুন version বানালে দুই page render করে আবার দেখো।

**সম্পন্ন ধরা হবে যখন:** PDF থেকেই প্রতিটি project খোলা যায়, text selectable থাকে, dates/roles সাইটের সঙ্গে মেলে এবং layout ভাঙে না। PDF বর্তমানে untagged; screen-reader reading order/tagging ভবিষ্যৎ accessibility উন্নতি হিসেবে রাখো, ATS compatibility নিশ্চিত দাবি করো না।

### A09 — বাইরের project landing pages দুর্বল

**প্রমাণ:** [Task Manager README](https://github.com/farhans-codes/task_manager/blob/main/README.md) এখনও Flutter starter-level Getting Started content। [Brain Tumour repository](https://github.com/farhans-codes/brain_tumor_webapp)-এর root-এ README পাওয়া যায়নি; `read.txt` আছে। এটি portfolio repository-এর বাইরের কাজ।

**ছোট সমাধান:** project overview, sanitized screenshot, features, setup, architecture-এর সংক্ষিপ্ত ব্যাখ্যা, known limitations এবং নিজের contribution যোগ করো। Academic prototype-এ গবেষণার সীমা পরিষ্কার রাখো। ব্যক্তিগত/রোগীর data demo হিসেবে প্রকাশ করবে না।

**সম্পন্ন ধরা হবে যখন:** “View source” চাপার পর দর্শক এক মিনিটের মধ্যে project কী করে ও কীভাবে চালাতে হয় বুঝতে পারেন।

### A10–A11 — Asset delivery এবং deploy package আলাদা করে উন্নত করো

এগুলো disk size; compressed network transfer বা loading time নয়।

| Asset | আকার |
|---|---:|
| HTML | 24,708 bytes |
| CSS | 25,732 bytes |
| Portrait WebP | 319,660 bytes |
| Project screenshot PNG | 228,562 bytes |
| দুই WOFF2 font | 52,396 bytes |
| CV PDF | 6,353 bytes |
| Unused portrait PNG master | 2,098,763 bytes |

**A10:** `index.html:73`-এ সব screen-এ একই 1122×1402 portrait, `srcset/sizes` নেই। ছোট variant ও উপযুক্ত `sizes` দিয়ে mobile transfer কমানোর সুযোগ আছে। Screenshot-এর আধুনিক/lossless encoding তুলনা করো; UI text যেন ঝাপসা না হয়। মাপ ছাড়া compression savings দাবি করবে না।

**A11:** `scripts/build.sh:7` পুরো assets copy করে; ফলে website-এ reference না থাকা master PNG-ও যায়। প্রায় 2.78 MB deployment output-এর 75.5% ওই master। **এটি প্রথম page load-এ 2 MB download হচ্ছে—এমন নয়।** Browser reference করা WebP-ই নেয়। Master সংরক্ষণ করে publish artifact থেকে বাদ দেওয়া যথেষ্ট।

**সম্পন্ন ধরা হবে যখন:** যথাযথ screen-এ যথাযথ image resource আসে, visual quality বজায় থাকে, source master নিরাপদ থাকে, published output-এ অপ্রয়োজনীয় master থাকে না।

### A12 — Skills-এর তালিকাকে বিশ্বাসযোগ্য প্রমাণের সঙ্গে যুক্ত করো

**প্রমাণ:** technology strip-এ ১১টি skill/tool (`index.html:84`); skills section-এ Clean Architecture ও feature-first claim (`:393` থেকে)। CV-তে Java basic বলা, strip-এ level নেই। এগুলো সরাসরি বিরোধ নয়, কিন্তু সব skill সমান গভীর মনে হতে পারে। “Material UI” শব্দটি Flutter প্রসঙ্গে অস্পষ্ট (`index.html:410`, `scripts/create_cv.py:60`)।

**ছোট সমাধান:** Flutter/Dart-কে primary, বাকিগুলো supporting/familiar হিসেবে সংক্ষেপে বোঝাও; “Material Design / Flutter Material widgets” নাম ব্যবহার করো। State management, release workflow বা architecture-এর উদাহরণ কেবল ব্যবহার করে থাকলে এবং দেখানোর প্রমাণ থাকলে যোগ করো। Skill percentage bar বানানোর প্রয়োজন নেই।

### A13 — Journey সুন্দর, কিন্তু দ্রুত সিদ্ধান্ত নেওয়ার পথ ছোট করা যায়

**প্রমাণ:** 1440×900-এ page প্রায় 6,756px উঁচু এবং Work section শুরু প্রায় y=3,006px। Hero CTA সরাসরি সেখানে নিয়ে যায়—এই সুবিধা আছে। স্বাভাবিক scroll-এ education/about এবং দুই experience block আগে আসে।

**ছোট সমাধান:** story layout রাখতে পারো; hero-র নিচে একটি ছোট selected-work summary বা আরও সংক্ষিপ্ত About দিয়ে প্রমাণ আগে দেখানোর পরীক্ষা করো। Current role আগে দেখানো recruiter-focused বিকল্প; chronological storytelling বর্তমান design-এর সচেতন পছন্দও হতে পারে। অতিরিক্ত vertical spacing কমানোর আগে পড়ার আরাম বজায় রাখো।

দ্বিতীয় ও তৃতীয় project-এ ছোট screenshot, research-এ নিজের contribution-এর এক লাইন, এবং mobile chapter navigation-এ বর্তমান অবস্থান বোঝানোর ব্যবস্থা উপকারী হতে পারে। নতুন scrollspy dependency শুধু এই কারণে যোগ করো না।

**সম্পন্ন ধরা হবে যখন:** একজন নতুন দর্শক অল্প সময়ে সেরা কাজ, বর্তমান role ও যোগাযোগের পথ খুঁজে পান; কয়েকজন মানুষের feedback দিয়ে যাচাই করো।

### A14–A15 — ছোট documentation ও maintenance ঘাটতি

- **ZIP mismatch:** `README.md:38`-এ `outputs/portfolio-static.zip` আছে, কিন্তু build সেটি বানায় না। Fresh build-এ ZIP নেই। অপ্রয়োজনীয় নির্দেশনা বাদ দাও; নিয়মিত ZIP দরকার হলেই command যোগ করো।
- **Checker wording:** `scripts/check_site.py:55` HTTP/mailto/tel skip করে; `:62`-এর 59 reference count external availability-এর নিশ্চয়তা নয়। Output-এ local integrity বনাম external/manual checks স্পষ্ট করো।
- **একাধিক content copy:** HTML, CV generator ও generated PDF একসঙ্গে update করার checklist রাখো। Manual PDF replacement করলে পরের generator run সেটি overwrite করবে—কোনটি source of truth তা লেখো। নতুন CMS এখন প্রয়োজন নেই।
- **CV setup:** ঐচ্ছিক ReportLab/pypdf environment তৈরির পুনরুৎপাদনযোগ্য নির্দেশনা README-তে যোগ করা যায়।
- **Dead CSS:** `styles.css:31`–`:32`-এর `--project-background`, `--preview-background` ব্যবহৃত নয়; `:214`-এর `.contact-section h2 span` বর্তমান HTML class-এর সঙ্গে মেলে না। ছোট cleanup যথেষ্ট; বড় rewrite দরকার নেই।
- **Checker ভবিষ্যৎ বাধা:** `scripts/check_site.py:31` সব `<script>` নিষিদ্ধ করে। পরে non-executable JSON-LD যোগ করলে ওই check-ও সচেতনভাবে বদলাতে হবে; executable JS ও metadata এক জিনিস নয়। Structured data এখন বাধ্যতামূলক upgrade নয়।

### A16 — যেগুলো এখনো পরীক্ষা করে নিশ্চিত করতে হবে

এগুলোকে confirmed bug তালিকায় যোগ করা হয়নি:

- Mobile journey-এর horizontal scroll container focus ring clip করে কি না (`styles.css:138`, `:1011`); Tab/Shift+Tab দিয়ে দেখো।
- Reduced-motion-এ non-interactive technology overflow keyboard দিয়ে Safari-তে scroll করা যায় কি না। Wrap list হলে এই জটিলতা কমে। [MDN overflow accessibility](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/overflow) দেখো।
- `.reveal`-এর opacity 0.55 (`styles.css:965`)-তে entry frame-এর text contrast কমতে পারে। Journey muted/background pair-এর তাত্ত্বিক মান তখন প্রায় 4.08:1; rendered text-এর অবস্থান/opacity পরীক্ষা ছাড়া স্থায়ী failure বলা যাবে না। Opacity 1 রেখে transform বা animation বাদ দেওয়া ছোট সমাধান। [WCAG contrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)।
- Hero copy বড় text/zoom-এ nested scroll তৈরি করে কি না; [WCAG reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html) অনুযায়ী ব্যবহারযোগ্যতা দেখো।
- দুই “View source” link-এ আলাদা project name দিলে screen-reader link list সহজ হবে; বর্তমান contextual label-কে নিশ্চিত failure বলা হচ্ছে না।
- Print stylesheet শুধু কয়েকটি rule বদলায় (`styles.css:1130`); page printing-এ dark surfaces, বড় hero ও card page-break কেমন আসে যাচাই করো। আলাদা CV download ইতিমধ্যে ভালো বিকল্প।

### A17 — Production-এ যাওয়ার পর যাচাই

- Canonical domain, HTTPS, redirect, real 404, favicon, CV download এবং share image পরীক্ষা।
- প্রকৃত response headers দেখে compression/cache/security configuration মূল্যায়ন। Config file-এ rule না থাকাই production দুর্বলতার প্রমাণ নয়।
- PageSpeed/Lighthouse দিয়ে reproducible mobile baseline রাখো; traffic থাকলে field data দেখো। লক্ষ্য: p75-এ LCP ≤2.5s, INP ≤200ms, CLS ≤0.1; এগুলো এই অডিটের measured result নয়। [Web Vitals নির্দেশনা](https://web.dev/articles/vitals)।
- Search Console-এ ownership/indexing যাচাই; প্রয়োজন হলে এক-page sitemap যোগ করো। `robots.txt`/sitemap না থাকলেই এক-page site index হবে না—এমন নয়।
- Analytics শুধু সিদ্ধান্ত নেওয়ার দরকার হলে যোগ করো। Heavy tracking SDK, cookie banner বা form backend অনর্থক যোগ করার প্রয়োজন নেই। বর্তমানে source-এ third-party tracking বা contact form নেই।
- Public phone/email প্রকাশ রাখার সিদ্ধান্ত নিজের সুবিধা অনুযায়ী পুনর্বিবেচনা করতে পারো; এগুলো বর্তমানে ইচ্ছাকৃত contact channels, নিজে থেকে vulnerability বলা হচ্ছে না।

## ৫. লিংক ও তথ্য যাচাইয়ের ফল

| Destination | ফলাফল | ব্যাখ্যা |
|---|---|---|
| GitHub profile | 200 | খোলা গেছে |
| AI Limit Status repo | 200 | খোলা গেছে |
| Latest release | 200 | পরীক্ষার সময় `v0.9.0` release-এ গেছে; ভবিষ্যতে বদলাবে |
| Task Manager repo | 200 | README উন্নয়ন প্রয়োজন, A09 |
| Brain Tumour repo | 200 | Landing-page documentation উন্নয়ন প্রয়োজন, A09 |
| IRD Foundation | 200 | খোলা গেছে |
| One Ummah | 200 | খোলা গেছে |
| arXiv | 200 | co-author নাম ও 10 August 2025 submission মিলে গেছে |
| DeepMedScan DOI | redirect-এর পরে 403 | automated access restricted; broken link বলা যাচ্ছে না |
| LinkedIn | 999 | automated access restricted; manual check বাকি |

DeepMedScan-এর [Crossref record](https://api.crossref.org/works/10.1504/IJAIH.2026.154457)-এ title, author, journal, 2026, volume 1 issue 2 এবং pages 148–159 মিলে গেছে। [arXiv record](https://arxiv.org/abs/2508.07306)-এ 2025 preprint পরিচয় নিশ্চিত হয়েছে। Publication metadata মিলে যাওয়া গবেষণার clinical efficacy বা ব্যক্তিগত contribution যাচাইয়ের সমান নয়।

## ৬. ধাপে ধাপে কাজের পরিকল্পনা

### প্রথম ছোট release — দৃশ্যমান সমস্যা ও release reliability

- [ ] A01: ছোট screen-এর hero ঠিক করা।
- [ ] A02: চলমান strip-এর accessible সমাধান।
- [ ] A06–A07: পরিষ্কার build output এবং existing checker gate।
- [ ] A14: ZIP ও validation নির্দেশনা সংশোধন।

### দ্বিতীয় release — কাজের প্রমাণ ও যোগাযোগ

- [ ] A03–A04: প্রধান দুই case study ও লক্ষ্যভিত্তিক পরিচিতি।
- [ ] A08–A09: CV links এবং external project documentation।
- [ ] A12–A13: skills/experience/research copy ও page scanning উন্নয়ন।

### তৃতীয় release — share, performance ও পূর্ণ QA

- [ ] A05: production domain অনুযায়ী share metadata।
- [ ] A10–A11: image delivery ও package cleanup।
- [ ] A15–A17: maintenance checklist, browser/accessibility QA ও production baseline।

## ৭. প্রতিটি update-এর manual acceptance checklist

- [ ] 320, 375/390, 768, 1024 ও 1440px width; ছোট landscape-এ content দেখা যায়।
- [ ] Page-level horizontal scrolling, portrait collapse, clipped text বা overlapping button নেই।
- [ ] Tab/Shift+Tab order, skip link, visible focus ও সব section anchor ঠিক।
- [ ] Reduced-motion on/off, 200% text enlargement ও 400% zoom পরীক্ষা।
- [ ] Chrome/Chromium, Safari এবং Firefox-এ অন্তত প্রধান flow দেখা।
- [ ] Source, release, publication, LinkedIn এবং CV links খোলা যায়; mail/phone action সঠিক destination নির্দেশ করে।
- [ ] সাইটের role/date/skill/publication CV-র সঙ্গে মেলে; generated PDF-এর দুই পৃষ্ঠা render করে দেখা।
- [ ] `python3 scripts/check_site.py`, `sh scripts/build.sh`, `python3 scripts/check_site.py dist` সফল।
- [ ] Published output-এ deleted/অপ্রয়োজনীয় assets নেই; প্রয়োজনীয় licenses আছে।
- [ ] বাস্তব production URL-এ share preview এবং mobile loading যাচাই।

অডিটে কোনো নতুন test file লেখা হয়নি। বর্তমান static checker এবং manual browser review-ই ব্যবহার করা হয়েছে।

## ৮. এখন যেগুলো না করলেও চলে

- React/Next.js migration, CMS, design-system package বা state management যোগ করা।
- শুধু portfolio বড় দেখাতে blog, dashboard, contact backend বা বহু নতুন page বানানো।
- 3D hero, custom cursor, loading screen কিংবা আরও animation যোগ করা।
- অযাচাইকৃত user count, performance percentage, skill rating বা testimonial লেখা।
- Measurement ছাড়া caching layer, image service বা analytics stack বানানো।
- Simple repeated content-এর জন্য এখনই data-generation architecture তৈরি করা।

বর্তমান শক্ত ভিত্তি বজায় রেখে **কাজের প্রমাণ, ছোট স্ক্রিনের স্থিতিশীলতা এবং সহজ রক্ষণাবেক্ষণ** উন্নত করাই সবচেয়ে লাভজনক পথ।

## ৯. ভবিষ্যৎ অগ্রগতির নোট

| তারিখ | ID | কী বদলেছে | কীভাবে যাচাই করা হয়েছে |
|---|---|---|---|
| — | — | কাজ সম্পন্ন হলে এখানে লেখো | — |

Line references এই snapshot-এর জন্য; file বদলালে line number সরতে পারে। সংশ্লিষ্ট selector, section ID বা function অনুসরণ করে finding খুঁজবে।

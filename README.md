# Farhan — Portfolio

Muhammed Farhan Sadique Mahi-এর পোর্টফোলিও। সম্পূর্ণ **HTML ও CSS**; React, TypeScript, JavaScript বা npm প্রয়োজন নেই।

## সাইট দেখুন

`index.html` ডাবলক্লিক করে ব্রাউজারে খুলুন। ছবি, ফন্ট, ডিজাইন ও CV একই ফোল্ডারের `assets/` থেকে লোড হয়। বাইরের ওয়েবসাইটের লিংক খুলতে ইন্টারনেট লাগবে।

চাইলে লোকাল সার্ভারেও চালাতে পারেন:

```sh
python3 -m http.server 3000 --bind 127.0.0.1
```

তারপর [localhost:3000](http://localhost:3000) খুলুন। লেখা বা ডিজাইন বদলে ব্রাউজার রিফ্রেশ করুন।

## কোন ফাইলে কী বদলাবেন

- `index.html` — নাম, পরিচিতি, প্রজেক্ট, অভিজ্ঞতা, গবেষণা, যোগাযোগ, পেজ টাইটেল ও শেয়ার মেটাডেটা।
- `styles.css` — রং, ফন্ট, স্পেসিং, লেআউট ও মোবাইলের ডিজাইন। ফাইলের শুরুতে `:root`-এ সাধারণ ডিজাইন টোকেন আছে।
- `assets/images/farhan-portrait.webp` — ওয়েবসাইটের অপ্টিমাইজ করা ছবি।
- `assets/images/farhan-portrait.png` — ছবির পূর্ণ রেজোলিউশনের কপি।
- `assets/images/ai-limit-status.png` — প্রজেক্টের স্ক্রিনশট।
- `assets/farhan-mahi-cv.pdf` — ডাউনলোডযোগ্য CV। নতুন PDF দিয়ে এটি প্রতিস্থাপন করতে পারেন।
- `assets/favicon.svg` — ব্রাউজার ট্যাবের আইকন।
- `scripts/create_cv.py` — ঐচ্ছিক CV তৈরির স্ক্রিপ্ট; শুধু এটি চালানোর জন্য ReportLab ও pypdf লাগে।

`index.html`, `styles.css` ও `assets/` একসঙ্গে রাখুন। কোনো build ছাড়াই সাইট চলে।

## হোস্টিংয়ের ফাইল

হোস্টিংয়ের জন্য শুধু প্রয়োজনীয় ফাইলগুলো `dist/`-এ কপি করতে:

```sh
sh scripts/build.sh
```

`dist/`-এর ভেতরের ফাইলগুলো স্ট্যাটিক হোস্টে আপলোড করুন, অথবা `outputs/portfolio-static.zip` আনজিপ করে ব্যবহার করুন। সাইটের সব asset path relative, তাই GitHub Pages-এর repository subfolder-এও আলাদা base-path বদলাতে হয় না।

`netlify.toml`-এ এই কপি কমান্ড ও `dist` প্রকাশের সেটিং দেওয়া আছে। `.openai/hosting.json`-ও একই ফোল্ডার ব্যবহার করে। এই স্ক্রিপ্টগুলো নিজে থেকে Git commit, push বা deployment করে না।

## ঐচ্ছিক যাচাই

Python থাকলে কোনো অতিরিক্ত প্যাকেজ ইনস্টল না করেই যাচাই করা যায়:

```sh
python3 scripts/check_site.py
sh scripts/build.sh
python3 scripts/check_site.py dist
```

এতে সেকশন লিংক, লোকাল ফাইল, ছবির বিকল্প লেখা, মেটাডেটা ও ব্যক্তিগত প্রজেক্টের সীমা যাচাই হয়। এটি ব্রাউজারে দৃশ্যমান ডিজাইন পরীক্ষার বিকল্প নয়।

## Content sources

Facts were checked on 6 September 2026 against the supplied two-page CV, connected GitHub profile, repository source and publication records.

- [GitHub profile](https://github.com/farhans-codes)
- [AI Limit Status](https://github.com/farhans-codes/ai_limit_status): featured **personal** open-source project. Real screenshot from `docs/screenshots/macos-usage-popover.png` in that repository. Independent project, not endorsed by OpenAI or Anthropic.
- [Task Manager](https://github.com/farhans-codes/task_manager): Flutter source verifies REST integration, authentication and task status views.
- [Brain tumour classification prototype](https://github.com/farhans-codes/brain_tumor_webapp): Python/Flask/TensorFlow academic project; no patient images or reports are copied into this site.
- [One Ummah](https://ummah.one/): appears **only in employment experience**, as an IRD Foundation project.
- [DeepMedScan](https://doi.org/10.1504/IJAIH.2026.154457): co-authored journal article, 2026.
- [DragonFruitQualityNet](https://arxiv.org/abs/2508.07306): co-authored preprint. The supplied CV says 2026; the authoritative arXiv record says 10 August 2025, so the portfolio and downloadable CV use 2025.

The downloadable CV is newly typeset from the supplied CV and verified public projects; it is not a byte-for-byte copy of the attached images.

## Portrait edit

Built-in ImageGen, `identity-preserve` edit, one generation. Prompt: preserve the exact facial structure, proportions, eyes, skin tone, curly black hair, full beard and calm expression; replace the light blue shirt with a plain black crewneck, use a deep charcoal studio background, soft key light and delicate edge light, frame a vertical 4:5 head-and-shoulders portrait, retain natural skin texture, and avoid text, logos, heavy retouching or changes to identity. The WebP is an optimised copy of the generated PNG.

## Asset licenses

The self-hosted Geist and Geist Mono fonts use the SIL Open Font License (`assets/fonts/OFL.txt`). The inline SVG icons retain the Lucide/Feather notices in `assets/icons-LICENSE.txt`.

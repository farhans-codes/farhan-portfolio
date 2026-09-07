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

The original portrait was created with built-in ImageGen from the supplied photograph, preserving the subject's identity and replacing the blue shirt with a black crewneck.

The current portrait was refined with built-in ImageGen on 7 September 2026 to clean the bright edge fringe and improve facial clarity. The PNG master is `assets/images/farhan-portrait.png`; the website uses `assets/images/farhan-portrait.webp` at its full native 1122 × 1402 resolution, encoded with WebP quality 95 and sharp YUV conversion. The requested 2048 × 2560 output was not returned by the tool; the image has not been artificially enlarged.

First repair prompt:

```text
Use case: identity-preserve.
Asset type: high-resolution portrait for an existing dark developer portfolio.
Input image 1: edit target and strict identity/composition reference.
Primary request: repair the supplied portrait's image quality and edge contamination. Keep this exact person, face, age, expression, direct gaze, natural skin tone, facial proportions, distinctive eyes/nose/lips/ears, curly black hair, full beard and moustache, body pose and plain black crewneck unchanged. This is a restrained photographic retouch, not a new person or a makeover.
Background: replace the existing gray glowing backdrop with a clean, uniform very dark charcoal #101113, matching the portfolio background. Remove the conspicuous white/silver cutout fringe around curls, ears, beard, neck and shoulders. Preserve genuine dark fine hairs and soft natural edge transitions. No white outline, rim lighting, backlight, gray haze, light spots or halo.
Face quality: improve optical clarity of eyes, eyebrows, hair and beard while removing compression artifacts, coarse speckled noise and muddy facial detail. Use soft balanced frontal studio light and restrained natural contrast so the face looks clear and alive. Preserve realistic fine skin texture and the existing facial features. Avoid oversharpening, crunchy hair, grain, pixelation, blur, waxy skin, airbrushing, plastic skin or invented freckles.
Composition: keep the input's centered eye-level 4:5 head-and-shoulders framing, scale and headroom; entire hair and both shoulders inside the frame, black shirt continuing to the lower edge. Produce a high-resolution 2048 x 2560 portrait if supported, with clean smooth tonal transitions and fine natural detail.
No text, watermark, logo, props, additional people, recoloring of skin, beauty filter, facial reshaping or clothing changes.
```

Final texture refinement prompt:

```text
Use case: identity-preserve.
Input image: edit target, the same man's already edge-corrected portrait.
Make one targeted photographic retouch: the face currently has excessive artificial squiggly, cracked, engraved microtexture on the forehead and cheeks, and the beard/hair look crunchy from oversharpening. Remove those sharpening and generation artifacts. Render skin as continuous natural photographic tones with faint, realistic pores, retaining original small facial details; use gentle noise reduction, not drawn/etched pores and not waxy airbrushing. Keep eyes naturally clear and in focus. Soften only excessive high-frequency facial texture and crunchy hair highlights, with clean realistic individual dark hair strands. Do NOT change face identity, face outline, proportions, expression, eyes, eyebrows, nose, lips, ears, beard shape, hairstyle, skin color, gaze, black crewneck, pose or framing.
Preserve the corrected clean edges and uniform near-black charcoal backdrop matching #101113, without a white outline, gray halo, rim light, stray white flecks or light patches. Do not brighten the background.
This must look like a clean high-quality real camera portrait, not an oil painting, etched illustration, beauty-filter face or oversharpened AI portrait. No new objects or text.
```

## Asset licenses

The self-hosted Geist and Geist Mono fonts use the SIL Open Font License (`assets/fonts/OFL.txt`). The inline SVG icons retain the Lucide/Feather notices in `assets/icons-LICENSE.txt`.

# Motorsport Stričević Website Implementation Plan

## 1. Project objective

Create a premium, conversion-focused website for Motorsport Stričević that:

- Professionally presents the studio and its work.
- Positions the business as a vehicle-care specialist rather than a generic car wash.
- Generates qualified calls, enquiries, and online bookings.
- Supports local search visibility in Split and the surrounding service area.
- Connects appointment availability and confirmed bookings to Google Calendar.
- Recreates the atmosphere, precision, and visual character of the physical workshop.
- Remains easy for the business to update with real services, prices, photographs, projects, and reviews.

The initial positioning direction is:

> Specialist vehicle care in Split, built on more than a decade of experience—from daily drivers to supercars, motorcycles, and boats.

The experience claim, breadth of services, and all other factual claims must be confirmed before publication.

## 2. Project principles

- **Real proof over generic claims:** use actual projects, processes, reviews, products, and workshop imagery.
- **Premium but approachable:** demonstrate expertise without suggesting that only exotic or expensive vehicles are welcome.
- **Clear before clever:** customers should immediately understand the services, expected result, duration, price basis, and next action.
- **Local by design:** the business name, address, phone number, hours, location, service pages, and Google Business Profile must reinforce one another.
- **Mobile-first conversion:** calling, viewing directions, comparing services, and booking must be effortless on a phone.
- **Honest expectations:** explain limitations, inspection requirements, maintenance, and what each treatment can realistically achieve.
- **Performance-conscious media:** immersive imagery and video must not make the website slow or unstable.
- **No unsupported claims:** certifications, product partnerships, warranties, years of experience, review counts, and coating durability must be verified.

## 3. Discovery decisions required before development

### Business identity

- [ ] Confirm the exact customer-facing brand name: `Motorsport Stričević` or another form.
- [ ] Confirm the full registered business name for the legal footer and policies.
- [ ] Confirm the canonical address, including whether `38`, `38/1`, `Ulica Antuna Mihanovića`, or `Mihanovićeva` is correct.
- [ ] Confirm the primary telephone number and international format.
- [ ] Confirm the public email address and correct spelling.
- [ ] Confirm actual opening hours and separate bookable hours, if different.
- [ ] Confirm whether customers can arrive without an appointment.
- [ ] Confirm the main service area outside Split.
- [ ] Confirm the preferred domain name.
- [ ] Confirm the owner-facing and customer-facing contact person or team names.

### Brand and positioning

- [ ] Confirm the number of years of professional experience.
- [ ] Confirm the founding story and the relationship to motorsport.
- [ ] Confirm the statement that the same standard is used for daily drivers and supercars.
- [ ] Confirm whether the business wants to emphasize premium/luxury work, broad accessibility, or an equal balance.
- [ ] Confirm whether motorcycles and nautical detailing are active, profitable service lines.
- [ ] Confirm all certifications, training, accredited-installer status, and product partnerships.
- [ ] Obtain permission and correct usage rules for every third-party brand logo.
- [ ] Confirm warranties or guarantees and their exact conditions.
- [ ] Confirm whether content should be Croatian-only or Croatian and English.

### Operations and commercial rules

- [ ] Obtain the full current service list.
- [ ] Confirm what is included and excluded from every service.
- [ ] Confirm typical service duration by vehicle size and condition.
- [ ] Confirm starting prices, fixed prices, or the factors used to calculate a quotation.
- [ ] Confirm the maximum number and mix of vehicles accepted per day.
- [ ] Confirm preparation and cleanup buffers between appointments.
- [ ] Confirm minimum advance-booking notice.
- [ ] Confirm cancellation, rescheduling, late-arrival, deposit, and no-show policies.
- [ ] Confirm which services can be booked instantly and which require manual approval or inspection.
- [ ] Confirm whether customers may upload vehicle photographs.
- [ ] Confirm the desired confirmation and reminder channels: email, SMS, WhatsApp, or a combination.

## 4. Target audiences and search intent

### Primary customer groups

1. Daily-driver owners who want a clean, hygienic interior or restored exterior.
2. Enthusiasts and premium-vehicle owners seeking safe paint correction and long-term protection.
3. Owners preparing a vehicle for sale, delivery, an event, or seasonal use.
4. Families and pet owners dealing with stains, odours, spills, and heavily used interiors.
5. Motorcycle owners requiring careful cleaning, correction, and protection.
6. Boat owners seeking nautical cleaning, polishing, and surface protection, if confirmed.
7. Returning clients requiring maintenance washes or coating maintenance.

### Core customer questions

Every relevant page must answer:

- Can I trust this studio with my vehicle?
- Is this service suitable for the problem I have?
- What exactly is included?
- What will the result look and feel like?
- What cannot be guaranteed or removed?
- How long will the work take?
- How is the price determined?
- How long will the protection last?
- How should the vehicle be maintained afterward?
- Do you work on normal daily vehicles as well as premium vehicles?
- How do I book or request an assessment?

### Initial keyword and intent clusters

These are structural targets, not instructions to repeat keywords unnaturally:

- `auto detailing Split`
- `detailing automobila Split`
- `dubinsko čišćenje auta Split`
- `dubinsko pranje automobila Split`
- `kemijsko čišćenje automobila Split`
- `poliranje auta Split`
- `poliranje automobila Split`
- `korekcija laka Split`
- `keramička zaštita auta Split`
- `keramička zaštita automobila Split`
- `premium ručno pranje auta Split`
- `poliranje farova Split`, if offered
- `detailing motocikla Split`, if offered
- `poliranje broda Split` and `nautički detailing Split`, if offered

Final keyword mapping should be validated against the approved services and should avoid creating thin or duplicative pages.

## 5. Proposed sitemap

### Required launch pages

1. **Home** `/`
2. **Services overview** `/usluge/`
3. **Deep interior cleaning** `/usluge/dubinsko-ciscenje-automobila-split/`
4. **Polishing and paint correction** `/usluge/poliranje-automobila-split/`
5. **Ceramic protection** `/usluge/keramicka-zastita-automobila-split/`
6. **Premium and maintenance wash** `/usluge/premium-pranje-automobila/`
7. **Projects/gallery** `/radovi/`
8. **About the studio** `/o-nama/`
9. **Booking** `/rezervacija/`
10. **Contact and location** `/kontakt/`
11. **Privacy policy** `/politika-privatnosti/`
12. **Cookie policy** `/politika-kolacica/`, if non-essential cookies are used
13. **Booking/cancellation terms** `/uvjeti-rezervacije/`
14. **404 page**

### Conditional pages

- `/usluge/detailing-motocikala-split/`
- `/usluge/nauticki-detailing-split/`
- `/usluge/poliranje-farova-split/`
- `/usluge/njega-i-obnova-koze/`
- `/cjenik/`, if the approved pricing model supports a useful standalone page
- English equivalents with correct language switching and `hreflang`
- Individual project/case-study pages under `/radovi/[project-slug]/`
- Educational articles only when the business can maintain accurate, useful content

Do not create separate location pages for nearby cities unless the business genuinely serves those areas and each page can contain unique, useful local information.

## 6. Homepage specification

The homepage must guide visitors through this sequence:

### 6.1 Header

- Logo/wordmark.
- Short, clear navigation.
- Persistent primary CTA: `Rezerviraj termin`.
- Mobile call shortcut.
- Optional language switcher if English is included.

### 6.2 Hero

- Clear H1 containing the primary service category and Split naturally.
- Concise value proposition.
- Primary CTA: `Rezerviraj termin`.
- Secondary CTA: `Nazovite nas` or `Pogledajte radove`.
- Full-width real workshop image or optimized muted video.
- Immediate trust marker, such as verified years of experience, rating, or completed projects.

Initial copy direction, subject to verification and final copywriting:

> **Profesionalni auto detailing u Splitu**  
> Precizna njega, korekcija i zaštita vozila—od svakodnevnih automobila do superautomobila.

### 6.3 Trust strip

Display only verified facts, potentially including:

- Years of experience.
- Google rating and review count.
- Accredited or certified status.
- Cars, motorcycles, and boats serviced.
- Inspection or consultation availability.

### 6.4 Core services

- Deep interior cleaning.
- Polishing and paint correction.
- Ceramic protection.
- Premium/maintenance wash.
- Optional motorcycle and nautical entries.
- Each service must state its outcome and link to its full page.

### 6.5 Positioning statement

Explain that every vehicle receives the same careful approach, without alienating daily-driver owners through an exotic-car-heavy presentation.

### 6.6 Featured transformations

- Three to six strong before/after projects.
- Consistent image pairs and lighting where possible.
- Vehicle, initial problem, treatment, working time, and outcome.
- Link to project detail pages or the gallery.

### 6.7 Process

Suggested sequence:

1. Vehicle information or initial enquiry.
2. Inspection and treatment recommendation.
3. Preparation and specialist work.
4. Quality check and handover.
5. Maintenance guidance.

### 6.8 Packages or price guidance

- Display approved starting prices or explain price-determining factors.
- Make the distinction between instant-book and assessment-required work obvious.
- Avoid unexplained `cijena na upit` labels.

### 6.9 Reviews

- Use genuine reviews with permission or a compliant source/link.
- Show review source and current verified rating.
- Link to the Google review profile.
- Do not mark up self-hosted LocalBusiness reviews as aggregate-rating structured data unless implementation complies with Google's current eligibility rules.

### 6.10 Workshop and team

- Owner/team introduction.
- Workshop environment.
- Tools, products, training, and process.
- Link to the About page.

### 6.11 FAQ

- Five to eight high-value questions based on real enquiries.
- Cover duration, pricing, bookings, paint defects, drying time, ceramic maintenance, and vehicle preparation.

### 6.12 Location and final CTA

- Correct address and opening hours.
- Map/directions link.
- Phone, email, and optional WhatsApp.
- Parking/drop-off instructions.
- Final booking CTA.

## 7. Service-page template

Each core service page must contain:

- Unique SEO title and meta description.
- One clear H1.
- Service-specific introductory promise grounded in a real outcome.
- Problems and symptoms the service addresses.
- Who the service is and is not suitable for.
- Detailed inclusions and exclusions.
- Step-by-step treatment process.
- Vehicle-size or condition variables.
- Approximate duration.
- Starting price or pricing explanation.
- Expected result and realistic limitations.
- Product/coating information where relevant.
- Protection durability and warranty conditions where relevant.
- Aftercare and maintenance guidance.
- Relevant before/after project.
- Relevant testimonials.
- Service-specific FAQs.
- Related-service links.
- `Rezerviraj` and `Zatraži procjenu` CTAs as appropriate.

### Ceramic-protection page requirements

- Explain preparation and why polishing may be required.
- Explain realistic benefits: easier maintenance, gloss, hydrophobic behavior, and resistance to defined environmental contamination.
- Avoid implying that ceramic coating prevents stone chips or all scratches.
- State coating duration only for the actual approved product and maintenance conditions.
- Explain required inspection or maintenance visits.

### Polishing page requirements

- Differentiate gloss enhancement, one-stage polishing, and multi-stage paint correction.
- Explain paint inspection and paint-depth measurement if actually performed.
- Avoid promising complete removal of every scratch.
- Explain when scratches are too deep to polish safely.

### Interior-cleaning page requirements

- List treated surfaces and whether seats are removed.
- Explain drying time and vehicle collection expectations.
- Address stains, odours, pet hair, leather care, and delicate materials.
- Clarify whether ozone treatment or disinfection is offered.

## 8. Project and gallery system

The project archive should prove expertise rather than function as an unstructured image grid.

Each featured project should capture:

- Vehicle make/model/category.
- Initial condition or customer goal.
- Inspection findings.
- Recommended service.
- Key treatment steps.
- Products or coating used, when approved.
- Time required.
- Before and after imagery.
- Result and maintenance recommendation.
- Related service CTA.

Gallery filters may include:

- Interior.
- Paint correction.
- Ceramic protection.
- Premium vehicles.
- Daily drivers.
- Motorcycles.
- Boats.

Do not expose customer names, license plates, booking details, or other personal information without permission.

## 9. Booking-system specification

### 9.1 Booking model

Use a hybrid booking model:

- **Instant confirmation:** predictable, fixed-duration services approved by the owner.
- **Request pending confirmation:** paint correction, ceramic protection, heavily contaminated interiors, boats, motorcycles, or any job requiring inspection.

### 9.2 Booking flow

1. Select service.
2. Select vehicle type and size.
3. Enter make, model, and year if relevant.
4. Describe the condition or goal.
5. Select extras.
6. Upload optional vehicle photographs if enabled.
7. View eligible available dates/times.
8. Enter name, telephone, and email.
9. Accept privacy and booking terms.
10. Review and submit.
11. Receive instant confirmation or a clear pending-assessment message.

### 9.3 Scheduling rules

- Duration per service and vehicle category.
- Configurable buffers before and after appointments.
- Working hours separate from publicly displayed opening hours if needed.
- Blocked dates, holidays, and manual calendar events.
- Maximum daily capacity.
- Minimum notice and maximum future booking window.
- Conflict prevention and duplicate-submission protection.
- Correct handling of the Europe/Zagreb timezone and daylight-saving changes.
- Clear behavior if availability changes during submission.
- Admin ability to modify, confirm, decline, or reschedule.

### 9.4 Google Calendar connection

Evaluate and choose between:

#### Option A: Google Calendar Appointment Schedules

- Faster launch.
- Google-hosted availability and booking page.
- Website embed or booking-page link.
- Lower development and maintenance overhead.
- Limited visual and conditional-flow customization.

#### Option B: Custom booking interface connected to Google Calendar

- Preferred for a fully branded experience and conditional service logic.
- Use a dedicated business calendar rather than a personal calendar.
- Check availability before final submission.
- Create events only after valid booking or approved assessment.
- Store only the operational details required by the business.
- Keep private calendar event data hidden from website visitors.
- Implement secure authorization, server-side validation, logging, and failure handling.
- Provide a fallback contact path if Google services are unavailable.

- [ ] Confirm which option is approved before technical implementation.
- [ ] Confirm the business Google account and Google Workspace capabilities.
- [ ] Create or identify a dedicated booking calendar.
- [ ] Define calendar event titles, descriptions, visibility, and internal notes.

### 9.5 Notifications and lifecycle

- Booking or request confirmation.
- Manual approval/decline notification.
- Appointment reminder.
- Reschedule/cancellation confirmation.
- Internal notification to the studio.
- Optional post-service review request.
- Optional aftercare message for coating or interior drying.

### 9.6 Booking quality and privacy

- Validate all required data on client and server.
- Rate-limit and protect the form from spam.
- Define upload type, size, retention, and deletion rules.
- Do not include sensitive customer information in public calendar fields.
- Provide a privacy notice adjacent to submission.
- Record consent only where required and never preselect marketing consent.
- Distinguish transactional communication from optional marketing.

## 10. Local SEO plan

### 10.1 Business information consistency

Standardize the following across the website, Google Business Profile, Facebook, Instagram, and reputable directories:

- Business name.
- Street address.
- Telephone number.
- Opening hours.
- Website URL.
- Booking URL.
- Business category and service descriptions.

Known inconsistencies to resolve include differing address formats, hours, usernames, business categories, website links, and review counts.

### 10.2 Google Business Profile

- [ ] Claim and verify the correct profile.
- [ ] Select the most accurate primary category available to the business.
- [ ] Add relevant secondary categories without category stuffing.
- [ ] Correct name, address, phone, hours, and service area.
- [ ] Add the final website URL.
- [ ] Add the booking URL and set it as preferred where eligible.
- [ ] Add all real services with useful descriptions.
- [ ] Add the final business description.
- [ ] Add exterior, entrance, interior, team, at-work, and completed-work photographs.
- [ ] Add supported social profile links.
- [ ] Review and respond to all recent reviews.
- [ ] Create a direct review link and in-shop QR code.
- [ ] Establish a post-service review-request process with no incentives.
- [ ] Publish useful photo/project updates regularly.

### 10.3 Local authority

- [ ] Correct major Croatian directory listings.
- [ ] Remove or update obsolete social handles and links where possible.
- [ ] Seek genuine links and mentions from vehicle clubs, motorsport partners, suppliers, dealerships, marinas, and relevant local organizations.
- [ ] Use real project collaborations as link and content opportunities.
- [ ] Monitor duplicate or inaccurate listings.

## 11. On-page SEO specification

- Map one primary search intent to each page.
- Use unique, concise, descriptive `<title>` elements.
- Use unique meta descriptions based on benefit, service, location, and action.
- Use exactly one clear primary H1 per page.
- Maintain a logical H2/H3 hierarchy.
- Write natural Croatian copy; do not force exact-match keywords.
- Mention Split and the real service area where contextually useful.
- Use descriptive, stable, lowercase URLs without unnecessary parameters.
- Link services, projects, FAQs, About, Booking, and Contact contextually.
- Add useful breadcrumb navigation on interior pages.
- Keep primary business information visible as HTML text, not only in images.
- Give real images descriptive filenames, dimensions, captions where useful, and accurate alt text.
- Avoid duplicate service/location pages.
- Do not publish generated filler or unverified advice.
- Create redirects for any URL changes after launch.
- Define one canonical URL for every indexable page.

### Example metadata direction

Examples are provisional and require final copy review:

- Home title: `Auto detailing Split | Motorsport Stričević`
- Polishing title: `Poliranje automobila i korekcija laka Split | Motorsport Stričević`
- Ceramic title: `Keramička zaštita automobila Split | Motorsport Stričević`
- Interior title: `Dubinsko čišćenje automobila Split | Motorsport Stričević`

## 12. Technical SEO and discoverability

- [ ] Generate a valid XML sitemap containing canonical, indexable URLs only.
- [ ] Create an appropriate `robots.txt` file and reference the sitemap.
- [ ] Ensure production pages are not blocked or marked `noindex` accidentally.
- [ ] Add canonical tags.
- [ ] Add Open Graph and social-sharing metadata.
- [ ] Use correct status codes and a useful 404 page.
- [ ] Redirect HTTP to HTTPS and enforce one hostname format.
- [ ] Avoid duplicate trailing-slash, query-string, and hostname variants.
- [ ] Add favicon and appropriate web-app icons.
- [ ] Register and verify Google Search Console.
- [ ] Submit the XML sitemap after launch.
- [ ] Configure privacy-conscious analytics and conversion events.
- [ ] Validate production URLs with Search Console URL Inspection.
- [ ] Monitor indexing, Core Web Vitals, crawl errors, and search queries.

## 13. Structured data

Implement valid JSON-LD that matches visible, verified page content.

### Homepage/contact entities

- `LocalBusiness` using the most specific valid type available.
- `Organization` properties where appropriate.
- Business name and canonical URL.
- Primary telephone number.
- Full `PostalAddress`.
- Geographic coordinates.
- Opening hours.
- Images and logo.
- Social `sameAs` URLs.
- Price range only if meaningful and approved.
- Areas served only when accurate.

### Interior pages

- `Service` where it adds clear meaning.
- `BreadcrumbList` for hierarchical pages.
- Do not expect FAQ rich results or add FAQ markup purely for visibility; use FAQs primarily for customers.
- Do not add misleading rating, review, product, or offer markup.

- [ ] Validate structured data before release.
- [ ] Confirm that structured data matches visible page information.
- [ ] Revalidate after major content changes.

## 14. Performance targets

Target Google's current good Core Web Vitals thresholds at the 75th percentile where measurable:

- Largest Contentful Paint: **2.5 seconds or less**.
- Interaction to Next Paint: **under 200 milliseconds**.
- Cumulative Layout Shift: **under 0.1**.

Implementation requirements:

- Responsive image sizes and modern formats such as AVIF/WebP.
- Explicit image and video dimensions.
- Lazy-load below-the-fold media.
- Prioritize the true hero/LCP asset without loading multiple competing hero assets.
- Use poster images for video.
- Do not autoplay audio.
- Keep third-party scripts and widgets to a minimum.
- Prefer static review content with source links over heavy embedded widgets.
- Load maps and social embeds on interaction where practical.
- Subset and preload only essential fonts.
- Avoid excessive animation and scroll effects.
- Cache versioned static assets.
- Test on real mobile network constraints, not desktop only.

## 15. Accessibility and usability

- [ ] Meet WCAG 2.2 AA as the practical launch target.
- [ ] Provide full keyboard navigation.
- [ ] Use visible focus styles.
- [ ] Maintain sufficient text and control contrast.
- [ ] Provide labels, instructions, and useful error messages for every form field.
- [ ] Do not rely on color alone to communicate state.
- [ ] Provide descriptive alt text for meaningful images and empty alt text for decorative images.
- [ ] Support reduced-motion preferences.
- [ ] Provide pause/control behavior for video or moving content.
- [ ] Ensure tap targets are comfortable on mobile.
- [ ] Make phone numbers, email, and directions directly actionable.
- [ ] Test zoom, text scaling, screen-reader landmarks, and heading order.

## 16. Visual and experience direction

### Desired atmosphere

- Dark graphite and near-black base.
- Bright inspection-light whites.
- Restrained acid-green accent inspired by existing vehicle imagery.
- Metallic, glass, paint, water, and microfiber texture details.
- Premium typography with highly legible body copy.
- Generous spacing and strong visual rhythm.
- Precise movement used sparingly.

### Real-media priorities

1. Workshop exterior and approach.
2. Wide interior shot under inspection lighting.
3. Owner/team portraits in the workshop.
4. Hands-at-work process shots.
5. Paint inspection and polishing close-ups.
6. Interior extraction/cleaning close-ups.
7. Ceramic application and water-beading details.
8. Equipment and approved product systems.
9. Consistent before/after pairs.
10. Daily drivers as well as premium vehicles.
11. Motorcycle and boat work, if included.

### Placeholder format

Until real assets are supplied, use explicit placeholders such as:

> `PLACEHOLDER — Hero workshop photograph, 16:9 landscape, vehicle centered beneath inspection lights, dark exposure with clean highlights, no visible customer plate.`

Every placeholder must identify:

- Subject.
- Orientation/aspect ratio.
- Required visual content.
- Intended page/section.
- Privacy or plate-removal requirement.

Avoid generic stock detailing photographs in the final site.

## 17. Content and copy standards

- Write in warm, professional Croatian using the audience's natural terminology.
- Keep paragraphs compact and scannable.
- Lead with customer outcome, then explain the process and proof.
- Use specific verbs and concrete inclusions instead of adjectives such as “best” or “ultimate.”
- Avoid clichés such as “your vehicle deserves the best” unless supported by more specific copy.
- Explain technical terms such as paint correction and ceramic coating in plain language.
- Avoid fear-based or exaggerated claims.
- Make limitations clear without weakening confidence.
- Use consistent Croatian terminology across navigation, service names, and booking fields.
- Proofread all diacritics, punctuation, units, euro formatting, phone numbers, and product names.
- Translate English pages professionally rather than literally if bilingual support is approved.

### Proof hierarchy

Use proof in this order:

1. Real before/after results.
2. Transparent process and inclusions.
3. Verified reviews.
4. Years of experience.
5. Certifications and accredited products.
6. Recognizable vehicle/project history.
7. Clear warranties and maintenance terms.

## 18. Privacy, cookies, and legal content

The final legal text should be reviewed by an appropriately qualified Croatian/EU professional when necessary.

- Publish the business identity and required contact/legal information.
- Explain what booking/contact data is collected, why, legal basis, recipients, and retention.
- Explain Google Calendar and any notification provider involvement.
- Define uploaded-photo handling and deletion.
- Provide a method for privacy requests.
- Load non-essential analytics, advertising, social embeds, or similar cookies only after valid consent when required.
- Make refusal as accessible as acceptance in the cookie interface.
- Do not use a cookie banner if only strictly necessary storage is used; confirm based on the actual implementation.
- Publish booking, cancellation, deposit, late-arrival, and no-show terms.
- Obtain permission for recognizable customers, number plates, and identifiable personal information in project media.

## 19. Analytics and conversion measurement

Measure outcomes rather than page views alone.

### Primary conversions

- Completed instant booking.
- Submitted booking/assessment request.
- Click-to-call.
- WhatsApp click, if enabled.
- Directions click.
- Contact form submission.

### Secondary engagement

- Service-page visits.
- Booking-flow starts and step drop-off.
- Gallery/project engagement.
- Review-profile clicks.
- Email clicks.
- Language selection.

### Tracking requirements

- Use privacy-conscious configuration.
- Do not record form contents or personal data in analytics events.
- Establish UTM conventions for Google Business Profile, Instagram, Facebook, and campaigns.
- Verify conversion events in production.
- Create a simple monthly report for search visibility, leads, bookings, and conversion rate.

## 20. Content and asset inventory

### Required from the business

- [ ] Vector logo or highest-quality available logo.
- [ ] Approved colors and type preferences, if any.
- [ ] Full service list and inclusions.
- [ ] Starting prices or pricing rules.
- [ ] Service duration and booking rules.
- [ ] Product/coating information.
- [ ] Certification documents and brand-usage permission.
- [ ] Owner/team biography and portraits.
- [ ] Workshop exterior and interior photographs.
- [ ] At least 15–30 launch projects.
- [ ] Before and after pairs in original resolution.
- [ ] Short vertical and landscape process videos.
- [ ] Permission status for each vehicle and visible plate.
- [ ] Approved review excerpts and source links.
- [ ] Google Business Profile link and review-request link.
- [ ] Instagram, Facebook, and other official URLs.
- [ ] Parking, drop-off, and arrival instructions.
- [ ] Warranty, maintenance, and cancellation terms.

### Asset processing

- Preserve original master files outside the deployed website.
- Produce responsive derivatives for website use.
- Remove unnecessary metadata where appropriate.
- Blur/remove plates unless permission exists.
- Record meaningful filenames and alt-text notes.
- Define focal points for responsive crops.

## 21. Implementation phases

### Phase 1 — Discovery and validation

- Resolve all business-information inconsistencies.
- Approve positioning, audiences, service scope, languages, and booking model.
- Inventory content and media.
- Confirm Google Business Profile and Google Calendar ownership/access.

**Exit criteria:** all blocking discovery questions have an approved answer.

### Phase 2 — Information architecture and user journeys

- Finalize sitemap.
- Map keywords/search intent to pages.
- Define primary journeys: service discovery, assessment request, instant booking, call, and directions.
- Define navigation, internal links, and booking entry points.

**Exit criteria:** approved sitemap and user-flow diagrams/wireframes.

### Phase 3 — Content strategy and copy

- Prepare page-level content briefs.
- Write Croatian copy and optional English adaptation.
- Approve service inclusions, price language, limitations, FAQs, and CTAs.
- Select initial project stories and reviews.

**Exit criteria:** approved copy deck and asset map.

### Phase 4 — Visual design

- Establish visual system, typography, color, grid, UI components, image treatment, and motion rules.
- Design mobile-first key pages and booking flow.
- Test premium-workshop atmosphere without harming readability or speed.

**Exit criteria:** approved responsive design and component states.

### Phase 5 — Technical implementation

- Build responsive pages and reusable content components.
- Implement selected booking and Google Calendar solution.
- Add validation, notifications, privacy behavior, structured data, and analytics.
- Configure content/media management as selected.

**Exit criteria:** feature-complete staging website.

### Phase 6 — QA and optimization

- Functional, content, mobile, accessibility, security, SEO, performance, and booking tests.
- Test real calendar conflicts, cancellations, notification failures, and timezone behavior.
- Validate structured data, sitemap, metadata, redirects, and forms.

**Exit criteria:** all critical/high issues resolved and launch approval recorded.

### Phase 7 — Launch and local rollout

- Publish production site.
- Verify Search Console and submit sitemap.
- Update Google Business Profile and social profiles with canonical website/booking URLs.
- Check analytics and conversions.
- Perform post-launch crawl and booking test.

**Exit criteria:** production is indexed/indexable, conversions work, and public business information is consistent.

### Phase 8 — Ongoing growth

- Add new project case studies.
- Request and respond to genuine reviews.
- Monitor search queries, bookings, and page performance.
- Improve pages using real customer questions and conversion data.
- Review service/pricing/hours information whenever operations change.

## 22. Quality-assurance checklist

### Content

- [ ] All factual claims are owner-approved.
- [ ] No placeholder copy remains.
- [ ] No placeholder images remain unless explicitly approved for launch.
- [ ] Croatian copy is professionally proofread.
- [ ] Service inclusions, prices, durations, and limitations agree across all pages.
- [ ] Phone, email, address, hours, and legal name are correct.
- [ ] Reviews and statistics are current and sourced.
- [ ] Third-party trademarks are used with permission.

### Booking

- [ ] Instant and approval-required services behave correctly.
- [ ] Calendar conflicts cannot produce double bookings.
- [ ] Buffers and capacity rules work.
- [ ] Europe/Zagreb timezone and daylight-saving scenarios are tested.
- [ ] Confirmation, approval, reminder, reschedule, and cancellation messages work.
- [ ] Failed Calendar/API requests show a safe recovery path.
- [ ] Repeated clicks do not create duplicate events.
- [ ] Spam protection and rate limiting are active.
- [ ] Personal information is absent from public event fields and analytics.
- [ ] Upload validation and retention behavior are verified, if uploads are enabled.

### SEO

- [ ] Every indexable page has a unique title, description, H1, and canonical URL.
- [ ] Sitemap and robots file are valid.
- [ ] No staging or private URL is indexable.
- [ ] Redirects and status codes are correct.
- [ ] Structured data validates and matches visible content.
- [ ] Images have appropriate filenames, dimensions, compression, and alt text.
- [ ] Internal links have descriptive anchor text.
- [ ] Google Search Console is verified.
- [ ] Business Profile website and booking links use tagged production URLs where appropriate.

### Performance

- [ ] Homepage and service-page hero media is optimized.
- [ ] Layout does not shift as images, fonts, or booking UI load.
- [ ] Below-the-fold media is lazy-loaded.
- [ ] Maps/social/review embeds do not dominate page weight.
- [ ] Mobile performance is tested on a throttled connection.
- [ ] Core Web Vitals meet targets or remaining limitations are documented.

### Accessibility and UX

- [ ] Keyboard-only navigation is complete.
- [ ] Focus is visible and logical.
- [ ] Forms have labels, errors, instructions, and success states.
- [ ] Contrast is sufficient.
- [ ] Reduced-motion behavior works.
- [ ] Screen-reader landmarks and headings are logical.
- [ ] Touch targets are sufficiently large.
- [ ] The booking flow is usable at common mobile widths.
- [ ] Call, directions, and booking CTAs are easy to find without becoming intrusive.

### Security and privacy

- [ ] HTTPS and secure headers are configured.
- [ ] Secrets and calendar credentials are not exposed to the client.
- [ ] Server-side input validation and sanitization are active.
- [ ] Dependencies and integrations are reviewed for known risks.
- [ ] Privacy, cookie, and booking terms match the implemented data flow.
- [ ] Consent behavior is tested before and after each choice.
- [ ] Operational logging avoids unnecessary personal data.
- [ ] Backup and recovery procedures are documented.

### Browser/device coverage

- [ ] Current Chrome desktop and Android.
- [ ] Current Safari desktop and iPhone.
- [ ] Current Firefox desktop.
- [ ] Current Edge desktop.
- [ ] Common narrow mobile width.
- [ ] Tablet/medium width.
- [ ] High-resolution desktop.

## 23. Launch checklist

### Before launch

- [ ] Final stakeholder approval received.
- [ ] Domain, DNS, hosting, and email responsibilities confirmed.
- [ ] Production backups configured.
- [ ] Production calendar and notification settings confirmed.
- [ ] All test bookings removed from the production calendar.
- [ ] Forms and booking tested with real recipient accounts.
- [ ] Analytics consent and conversion tracking verified.
- [ ] Legal pages published and linked.
- [ ] Favicon, social preview image, and metadata finalized.
- [ ] Full crawl completed with no unintended broken links or indexation issues.

### Launch day

- [ ] Deploy production release.
- [ ] Confirm HTTPS and canonical hostname.
- [ ] Confirm homepage, service pages, booking, contact, and policies.
- [ ] Submit production sitemap in Search Console.
- [ ] Test a production booking from mobile and desktop.
- [ ] Verify calendar event, notifications, and analytics event.
- [ ] Update Google Business Profile website and booking URLs.
- [ ] Update Facebook and Instagram links and descriptions.
- [ ] Confirm business information is identical across core profiles.

### After launch

- [ ] Check Search Console indexing and coverage.
- [ ] Check real-user performance and errors.
- [ ] Review booking failures and abandonment.
- [ ] Verify the first real bookings manually.
- [ ] Run a seven-day post-launch QA review.
- [ ] Run a 30-day SEO and conversion baseline review.
- [ ] Schedule monthly content, review, and business-information maintenance.

## 24. Definition of done

The initial website is complete when:

- The approved pages and service content are live and responsive.
- The brand feels specific to the real Motorsport Stričević workshop.
- A visitor can understand the offer, evaluate proof, and take action without relying on social media.
- Eligible services can be booked or requested without double booking.
- Google Calendar, confirmations, and operational rules work reliably.
- Business information is consistent across the website and principal external profiles.
- Technical SEO, structured data, sitemap, metadata, and Search Console are configured.
- Core interactions meet accessibility and performance targets.
- Privacy and booking policies reflect the actual data and operational flow.
- The owner has instructions for updating services, prices, hours, projects, and availability.
- Launch QA has no unresolved critical or high-severity issues.

## 25. Out of scope until separately approved

- Application development before plan approval.
- Paid advertising campaign management.
- Guaranteed search-engine rankings.
- Automated social-media publishing.
- CRM or accounting integration.
- Online payment or deposit collection.
- SMS/WhatsApp automation with paid providers.
- Customer accounts or loyalty program.
- E-commerce/product sales.
- Multi-location functionality.
- Ongoing photography, videography, copywriting, or monthly SEO retainers.

These items may be added after their business value, cost, privacy impact, and operational ownership are defined.

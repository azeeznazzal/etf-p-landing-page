# ETF-P | Halal ETF Investing for Jordanians 🇯🇴

> **"Invest 100 JOD/month in diversified Halal ETFs."**
> **"استثمر ١٠٠ دينار شهرياً في صناديق استثمار إسلامية متنوعة."**

A zero-budget, high-converting bilingual web application designed for Jordanian retail investors. Built by unifying two key initiatives:
1. **Waitlist & Landing Page:** Build Landing Page + Waitlist
2. **Customer Discovery:** Conduct 30-50 User Interviews

---

## 🌟 Key Features

### 1. Bilingual Arabic / English Experience
- Arabic-first RTL design tailored with `Tajawal` font and cultural resonance.
- Instant toggle to English (LTR) with `Inter` typography.
- Mobile-responsive design optimized for smartphones in Jordan.

### 2. Interactive Compound Wealth Calculator
- Demonstrates the tangible difference between parking 100 JOD/month in standard bank accounts vs. compounding at 8.5% annual return in Shariah-compliant global ETFs up to 30 years.
- Real-time calculations for total invested amount, projected portfolio value, and inflation comparison.

### 3. Integrated Customer Discovery Engine
- **2-Step Funnel:** Every waitlist registration is invited to a 45-second micro-survey answering the 5 core validation questions:
  1. *Investment Capacity:* Willingness to invest 100 JOD/month.
  2. *Top Obstacles:* Shariah doubts, SWIFT bank fees, platform trust, or broker complexity.
  3. *Institutional Trust:* JSC-licensed Jordanian Fintech vs Traditional Bank vs International Broker.
  4. *Pricing Model:* 0.25% annual AUM fee vs 2-3 JOD/month fixed subscription.
  5. *1-on-1 Interview Opt-in:* Direct 15-minute call booking with the founder to hit the **30-50 interviews target**.

### 4. Market Discovery Insights Dashboard (`#insights`)
- Real-time aggregated statistics and progress bar towards the 30-50 interviews goal.
- Ranked pain points bar chart and institutional trust breakdown.
- Privacy-first architecture: strictly zero client PII exposed.

---

## 🚀 Live Production & Infrastructure

### Official Production URL (Firebase Hosting)
- **Live URL:** [https://etf-p-jordan.web.app/](https://etf-p-jordan.web.app/)
- **Infrastructure:** Google Cloud / Firebase Hosting (Spark Free Tier) with global Google Edge CDN.
- **Database:** Cloud Firestore (`nam5`) with write-only security rules and zero hardcoded secrets.

### Source Control Repository
- **GitHub Repo:** [https://github.com/azeeznazzal/etf-p-landing-page](https://github.com/azeeznazzal/etf-p-landing-page)
- **Primary Branch:** `main`

### Deployment Command
```bash
npx -y firebase-tools deploy --only hosting
```


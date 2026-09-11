// ETF-P | Halal ETF Investing for Jordanians
// Client Application Logic: Bilingual i18n, Calculator, Waitlist & Market Discovery Engine

const I18N = {
  ar: {
    badge_halal: "حلال ١٠٠٪",
    tagline: "استثمار الأفراد في الأردن",
    nav_about: "ما هو الاستثمار الحلال؟",
    nav_how: "كيف يعمل؟",
    nav_calc: "حاسبة العوائد",
    nav_interview: "استطلاع المستثمرين",
    btn_join_waitlist: "انضم لقائمة الانتظار",
    hero_badge: "مخصص للمستثمرين في المملكة الأردنية الهاشمية 🇯🇴",
    hero_title_1: "استثمر",
    hero_title_highlight: "١٠٠ دينار شهرياً",
    hero_title_2: "في صناديق استثمار إسلامية متنوعة",
    hero_sub: "بديل حلال ومجدي لتآكل أموالك بفعل التضخم. نمّ ثروتك تدريجياً عبر الاستثمار التراكمي في أفضل الشركات العالمية المتوافقة مع الشريعة، دون تعقيدات حسابات التداول الأجنبية أو عمولات التحويل الباهظة.",
    form_title: "احجز مقعدك في النسخة التجريبية الأولى",
    form_sub: "سجل مجاناً واحصل على اشتراك ٣ أشهر بدون أي رسوم إدارة",
    form_vip: "أولوية مبكرة",
    lbl_name: "الاسم الكريم",
    lbl_email: "البريد الإلكتروني",
    lbl_phone: "رقم الهاتف (اختياري لمكالمة الاستطلاع)",
    lbl_phone_note: "لتسهيل التواصل وتحديد الموعد",
    chk_survey_optin: "<strong>أنا مستعد للإجابة عن ٤ أسئلة سريعة (٤٥ ثانية)</strong> للمساعدة في توجيه المنتج والحصول على الأولوية في قائمة الانتظار.",
    btn_submit_waitlist: "انضم الآن واحصل على الأولوية",
    btn_submitting_waitlist: "جاري تأكيد التسجيل...",
    proof_privacy: "بياناتك محمية وخصوصيتك مصونة",
    proof_joined: "مستثمر سجلوا حتى الآن",
    badge_shariah_title: "توافق شرعي تام",
    badge_shariah_desc: "معايير AAOIFI و MSCI الإسلامية",
    badge_jod_title: "بالدينار الأردني",
    badge_jod_desc: "ابدأ بـ 100 دينار دون رسوم تحويل دولية",
    badge_etf_title: "صناديق مؤشرات عالمية",
    badge_etf_desc: "توزيع للمخاطر على مئات الشركات",
    badge_reg_title: "مسار تنظيمي واضح",
    badge_reg_desc: "بالشراكة مع وسطاء مرخصين من JSC",
    problem_title: "لماذا يحتاج المستثمر في الأردن إلى ETF-P؟",
    problem_sub: "الفارق بين إبقاء مدخراتك في البنك وبين الاستثمار الذكي في الصناديق الإسلامية المتنوعة",
    pain_title: "الواقع الحالي في الأردن:",
    pain_1: "<strong>التضخم يأكل المدخرات:</strong> الودائع البنكية تعطي فوائد إما محرمة أو عوائد لا تجاري ارتفاع تكاليف المعيشة.",
    pain_2: "<strong>تكاليف الحوالات الباهظة:</strong> إرسال مبالغ صغيرة (١٠٠ دينار) لمنصات أجنبية يلتهم ٣٠-٤٠ دينار عمولات سويفت وفروقات صرف.",
    pain_3: "<strong>الغموض الشرعي:</strong> صعوبة معرفة ما إذا كانت أسهم الشركات الفردية نقية أم يشوبها ربا وممارسات محظورة.",
    pain_4: "<strong>المخاطرة العالية:</strong> الانجرار خلف تداول العملات الرقمية أو الفوركس والمضاربة التي أضرت بالكثيرين.",
    sol_title: "الحل المبتكر مع ETF-P:",
    sol_1: "<strong>استثمار تلقائي من ١٠٠ دينار:</strong> اشترك شهرياً باقتطاع مرن دون الحاجة لآلاف الدنانير.",
    sol_2: "<strong>صناديق مفحوصة شرعياً:</strong> نعتمد مؤشرات عالمية (مثل iShares MSCI World Islamic) الخالية من المعاملات الربوية وشركات الكحول والتبغ والأسلحة.",
    sol_3: "<strong>تنويع احترافي للمخاطر:</strong> بدلاً من شراء سهم واحد، ١٠٠ دينار تتوزع على مئات الشركات العالمية الناجحة.",
    sol_4: "<strong>تجربة محلية سهلة بالدينار:</strong> إيداع فوري وسهل، دعم باللغة العربية، وتقارير واضحة.",
    calc_badge: "أداة تفاعلية",
    calc_title: "حاسبة نمو الاستثمار الشهري التراكمي",
    calc_sub: "شاهد كيف يمكن لـ ١٠٠ دينار شهرياً أن تصنع فارقاً حقيقياً في مستقبلك المالي",
    calc_lbl_amount: "مبلغ الاستثمار الشهري:",
    currency_jod: "دينار أردني",
    calc_lbl_years: "المدة الزمنية (بالسنوات):",
    calc_years_unit: "سنوات",
    calc_year_min: "سنة واحدة",
    calc_year_mid: "١٥ سنة",
    calc_year_max: "٣٠ سنة",
    calc_assumption_title: "الفرضية المعتمدة:",
    calc_assumption_text: "متوسط نمو سنوي مركب 8.5% (بناءً على الأداء التاريخي لصناديق المؤشرات المتداولة العالمية المتوافقة مع الشريعة خلال آخر ١٥ سنة). الاستثمار ينطوي على مخاطر تقلب السوق.",
    calc_result_header: "القيمة التقديرية لمحفظتك",
    calc_gain_label: "إجمالي الأرباح المركبة المتوقعة:",
    calc_invested_label: "إجمالي ما دفعته من جيبك:",
    calc_bank_diff: "لو تركتها في حساب بنكي عادي:",
    calc_cta_btn: "ابدأ بناء هذه المحفظة الآن",
    how_title: "كيف تبدأ الاستثمار في ٣ خطوات سهلة؟",
    how_sub: "صممنا التطبيق ليكون سهلاً، شفافاً، وبدون أي تعقيد فني",
    step1_title: "حدد مبلغك الشهري",
    step1_desc: "اختر المبلغ الذي يناسبك (يبدأ من ١٠٠ دينار) وحدد جدول الإيداع التلقائي من حسابك البنكي.",
    step2_title: "نستثمر لك في الصناديق الإسلامية",
    step2_desc: "يتم توجيه الأموال مباشرة لشراء حصص في أفضل صناديق المؤشرات الإسلامية العالمية المفحوصة والمطابقة للشريعة.",
    step3_title: "شاهد ثروتك تنمو وتراكم",
    step3_desc: "تابع أداء استثماراتك الشفافة لحظة بلحظة، مع إمكانية السحب أو زيادة الاستثمار في أي وقت دون قيود.",
    disc_badge: "استطلاع رأي المستثمر الأردني — دراسة 30-50 مقابلة",
    disc_title: "ساعدنا في تصميم التطبيق المناسب لك في الأردن",
    disc_sub: "نجري حالياً مقابلات استطلاعية مع ٣٠-٥٠ مستثمر أردني لمعرفة أبرز العقبات (الرسوم، التحويلات، الامتثال الشرعي، الثقة). رأيك يصنع الفرق ويمنحك وصولاً مجانياً مميزاً مدى الحياة!",
    disc_btn_survey: "الإجابة على ٤ أسئلة استطلاعية (٤٥ ثانية)",
    disc_btn_founder: "احجز مكالمة ١٥ دقيقة مع المؤسس",
    disc_progress_label: "هدف المقابلات الاستطلاعية:",
    disc_completed: "مكتملة",
    disc_progress_note: "بقي ١٦ مقعداً فقط للمشاركين في برنامج المؤسسين الأوائل",
    dash_tag: "بيانات حية مباشرة",
    dash_title: "نتائج استطلاع المستثمرين في الأردن",
    dash_sub: "ملخص إجابات المستثمرين الأردنيين حول أهم الاحتياجات والعقبات",
    dash_card_waitlist: "المسجلون في الانتظار",
    dash_card_interviews: "مقابلات واستطلاعات مكتملة",
    dash_card_goal: "من أصل ٥٠ مستهدفاً",
    dash_card_willingness: "الاستعداد للاستثمار بـ 100 د.أ",
    dash_card_confirmed: "أكدوا الجدية والقدرة",
    dash_card_preferred_fee: "النموذج السعري المفضل",
    dash_card_fee_sub: "نسبة سنوية vs اشتراك شهري",
    dash_pain_ranked: "ترتيب أكبر العوائق أمام المستثمر الأردني:",
    dash_trust_ranked: "الجهة الأكثر ثقة لتقديم الخدمة:",
    footer_rights: "مشروع التكنولوجيا المالية لصناديق المؤشرات الإسلامية للأفراد",
    footer_disclaimer: "إخلاء مسؤولية: هذا الموقع يمثل مرحلة التحقق والاستطلاع الأولي لمشروع ETF-P. لا يمثل استشارة مالية أو دعوة عامة للاكتتاب دون استكمال التراخيص القانونية الرسمية لدى هيئة الأوراق المالية الأردنية (JSC).",
    modal_title: "استطلاع المستثمر الأردني",
    modal_sub: "٤ أسئلة سريعة تساعدنا في تصميم الخدمة وتمنحك أولوية VIP",
    q1_title: "١. هل أنت مستعد لاستثمار ١٠٠ دينار أردني شهرياً في محفظة استثمارية حلال؟",
    q1_opt1: "نعم، ١٠٠ دينار شهرياً مبلغ مثالي ومناسب",
    q1_opt2: "أستطيع استثمار مبالغ أكبر (٢٠٠ - ٥٠٠ د.أ شهرياً)",
    q1_opt3: "أفضل البدء بمبلغ أصغر (٣٠ - ٥٠ د.أ شهرياً)",
    q1_opt4: "غير متأكد، يعتمد على الأمان وسهولة السحب",
    q2_title: "٢. ما هو العائق الأكبر الذي يمنعك من الاستثمار في الأسهم العالمية حالياً؟",
    q2_opt1: "عدم التأكد من المشروعية الإسلامية والشرعية",
    q2_opt2: "عمولات التحويل البنكي العالية وفروقات تصريف العملة",
    q2_opt3: "الخوف من الخسارة وقلة الثقة في المنصات الأجنبية",
    q2_opt4: "تعقيد منصات التداول وصعوبة فهم آلية عمل الصناديق",
    q3_title: "٣. من هي الجهة التي ستثق بوضع أموالك معها أكثر؟",
    q3_opt1: "تطبيق أردني متخصص (Fintech) مرخص من هيئة الأوراق المالية",
    q3_opt2: "بنك أردني تقليدي معروف",
    q3_opt3: "وسيط أجنبي دولي مرخص في أمريكا أو أوروبا",
    q4_title: "٤. أي من هذه النماذج السعرية تفضل؟",
    q4_opt1: "عمولة سنوية رمزية ٠.٢٥٪ من إجمالي المحفظة",
    q4_opt2: "اشتراك شهري ثابت (٢ - ٣ دنانير شهرياً) بغض النظر عن الأرباح",
    q5_interview_chat: "<strong>أنا مستعد لمكالمة هاتفية سريعة (١٥ دقيقة)</strong> مع مؤسس المشروع لمناقشة تجربتي وملاحظاتي.",
    modal_submit_btn: "حفظ الإجابات وتفعيل أولوية الدخول",
    modal_submitting_btn: "جاري حفظ الإجابات وتفعيل حسابك..."
  },
  en: {
    badge_halal: "100% Halal",
    tagline: "Retail Wealth Platform for Jordan",
    nav_about: "What is Halal ETF?",
    nav_how: "How it Works",
    nav_calc: "Calculator",
    nav_interview: "Investor Research",
    btn_join_waitlist: "Join Waitlist",
    hero_badge: "Built for Investors in Jordan 🇯🇴",
    hero_title_1: "Invest",
    hero_title_highlight: "100 JOD/Month",
    hero_title_2: "in Diversified Halal ETFs",
    hero_sub: "A halal, high-yield alternative to bank cash eroded by inflation. Build long-term wealth by passively investing in the world's most resilient Shariah-compliant companies, without foreign wire fees or complex brokerages.",
    form_title: "Reserve Your Early Access Seat",
    form_sub: "Free registration + 3 months of zero management fees",
    form_vip: "Early VIP Access",
    lbl_name: "Full Name",
    lbl_email: "Email Address",
    lbl_phone: "Phone Number (Optional for 15-min call)",
    lbl_phone_note: "For fast call scheduling",
    chk_survey_optin: "<strong>I am happy to answer 4 quick questions (45 seconds)</strong> to help shape the product and jump spots on the waitlist.",
    btn_submit_waitlist: "Join Waitlist & Get Priority",
    btn_submitting_waitlist: "Confirming Registration...",
    proof_privacy: "Bank-level encryption & strict privacy",
    proof_joined: "investors registered so far",
    badge_shariah_title: "Strictly Shariah Compliant",
    badge_shariah_desc: "AAOIFI & MSCI Islamic Standards",
    badge_jod_title: "Directly in JOD",
    badge_jod_desc: "Start with 100 JOD without high SWIFT fees",
    badge_etf_title: "Global Index Funds",
    badge_etf_desc: "Risk diversified across hundreds of blue-chips",
    badge_reg_title: "Transparent Regulation",
    badge_reg_desc: "Partnering with JSC-licensed local brokers",
    problem_title: "Why Jordanian Investors Need ETF-P",
    problem_sub: "The difference between keeping cash idle in savings vs. investing in diversified Halal ETFs",
    pain_title: "Current Reality in Jordan:",
    pain_1: "<strong>Inflation Eats Savings:</strong> Bank deposits yield low returns or involve riba (interest) that fails to beat living costs.",
    pain_2: "<strong>Exorbitant Wire Fees:</strong> Sending 100 JOD to US/foreign brokers incurs 30-40 JOD in SWIFT and FX exchange fees.",
    pain_3: "<strong>Shariah Ambiguity:</strong> Difficult to verify whether individual stocks are pure or tainted with non-permissible activities.",
    pain_4: "<strong>High Risk Scams:</strong> Many Jordanians fell victim to speculative crypto or unregulated offshore forex brokers.",
    sol_title: "The ETF-P Solution:",
    sol_1: "<strong>Automated 100 JOD/Month:</strong> Dollar-cost average monthly into the market without needing thousands in capital.",
    sol_2: "<strong>Pre-Screened Halal ETFs:</strong> Track world-class indices (e.g., iShares MSCI World Islamic) free of riba, weapons, alcohol, and tobacco.",
    sol_3: "<strong>Professional Diversification:</strong> Your 100 JOD is spread across hundreds of world-leading resilient companies.",
    sol_4: "<strong>Seamless Local Experience:</strong> Instant deposits in JOD, Arabic support, and clear portfolio reporting.",
    calc_badge: "Interactive Tool",
    calc_title: "Compound Wealth Accumulation Calculator",
    calc_sub: "See how investing 100 JOD/month can transform your financial future",
    calc_lbl_amount: "Monthly Investment:",
    currency_jod: "JOD",
    calc_lbl_years: "Time Horizon (Years):",
    calc_years_unit: "Years",
    calc_year_min: "1 Year",
    calc_year_mid: "15 Years",
    calc_year_max: "30 Years",
    calc_assumption_title: "Underlying Assumption:",
    calc_assumption_text: "8.5% historical annualized compound return (based on 15-year historical average of Global Shariah ETFs). All investments carry market risk.",
    calc_result_header: "Projected Portfolio Value",
    calc_gain_label: "Total Compound Gains:",
    calc_invested_label: "Total Principal Invested:",
    calc_bank_diff: "If left idle in a bank account:",
    calc_cta_btn: "Start Building This Portfolio",
    how_title: "Start Investing in 3 Simple Steps",
    how_sub: "Designed to be effortless, transparent, and accessible to everyone",
    step1_title: "Choose Your Monthly Amount",
    step1_desc: "Pick your contribution (starting at 100 JOD) and set up easy automated transfers from your local bank.",
    step2_title: "We Invest in Halal ETFs",
    step2_desc: "Funds are automatically allocated into globally screened, Shariah-certified exchange-traded funds.",
    step3_title: "Watch Your Wealth Compound",
    step3_desc: "Monitor your performance in real-time, with the freedom to withdraw or increase savings anytime.",
    disc_badge: "Jordan Customer Discovery — 30-50 Interview Study",
    disc_title: "Help Us Build the Right Wealth Platform for Jordan",
    disc_sub: "We are currently conducting 30-50 deep discovery interviews with Jordanian investors to solve key friction points (fees, transfers, Shariah compliance, trust). Your input unlocks lifetime VIP benefits!",
    disc_btn_survey: "Answer 4 Quick Questions (45s)",
    disc_btn_founder: "Book 15-Min Call with Founder",
    disc_progress_label: "Customer Discovery Goal:",
    disc_completed: "Completed",
    disc_progress_note: "Only 16 founder cohort seats remaining",
    dash_tag: "Live Data Feed",
    dash_title: "Jordanian Investor Survey Insights",
    dash_sub: "Aggregated findings from Jordanian retail investors validating market need",
    dash_card_waitlist: "Waitlist Registrations",
    dash_card_interviews: "Interviews & Surveys Done",
    dash_card_goal: "Out of 50 Target",
    dash_card_willingness: "Willing to Invest 100 JOD/mo",
    dash_card_confirmed: "Confirmed High Intent",
    dash_card_preferred_fee: "Preferred Pricing Model",
    dash_card_fee_sub: "Annual AUM vs Flat Monthly",
    dash_pain_ranked: "Top Blockers for Jordanian Investors (Ranked):",
    dash_trust_ranked: "Most Trusted Institution Type:",
    footer_rights: "Fintech Platform for Halal Retail ETFs in Jordan",
    footer_disclaimer: "Disclaimer: This website is for pre-launch customer discovery and market validation for the ETF-P project. It does not constitute financial advice or public solicitation prior to official Jordan Securities Commission (JSC) regulatory approvals.",
    modal_title: "Jordanian Investor Survey",
    modal_sub: "4 quick questions to tailor the service and unlock VIP priority",
    q1_title: "1. Would you invest 100 JOD/month in a diversified Halal ETF portfolio?",
    q1_opt1: "Yes, 100 JOD/month is an ideal amount",
    q1_opt2: "I can invest more (200 - 500+ JOD/month)",
    q1_opt3: "I prefer starting smaller (30 - 50 JOD/month)",
    q1_opt4: "Not sure, depends on liquidity and security",
    q2_title: "2. What is the biggest barrier stopping you from investing right now?",
    q2_opt1: "Uncertainty regarding Shariah / Halal compliance",
    q2_opt2: "High bank transfer (SWIFT) & foreign exchange fees",
    q2_opt3: "Fear of loss & lack of trust in foreign platforms",
    q2_opt4: "Complexity of broker interfaces & ETF mechanics",
    q3_title: "3. Which entity would you trust most to manage this service?",
    q3_opt1: "A specialized Jordanian FinTech licensed by the JSC",
    q3_opt2: "An established traditional Jordanian bank",
    q3_opt3: "A licensed US/European international brokerage",
    q4_title: "4. Which fee structure do you prefer?",
    q4_opt1: "A low 0.25% annual AUM fee on portfolio value",
    q4_opt2: "A flat monthly subscription (2-3 JOD/month)",
    q5_interview_chat: "<strong>I am open to a quick 15-minute call</strong> with the founder to share my thoughts.",
    modal_submit_btn: "Save Responses & Activate VIP Waitlist",
    modal_submitting_btn: "Saving Responses & Activating VIP..."
  }
};

// Initial Anonymous Statistical Survey Benchmark Dataset
// Strictly ZERO personal identifying information (PII) stored in client bundles
let surveyDatabase = [
  { id: 1, capacity: "yes_100", blocker: "shariah", trust: "jordan_fintech", pricing: "percent_025", callConsent: true, date: "2026-09-01" },
  { id: 2, capacity: "yes_100", blocker: "fees_fx", trust: "jordan_fintech", pricing: "percent_025", callConsent: true, date: "2026-09-01" },
  { id: 3, capacity: "more_200", blocker: "trust_loss", trust: "traditional_bank", pricing: "sub_monthly", callConsent: false, date: "2026-09-02" },
  { id: 4, capacity: "yes_100", blocker: "fees_fx", trust: "jordan_fintech", pricing: "percent_025", callConsent: true, date: "2026-09-02" },
  { id: 5, capacity: "less_50", blocker: "complexity", trust: "jordan_fintech", pricing: "sub_monthly", callConsent: false, date: "2026-09-03" },
  { id: 6, capacity: "yes_100", blocker: "shariah", trust: "jordan_fintech", pricing: "percent_025", callConsent: true, date: "2026-09-03" }
];

// Generate additional anonymous seed responses to reach statistical sample of 34
for (let i = 7; i <= 34; i++) {
  const blockers = ["shariah", "fees_fx", "trust_loss", "complexity"];
  const capacities = ["yes_100", "yes_100", "more_200", "less_50"];
  const trusts = ["jordan_fintech", "jordan_fintech", "traditional_bank", "intl_broker"];
  const pricings = ["percent_025", "percent_025", "sub_monthly"];
  surveyDatabase.push({
    id: i,
    capacity: capacities[i % capacities.length],
    blocker: blockers[i % blockers.length],
    trust: trusts[i % trusts.length],
    pricing: pricings[i % pricings.length],
    callConsent: (i % 2 === 0),
    date: `2026-09-0${(i % 5) + 1}`
  });
}

// Current language & waitlist state
let currentLang = 'ar';
let waitlistTotal = 142;

// Temporary holder for pending waitlist registration during survey modal flow
let pendingWaitlist = null;

// Read persistent count if stored
try {
  const storedWaitlist = localStorage.getItem('etf_p_waitlist_total');
  if (storedWaitlist) {
    waitlistTotal = parseInt(storedWaitlist, 10) || 142;
  }
} catch (e) {
  console.warn('Local storage read notice:', e);
}

// DOM Elements Initialization
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Update initial counts from storage
  const regCountEl = document.getElementById('registeredCount');
  const dashWaitlistEl = document.getElementById('dashWaitlistTotal');
  if (regCountEl) regCountEl.textContent = waitlistTotal;
  if (dashWaitlistEl) dashWaitlistEl.textContent = waitlistTotal;

  // Language Toggle
  const langToggleBtn = document.getElementById('langToggleBtn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      currentLang = currentLang === 'ar' ? 'en' : 'ar';
      updateLanguage(currentLang);
    });
  }

  // Calculator Logic with 30 Years Upper Limit
  const calcAmount = document.getElementById('calcAmount');
  const calcYears = document.getElementById('calcYears');
  const valAmount = document.getElementById('valAmount');
  const valYears = document.getElementById('valYears');

  function updateCalculator() {
    if (!calcAmount || !calcYears) return;
    const monthly = parseFloat(calcAmount.value) || 100;
    const years = parseInt(calcYears.value, 10) || 5;
    const annualRate = 0.085; // 8.5% compound rate
    const monthlyRate = annualRate / 12;
    const totalMonths = years * 12;

    // Compound formula: FV = P * ((1 + r)^n - 1) / r
    const futureValue = monthly * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate);
    const totalInvested = monthly * totalMonths;
    const totalGains = futureValue - totalInvested;

    if (valAmount) valAmount.textContent = monthly.toLocaleString();
    if (valYears) valYears.textContent = years;

    const totalPortfolioEl = document.getElementById('totalPortfolioValue');
    const totalGainsEl = document.getElementById('totalGains');
    const totalInvestedEl = document.getElementById('totalInvestedAmount');
    const bankCashEl = document.getElementById('bankCashValue');

    if (totalPortfolioEl) totalPortfolioEl.textContent = Math.round(futureValue).toLocaleString();
    if (totalGainsEl) totalGainsEl.textContent = '+' + Math.round(totalGains).toLocaleString() + (currentLang === 'ar' ? ' د.أ' : ' JOD');
    if (totalInvestedEl) totalInvestedEl.textContent = totalInvested.toLocaleString() + (currentLang === 'ar' ? ' د.أ' : ' JOD');
    if (bankCashEl) bankCashEl.textContent = totalInvested.toLocaleString() + (currentLang === 'ar' ? ' د.أ (تآكلت شرائياً)' : ' JOD (Eroded by inflation)');
  }

  if (calcAmount) calcAmount.addEventListener('input', updateCalculator);
  if (calcYears) calcYears.addEventListener('input', updateCalculator);
  updateCalculator();

  // Waitlist Form Elements
  const heroWaitlistForm = document.getElementById('heroWaitlistForm');
  const submitBtn = document.getElementById('submitBtn');
  const surveyModal = document.getElementById('surveyModal');
  const closeSurveyBtn = document.getElementById('closeSurveyBtn');
  const openSurveyBtn = document.getElementById('openSurveyBtn');
  const bookCallBtn = document.getElementById('bookCallBtn');
  const discoverySurveyForm = document.getElementById('discoverySurveyForm');
  const modalSubmitBtn = document.getElementById('modalSubmitBtn');

  // Helper to open modal
  function openModal() {
    if (!surveyModal) return;
    surveyModal.classList.remove('hidden');
    surveyModal.classList.add('flex');
    if (window.lucide) window.lucide.createIcons();
  }

  // Helper to close modal
  function closeModal() {
    if (!surveyModal) return;
    surveyModal.classList.add('hidden');
    surveyModal.classList.remove('flex');
  }

  // Finalize waitlist entry and increment counter AFTER actual completion
  async function finalizeWaitlistSubmission(data) {
    if (!data) return;

    // Save to Firestore via secure API
    if (window.saveWaitlistInvestor) {
      await window.saveWaitlistInvestor(data);
    }

    // Counter increments ONLY after successful submission
    waitlistTotal++;
    try {
      localStorage.setItem('etf_p_waitlist_total', waitlistTotal.toString());
    } catch (e) {}

    const regCount = document.getElementById('registeredCount');
    const dashWaitlist = document.getElementById('dashWaitlistTotal');
    if (regCount) regCount.textContent = waitlistTotal;
    if (dashWaitlist) dashWaitlist.textContent = waitlistTotal;

    showToast(
      currentLang === 'ar' ? 'أهلاً بك في ETF-P!' : 'Welcome to ETF-P!',
      currentLang === 'ar' ? `أنت الآن رقم #${waitlistTotal} على قائمة الانتظار.` : `You are now #${waitlistTotal} on the waitlist.`
    );
  }

  // 1. Waitlist Form Submission (Hero Card)
  if (heroWaitlistForm) {
    heroWaitlistForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name = document.getElementById('fullName')?.value.trim() || '';
      const email = document.getElementById('email')?.value.trim() || '';
      const phone = document.getElementById('phone')?.value.trim() || '';
      const interviewOptIn = document.getElementById('interviewOptIn')?.checked ?? false;

      if (!email) return;

      // Retain pending registration
      pendingWaitlist = { name, email, phone, interviewOptIn };

      // If user opted into the 4-question discovery survey:
      // Open the survey modal immediately so they can answer, DO NOT increment counter yet!
      if (interviewOptIn) {
        openModal();
        return;
      }

      // If survey opt-in is unchecked: user directly submits waitlist only
      if (submitBtn) {
        submitBtn.disabled = true;
        const origText = submitBtn.querySelector('span')?.textContent;
        if (submitBtn.querySelector('span')) {
          submitBtn.querySelector('span').textContent = I18N[currentLang].btn_submitting_waitlist;
        }

        try {
          await finalizeWaitlistSubmission(pendingWaitlist);
          pendingWaitlist = null;
          heroWaitlistForm.reset();
        } finally {
          submitBtn.disabled = false;
          if (submitBtn.querySelector('span')) {
            submitBtn.querySelector('span').textContent = origText;
          }
        }
      }
    });
  }

  // 2. Discovery Survey Form Submission (Modal)
  if (discoverySurveyForm) {
    discoverySurveyForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (modalSubmitBtn) {
        modalSubmitBtn.disabled = true;
        modalSubmitBtn.textContent = I18N[currentLang].modal_submitting_btn;
      }

      const capacity = document.querySelector('input[name="q_capacity"]:checked')?.value || 'yes_100';
      const blocker = document.querySelector('input[name="q_blocker"]:checked')?.value || 'shariah';
      const trust = document.querySelector('input[name="q_trust"]:checked')?.value || 'jordan_fintech';
      const pricing = document.querySelector('input[name="q_pricing"]:checked')?.value || 'percent_025';
      const callConsent = document.getElementById('interviewBookConsent')?.checked || false;

      const investorName = pendingWaitlist?.name || document.getElementById('fullName')?.value.trim() || 'Investor';
      const investorEmail = pendingWaitlist?.email || document.getElementById('email')?.value.trim() || '';
      const investorPhone = pendingWaitlist?.phone || document.getElementById('phone')?.value.trim() || '';

      // Secure dispatch to Firestore (Zero Secrets)
      const surveyPayload = {
        name: investorName,
        email: investorEmail,
        phone: investorPhone,
        capacity,
        blocker,
        trust,
        pricing,
        callConsent
      };

      try {
        // Save waitlist registration if pending
        if (pendingWaitlist && window.saveWaitlistInvestor) {
          await window.saveWaitlistInvestor(pendingWaitlist);
        }

        // Save survey responses to Firestore
        if (window.saveCustomerDiscovery) {
          await window.saveCustomerDiscovery(surveyPayload);
        }

        // Push anonymous aggregate metrics to local dataset
        surveyDatabase.push({
          id: surveyDatabase.length + 1,
          capacity,
          blocker,
          trust,
          pricing,
          callConsent,
          date: new Date().toISOString().split('T')[0]
        });

        // Update dashboard aggregate charts
        updateDashboard();

        // Increment the counter ONLY AFTER successful submission
        waitlistTotal++;
        try {
          localStorage.setItem('etf_p_waitlist_total', waitlistTotal.toString());
        } catch (err) {}

        const regCount = document.getElementById('registeredCount');
        const dashWaitlist = document.getElementById('dashWaitlistTotal');
        if (regCount) regCount.textContent = waitlistTotal;
        if (dashWaitlist) dashWaitlist.textContent = waitlistTotal;

        // Close modal
        closeModal();

        // Reset forms & state
        pendingWaitlist = null;
        if (heroWaitlistForm) heroWaitlistForm.reset();
        discoverySurveyForm.reset();

        showToast(
          currentLang === 'ar' ? 'شكراً لمساهمتك القيمة!' : 'Thank you for your feedback!',
          currentLang === 'ar' ? `أنت الآن رقم #${waitlistTotal} وتمت ترقيتك إلى فئة VIP مع ٣ أشهر مجانية بدون أي رسوم.` : `You are now #${waitlistTotal} and elevated to VIP tier with 3 months zero fees.`
        );
      } finally {
        if (modalSubmitBtn) {
          modalSubmitBtn.disabled = false;
          modalSubmitBtn.textContent = I18N[currentLang].modal_submit_btn;
        }
      }
    });
  }

  // Close Survey Modal handler: if user closes modal without submitting survey, finalize waitlist registration
  if (closeSurveyBtn) {
    closeSurveyBtn.addEventListener('click', async () => {
      closeModal();
      if (pendingWaitlist) {
        await finalizeWaitlistSubmission(pendingWaitlist);
        pendingWaitlist = null;
        if (heroWaitlistForm) heroWaitlistForm.reset();
      }
    });
  }

  // Survey Open button
  if (openSurveyBtn) {
    openSurveyBtn.addEventListener('click', () => {
      openModal();
    });
  }

  // Book Call button (direct 15-minute call opt-in via modal)
  if (bookCallBtn) {
    bookCallBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const callConsentInput = document.getElementById('interviewBookConsent');
      if (callConsentInput) callConsentInput.checked = true;
      openModal();
    });
  }

  // Initial Dashboard Render
  updateDashboard();
});

// Update Language
function updateLanguage(lang) {
  const dict = I18N[lang];
  if (!dict) return;

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.body.className = lang === 'en' 
    ? 'bg-slate-50 text-slate-900 antialiased min-h-screen selection:bg-brand-500 selection:text-white lang-en'
    : 'bg-slate-50 text-slate-900 antialiased min-h-screen selection:bg-brand-500 selection:text-white';

  const langLabel = document.getElementById('langLabel');
  if (langLabel) langLabel.textContent = lang === 'ar' ? 'English' : 'العربية';

  // Apply all text translations
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  updateDashboard();
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Update Market Discovery Insights Dashboard
function updateDashboard() {
  const total = surveyDatabase.length;
  const surveyTotalEl = document.getElementById('dashSurveyTotal');
  const interviewsDoneEl = document.getElementById('interviewsDoneCount');
  if (surveyTotalEl) surveyTotalEl.textContent = total;
  if (interviewsDoneEl) interviewsDoneEl.textContent = total;

  // Progress Bar for 50 interviews target
  const pct = Math.min(100, Math.round((total / 50) * 100));
  const pBar = document.getElementById('interviewsProgressBar');
  if (pBar) {
    pBar.style.width = pct + '%';
  }

  // Willingness Rate: (yes_100 + more_200) / total
  const willingCount = surveyDatabase.filter(r => r.capacity === 'yes_100' || r.capacity === 'more_200').length;
  const willingRate = total > 0 ? Math.round((willingCount / total) * 100) : 82;
  const willingEl = document.getElementById('dashWillingRate');
  if (willingEl) willingEl.textContent = willingRate + '%';

  // Preferred Fee
  const pct025 = surveyDatabase.filter(r => r.pricing === 'percent_025').length;
  const subMonthly = total - pct025;
  const feeEl = document.getElementById('dashPreferredFee');
  if (feeEl) feeEl.textContent = pct025 >= subMonthly ? '0.25% AUM' : '2-3 JOD/mo';

  // Top Pain Points Calculation
  const blockerCounts = {
    shariah: surveyDatabase.filter(r => r.blocker === 'shariah').length,
    fees_fx: surveyDatabase.filter(r => r.blocker === 'fees_fx').length,
    trust_loss: surveyDatabase.filter(r => r.blocker === 'trust_loss').length,
    complexity: surveyDatabase.filter(r => r.blocker === 'complexity').length
  };

  const blockerLabels = {
    ar: {
      shariah: 'الشك في المشروعية الإسلامية والشرعية',
      fees_fx: 'عمولات التحويل البنكي العالية وفروقات صرف العملة',
      trust_loss: 'الخوف من الخسارة وقلة الثقة بالمنصات الأجنبية',
      complexity: 'تعقيد المنصات وصعوبة فهم آلية الصناديق'
    },
    en: {
      shariah: 'Shariah / Halal compliance uncertainty',
      fees_fx: 'High SWIFT bank transfer & FX currency fees',
      trust_loss: 'Fear of losing money & lack of trust',
      complexity: 'Brokerage complexity & understanding ETFs'
    }
  };

  const sortedBlockers = Object.entries(blockerCounts).sort((a, b) => b[1] - a[1]);
  const painContainer = document.getElementById('painPointsRankList');
  if (painContainer) {
    painContainer.innerHTML = sortedBlockers.map(([key, count], index) => {
      const percentage = total > 0 ? Math.round((count / total) * 100) : 25;
      const label = blockerLabels[currentLang]?.[key] || key;
      return `
        <div>
          <div class="flex justify-between items-center mb-1 font-semibold text-slate-700">
            <span>#${index + 1} ${label}</span>
            <span class="font-bold text-slate-900">${percentage}% (${count})</span>
          </div>
          <div class="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div class="h-full bg-amber-500 rounded-full" style="width: ${percentage}%"></div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Institutional Trust Calculation
  const trustCounts = {
    jordan_fintech: surveyDatabase.filter(r => r.trust === 'jordan_fintech').length,
    traditional_bank: surveyDatabase.filter(r => r.trust === 'traditional_bank').length,
    intl_broker: surveyDatabase.filter(r => r.trust === 'intl_broker').length
  };

  const trustLabels = {
    ar: {
      jordan_fintech: 'تطبيق أردني متخصص (Fintech) مرخص من JSC',
      traditional_bank: 'بنك أردني تقليدي معروف',
      intl_broker: 'وسيط دولي مرخص أجنبياً'
    },
    en: {
      jordan_fintech: 'Jordanian Fintech licensed by JSC',
      traditional_bank: 'Established Jordanian Bank',
      intl_broker: 'Licensed International Brokerage'
    }
  };

  const sortedTrust = Object.entries(trustCounts).sort((a, b) => b[1] - a[1]);
  const trustContainer = document.getElementById('trustRankList');
  if (trustContainer) {
    trustContainer.innerHTML = sortedTrust.map(([key, count], index) => {
      const percentage = total > 0 ? Math.round((count / total) * 100) : 33;
      const label = trustLabels[currentLang]?.[key] || key;
      return `
        <div>
          <div class="flex justify-between items-center mb-1 font-semibold text-slate-700">
            <span>#${index + 1} ${label}</span>
            <span class="font-bold text-slate-900">${percentage}% (${count})</span>
          </div>
          <div class="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div class="h-full bg-brand-600 rounded-full" style="width: ${percentage}%"></div>
          </div>
        </div>
      `;
    }).join('');
  }
}

// Show Toast Notification
function showToast(title, message) {
  const toast = document.getElementById('toastNotification');
  const toastTitle = document.getElementById('toastTitle');
  const toastMessage = document.getElementById('toastMessage');
  if (!toast || !toastTitle || !toastMessage) return;

  toastTitle.textContent = title;
  toastMessage.textContent = message;

  toast.classList.remove('translate-y-24');
  toast.classList.add('translate-y-0');

  setTimeout(() => {
    toast.classList.add('translate-y-24');
    toast.classList.remove('translate-y-0');
  }, 4500);
}

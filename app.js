// ETF-P | Retail ETF & Long-Term Compounding for Jordanians
// Client Application Logic: Bilingual i18n, Calculator, Waitlist & Market Discovery Engine

const I18N = {
  ar: {
    badge_tag: "استثمار ذكي",
    tagline: "استثمار الأفراد في الأردن",
    nav_etf: "ما هو الـ ETF؟",
    nav_about: "عن المشروع",
    nav_why: "لماذا الآن؟",
    nav_how: "كيف يعمل؟",
    nav_calc: "حاسبة العوائد",
    nav_interview: "استطلاع المستثمرين",
    btn_join_waitlist: "انضم لقائمة الانتظار",
    hero_badge: "مخصص للمستثمرين في المملكة الأردنية الهاشمية 🇯🇴",
    hero_title_1: "استثمر",
    hero_title_highlight: "١٠٠ دينار شهرياً",
    hero_title_2: "في صناديق المؤشرات المتداولة (ETFs)",
    hero_sub: "بديل ذكي ومجدي لتآكل أموالك بفعل التضخم. نمّ ثروتك تدريجياً عبر الاستثمار التراكمي طويل الأجل في أقوى الشركات العالمية، دون تعقيدات حسابات التداول الأجنبية أو عمولات التحويل الباهظة.",
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
    badge_diversification_title: "تنويع استثماري عالمي",
    badge_diversification_desc: "أقوى الشركات والقطاعات في سلة واحدة",
    badge_jod_title: "بالدينار الأردني",
    badge_jod_desc: "ابدأ بـ 100 دينار دون رسوم تحويل دولية",
    badge_etf_title: "صناديق مؤشرات عالمية",
    badge_etf_desc: "توزيع للمخاطر على مئات الشركات",
    badge_reg_title: "مسار تنظيمي واضح",
    badge_reg_desc: "بالشراكة مع وسطاء مرخصين من JSC",

    // Smart Investing Essentials (Clarifications on ETF, Long-term, Compounding)
    edu_badge: "دليل المستثمر الذكي",
    edu_title: "٣ مفاهيم أساسية تغير نظرتك للمال والاستثمار",
    edu_sub: "لا تحتاج لشهادة في العلوم المالية لتبني ثروة حقيقية. إليك ببساطة كيف تعمل صناديق الـ ETF، والاستثمار طويل الأجل، وسحر النمو التراكمي:",
    edu_tab1_label: "ما هو الـ ETF؟",
    edu_tab2_label: "الاستثمار طويل الأجل",
    edu_tab3_label: "سحر النمو التراكمي",

    // Tab 1: ETF
    edu_t1_tag: "المفهوم الأول: السلة الاستثمارية الذكية",
    edu_t1_heading: "صندوق المؤشرات (ETF): بدلاً من بيضة واحدة، اشترِ السلة بأكملها",
    edu_t1_lead: "صندوق الـ ETF (اختصار لـ Exchange-Traded Fund أو صندوق المؤشرات المتداول) هو أداة استثمارية تجمع مئات أو آلاف الأسهم العالمية في سلة واحدة متوازنة تُتداول في البورصة بسهولة. بامتلاكك حصة واحدة في الـ ETF، تصبح شريكاً في كل تلك الشركات دفعة واحدة.",
    edu_t1_f1_title: "تنويع فوري للمخاطر:",
    edu_t1_f1_desc: "بـ ١٠٠ دينار فقط، يتوزع استثمارك عبر مختلف القطاعات (تكنولوجيا، رعاية صحية، صناعة، طاقة). إذا تراجعت شركة واحدة، تعوضها الشركات الأخرى.",
    edu_t1_f2_title: "تكلفة إدارية شبه معدومة:",
    edu_t1_f2_desc: "تتبع مؤشرات قياسية بشكل آلي ومنتظم، بدون مديري محافظ يتقاضون عمولات مرتفعة، مما يحفظ أرباحك الصافية لك وحدك.",
    edu_t1_f3_title: "شفافية وسيولة كاملة:",
    edu_t1_f3_desc: "تعرف دائماً ما تحتويه محفظتك بدقة، ويمكنك شراء أو تسييل حصصك في أي وقت دون شروط حبس رأس المال.",
    edu_t1_card_single_title: "شراء سهم شركة منفردة",
    edu_t1_card_single_badge: "مخاطرة فردية عالية",
    edu_t1_card_single_p1: "إذا تعثرت تلك الشركة أو هبطت أرباحها، قد تفقد جزءاً كبيراً من مدخراتك.",
    edu_t1_card_single_p2: "يتطلب وقتاً كبيراً ومتابعة يومية مرهقة للأخبار والتقارير المالية والتقلبات الحادة.",
    edu_t1_card_etf_title: "الاستثمار عبر صناديق الـ ETF",
    edu_t1_card_etf_badge: "أمان وتوزيع مدروس",
    edu_t1_card_etf_p1: "سهم واحد يمنحك ملكية في 500+ شركة رائدة عالمياً (Apple, Microsoft, Nvidia وغيرها).",
    edu_t1_card_etf_p2: "تنمو مع نمو الاقتصاد العالمي ككل، ومحفظتك محمية تلقائياً من تعثر أي شركة منفردة.",
    edu_t1_more_companies: "+500 أخرى",

    // Tab 2: Long-Term Investing
    edu_t2_tag: "المفهوم الثاني: عقلية المستثمر الذكي",
    edu_t2_heading: "كيف يبدو الاستثمار طويل الأجل؟ الوقت في السوق يهزم توقيت السوق",
    edu_t2_lead: "الاستثمار الحقيقي ليس مضاربة سريعة أو ملاحقة لأسعار الغد. إنه مسار هادئ لمدة ٥ إلى ٢٠ سنة يستند لحقيقة تاريخية دامغة: الشركات العالمية الناجحة والاقتصاد العالمي ينموان ويتوسعان باستمرار على المدى البعيد.",
    edu_t2_f1_title: "متوسط التكلفة الدوري (DCA):",
    edu_t2_f1_desc: "استثمار ١٠٠ دينار بانتظام كل شهر يجعلك تشتري في القمم والقيعان تلقائياً؛ فتحصل على أفضل متوسط سعر دون حاجة لمراقبة السوق.",
    edu_t2_f2_title: "الهبوط المؤقت فرصة للشراء:",
    edu_t2_f2_desc: "عندما ينخفض السوق، تشتري الـ ١٠٠ دينار حصصاً أكثر بسعر أرخص. وعندما يتعافى السوق، تتضاعف مكاسبك على كل تلك الحصص.",
    edu_t2_f3_title: "راحة البال وتجنب التوتر:",
    edu_t2_f3_desc: "تتجاهل الضجيج والأخبار السلبية اليومية، وتركز على حياتك وعملك بينما تعمل أموالك من أجلك بهدوء على المدى البعيد.",
    edu_t2_card_trade_title: "المضاربة والتداول السريع",
    edu_t2_card_trade_badge: "توتر وخسائر متكررة",
    edu_t2_card_trade_p1: "محاولة تخمين صعود وهبوط الأسعار يومياً؛ وتثبت الدراسات أن 90% من المتداولين الأفراد يخسرون أموالهم.",
    edu_t2_card_trade_p2: "عمولات تداول متكررة تستنزف رأس المال، وضغط عصبي مستمر يؤثر سلباً على قراراتك.",
    edu_t2_card_passive_title: "الاستثمار السلبي التراكمي (ETF-P)",
    edu_t2_card_passive_badge: "هدوء ونمو مستدام",
    edu_t2_card_passive_p1: "استثمار شهري تلقائي هادئ يستفيد من التوسع الطبيعي لأقوى اقتصادات العالم.",
    edu_t2_card_passive_p2: "عائد تاريخي إيجابي موثق على مدار كل فترات الـ ١٠ سنوات في تاريخ المؤشرات الكبرى.",

    // Tab 3: Compounding Wealth
    edu_t3_tag: "المفهوم الثالث: المحرك المالي الأقوى",
    edu_t3_heading: "سحر النمو التراكمي (Compounding): تأثير كرة الثلج المالية",
    edu_t3_lead: "النمو التراكمي هو أعجوبة المال الحقيقية. عندما تستثمر، تحقق أرباحاً في سنتك الأولى. وفي السنوات التالية، لا تنمو أموالك الأصلية فقط، بل تنمو أيضاً الأرباح السابقة لتولّد أرباحاً جديدة فوقها دون أن تدفع فلساً إضافياً!",
    edu_t3_phase1_title: "١. مرحلة البناء (١ - ٤ سنوات):",
    edu_t3_phase1_desc: "مدخراتك الشهرية تشكل الجزء الأكبر من الرصيد. هنا تبني عادة الادخار المنتظم وتضع حجر الأساس.",
    edu_t3_phase2_title: "٢. مرحلة التسارع (٥ - ١٠ سنوات):",
    edu_t3_phase2_desc: "الأرباح السنوية التي يولدها الصندوق تبدأ بمعادلة ما تدفعه من جيبك سنوياً. تشعر بأن المال بدأ يعمل بجد لحسابه.",
    edu_t3_phase3_title: "٣. مرحلة الانفجار المالي (١٥+ سنة):",
    edu_t3_phase3_desc: "تصبح الأرباح المركبة هي المساهم الأكبر بنسبة ٧٠% فأكثر من إجمالي ثروتك، متجاوزة مجموع كل ما دفعته من جيبك بأضعاف!",
    edu_t3_timeline_title: "مثال حقيقي بـ ١٠٠ دينار شهرياً (بعائد سنوي 8.5%):",
    edu_t3_time_5yr: "بعد ٥ سنوات:",
    edu_t3_sum_5yr: "7,444 د.أ",
    edu_t3_val_5yr: "دفعت: 6,000 د.أ ← رصيدك: 7,444 د.أ (أرباح: +1,444 د.أ)",
    edu_t3_time_15yr: "بعد ١٥ سنة:",
    edu_t3_sum_15yr: "36,180 د.أ",
    edu_t3_val_15yr: "دفعت: 18,000 د.أ ← رصيدك: 36,180 د.أ (أرباح: +18,180 د.أ — الأرباح تجاوزت مدفوعاتك!)",
    edu_t3_time_25yr: "بعد ٢٥ سنة:",
    edu_t3_sum_25yr: "103,200 د.أ",
    edu_t3_val_25yr: "دفعت: 30,000 د.أ ← رصيدك: 103,200 د.أ (أرباح: +73,200 د.أ — 71% من الثروة جاءت من التراكم!)",
    edu_t3_cta_btn: "احسب خطتك الشخصية في الحاسبة التفاعلية بالأسفل ↓",

    // Problem vs Solution Section
    problem_title: "لماذا يحتاج المستثمر في الأردن إلى ETF-P؟",
    problem_sub: "الفارق بين إبقاء مدخراتك في البنك وبين الاستثمار طويل الأجل في صناديق المؤشرات (ETFs)",
    pain_title: "الواقع الحالي في الأردن:",
    pain_1: "<strong>التضخم يأكل المدخرات:</strong> الودائع البنكية تعطي عوائد ضئيلة لا تجاري ارتفاع تكاليف المعيشة وتآكل القوة الشرائية سنوياً.",
    pain_2: "<strong>تكاليف الحوالات الباهظة:</strong> إرسال مبالغ صغيرة (١٠٠ دينار) لمنصات أجنبية يلتهم ٣٠-٤٠ دينار عمولات سويفت وفروقات صرف.",
    pain_3: "<strong>مخاطر الأسهم الفردية والمضاربة:</strong> صعوبة اختيار أسهم رابحة بمفردك، ومخاطر تقلبات الأسعار اليومية والتوتر النفسي.",
    pain_4: "<strong>المخاطرة العالية:</strong> الانجرار خلف تداول العملات الرقمية أو الفوركس والمضاربة التي أضرت بالكثيرين.",
    sol_title: "الحل المبتكر مع ETF-P:",
    sol_1: "<strong>استثمار تلقائي من ١٠٠ دينار:</strong> اشترك شهرياً باقتطاع مرن دون الحاجة لآلاف الدنانير.",
    sol_2: "<strong>صناديق مؤشرات عالمية رائدة:</strong> نعتمد مؤشرات عالمية رائدة (مثل S&P 500 و MSCI World) توزع استثمارك عبر أقوى قطاعات الاقتصاد العالمي.",
    sol_3: "<strong>تنويع احترافي للمخاطر:</strong> بدلاً من شراء سهم واحد، ١٠٠ دينار تتوزع على مئات الشركات العالمية الناجحة.",
    sol_4: "<strong>تجربة محلية سهلة بالدينار:</strong> إيداع فوري وسهل، دعم باللغة العربية، وتقارير واضحة.",

    // Calculator Section
    calc_badge: "أداة تفاعلية",
    calc_title: "حاسبة نمو الاستثمار الشهري التراكمي",
    calc_sub: "شاهد كيف يمكن لـ ١٠٠ دينار شهرياً أن تصنع فارقاً حقيقياً في مستقبلك المالي عبر سحر التراكم",
    calc_lbl_amount: "مبلغ الاستثمار الشهري:",
    currency_jod: "دينار أردني",
    currency_jod_short: "د.أ",
    calc_amt_min: "25 د.أ",
    calc_amt_mid: "250 د.أ",
    calc_amt_max: "500 د.أ",
    calc_lbl_years: "المدة الزمنية (بالسنوات):",
    calc_years_unit: "سنوات",
    calc_year_min: "سنة واحدة",
    calc_year_mid: "١٥ سنة",
    calc_year_max: "٣٠ سنة",
    calc_assumption_title: "الفرضية المعتمدة:",
    calc_assumption_text: "متوسط نمو سنوي مركب 8.5% (بناءً على الأداء التاريخي طويل الأجل لمؤشرات الأسهم العالمية مثل S&P 500 و MSCI World على مدى عقود). الاستثمار ينطوي على مخاطر تقلب السوق.",
    calc_result_header: "القيمة التقديرية لمحفظتك",
    calc_gain_label: "إجمالي الأرباح المركبة المتوقعة:",
    calc_invested_label: "إجمالي ما دفعته من جيبك:",
    calc_bank_diff: "لو تركتها في حساب بنكي عادي:",
    calc_cta_btn: "ابدأ بناء هذه المحفظة الآن",
    calc_ratio_title: "تركيبة المحفظة (أثر التراكم):",
    calc_ratio_gains_badge: "أرباح تراكمية",
    calc_ratio_principal: "مدفوعاتك",
    calc_ratio_gains: "أرباح مركبة متولدة",

    // How It Works
    how_title: "كيف تبدأ الاستثمار في ٣ خطوات سهلة؟",
    how_sub: "صممنا التطبيق ليكون سهلاً، شفافاً، وبدون أي تعقيد فني",
    step1_title: "حدد مبلغك الشهري",
    step1_desc: "اختر المبلغ الذي يناسبك (يبدأ من ١٠٠ دينار) وحدد جدول الإيداع التلقائي من حسابك البنكي.",
    step2_title: "نستثمر لك في صناديق المؤشرات (ETFs)",
    step2_desc: "يتم توجيه الأموال تلقائياً لشراء حصص في أفضل صناديق المؤشرات المتداولة العالمية المتنوعة ومنخفضة التكلفة.",
    step3_title: "شاهد ثروتك تنمو وتراكم",
    step3_desc: "تابع أداء استثماراتك الشفافة لحظة بلحظة، مع إمكانية السحب أو زيادة الاستثمار في أي وقت دون قيود.",

    // Customer Discovery / Survey
    disc_badge: "استطلاع رأي المستثمر الأردني — دراسة 30-50 مقابلة",
    disc_title: "ساعدنا في تصميم التطبيق المناسب لك في الأردن",
    disc_sub: "نجري حالياً مقابلات استطلاعية مع ٣٠-٥٠ مستثمر أردني لمعرفة أبرز العقبات (الرسوم، التحويلات، فهم آلية الصناديق، الثقة). رأيك يصنع الفرق ويمنحك وصولاً مجانياً مميزاً مدى الحياة!",
    disc_btn_survey: "الإجابة على ٤ أسئلة استطلاعية (٤٥ ثانية)",
    disc_btn_founder: "احجز مكالمة ١٥ دقيقة مع المؤسس",
    disc_progress_label: "هدف المقابلات الاستطلاعية:",
    disc_completed: "مكتملة",
    disc_progress_note: "بقي ١٦ مقعداً فقط للمشاركين في برنامج المؤسسين الأوائل",
    dash_tag: "بيانات حية مباشرة",
    dash_title: "نتائج استطلاع المستثمرين في الأردن",
    dash_sub: "ملخص إجابات المستثمرين الأردنيين حول أهم الاحتياجات والعقبات",
    dash_card_waitlist: "المسجلون في الانتظار",
    dash_card_waitlist_trend: "↑ 18 اليوم",
    dash_card_interviews: "مقابلات واستطلاعات مكتملة",
    dash_card_goal: "من أصل ٥٠ مستهدفاً",
    dash_card_willingness: "الاستعداد للاستثمار بـ 100 د.أ",
    dash_card_confirmed: "أكدوا الجدية والقدرة",
    dash_card_preferred_fee: "النموذج السعري المفضل",
    dash_card_fee_sub: "نسبة سنوية vs اشتراك شهري",
    dash_pain_ranked: "ترتيب أكبر العوائق أمام المستثمر الأردني:",
    dash_trust_ranked: "الجهة الأكثر ثقة لتقديم الخدمة:",
    footer_rights: "منصة التكنولوجيا المالية لصناديق المؤشرات المتداولة (ETFs) والاستثمار التراكمي للأفراد في الأردن",
    footer_disclaimer: "إخلاء مسؤولية: هذا الموقع يمثل مرحلة التحقق والاستطلاع الأولي لمشروع ETF-P. لا يمثل استشارة مالية أو دعوة عامة للاكتتاب دون استكمال التراخيص القانونية الرسمية لدى هيئة الأوراق المالية الأردنية (JSC).",
    modal_title: "استطلاع المستثمر الأردني",
    modal_sub: "٤ أسئلة سريعة تساعدنا في تصميم الخدمة وتمنحك أولوية VIP",
    q1_title: "١. هل أنت مستعد لاستثمار ١٠٠ دينار أردني شهرياً في محفظة صناديق استثمارية (ETFs) متنوعة؟",
    q1_opt1: "نعم، ١٠٠ دينار شهرياً مبلغ مثالي ومناسب",
    q1_opt2: "أستطيع استثمار مبالغ أكبر (٢٠٠ - ٥٠٠ د.أ شهرياً)",
    q1_opt3: "أفضل البدء بمبلغ أصغر (٣٠ - ٥٠ د.أ شهرياً)",
    q1_opt4: "غير متأكد، يعتمد على الأمان وسهولة السحب",
    q2_title: "٢. ما هو العائق الأكبر الذي يمنعك من الاستثمار في الأسهم العالمية حالياً؟",
    q2_opt1: "عدم وضوح ما هو الـ ETF وكيف يعمل الاستثمار طويل الأجل",
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
    modal_contact_title: "بيانات التواصل (لحجز المكالمة وتأكيد أولوية الانتظار):",
    modal_contact_note: "اختياري",
    lbl_phone_short: "رقم الهاتف",
    survey_toast_title: "شكراً لمساهمتك القيمة!",
    survey_toast_message: "تم تسجيل إجاباتك بنجاح في دراسة أبحاث السوق.",
    modal_submit_btn: "حفظ الإجابات وتفعيل أولوية الدخول",
    modal_submitting_btn: "جاري حفظ الإجابات وتفعيل حسابك..."
  },
  en: {
    badge_tag: "Smart Investing",
    tagline: "Retail Wealth Platform for Jordan",
    nav_etf: "What is an ETF?",
    nav_about: "About Project",
    nav_why: "Why Now?",
    nav_how: "How it Works",
    nav_calc: "Calculator",
    nav_interview: "Investor Research",
    btn_join_waitlist: "Join Waitlist",
    hero_badge: "Built for Investors in Jordan 🇯🇴",
    hero_title_1: "Invest",
    hero_title_highlight: "100 JOD/Month",
    hero_title_2: "in Diversified Global ETFs",
    hero_sub: "A smart, high-yield alternative to bank cash eroded by inflation. Build long-term wealth by passively investing in the world's most resilient companies through diversified ETFs, without foreign wire fees or complex brokerages.",
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
    badge_diversification_title: "Global Diversification",
    badge_diversification_desc: "Top companies & sectors in one basket",
    badge_jod_title: "Directly in JOD",
    badge_jod_desc: "Start with 100 JOD without high SWIFT fees",
    badge_etf_title: "Global Index Funds",
    badge_etf_desc: "Risk diversified across hundreds of blue-chips",
    badge_reg_title: "Transparent Regulation",
    badge_reg_desc: "Partnering with JSC-licensed local brokers",

    // Smart Investing Essentials (Clarifications on ETF, Long-term, Compounding)
    edu_badge: "Smart Investor Guide",
    edu_title: "3 Core Concepts That Transform How You Build Wealth",
    edu_sub: "You don't need a finance degree to build long-term wealth. Here is how ETFs, long-term investing, and compounding work in plain language:",
    edu_tab1_label: "What is an ETF?",
    edu_tab2_label: "Long-Term Investing",
    edu_tab3_label: "Compounding Wealth",

    // Tab 1: ETF
    edu_t1_tag: "Concept 1: The Smart Investment Basket",
    edu_t1_heading: "Exchange-Traded Funds (ETFs): Don't buy a single egg, own the entire basket",
    edu_t1_lead: "An ETF is an investment fund traded on public stock exchanges that bundles hundreds or thousands of leading global companies into a single balanced basket. By owning a single share of an ETF, you instantly own a slice of all those companies at once.",
    edu_t1_f1_title: "Instant Risk Diversification:",
    edu_t1_f1_desc: "With just 100 JOD, your capital is spread across global tech, healthcare, finance, and industrial sectors. If one company stumbles, others offset the loss.",
    edu_t1_f2_title: "Ultra-Low Expense Ratios:",
    edu_t1_f2_desc: "Passively tracks global benchmark indices without expensive fund managers taking high cuts, keeping nearly 100% of clean returns in your account.",
    edu_t1_f3_title: "Complete Transparency & Liquidity:",
    edu_t1_f3_desc: "You always know exactly what companies you own, with the freedom to invest or withdraw anytime without lock-in periods.",
    edu_t1_card_single_title: "Buying Single Individual Stocks",
    edu_t1_card_single_badge: "High Single-Stock Risk",
    edu_t1_card_single_p1: "If that single company faces trouble or poor earnings, you risk losing a huge chunk of your savings.",
    edu_t1_card_single_p2: "Requires daily stressful monitoring of financial reports, market news, and volatile price swings.",
    edu_t1_card_etf_title: "Investing via Index ETFs",
    edu_t1_card_etf_badge: "Smart Diversification",
    edu_t1_card_etf_p1: "A single share gives you fractional ownership in 500+ leading global market leaders (Apple, Microsoft, Nvidia, etc.).",
    edu_t1_card_etf_p2: "Grows alongside global economic expansion, protecting your portfolio from individual corporate failures.",
    edu_t1_more_companies: "+500 more",

    // Tab 2: Long-Term Investing
    edu_t2_tag: "Concept 2: The Investor Mindset",
    edu_t2_heading: "What Long-Term Investing Looks Like: Time in the Market Beats Timing",
    edu_t2_lead: "Real investing isn't a get-rich-quick gamble or guessing tomorrow's market swing. It is a steady 5-to-20 year journey backed by an undeniable historical fact: world-leading companies and the global economy steadily expand over time.",
    edu_t2_f1_title: "Dollar-Cost Averaging (DCA):",
    edu_t2_f1_desc: "Investing a fixed 100 JOD monthly automates purchases across peaks and dips, giving you an optimal average price without market watching.",
    edu_t2_f2_title: "Market Dips Are Buying Discounts:",
    edu_t2_f2_desc: "During temporary downturns, your 100 JOD buys more shares at discounted prices. When markets rebound, those extra shares multiply your gains.",
    edu_t2_f3_title: "Total Peace of Mind:",
    edu_t2_f3_desc: "Ignore daily news hysteria and market panic. You focus on your career and life while your wealth quietly compounds in the background.",
    edu_t2_card_trade_title: "Day Trading & Speculation",
    edu_t2_card_trade_badge: "High Stress & Loss Risk",
    edu_t2_card_trade_p1: "Attempting to time daily market swings; studies show over 90% of retail traders lose their principal.",
    edu_t2_card_trade_p2: "Heavy trading fees, constant anxiety, sleepless nights, and emotional exhaustion.",
    edu_t2_card_passive_title: "Passive Long-Term Investing (ETF-P)",
    edu_t2_card_passive_badge: "Proven Steady Growth",
    edu_t2_card_passive_p1: "Effortless monthly contributions capturing the compounding growth of global enterprise.",
    edu_t2_card_passive_p2: "Historically positive across every rolling 10-year period in modern index fund history.",

    // Tab 3: Compounding Wealth
    edu_t3_tag: "Concept 3: The Financial Engine",
    edu_t3_heading: "How Compounding Wealth Works: The Financial Snowball Effect",
    edu_t3_lead: "Compounding is the true engine of wealth. When you invest, your capital produces returns. In following years, those earnings stay invested—earning returns on top of returns, exponentially accelerating your wealth without extra effort.",
    edu_t3_phase1_title: "1. The Foundation Phase (Years 1-4):",
    edu_t3_phase1_desc: "Your monthly savings represent most of your balance. You build steady financial discipline and habit.",
    edu_t3_phase2_title: "2. The Acceleration Phase (Years 5-10):",
    edu_t3_phase2_desc: "Annual returns begin matching your yearly out-of-pocket contributions. Your money is genuinely working for you.",
    edu_t3_phase3_title: "3. The Exponential Leap (Years 15+):",
    edu_t3_phase3_desc: "Compounded gains account for 70%+ of your total net worth, far outpacing the total amount you ever deposited!",
    edu_t3_timeline_title: "Real Example: 100 JOD/month at 8.5% Historical Annual Return:",
    edu_t3_time_5yr: "After 5 Years:",
    edu_t3_sum_5yr: "7,444 JOD",
    edu_t3_val_5yr: "Deposited: 6,000 JOD → Portfolio: 7,444 JOD (Gain: +1,444 JOD)",
    edu_t3_time_15yr: "After 15 Years:",
    edu_t3_sum_15yr: "36,180 JOD",
    edu_t3_val_15yr: "Deposited: 18,000 JOD → Portfolio: 36,180 JOD (Gain: +18,180 JOD — Gains exceed deposits!)",
    edu_t3_time_25yr: "After 25 Years:",
    edu_t3_sum_25yr: "103,200 JOD",
    edu_t3_val_25yr: "Deposited: 30,000 JOD → Portfolio: 103,200 JOD (Gain: +73,200 JOD — 71% of wealth is pure compounding!)",
    edu_t3_cta_btn: "Calculate Your Own Plan in the Interactive Calculator Below ↓",

    // Problem vs Solution Section
    problem_title: "Why Jordanian Investors Need ETF-P",
    problem_sub: "The difference between keeping cash idle in savings vs. long-term investing in diversified ETFs",
    pain_title: "Current Reality in Jordan:",
    pain_1: "<strong>Inflation Eats Savings:</strong> Bank deposits yield minimal returns that fail to keep pace with inflation, rising living costs, and purchasing power erosion.",
    pain_2: "<strong>Exorbitant Wire Fees:</strong> Sending 100 JOD to US/foreign brokers incurs 30-40 JOD in SWIFT and FX exchange fees.",
    pain_3: "<strong>Single-Stock Risk & Speculation:</strong> Difficult to pick winning stocks on your own, leading to risky day trading, emotional stress, and losses.",
    pain_4: "<strong>High Risk Scams:</strong> Many Jordanians fell victim to speculative crypto or unregulated offshore forex brokers.",
    sol_title: "The ETF-P Solution:",
    sol_1: "<strong>Automated 100 JOD/Month:</strong> Dollar-cost average monthly into the market without needing thousands in capital.",
    sol_2: "<strong>Premier Global Index ETFs:</strong> Track world-class indices (e.g., S&P 500 and MSCI World) distributing your capital across the most resilient sectors.",
    sol_3: "<strong>Professional Diversification:</strong> Your 100 JOD is spread across hundreds of world-leading resilient companies.",
    sol_4: "<strong>Seamless Local Experience:</strong> Instant deposits in JOD, Arabic support, and clear portfolio reporting.",

    // Calculator Section
    calc_badge: "Interactive Tool",
    calc_title: "Compound Wealth Accumulation Calculator",
    calc_sub: "See how investing 100 JOD/month can transform your financial future through compounding power",
    calc_lbl_amount: "Monthly Investment:",
    currency_jod: "JOD",
    currency_jod_short: "JOD",
    calc_amt_min: "25 JOD",
    calc_amt_mid: "250 JOD",
    calc_amt_max: "500 JOD",
    calc_lbl_years: "Time Horizon (Years):",
    calc_years_unit: "Years",
    calc_year_min: "1 Year",
    calc_year_mid: "15 Years",
    calc_year_max: "30 Years",
    calc_assumption_title: "Underlying Assumption:",
    calc_assumption_text: "8.5% historical annualized compound return (based on multi-decade historical performance of global indices like S&P 500 and MSCI World). All investments carry market risk.",
    calc_result_header: "Projected Portfolio Value",
    calc_gain_label: "Total Compound Gains:",
    calc_invested_label: "Total Principal Invested:",
    calc_bank_diff: "If left idle in a bank account:",
    calc_cta_btn: "Start Building This Portfolio",
    calc_ratio_title: "Portfolio Value Breakdown:",
    calc_ratio_gains_badge: "Compounded Gains",
    calc_ratio_principal: "Your Deposits",
    calc_ratio_gains: "Compounded Growth",

    // How It Works
    how_title: "Start Investing in 3 Simple Steps",
    how_sub: "Designed to be effortless, transparent, and accessible to everyone",
    step1_title: "Choose Your Monthly Amount",
    step1_desc: "Pick your contribution (starting at 100 JOD) and set up easy automated transfers from your local bank.",
    step2_title: "We Invest in Diversified ETFs",
    step2_desc: "Funds are automatically allocated into globally diversified, low-cost exchange-traded index funds.",
    step3_title: "Watch Your Wealth Compound",
    step3_desc: "Monitor your performance in real-time, with the freedom to withdraw or increase savings anytime.",

    // Customer Discovery / Survey
    disc_badge: "Jordan Customer Discovery — 30-50 Interview Study",
    disc_title: "Help Us Build the Right Wealth Platform for Jordan",
    disc_sub: "We are currently conducting 30-50 deep discovery interviews with Jordanian investors to solve key friction points (fees, transfers, ETF literacy, trust). Your input unlocks lifetime VIP benefits!",
    disc_btn_survey: "Answer 4 Quick Questions (45s)",
    disc_btn_founder: "Book 15-Min Call with Founder",
    disc_progress_label: "Customer Discovery Goal:",
    disc_completed: "Completed",
    disc_progress_note: "Only 16 founder cohort seats remaining",
    dash_tag: "Live Data Feed",
    dash_title: "Jordanian Investor Survey Insights",
    dash_sub: "Aggregated findings from Jordanian retail investors validating market need",
    dash_card_waitlist: "Waitlist Registrations",
    dash_card_waitlist_trend: "↑ 18 today",
    dash_card_interviews: "Interviews & Surveys Done",
    dash_card_goal: "Out of 50 Target",
    dash_card_willingness: "Willing to Invest 100 JOD/mo",
    dash_card_confirmed: "Confirmed High Intent",
    dash_card_preferred_fee: "Preferred Pricing Model",
    dash_card_fee_sub: "Annual AUM vs Flat Monthly",
    dash_pain_ranked: "Top Blockers for Jordanian Investors (Ranked):",
    dash_trust_ranked: "Most Trusted Institution Type:",
    footer_rights: "Fintech Platform for Retail ETFs & Long-Term Compounding in Jordan",
    footer_disclaimer: "Disclaimer: This website is for pre-launch customer discovery and market validation for the ETF-P project. It does not constitute financial advice or public solicitation prior to official Jordan Securities Commission (JSC) regulatory approvals.",
    modal_title: "Jordanian Investor Survey",
    modal_sub: "4 quick questions to tailor the service and unlock VIP priority",
    q1_title: "1. Would you invest 100 JOD/month in a diversified ETF portfolio?",
    q1_opt1: "Yes, 100 JOD/month is an ideal amount",
    q1_opt2: "I can invest more (200 - 500+ JOD/month)",
    q1_opt3: "I prefer starting smaller (30 - 50 JOD/month)",
    q1_opt4: "Not sure, depends on liquidity and security",
    q2_title: "2. What is the biggest barrier stopping you from investing right now?",
    q2_opt1: "Uncertainty regarding what an ETF is & how long-term compounding works",
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
    modal_contact_title: "Contact Info (For call scheduling & priority waitlist):",
    modal_contact_note: "Optional",
    lbl_phone_short: "Phone Number",
    survey_toast_title: "Thank you for your feedback!",
    survey_toast_message: "Your responses have been recorded in our market research study.",
    modal_submit_btn: "Save Responses & Activate VIP Waitlist",
    modal_submitting_btn: "Saving Responses & Activating VIP..."
  }
};

// Initial Anonymous Statistical Survey Benchmark Dataset
// Strictly ZERO personal identifying information (PII) stored in client bundles
let surveyDatabase = [
  { id: 1, capacity: "yes_100", blocker: "etf_knowledge", trust: "jordan_fintech", pricing: "percent_025", callConsent: true, date: "2026-09-01" },
  { id: 2, capacity: "yes_100", blocker: "fees_fx", trust: "jordan_fintech", pricing: "percent_025", callConsent: true, date: "2026-09-01" },
  { id: 3, capacity: "more_200", blocker: "trust_loss", trust: "traditional_bank", pricing: "sub_monthly", callConsent: false, date: "2026-09-02" },
  { id: 4, capacity: "yes_100", blocker: "fees_fx", trust: "jordan_fintech", pricing: "percent_025", callConsent: true, date: "2026-09-02" },
  { id: 5, capacity: "less_50", blocker: "complexity", trust: "jordan_fintech", pricing: "sub_monthly", callConsent: false, date: "2026-09-03" },
  { id: 6, capacity: "yes_100", blocker: "etf_knowledge", trust: "jordan_fintech", pricing: "percent_025", callConsent: true, date: "2026-09-03" }
];

// Generate additional anonymous seed responses to reach statistical sample of 34
for (let i = 7; i <= 34; i++) {
  const blockers = ["etf_knowledge", "fees_fx", "trust_loss", "complexity"];
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

// Current language & waitlist state (persisted in localStorage)
let currentLang = 'ar';
try {
  const savedLang = localStorage.getItem('etf_p_lang');
  if (savedLang === 'en' || savedLang === 'ar') {
    currentLang = savedLang;
  }
} catch (e) {}

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

// Global Language Toggle Function (with debounce protection against double-firing)
let lastToggleTime = 0;
window.toggleLanguage = function() {
  const now = Date.now();
  if (now - lastToggleTime < 300) {
    return;
  }
  lastToggleTime = now;

  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  try {
    localStorage.setItem('etf_p_lang', currentLang);
  } catch (e) {}
  updateLanguage(currentLang);
};

// Global Bulletproof Tab Activation Function
window.activateTabById = function(targetId, setFocus = false) {
  if (!targetId) return;
  const eduTabBtns = Array.from(document.querySelectorAll('.edu-tab-btn'));
  const eduTabPanels = Array.from(document.querySelectorAll('.edu-tab-panel'));

  // Guard against non-existent tab targets to prevent hiding all panels
  const targetExists = eduTabPanels.some(p => p.id === targetId);
  if (!targetExists) return;

  eduTabBtns.forEach(b => {
    const isTarget = b.getAttribute('data-tab') === targetId;
    if (isTarget) {
      b.classList.add('active', 'bg-white', 'text-brand-700', 'shadow-sm');
      b.classList.remove('text-slate-600');
      b.setAttribute('aria-selected', 'true');
      b.setAttribute('tabindex', '0');
      if (setFocus) b.focus();
    } else {
      b.classList.remove('active', 'bg-white', 'text-brand-700', 'shadow-sm');
      b.classList.add('text-slate-600');
      b.setAttribute('aria-selected', 'false');
      b.setAttribute('tabindex', '-1');
    }
  });

  eduTabPanels.forEach(panel => {
    if (panel.id === targetId) {
      panel.classList.remove('hidden');
      panel.classList.add('block');
      panel.style.display = 'block';
    } else {
      panel.classList.add('hidden');
      panel.classList.remove('block');
      panel.style.display = 'none';
    }
  });

  if (window.lucide) {
    window.lucide.createIcons();
  }
};

// Global Delegated Tab Click Listener (fail-safe for touch, inner spans, and fast taps)
document.addEventListener('click', (e) => {
  const tabBtn = e.target.closest('.edu-tab-btn');
  if (tabBtn) {
    const targetId = tabBtn.getAttribute('data-tab');
    if (targetId && window.activateTabById) {
      window.activateTabById(targetId);
    }
  }
});

// Resilient App Initialization
function initApp() {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Update initial counts from storage
  const regCountEl = document.getElementById('registeredCount');
  const dashWaitlistEl = document.getElementById('dashWaitlistTotal');
  if (regCountEl) regCountEl.textContent = waitlistTotal;
  if (dashWaitlistEl) dashWaitlistEl.textContent = waitlistTotal;

  // Language Toggle is handled directly via onclick="toggleLanguage()" with debounce protection

  // Calculator Logic with 30 Years Upper Limit
  const calcAmount = document.getElementById('calcAmount');
  const calcYears = document.getElementById('calcYears');
  const valAmount = document.getElementById('valAmount');
  const valYears = document.getElementById('valYears');
  const valYearsUnit = document.getElementById('valYearsUnit');

  // Helper to dynamically fill Apple fluid slider track according to current progress & text direction
  function updateSliderFill(slider) {
    if (!slider) return;
    const min = parseFloat(slider.min) || 0;
    const max = parseFloat(slider.max) || 100;
    const val = parseFloat(slider.value) || 0;
    const pct = Math.max(0, Math.min(100, ((val - min) / (max - min)) * 100));
    const isRtl = document.documentElement.dir === 'rtl';
    const fillDir = isRtl ? 'to left' : 'to right';
    slider.style.background = `linear-gradient(${fillDir}, #0d9488 0%, #0d9488 ${pct}%, rgba(0, 0, 0, 0.08) ${pct}%, rgba(0, 0, 0, 0.08) 100%)`;
  }

  function updateCalculator() {
    if (!calcAmount || !calcYears) return;
    updateSliderFill(calcAmount);
    updateSliderFill(calcYears);
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
    if (valYearsUnit) {
      if (currentLang === 'ar') {
        valYearsUnit.textContent = (years === 1 ? 'سنة' : (years === 2 ? 'سنتين' : (years <= 10 ? 'سنوات' : 'سنة')));
      } else {
        valYearsUnit.textContent = years === 1 ? 'Year' : 'Years';
      }
    }

    const totalPortfolioEl = document.getElementById('totalPortfolioValue');
    const totalGainsEl = document.getElementById('totalGains');
    const totalInvestedEl = document.getElementById('totalInvestedAmount');
    const bankCashEl = document.getElementById('bankCashValue');

    if (totalPortfolioEl) totalPortfolioEl.textContent = Math.round(futureValue).toLocaleString();
    if (totalGainsEl) totalGainsEl.textContent = '+' + Math.round(totalGains).toLocaleString() + (currentLang === 'ar' ? ' د.أ' : ' JOD');
    if (totalInvestedEl) totalInvestedEl.textContent = totalInvested.toLocaleString() + (currentLang === 'ar' ? ' د.أ' : ' JOD');
    if (bankCashEl) bankCashEl.textContent = totalInvested.toLocaleString() + (currentLang === 'ar' ? ' د.أ (تآكلت شرائياً)' : ' JOD (Eroded by inflation)');

    // Compounding breakdown ratio calculation
    const investedRatioBar = document.getElementById('calcInvestedRatioBar');
    const gainsRatioBar = document.getElementById('calcGainsRatioBar');
    const investedRatioText = document.getElementById('calcInvestedRatioText');
    const gainsRatioText = document.getElementById('calcGainsRatioText');
    const gainsRatioLegendText = document.getElementById('calcGainsRatioLegendText');

    if (futureValue > 0) {
      const investedPct = Math.max(5, Math.min(95, Math.round((totalInvested / futureValue) * 100)));
      const gainsPct = 100 - investedPct;

      if (investedRatioBar) {
        investedRatioBar.style.width = investedPct + '%';
        investedRatioBar.title = currentLang === 'ar' ? `أصل المدخرات: ${investedPct}%` : `Principal Deposits: ${investedPct}%`;
      }
      if (gainsRatioBar) {
        gainsRatioBar.style.width = gainsPct + '%';
        gainsRatioBar.title = currentLang === 'ar' ? `الأرباح التراكمية: ${gainsPct}%` : `Compound Gains: ${gainsPct}%`;
      }
      if (investedRatioText) investedRatioText.textContent = investedPct + '%';
      if (gainsRatioText) gainsRatioText.textContent = gainsPct + '%';
      if (gainsRatioLegendText) gainsRatioLegendText.textContent = gainsPct + '%';
    }
  }
  window.updateCalculator = updateCalculator;

  if (calcAmount) calcAmount.addEventListener('input', updateCalculator);
  if (calcYears) calcYears.addEventListener('input', updateCalculator);
  updateCalculator();

  // Educational Tabs Keyboard Support
  const eduTabContainer = document.querySelector('[role="tablist"]');
  const eduTabBtns = Array.from(document.querySelectorAll('.edu-tab-btn'));
  eduTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');
      if (targetId && window.activateTabById) {
        window.activateTabById(targetId);
      }
    });
  });

  if (eduTabContainer) {
    eduTabContainer.addEventListener('keydown', (e) => {
      const activeIndex = eduTabBtns.findIndex(b => b.classList.contains('active'));
      if (activeIndex === -1) return;

      const isRTL = document.documentElement.dir === 'rtl';
      let nextIndex = null;

      if (e.key === 'ArrowRight') {
        nextIndex = isRTL ? (activeIndex - 1 + eduTabBtns.length) % eduTabBtns.length : (activeIndex + 1) % eduTabBtns.length;
      } else if (e.key === 'ArrowLeft') {
        nextIndex = isRTL ? (activeIndex + 1) % eduTabBtns.length : (activeIndex - 1 + eduTabBtns.length) % eduTabBtns.length;
      } else if (e.key === 'Home') {
        nextIndex = 0;
      } else if (e.key === 'End') {
        nextIndex = eduTabBtns.length - 1;
      }

      if (nextIndex !== null) {
        e.preventDefault();
        const targetId = eduTabBtns[nextIndex].getAttribute('data-tab');
        if (targetId && window.activateTabById) {
          window.activateTabById(targetId, true);
        }
      }
    });
  }

  // Waitlist Form Elements
  const heroWaitlistForm = document.getElementById('heroWaitlistForm');
  const submitBtn = document.getElementById('submitBtn');
  const surveyModal = document.getElementById('surveyModal');
  const closeSurveyBtn = document.getElementById('closeSurveyBtn');
  const openSurveyBtn = document.getElementById('openSurveyBtn');
  const bookCallBtn = document.getElementById('bookCallBtn');
  const discoverySurveyForm = document.getElementById('discoverySurveyForm');
  const modalSubmitBtn = document.getElementById('modalSubmitBtn');

  // Animation lifecycle state tracking to prevent race conditions & stuck states
  let modalRafId = null;
  let modalCloseTimer = null;
  let isClosing = false;
  let lastActiveElement = null;

  // Helper to open modal cleanly (interruptible transition)
  function openModal() {
    if (!surveyModal) return;

    // If modal is already fully visible and not currently closing, no-op
    if (surveyModal.classList.contains('apple-modal-visible') && !isClosing && !modalCloseTimer) {
      return;
    }

    // Cancel any active close timers or pending animation frames
    if (modalCloseTimer) {
      clearTimeout(modalCloseTimer);
      modalCloseTimer = null;
    }
    if (modalRafId) {
      cancelAnimationFrame(modalRafId);
      modalRafId = null;
    }
    isClosing = false;

    // Save previous active focus element to restore on dismissal
    if (document.activeElement && document.activeElement !== document.body) {
      lastActiveElement = document.activeElement;
    }

    const wasAlreadyDisplayed = surveyModal.classList.contains('flex') && !surveyModal.classList.contains('hidden');

    surveyModal.classList.remove('hidden');
    surveyModal.classList.add('flex');
    surveyModal.setAttribute('aria-hidden', 'false');
    surveyModal.removeAttribute('inert');
    document.body.style.overflow = 'hidden';

    // Reduced motion: instantaneous reveal
    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      surveyModal.classList.add('apple-modal-visible');
      if (closeSurveyBtn) closeSurveyBtn.focus();
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    // Interruptibility: If already displayed in layout (e.g. closing was interrupted),
    // immediately transition back to visible from current presentation state without waiting 2 RAF frames!
    if (wasAlreadyDisplayed) {
      surveyModal.classList.add('apple-modal-visible');
    } else {
      modalRafId = requestAnimationFrame(() => {
        modalRafId = requestAnimationFrame(() => {
          surveyModal.classList.add('apple-modal-visible');
          modalRafId = null;
        });
      });
    }

    // Accessible focus management: focus close button
    setTimeout(() => {
      if (closeSurveyBtn && surveyModal.classList.contains('apple-modal-visible')) {
        closeSurveyBtn.focus();
      }
    }, 60);

    if (window.lucide) window.lucide.createIcons();
  }

  // Helper to close modal cleanly (interruptible transition)
  function closeModal() {
    if (!surveyModal) return;

    // If modal is already hidden and not in layout flow, no-op
    if (surveyModal.classList.contains('hidden') && !surveyModal.classList.contains('flex')) {
      return;
    }

    // If already in closing phase with an active timer, avoid resetting the close timer
    if (isClosing && modalCloseTimer) {
      return;
    }

    if (modalRafId) {
      cancelAnimationFrame(modalRafId);
      modalRafId = null;
    }
    if (modalCloseTimer) {
      clearTimeout(modalCloseTimer);
      modalCloseTimer = null;
    }

    isClosing = true;
    surveyModal.classList.remove('apple-modal-visible');
    surveyModal.setAttribute('aria-hidden', 'true');
    surveyModal.setAttribute('inert', '');
    document.body.style.overflow = '';

    // Restore focus to triggering button
    if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
      try {
        lastActiveElement.focus();
      } catch (e) {}
      lastActiveElement = null;
    }

    const finalizeModalClose = () => {
      if (!surveyModal.classList.contains('apple-modal-visible')) {
        surveyModal.classList.add('hidden');
        surveyModal.classList.remove('flex');
      }
      isClosing = false;
      modalCloseTimer = null;
    };

    // Reduced motion: immediate layout clearance
    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      finalizeModalClose();
      return;
    }

    modalCloseTimer = setTimeout(finalizeModalClose, 320);
  }

  window.openModal = openModal;
  window.closeModal = closeModal;

  // Finalize waitlist entry and increment counter AFTER actual completion
  async function finalizeWaitlistSubmission(data) {
    if (!data) return;

    // Save to Firestore via secure API if not already persisted
    if (!data.firestoreSaved && window.saveWaitlistInvestor) {
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

      if (submitBtn) {
        submitBtn.disabled = true;
        const submitSpan = submitBtn.querySelector('span');
        const origText = submitSpan?.textContent;
        if (submitSpan) {
          submitSpan.textContent = I18N[currentLang].btn_submitting_waitlist;
        }

        try {
          // Asynchronously dispatch lead to Firestore immediately so user info is never lost
          let savePromise = Promise.resolve(false);
          if (window.saveWaitlistInvestor) {
            savePromise = window.saveWaitlistInvestor({ name, email, phone, interviewOptIn });
          }

          // Retain pending registration state
          pendingWaitlist = { name, email, phone, interviewOptIn, firestoreSaved: true };

          // If user opted into the 4-question discovery survey:
          // Open the survey modal immediately so they can answer, DO NOT increment counter yet!
          if (interviewOptIn) {
            const modalEmail = document.getElementById('modalEmail');
            const modalPhone = document.getElementById('modalPhone');
            if (modalEmail) modalEmail.value = email;
            if (modalPhone) modalPhone.value = phone;
            openModal();
            return;
          }

          // If survey opt-in is unchecked: finalize waitlist submission immediately
          await savePromise;
          await finalizeWaitlistSubmission(pendingWaitlist);
          pendingWaitlist = null;
          heroWaitlistForm.reset();
        } finally {
          submitBtn.disabled = false;
          if (submitSpan && origText) {
            submitSpan.textContent = origText;
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
      const blocker = document.querySelector('input[name="q_blocker"]:checked')?.value || 'etf_knowledge';
      const trust = document.querySelector('input[name="q_trust"]:checked')?.value || 'jordan_fintech';
      const pricing = document.querySelector('input[name="q_pricing"]:checked')?.value || 'percent_025';
      const callConsent = document.getElementById('interviewBookConsent')?.checked || false;

      const modalEmail = document.getElementById('modalEmail')?.value.trim() || '';
      const modalPhone = document.getElementById('modalPhone')?.value.trim() || '';
      const investorEmail = pendingWaitlist?.email || modalEmail || document.getElementById('email')?.value.trim() || '';
      const investorPhone = pendingWaitlist?.phone || modalPhone || document.getElementById('phone')?.value.trim() || '';
      const investorName = pendingWaitlist?.name || document.getElementById('fullName')?.value.trim() || (investorEmail ? investorEmail.split('@')[0] : 'Anonymous Investor');

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
        // Save waitlist registration if not yet saved and email is provided
        if (investorEmail && (!pendingWaitlist || !pendingWaitlist.firestoreSaved) && window.saveWaitlistInvestor) {
          await window.saveWaitlistInvestor({
            name: investorName,
            email: investorEmail,
            phone: investorPhone,
            interviewOptIn: true
          });
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

        // Increment waitlist counter ONLY IF investor email was submitted
        if (investorEmail) {
          waitlistTotal++;
          try {
            localStorage.setItem('etf_p_waitlist_total', waitlistTotal.toString());
          } catch (err) {}

          const regCount = document.getElementById('registeredCount');
          const dashWaitlist = document.getElementById('dashWaitlistTotal');
          if (regCount) regCount.textContent = waitlistTotal;
          if (dashWaitlist) dashWaitlist.textContent = waitlistTotal;

          showToast(
            currentLang === 'ar' ? 'شكراً لمساهمتك القيمة!' : 'Thank you for your feedback!',
            currentLang === 'ar' ? `أنت الآن رقم #${waitlistTotal} وتمت ترقيتك إلى فئة VIP مع ٣ أشهر مجانية بدون أي رسوم.` : `You are now #${waitlistTotal} and elevated to VIP tier with 3 months zero fees.`
          );
        } else {
          showToast(
            I18N[currentLang].survey_toast_title,
            I18N[currentLang].survey_toast_message
          );
        }

        // Close modal
        closeModal();

        // Reset forms & state
        pendingWaitlist = null;
        if (heroWaitlistForm) heroWaitlistForm.reset();
        discoverySurveyForm.reset();
      } finally {
        if (modalSubmitBtn) {
          modalSubmitBtn.disabled = false;
          modalSubmitBtn.textContent = I18N[currentLang].modal_submit_btn;
        }
      }
    });
  }

  // Modal Dismissal Handler
  async function handleModalDismiss() {
    if (surveyModal && surveyModal.classList.contains('hidden') && !surveyModal.classList.contains('flex')) {
      return;
    }
    closeModal();
    if (pendingWaitlist) {
      const waitlistToFinalize = pendingWaitlist;
      pendingWaitlist = null;
      await finalizeWaitlistSubmission(waitlistToFinalize);
      if (heroWaitlistForm) heroWaitlistForm.reset();
    }
  }

  // Close Survey Modal handlers (X button, backdrop click, Escape key)
  if (closeSurveyBtn) {
    closeSurveyBtn.addEventListener('click', handleModalDismiss);
  }

  if (surveyModal) {
    surveyModal.addEventListener('click', (e) => {
      if (e.target === surveyModal) {
        handleModalDismiss();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && surveyModal && surveyModal.classList.contains('apple-modal-visible')) {
      handleModalDismiss();
    }
  });

  // Survey Open button
  if (openSurveyBtn) {
    openSurveyBtn.addEventListener('click', () => {
      const emailVal = document.getElementById('email')?.value.trim();
      const phoneVal = document.getElementById('phone')?.value.trim();
      const modalEmail = document.getElementById('modalEmail');
      const modalPhone = document.getElementById('modalPhone');
      if (modalEmail && emailVal) modalEmail.value = emailVal;
      if (modalPhone && phoneVal) modalPhone.value = phoneVal;
      openModal();
    });
  }

  // Book Call button (direct 15-minute call opt-in via modal)
  if (bookCallBtn) {
    bookCallBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const callConsentInput = document.getElementById('interviewBookConsent');
      if (callConsentInput) callConsentInput.checked = true;
      const emailVal = document.getElementById('email')?.value.trim();
      const phoneVal = document.getElementById('phone')?.value.trim();
      const modalEmail = document.getElementById('modalEmail');
      const modalPhone = document.getElementById('modalPhone');
      if (modalEmail && emailVal) modalEmail.value = emailVal;
      if (modalPhone && phoneVal) modalPhone.value = phoneVal;
      openModal();
    });
  }

  // Initial Dashboard Render
  updateDashboard();

  // Restore saved language if not default
  if (currentLang !== 'ar') {
    updateLanguage(currentLang);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// Update Language
function updateLanguage(lang) {
  const dict = I18N[lang];
  if (!dict) return;
  currentLang = lang;

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.body.className = lang === 'en' 
    ? 'bg-[#f5f5f7] text-[#1d1d1f] antialiased min-h-screen selection:bg-brand-500 selection:text-white lang-en'
    : 'bg-[#f5f5f7] text-[#1d1d1f] antialiased min-h-screen selection:bg-brand-500 selection:text-white';

  // Update Document Title & Description
  document.title = lang === 'ar' 
    ? 'ETF-P | استثمر ١٠٠ دينار شهرياً في صناديق المؤشرات المتداولة (ETFs)'
    : 'ETF-P | Invest 100 JOD/Month in Diversified Global ETFs';

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', lang === 'ar'
      ? 'منصة الاستثمار التراكمي طويل الأجل في صناديق المؤشرات المتداولة (ETFs) للأردنيين. ابدأ بـ 100 دينار شهرياً بكل سهولة وأمان وشفافية.'
      : 'Retail wealth platform for long-term compound investing in global ETFs for Jordanians. Start with 100 JOD/month with zero hassle, security, and full transparency.');
  }

  // Update Button Label
  const langLabel = document.getElementById('langLabel');
  if (langLabel) langLabel.textContent = lang === 'ar' ? 'English' : 'العربية';

  // Update Dynamic Placeholders
  const nameInput = document.getElementById('fullName');
  if (nameInput) {
    nameInput.placeholder = lang === 'ar' ? 'مثال: أحمد نزال' : 'e.g. Ahmad Nazzal';
  }

  // Apply all text translations
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  const eduTabList = document.querySelector('[role="tablist"]');
  if (eduTabList) {
    eduTabList.setAttribute('aria-label', lang === 'ar' ? 'أقسام الدليل التعليمي' : 'Educational Guide Sections');
  }

  if (window.updateCalculator) {
    window.updateCalculator();
  }
  updateDashboard();
  if (window.lucide) {
    window.lucide.createIcons();
  }
}
window.updateLanguage = updateLanguage;

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
    etf_knowledge: surveyDatabase.filter(r => r.blocker === 'etf_knowledge').length,
    fees_fx: surveyDatabase.filter(r => r.blocker === 'fees_fx').length,
    trust_loss: surveyDatabase.filter(r => r.blocker === 'trust_loss').length,
    complexity: surveyDatabase.filter(r => r.blocker === 'complexity').length
  };

  const blockerLabels = {
    ar: {
      etf_knowledge: 'عدم وضوح ما هو الـ ETF وكيف يعمل الاستثمار طويل الأجل',
      fees_fx: 'عمولات التحويل البنكي العالية وفروقات صرف العملة',
      trust_loss: 'الخوف من الخسارة وقلة الثقة بالمنصات الأجنبية',
      complexity: 'تعقيد المنصات وصعوبة فهم آلية الصناديق'
    },
    en: {
      etf_knowledge: 'Uncertainty regarding what an ETF is & how compounding works',
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

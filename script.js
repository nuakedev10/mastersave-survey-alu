// ============================================
// MASTERSAVE SURVEY - COMPLETE JAVASCRIPT
// Clean, bug-free implementation
// ============================================

// ============================================
// SURVEY DATA STRUCTURE
// ============================================

const surveyData = {
    sections: [
        {
            id: 'demographics',
            title: 'Demographics and Context',
            description: 'Tell us a bit about yourself to help us understand your perspective.',
            questions: [1, 2, 3, 4]
        },
        {
            id: 'stipend-management',
            title: 'Current Stipend Management',
            description: 'How do you currently manage your monthly stipend?',
            questions: [5, 6, 7, 8, 9]
        },
        {
            id: 'spending',
            title: 'Spending Breakdown and Awareness',
            description: 'Understanding where your money goes each month.',
            questions: [10, 11, 12, 13]
        },
        {
            id: 'savings',
            title: 'Savings Behavior and Barriers',
            description: 'Your current savings habits and challenges.',
            questions: [14, 15, 16, 17, 18]
        },
        {
            id: 'financial-tools',
            title: 'Financial Tools and Literacy',
            description: 'Your experience with budgeting tools and financial knowledge.',
            questions: [19, 20, 21, 22]
        },
        {
            id: 'concept-validation',
            title: 'Concept Validation',
            description: 'Your thoughts on potential solutions we\'re developing.',
            questions: [23, 24, 25, 26, 27]
        },
        {
            id: 'trust-concerns',
            title: 'Trust and Concerns',
            description: 'Understanding what matters to you in a financial app.',
            questions: [28, 29]
        },
        {
            id: 'open-ended',
            title: 'Your Voice',
            description: 'Share your thoughts in your own words.',
            questions: [30, 31, 32]
        },
        {
            id: 'follow-up',
            title: 'Follow-Up Permission',
            description: 'Optional: Help us learn more through interviews.',
            questions: [33, 34]
        }
    ],
    questions: [
        // Question 1
        {
            id: 1,
            type: 'single',
            required: true,
            text: 'What year of study are you currently in?',
            field: 'year_of_study',
            options: [
                { value: 'year1', label: 'Year 1' },
                { value: 'year2', label: 'Year 2' },
                { value: 'year3', label: 'Year 3' },
                { value: 'year4plus', label: 'Year 4+' },
                { value: 'graduate', label: 'Graduate/Masters student' }
            ]
        },
        // Question 2
        {
            id: 2,
            type: 'single',
            required: true,
            text: 'What is your gender?',
            field: 'gender',
            options: [
                { value: 'male', label: 'Male' },
                { value: 'female', label: 'Female' },
                { value: 'nonbinary', label: 'Non-binary/Other' },
                { value: 'prefer_not', label: 'Prefer not to say' }
            ]
        },
        // Question 3
        {
            id: 3,
            type: 'single',
            required: true,
            text: 'Which ALU campus are you based at?',
            field: 'campus',
            options: [
                { value: 'rwanda', label: 'ALU Rwanda (Kigali)' },
                { value: 'mauritius', label: 'ALU Mauritius' },
                { value: 'remote', label: 'Currently remote/off-campus' }
            ]
        },
        // Question 4
        {
            id: 4,
            type: 'single',
            required: true,
            text: 'Besides your MCF stipend, do you have any other source of income?',
            field: 'other_income',
            context: 'Students with supplementary income may have different pain points than stipend-only students.',
            options: [
                { value: 'stipend_only', label: 'No, the stipend is my only income' },
                { value: 'part_time', label: 'Yes, I have a part-time job or freelance work' },
                { value: 'family', label: 'Yes, I receive support from family' },
                { value: 'other_scholarship', label: 'Yes, I have another scholarship or grant' },
                { value: 'multiple', label: 'Yes, multiple additional sources' }
            ]
        },
        // Question 5
        {
            id: 5,
            type: 'single',
            required: true,
            text: 'When you receive your monthly stipend, what do you typically do first?',
            hint: 'Select the ONE that best describes you',
            field: 'first_action_with_stipend',
            otherField: 'first_action_other',
            options: [
                { value: 'divide_mentally', label: 'Mentally divide it into categories (rent, food, transport, etc.)' },
                { value: 'pay_debts', label: 'Pay off any debts or loans immediately' },
                { value: 'transfer_savings', label: 'Transfer some to savings before spending' },
                { value: 'spend_immediate', label: 'Start spending on immediate needs without a specific plan' },
                { value: 'send_family', label: 'Send a portion to family back home' },
                { value: 'other', label: 'Other (please specify)', hasOther: true }
            ]
        },
        // Question 6
        {
            id: 6,
            type: 'single',
            required: true,
            text: 'How would you describe your spending pattern throughout the month?',
            field: 'spending_pattern',
            options: [
                { value: 'consistent', label: 'I spend roughly the same amount each week' },
                { value: 'front_loaded', label: 'I spend more in the first two weeks, then cut back' },
                { value: 'back_loaded', label: 'I spend carefully at first, then more freely toward the end' },
                { value: 'unpredictable', label: 'My spending is unpredictable — it depends on what comes up' },
                { value: 'run_out', label: 'I run out of money before the month ends and have to borrow or cut back significantly' }
            ]
        },
        // Question 7
        {
            id: 7,
            type: 'single',
            required: true,
            text: 'In the past 3 months, how often have you run out of stipend money before the next disbursement?',
            field: 'times_ran_out',
            options: [
                { value: 'never', label: 'Never' },
                { value: 'once', label: 'Once' },
                { value: 'twice', label: 'Twice' },
                { value: 'every_month', label: 'Every month' },
                { value: 'almost_every', label: 'Almost every month, and it causes significant stress' }
            ]
        },
        // Question 8
        {
            id: 8,
            type: 'multiple',
            required: true,
            text: 'When you run short on money before the end of the month, what do you typically do?',
            hint: 'Select all that apply',
            field: 'ran_short_actions',
            otherField: 'ran_short_other',
            options: [
                { value: 'borrow_friends', label: 'Borrow from friends or classmates' },
                { value: 'borrow_family', label: 'Borrow from family' },
                { value: 'mobile_loans', label: 'Use mobile money loans (e.g., MoKash, MTN MoMo loans)' },
                { value: 'skip_meals', label: 'Skip meals or reduce food quality' },
                { value: 'avoid_social', label: 'Avoid social activities' },
                { value: 'use_savings', label: 'Use savings I had set aside' },
                { value: 'ask_advance', label: 'Ask for an advance or emergency support' },
                { value: 'not_applicable', label: 'I don\'t run short — this doesn\'t apply to me' },
                { value: 'other', label: 'Other (please specify)', hasOther: true }
            ]
        },
        // Question 9
        {
            id: 9,
            type: 'single',
            required: true,
            text: 'Have you ever taken a mobile money loan or any informal loan to cover expenses before your next stipend arrived?',
            field: 'mobile_loan_history',
            options: [
                { value: 'multiple_times', label: 'Yes, multiple times' },
                { value: 'once_twice', label: 'Yes, once or twice' },
                { value: 'considered', label: 'No, but I\'ve considered it' },
                { value: 'never', label: 'No, never' }
            ]
        },
        // Question 10 - Percentage breakdown
        {
            id: 10,
            type: 'percentage',
            required: true,
            text: 'Approximately what percentage of your monthly stipend goes to each category?',
            hint: 'Estimates are fine — should total roughly 100%',
            field: 'pct_',
            categories: [
                { id: 'accommodation', label: 'Accommodation/Rent' },
                { id: 'food', label: 'Food and groceries' },
                { id: 'transport', label: 'Transport' },
                { id: 'airtime', label: 'Airtime and data' },
                { id: 'personal_care', label: 'Personal care and clothing' },
                { id: 'entertainment', label: 'Entertainment and social activities' },
                { id: 'savings', label: 'Savings' },
                { id: 'family', label: 'Sending money to family' },
                { id: 'other', label: 'Other' }
            ]
        },
        // Question 11
        {
            id: 11,
            type: 'multiple',
            required: true,
            text: 'Which spending category do you find hardest to control?',
            hint: 'Select up to 2',
            maxSelections: 2,
            field: 'hardest_categories',
            otherField: 'hardest_category_other',
            options: [
                { value: 'food', label: 'Food (eating out, snacks, delivery)' },
                { value: 'entertainment', label: 'Entertainment and social activities' },
                { value: 'airtime', label: 'Airtime and data bundles' },
                { value: 'clothing', label: 'Clothing and personal items' },
                { value: 'requests', label: 'Unplanned requests from friends or family' },
                { value: 'impulse_online', label: 'Impulse online purchases' },
                { value: 'transport', label: 'Transport (taxis, motos when you could walk)' },
                { value: 'none', label: 'I don\'t struggle to control any category' },
                { value: 'other', label: 'Other (please specify)', hasOther: true }
            ]
        },
        // Question 12
        {
            id: 12,
            type: 'single',
            required: true,
            text: 'How often do you make purchases that you later regret or feel were unnecessary?',
            field: 'regret_purchases',
            options: [
                { value: 'very_often', label: 'Very often (multiple times per week)' },
                { value: 'often', label: 'Often (a few times per month)' },
                { value: 'sometimes', label: 'Sometimes (once or twice a month)' },
                { value: 'rarely', label: 'Rarely' },
                { value: 'never', label: 'Never' }
            ]
        },
        // Question 13
        {
            id: 13,
            type: 'multiple',
            required: true,
            text: 'What typically triggers your unplanned or impulse spending?',
            hint: 'Select all that apply',
            field: 'impulse_triggers',
            otherField: 'impulse_trigger_other',
            options: [
                { value: 'peer_pressure', label: 'Peer pressure or social situations' },
                { value: 'emotional', label: 'Emotional state (stress, boredom, celebration)' },
                { value: 'sales', label: 'Sales, promotions, or "good deals"' },
                { value: 'convenience', label: 'Convenience (easier to buy than to plan)' },
                { value: 'none', label: 'I don\'t experience impulse spending' },
                { value: 'other', label: 'Other (please specify)', hasOther: true }
            ]
        },
        // Question 14
        {
            id: 14,
            type: 'single',
            required: true,
            text: 'Do you currently save any portion of your monthly stipend?',
            field: 'current_savings_behavior',
            options: [
                { value: 'consistently', label: 'Yes, consistently every month' },
                { value: 'occasionally', label: 'Yes, but only occasionally or inconsistently' },
                { value: 'try_cant', label: 'I try to, but usually can\'t manage it' },
                { value: 'no', label: 'No, I don\'t save at all' }
            ]
        },
        // Question 15
        {
            id: 15,
            type: 'multiple',
            required: true,
            text: 'If you do save (or try to), where do you keep your savings?',
            hint: 'Select all that apply',
            field: 'savings_locations',
            otherField: 'savings_location_other',
            appField: 'savings_app_name',
            options: [
                { value: 'main_momo', label: 'In my main mobile money wallet' },
                { value: 'separate_momo', label: 'In a separate mobile money account' },
                { value: 'bank', label: 'In a bank savings account' },
                { value: 'friend_family', label: 'With a friend or family member (for safekeeping)' },
                { value: 'cash', label: 'Cash hidden somewhere safe' },
                { value: 'app', label: 'I use a savings app or platform (please specify which one)', hasOther: true, otherType: 'app' },
                { value: 'dont_save', label: 'I don\'t currently save' },
                { value: 'other', label: 'Other (please specify)', hasOther: true }
            ]
        },
        // Question 16
        {
            id: 16,
            type: 'single',
            required: true,
            text: 'What is the main reason you don\'t save more?',
            hint: 'Select the ONE biggest barrier',
            field: 'main_savings_barrier',
            otherField: 'savings_barrier_other',
            options: [
                { value: 'barely_enough', label: 'My stipend is barely enough to cover basic expenses' },
                { value: 'intend_spend', label: 'I intend to save but end up spending it' },
                { value: 'no_goal', label: 'I don\'t have a specific goal to save toward' },
                { value: 'low_interest', label: 'Saving feels pointless — the interest is too low' },
                { value: 'dont_trust', label: 'I don\'t trust banks or financial apps with my money' },
                { value: 'dont_know_how', label: 'I don\'t know how to save effectively' },
                { value: 'family_obligations', label: 'Family obligations take priority' },
                { value: 'save_enough', label: 'I actually save enough — this isn\'t a problem for me' },
                { value: 'other', label: 'Other (please specify)', hasOther: true }
            ]
        },
        // Question 17
        {
            id: 17,
            type: 'single',
            required: true,
            text: 'Have you ever saved money for a specific goal (e.g., laptop, travel, emergency fund)?',
            field: 'goal_saving_history',
            options: [
                { value: 'yes_reached', label: 'Yes, and I successfully reached the goal' },
                { value: 'yes_withdrew', label: 'Yes, but I withdrew the money before reaching the goal' },
                { value: 'no_want_to', label: 'No, but I\'d like to' },
                { value: 'no_not_interested', label: 'No, I\'m not interested in goal-based saving' }
            ]
        },
        // Question 18
        {
            id: 18,
            type: 'single',
            required: false,
            text: 'If you saved toward a goal but withdrew early, what caused you to withdraw?',
            hint: 'Skip if not applicable',
            field: 'early_withdrawal_reason',
            otherField: 'early_withdrawal_other',
            options: [
                { value: 'emergency', label: 'An unexpected emergency' },
                { value: 'wanted_buy', label: 'I saw something I wanted to buy' },
                { value: 'helped_others', label: 'A friend or family member needed help' },
                { value: 'forgot_reason', label: 'I forgot why I was saving and just used it' },
                { value: 'not_applicable', label: 'Not applicable — I didn\'t withdraw early' },
                { value: 'other', label: 'Other (please specify)', hasOther: true }
            ]
        },
        // Question 19
        {
            id: 19,
            type: 'single',
            required: true,
            text: 'Do you currently use any app or tool to track your spending or manage your budget?',
            field: 'budgeting_tool_usage',
            otherField: 'budgeting_app_name',
            options: [
                { value: 'yes', label: 'Yes (please specify which app)', hasOther: true },
                { value: 'tried_stopped', label: 'No, but I\'ve tried one before and stopped using it' },
                { value: 'never_tried', label: 'No, I\'ve never tried one' },
                { value: 'manual', label: 'No, I use manual methods (notebook, spreadsheet, mental tracking)' }
            ]
        },
        // Question 20
        {
            id: 20,
            type: 'single',
            required: false,
            text: 'If you tried a budgeting app before and stopped, why did you stop?',
            hint: 'Skip if not applicable',
            field: 'stopped_app_reason',
            otherField: 'stopped_app_other',
            options: [
                { value: 'complicated', label: 'It was too complicated' },
                { value: 'manual_input', label: 'It required too much manual input' },
                { value: 'not_designed', label: 'It wasn\'t designed for my situation (student, stipend-based)' },
                { value: 'forgot', label: 'I forgot to use it consistently' },
                { value: 'language', label: 'It wasn\'t available in my preferred language' },
                { value: 'not_applicable', label: 'Not applicable — I haven\'t tried one' },
                { value: 'other', label: 'Other (please specify)', hasOther: true }
            ]
        },
        // Question 21
        {
            id: 21,
            type: 'single',
            required: true,
            text: 'How confident do you feel about managing your money effectively?',
            field: 'money_confidence',
            options: [
                { value: 'very_confident', label: 'Very confident — I have a good system' },
                { value: 'somewhat_confident', label: 'Somewhat confident — I manage okay but could improve' },
                { value: 'not_very', label: 'Not very confident — I often feel uncertain about my finances' },
                { value: 'not_at_all', label: 'Not confident at all — I feel stressed about money regularly' }
            ]
        },
        // Question 22
        {
            id: 22,
            type: 'single',
            required: true,
            text: 'Have you ever received any formal financial literacy training or education?',
            field: 'financial_education',
            options: [
                { value: 'school', label: 'Yes, through school or university' },
                { value: 'mcf', label: 'Yes, through MCF or another scholarship program' },
                { value: 'family', label: 'Yes, through family' },
                { value: 'no_interested', label: 'No, but I\'d be interested' },
                { value: 'no_not_interested', label: 'No, and I\'m not particularly interested' }
            ]
        },
        // Question 23
        {
            id: 23,
            type: 'single',
            required: true,
            text: 'Imagine an app that automatically splits your stipend when you receive it — putting a portion into savings you can\'t easily touch, and releasing the rest as a weekly budget (e.g., 25% of your monthly spending money each week). How appealing does this sound?',
            field: 'auto_split_appeal',
            options: [
                { value: 'very_appealing', label: 'Very appealing — this would help me a lot' },
                { value: 'somewhat_appealing', label: 'Somewhat appealing — I\'d consider trying it' },
                { value: 'neutral', label: 'Neutral — I\'m not sure if I\'d use it' },
                { value: 'not_appealing', label: 'Not appealing — I prefer to manage my money myself' },
                { value: 'not_at_all', label: 'Not appealing at all — this sounds restrictive' }
            ]
        },
        // Question 24
        {
            id: 24,
            type: 'single',
            required: true,
            text: 'If you could automatically save a percentage of your stipend before you even see it, what percentage would you be comfortable saving?',
            field: 'comfortable_savings_pct',
            options: [
                { value: '5_or_less', label: '5% or less' },
                { value: '10', label: '10%' },
                { value: '15', label: '15%' },
                { value: '20', label: '20%' },
                { value: 'more_than_20', label: 'More than 20%' },
                { value: 'none', label: 'I wouldn\'t want automatic savings' }
            ]
        },
        // Question 25
        {
            id: 25,
            type: 'single',
            required: true,
            text: 'Which type of savings feature sounds more useful to you?',
            context: 'Option A: A "Flex-Save" account where you can save for emergencies but are limited to 3 withdrawals per quarter to prevent temptation.\n\nOption B: A "Target-Save" account where you save toward a specific goal (e.g., laptop) and cannot withdraw until you reach the goal.',
            field: 'preferred_savings_feature',
            options: [
                { value: 'option_a', label: 'Option A is more useful' },
                { value: 'option_b', label: 'Option B is more useful' },
                { value: 'both', label: 'Both are equally useful — I\'d want both' },
                { value: 'neither', label: 'Neither appeals to me' }
            ]
        },
        // Question 26
        {
            id: 26,
            type: 'single',
            required: true,
            text: 'If your savings could be invested in low-risk options (like government bonds or money market funds) to earn 5-8% annually while you save, how interested would you be?',
            field: 'investment_interest',
            options: [
                { value: 'very_interested', label: 'Very interested' },
                { value: 'somewhat_interested', label: 'Somewhat interested' },
                { value: 'neutral', label: 'Neutral' },
                { value: 'not_interested', label: 'Not interested — I prefer my savings to stay as cash' },
                { value: 'concerned', label: 'Concerned — I don\'t trust investments' }
            ]
        },
        // Question 27
        {
            id: 27,
            type: 'single',
            required: true,
            text: 'How would you feel about receiving your stipend through an app that includes these budgeting and savings features, instead of directly to your current bank/mobile money account?',
            field: 'stipend_through_app',
            options: [
                { value: 'very_positive', label: 'Very positive — I\'d welcome this' },
                { value: 'somewhat_positive', label: 'Somewhat positive — I\'d be open to trying it' },
                { value: 'neutral', label: 'Neutral — I\'d need to see how it works first' },
                { value: 'somewhat_negative', label: 'Somewhat negative — I prefer receiving money directly' },
                { value: 'very_negative', label: 'Very negative — I want full control over my stipend immediately' }
            ]
        },
        // Question 28
        {
            id: 28,
            type: 'multiple',
            required: true,
            text: 'What concerns, if any, would you have about using a student financial app to manage your stipend?',
            hint: 'Select all that apply',
            field: 'app_concerns',
            otherField: 'app_concerns_other',
            options: [
                { value: 'security', label: 'Security of my money' },
                { value: 'privacy', label: 'Privacy of my financial data' },
                { value: 'reliability', label: 'Reliability — what if the app fails or has errors?' },
                { value: 'flexibility', label: 'Losing flexibility or control over my money' },
                { value: 'fees', label: 'Hidden fees' },
                { value: 'emergency_access', label: 'Not being able to access my money in emergencies' },
                { value: 'no_concerns', label: 'I don\'t have any major concerns' },
                { value: 'other', label: 'Other (please specify)', hasOther: true }
            ]
        },
        // Question 29
        {
            id: 29,
            type: 'multiple',
            required: true,
            text: 'What would make you trust a new financial app with your stipend?',
            hint: 'Select up to 3',
            maxSelections: 3,
            field: 'trust_factors',
            otherField: 'trust_factors_other',
            options: [
                { value: 'mcf_alu_endorsed', label: 'It\'s officially endorsed by the Mastercard Foundation or ALU' },
                { value: 'licensed_bank', label: 'It\'s backed by a licensed, reputable bank' },
                { value: 'peer_recommend', label: 'Friends or classmates recommend it' },
                { value: 'test_small', label: 'I can test it with a small amount before committing' },
                { value: 'transparent', label: 'Clear, transparent terms with no hidden fees' },
                { value: 'security_features', label: 'Strong security features (PIN, biometrics)' },
                { value: 'customer_support', label: 'Responsive customer support' },
                { value: 'other', label: 'Other (please specify)', hasOther: true }
            ]
        },
        // Question 30 - Open-ended
        {
            id: 30,
            type: 'textarea',
            required: true,
            text: 'In your own words, what is the single biggest financial challenge you face as a student on a monthly stipend?',
            field: 'biggest_challenge',
            placeholder: 'Share your experience...'
        },
        // Question 31 - Open-ended
        {
            id: 31,
            type: 'textarea',
            required: true,
            text: 'If you could design the perfect financial tool for students like you, what ONE feature would it absolutely need to have?',
            field: 'must_have_feature',
            placeholder: 'Describe your ideal feature...'
        },
        // Question 32 - Open-ended
        {
            id: 32,
            type: 'textarea',
            required: false,
            text: 'Is there anything else you\'d like to share about how you manage your stipend or your financial life as a student?',
            field: 'additional_comments',
            placeholder: 'Any additional thoughts... (optional)'
        },
        // Question 33
        {
            id: 33,
            type: 'single',
            required: true,
            text: 'We may conduct follow-up interviews to understand student needs better. Would you be willing to participate in a 20-minute interview (with a small token of appreciation)?',
            field: 'willing_to_interview',
            options: [
                { value: 'yes', label: 'Yes (please provide your contact below)' },
                { value: 'no', label: 'No, thank you' }
            ]
        },
        // Question 34
        {
            id: 34,
            type: 'contact',
            required: false,
            text: 'Preferred contact method:',
            hint: 'Only fill this if you selected "Yes" above',
            showIf: { questionId: 33, value: 'yes' },
            fields: [
                { id: 'contact_email', label: 'Email', type: 'email', placeholder: 'your.email@example.com' },
                { id: 'contact_whatsapp', label: 'WhatsApp number', type: 'tel', placeholder: '+250 xxx xxx xxx' }
            ]
        }
    ]
};

// ============================================
// STATE MANAGEMENT
// ============================================

let currentSlideIndex = 0;
let slides = [];
let responses = {};
let startTime = null;
let questionStartTimes = {};

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    generateSlides();
    setupKeyboardNavigation();
    hideNavigation();
});

function generateSlides() {
    const container = document.getElementById('questionsContainer');
    let slideIndex = 1; // 0 is welcome
    
    surveyData.sections.forEach((section, sectionIndex) => {
        // Create section header slide
        const sectionSlide = createSectionHeaderSlide(section, sectionIndex + 1);
        container.appendChild(sectionSlide);
        slides.push({ type: 'section', element: sectionSlide, sectionId: section.id });
        slideIndex++;
        
        // Create question slides for this section
        section.questions.forEach(questionId => {
            const question = surveyData.questions.find(q => q.id === questionId);
            if (question) {
                const questionSlide = createQuestionSlide(question, slideIndex);
                container.appendChild(questionSlide);
                slides.push({ type: 'question', element: questionSlide, question: question });
                slideIndex++;
            }
        });
    });
    
    // Add thank you slide to slides array
    slides.push({ type: 'thankyou', element: document.getElementById('slide-thankyou') });
}

function createSectionHeaderSlide(section, sectionNumber) {
    const slide = document.createElement('div');
    slide.className = 'slide';
    slide.id = `slide-section-${section.id}`;
    
    slide.innerHTML = `
        <div class="section-header">
            <div class="section-number">${sectionNumber}</div>
            <h2>${section.title}</h2>
            <p>${section.description}</p>
        </div>
    `;
    
    return slide;
}

function createQuestionSlide(question, slideIndex) {
    const slide = document.createElement('div');
    slide.className = 'slide';
    slide.id = `slide-q${question.id}`;
    slide.dataset.questionId = question.id;
    
    let optionsHTML = '';
    
    switch (question.type) {
        case 'single':
            optionsHTML = createSingleSelectOptions(question);
            break;
        case 'multiple':
            optionsHTML = createMultipleSelectOptions(question);
            break;
        case 'percentage':
            optionsHTML = createPercentageInputs(question);
            break;
        case 'textarea':
            optionsHTML = createTextareaInput(question);
            break;
        case 'contact':
            optionsHTML = createContactInputs(question);
            break;
    }
    
    const contextHTML = question.context ? 
        `<div class="question-context">${question.context.replace(/\n/g, '<br>')}</div>` : '';
    
    const hintHTML = question.hint ? 
        `<p class="question-hint">${question.hint}</p>` : '';
    
    const requiredBadge = question.required ? 
        '<span class="required-badge">Required</span>' : 
        '<span class="optional-badge">Optional</span>';
    
    slide.innerHTML = `
        <div class="slide-content question-slide">
            <div class="question-number">
                <span class="question-badge">Q${question.id}</span>
                ${requiredBadge}
            </div>
            <h2 class="question-text">${question.text}</h2>
            ${hintHTML}
            ${contextHTML}
            <div class="options-container" data-question-id="${question.id}">
                ${optionsHTML}
            </div>
        </div>
    `;
    
    return slide;
}

function createSingleSelectOptions(question) {
    return question.options.map((option, index) => {
        const shortcut = String.fromCharCode(65 + index); // A, B, C, etc.
        const otherInput = option.hasOther ? `
            <div class="conditional-input" id="other-input-${question.id}">
                <input type="text" class="text-input" 
                    placeholder="Please specify..." 
                    data-field="${question.otherField || question.field + '_other'}"
                    onkeyup="handleOtherInput(event, ${question.id})">
            </div>
        ` : '';
        
        return `
            <label class="option" data-value="${option.value}" onclick="selectSingleOption(${question.id}, '${option.value}', ${option.hasOther || false})">
                <input type="radio" name="q${question.id}" value="${option.value}">
                <span class="option-indicator"></span>
                <span class="option-text">${option.label}</span>
                <span class="option-shortcut">${shortcut}</span>
            </label>
            ${otherInput}
        `;
    }).join('');
}

function createMultipleSelectOptions(question) {
    const maxNote = question.maxSelections ? 
        `<p class="selection-limit" id="limit-${question.id}">Selected: 0/${question.maxSelections}</p>` : '';
    
    const options = question.options.map((option, index) => {
        const shortcut = String.fromCharCode(65 + index);
        const otherInput = option.hasOther ? `
            <div class="conditional-input" id="other-input-${question.id}-${option.value}">
                <input type="text" class="text-input" 
                    placeholder="${option.otherType === 'app' ? 'Which app?' : 'Please specify...'}" 
                    data-field="${option.otherType === 'app' ? question.appField : question.otherField}"
                    onkeyup="handleOtherInput(event, ${question.id})">
            </div>
        ` : '';
        
        return `
            <label class="option checkbox" data-value="${option.value}" onclick="selectMultipleOption(event, ${question.id}, '${option.value}', ${question.maxSelections || 'null'}, ${option.hasOther || false})">
                <input type="checkbox" name="q${question.id}" value="${option.value}">
                <span class="option-indicator"></span>
                <span class="option-text">${option.label}</span>
                <span class="option-shortcut">${shortcut}</span>
            </label>
            ${otherInput}
        `;
    }).join('');
    
    return maxNote + options;
}

function createPercentageInputs(question) {
    const inputs = question.categories.map(cat => `
        <div class="percentage-row">
            <span class="percentage-label">${cat.label}</span>
            <div class="percentage-input-wrapper">
                <input type="number" class="percentage-input" 
                    id="pct-${cat.id}" 
                    data-category="${cat.id}"
                    min="0" max="100" 
                    value="0"
                    onchange="updatePercentageTotal(${question.id})"
                    oninput="updatePercentageTotal(${question.id})">
                <span class="percentage-symbol">%</span>
            </div>
        </div>
    `).join('');
    
    return `
        <div class="percentage-grid">
            ${inputs}
        </div>
        <div class="percentage-total" id="total-${question.id}">
            <span>Total:</span>
            <span id="total-value-${question.id}">0%</span>
        </div>
    `;
}

function createTextareaInput(question) {
    return `
        <textarea class="text-input" 
            id="textarea-${question.id}"
            placeholder="${question.placeholder || 'Type your answer here...'}"
            data-field="${question.field}"
            oninput="handleTextInput(${question.id})"></textarea>
    `;
}

function createContactInputs(question) {
    return question.fields.map(field => `
        <div class="text-input-container" style="margin-bottom: 1rem;">
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: #374151;">${field.label}</label>
            <input type="${field.type}" class="text-input" 
                id="${field.id}"
                placeholder="${field.placeholder}"
                data-field="${field.id}"
                oninput="handleContactInput(${question.id})">
        </div>
    `).join('');
}

// ============================================
// SELECTION HANDLERS
// ============================================

function selectSingleOption(questionId, value, hasOther) {
    const container = document.querySelector(`[data-question-id="${questionId}"]`);
    const options = container.querySelectorAll('.option');
    
    // Remove selected from all options
    options.forEach(opt => opt.classList.remove('selected'));
    
    // Add selected to clicked option
    const selectedOption = container.querySelector(`[data-value="${value}"]`);
    if (selectedOption) {
        selectedOption.classList.add('selected');
    }
    
    // Handle "other" input visibility
    const allOtherInputs = container.querySelectorAll('.conditional-input');
    allOtherInputs.forEach(input => input.classList.remove('visible'));
    
    if (hasOther) {
        const otherInput = document.getElementById(`other-input-${questionId}`);
        if (otherInput) {
            otherInput.classList.add('visible');
            otherInput.querySelector('input').focus();
        }
    }
    
    // Store response
    const question = surveyData.questions.find(q => q.id === questionId);
    responses[question.field] = value;
    
    // Check if we should show Q34 (conditional question)
    if (questionId === 33) {
        handleConditionalQuestion(value);
    }
    
    updateNextButton();
    showKeyboardHint();
    
    // Auto-advance after short delay for single select (unless it has "other")
    if (!hasOther) {
        setTimeout(() => {
            if (canAdvance()) {
                nextSlide();
            }
        }, 300);
    }
}

function selectMultipleOption(event, questionId, value, maxSelections, hasOther) {
    event.preventDefault();
    
    const container = document.querySelector(`[data-question-id="${questionId}"]`);
    const option = container.querySelector(`[data-value="${value}"]`);
    const question = surveyData.questions.find(q => q.id === questionId);
    
    // Initialize array if needed
    if (!responses[question.field]) {
        responses[question.field] = [];
    }
    
    // Handle "not applicable" or "none" type options - they should be exclusive
    const exclusiveValues = ['not_applicable', 'none', 'no_concerns', 'dont_save'];
    const isExclusive = exclusiveValues.includes(value);
    
    if (option.classList.contains('selected')) {
        // Deselect
        option.classList.remove('selected');
        responses[question.field] = responses[question.field].filter(v => v !== value);
        
        // Hide other input if this was an "other" option
        if (hasOther) {
            const otherInputId = `other-input-${questionId}-${value}`;
            const otherInput = document.getElementById(otherInputId);
            if (otherInput) {
                otherInput.classList.remove('visible');
            }
        }
    } else {
        // Check max selections
        if (maxSelections && responses[question.field].length >= maxSelections) {
            showToast(`You can only select up to ${maxSelections} options`, 'error');
            return;
        }
        
        // If selecting exclusive option, deselect all others
        if (isExclusive) {
            container.querySelectorAll('.option').forEach(opt => {
                opt.classList.remove('selected');
            });
            responses[question.field] = [];
            // Hide all other inputs
            container.querySelectorAll('.conditional-input').forEach(input => {
                input.classList.remove('visible');
            });
        } else {
            // If selecting non-exclusive, deselect any exclusive options
            exclusiveValues.forEach(excVal => {
                const excOption = container.querySelector(`[data-value="${excVal}"]`);
                if (excOption && excOption.classList.contains('selected')) {
                    excOption.classList.remove('selected');
                    responses[question.field] = responses[question.field].filter(v => v !== excVal);
                }
            });
        }
        
        // Select this option
        option.classList.add('selected');
        responses[question.field].push(value);
        
        // Show other input if needed
        if (hasOther) {
            const otherInputId = `other-input-${questionId}-${value}`;
            const otherInput = document.getElementById(otherInputId);
            if (otherInput) {
                otherInput.classList.add('visible');
                setTimeout(() => otherInput.querySelector('input').focus(), 100);
            }
        }
    }
    
    // Update selection count display
    const limitDisplay = document.getElementById(`limit-${questionId}`);
    if (limitDisplay && maxSelections) {
        limitDisplay.textContent = `Selected: ${responses[question.field].length}/${maxSelections}`;
    }
    
    updateNextButton();
}

function handleOtherInput(event, questionId) {
    const input = event.target;
    const field = input.dataset.field;
    responses[field] = input.value;
    updateNextButton();
}

function handleTextInput(questionId) {
    const textarea = document.getElementById(`textarea-${questionId}`);
    const question = surveyData.questions.find(q => q.id === questionId);
    responses[question.field] = textarea.value;
    updateNextButton();
}

function handleContactInput(questionId) {
    const question = surveyData.questions.find(q => q.id === questionId);
    question.fields.forEach(field => {
        const input = document.getElementById(field.id);
        if (input) {
            responses[field.id] = input.value;
        }
    });
    updateNextButton();
}

function updatePercentageTotal(questionId) {
    const question = surveyData.questions.find(q => q.id === questionId);
    let total = 0;
    
    question.categories.forEach(cat => {
        const input = document.getElementById(`pct-${cat.id}`);
        const value = parseInt(input.value) || 0;
        responses[`pct_${cat.id}`] = value;
        total += value;
    });
    
    const totalDisplay = document.getElementById(`total-value-${questionId}`);
    const totalContainer = document.getElementById(`total-${questionId}`);
    
    totalDisplay.textContent = `${total}%`;
    
    totalContainer.classList.remove('valid', 'invalid');
    if (total === 100) {
        totalContainer.classList.add('valid');
    } else if (total > 100) {
        totalContainer.classList.add('invalid');
    }
    
    updateNextButton();
}

function handleConditionalQuestion(value) {
    // Q34 should only show if Q33 is "yes"
    const q34Slide = document.getElementById('slide-q34');
    if (q34Slide) {
        if (value === 'yes') {
            q34Slide.style.display = '';
        } else {
            q34Slide.style.display = 'none';
            // Clear Q34 responses
            responses['contact_email'] = '';
            responses['contact_whatsapp'] = '';
        }
    }
}

// ============================================
// NAVIGATION
// ============================================

function startSurvey() {
    startTime = Date.now();
    showNavigation();
    nextSlide();
}

function showNavigation() {
    document.getElementById('navigation').classList.add('visible');
}

function hideNavigation() {
    document.getElementById('navigation').classList.remove('visible');
}

function nextSlide() {
    if (!canAdvance()) {
        showValidationError();
        return;
    }
    
    const currentSlide = getCurrentSlide();
    
    // Handle submit on last question
    if (currentSlideIndex === slides.length) {
        submitSurvey();
        return;
    }
    
    // Save question timing
    if (currentSlide && currentSlide.type === 'question') {
        const questionId = currentSlide.question.id;
        if (questionStartTimes[questionId]) {
            // You could track individual question times here if needed
        }
    }
    
    // Transition out current slide
    if (currentSlideIndex === 0) {
        document.getElementById('slide-welcome').classList.remove('active');
    } else if (currentSlide) {
        currentSlide.element.classList.remove('active');
        currentSlide.element.classList.add('exit');
    }
    
    currentSlideIndex++;
    
    // Skip Q34 if Q33 is "no"
    if (currentSlideIndex <= slides.length) {
        const nextSlideData = slides[currentSlideIndex - 1];
        if (nextSlideData && nextSlideData.type === 'question' && nextSlideData.question.id === 34) {
            if (responses['willing_to_interview'] !== 'yes') {
                currentSlideIndex++;
            }
        }
    }
    
    // Show next slide
    setTimeout(() => {
        if (currentSlide) {
            currentSlide.element.classList.remove('exit');
        }
        
        if (currentSlideIndex <= slides.length) {
            const nextSlide = slides[currentSlideIndex - 1];
            if (nextSlide) {
                nextSlide.element.classList.add('active');
                
                // Track question start time
                if (nextSlide.type === 'question') {
                    questionStartTimes[nextSlide.question.id] = Date.now();
                }
            }
        } else {
            // Show thank you
            document.getElementById('slide-thankyou').classList.add('active');
            hideNavigation();
        }
        
        updateProgressBar();
        updateNavigationButtons();
        hideKeyboardHint();
    }, 150);
}

function previousSlide() {
    if (currentSlideIndex <= 1) return;
    
    const currentSlide = getCurrentSlide();
    if (currentSlide) {
        currentSlide.element.classList.remove('active');
    }
    
    currentSlideIndex--;
    
    // Skip Q34 going backwards if needed
    if (currentSlideIndex >= 1) {
        const prevSlideData = slides[currentSlideIndex - 1];
        if (prevSlideData && prevSlideData.type === 'question' && prevSlideData.question.id === 34) {
            if (responses['willing_to_interview'] !== 'yes') {
                currentSlideIndex--;
            }
        }
    }
    
    setTimeout(() => {
        if (currentSlideIndex === 0) {
            document.getElementById('slide-welcome').classList.add('active');
            hideNavigation();
        } else {
            const prevSlide = slides[currentSlideIndex - 1];
            if (prevSlide) {
                prevSlide.element.classList.add('active');
            }
        }
        
        updateProgressBar();
        updateNavigationButtons();
    }, 150);
}

function getCurrentSlide() {
    if (currentSlideIndex === 0) return null;
    if (currentSlideIndex > slides.length) return null;
    return slides[currentSlideIndex - 1];
}

function canAdvance() {
    const currentSlide = getCurrentSlide();
    
    if (!currentSlide) return true;
    if (currentSlide.type === 'section') return true;
    if (currentSlide.type === 'thankyou') return false;
    
    const question = currentSlide.question;
    
    // Optional questions can always advance
    if (!question.required) return true;
    
    // Check based on question type
    switch (question.type) {
        case 'single':
            return !!responses[question.field];
            
        case 'multiple':
            return responses[question.field] && responses[question.field].length > 0;
            
        case 'percentage':
            let total = 0;
            question.categories.forEach(cat => {
                total += (responses[`pct_${cat.id}`] || 0);
            });
            return total >= 90 && total <= 110; // Allow some flexibility
            
        case 'textarea':
            return responses[question.field] && responses[question.field].trim().length > 0;
            
        case 'contact':
            // Contact is optional even if the question shows
            return true;
            
        default:
            return true;
    }
}

function showValidationError() {
    const currentSlide = getCurrentSlide();
    if (!currentSlide || currentSlide.type !== 'question') return;
    
    const question = currentSlide.question;
    let message = 'Please answer this question to continue.';
    
    if (question.type === 'percentage') {
        message = 'Please make sure your percentages total approximately 100%.';
    } else if (question.type === 'multiple') {
        message = 'Please select at least one option.';
    }
    
    showToast(message, 'error');
    
    // Shake the options container
    const container = currentSlide.element.querySelector('.options-container');
    if (container) {
        container.style.animation = 'shake 0.5s ease';
        setTimeout(() => {
            container.style.animation = '';
        }, 500);
    }
}

function updateProgressBar() {
    const totalSlides = slides.length + 1; // +1 for welcome
    const progress = (currentSlideIndex / totalSlides) * 100;
    
    document.getElementById('progressBar').style.width = `${progress}%`;
    document.getElementById('progressText').textContent = `${Math.round(progress)}%`;
}

function updateNavigationButtons() {
    const backBtn = document.getElementById('btnBack');
    const nextBtn = document.getElementById('btnNext');
    
    // Back button
    backBtn.style.visibility = currentSlideIndex > 1 ? 'visible' : 'hidden';
    
    // Next button
    const currentSlide = getCurrentSlide();
    const isLastQuestion = currentSlideIndex === slides.length;
    
    if (isLastQuestion) {
        nextBtn.innerHTML = 'Submit <span>✓</span>';
        nextBtn.classList.add('btn-submit');
    } else {
        nextBtn.innerHTML = 'Next <span>→</span>';
        nextBtn.classList.remove('btn-submit');
    }
    
    updateNextButton();
}

function updateNextButton() {
    const nextBtn = document.getElementById('btnNext');
    nextBtn.disabled = !canAdvance();
}

// ============================================
// KEYBOARD NAVIGATION
// ============================================

function setupKeyboardNavigation() {
    document.addEventListener('keydown', function(event) {
        // Enter to continue
        if (event.key === 'Enter' && !event.shiftKey) {
            const activeElement = document.activeElement;
            if (activeElement.tagName !== 'TEXTAREA') {
                event.preventDefault();
                if (currentSlideIndex === 0) {
                    startSurvey();
                } else if (canAdvance()) {
                    nextSlide();
                }
            }
        }
        
        // Letter shortcuts for options (A, B, C, etc.)
        const currentSlide = getCurrentSlide();
        if (currentSlide && currentSlide.type === 'question') {
            const question = currentSlide.question;
            
            if (question.type === 'single' || question.type === 'multiple') {
                const key = event.key.toUpperCase();
                const index = key.charCodeAt(0) - 65; // A=0, B=1, etc.
                
                if (index >= 0 && index < question.options.length) {
                    const option = question.options[index];
                    if (question.type === 'single') {
                        selectSingleOption(question.id, option.value, option.hasOther || false);
                    } else {
                        const container = document.querySelector(`[data-question-id="${question.id}"]`);
                        const optionElement = container.querySelector(`[data-value="${option.value}"]`);
                        if (optionElement) {
                            selectMultipleOption({ preventDefault: () => {} }, question.id, option.value, question.maxSelections || null, option.hasOther || false);
                        }
                    }
                }
            }
        }
        
        // Escape to go back
        if (event.key === 'Escape') {
            previousSlide();
        }
    });
}

function showKeyboardHint() {
    const hint = document.getElementById('keyboardHint');
    hint.classList.add('visible');
    
    setTimeout(() => {
        hint.classList.remove('visible');
    }, 3000);
}

function hideKeyboardHint() {
    document.getElementById('keyboardHint').classList.remove('visible');
}

// ============================================
// FORM SUBMISSION
// ============================================

async function submitSurvey() {
    // Show loading
    document.getElementById('loadingOverlay').classList.add('visible');
    
    // Calculate completion time
    const completionTime = Math.round((Date.now() - startTime) / 1000);
    
    // Prepare final data
    const finalData = {
        ...responses,
        completion_time_seconds: completionTime,
        user_agent: navigator.userAgent,
        submitted_at: new Date().toISOString()
    };
    
    try {
        // Submit to Supabase
        const response = await fetch(`${SUPABASE_URL}/rest/v1/survey_responses`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                'Prefer': 'return=minimal'
            },
            body: JSON.stringify(finalData)
        });
        
        if (!response.ok) {
            throw new Error('Failed to submit survey');
        }
        
        // Success - show thank you
        document.getElementById('loadingOverlay').classList.remove('visible');
        
        // Hide current slide and show thank you
        const currentSlide = getCurrentSlide();
        if (currentSlide) {
            currentSlide.element.classList.remove('active');
        }
        
        document.getElementById('slide-thankyou').classList.add('active');
        hideNavigation();
        
        // Update progress to 100%
        document.getElementById('progressBar').style.width = '100%';
        document.getElementById('progressText').textContent = '100%';
        
    } catch (error) {
        console.error('Submission error:', error);
        document.getElementById('loadingOverlay').classList.remove('visible');
        showToast('Failed to submit. Please try again.', 'error');
    }
}

// ============================================
// SHARE FUNCTIONS
// ============================================

function shareWhatsApp() {
    const text = encodeURIComponent(
        `Hey! I just completed a survey about student financial wellness by SiLo.Grp. ` +
        `If you're an MCF scholar, your input could help build better financial tools for students like us. ` +
        `Takes about 10 minutes: ${window.location.href}`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
}

function copyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        showToast('Link copied to clipboard!', 'success');
    }).catch(() => {
        showToast('Failed to copy link', 'error');
    });
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = 'toast';
    if (type) toast.classList.add(type);
    toast.classList.add('visible');
    
    setTimeout(() => {
        toast.classList.remove('visible');
    }, 3000);
}

// Add shake animation CSS dynamically
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
`;
document.head.appendChild(shakeStyle);
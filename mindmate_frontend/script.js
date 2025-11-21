// Chat functionality
let chatOpen = false;

function toggleChat() {
    const modal = document.getElementById('chatModal');
    if (!modal) return;
    chatOpen = !chatOpen;
    modal.style.display = chatOpen ? 'block' : 'none';

    if (chatOpen) {
        const input = document.getElementById('chatInput');
        if (input) input.focus();
    }
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    if (!input) return;
    const message = input.value.trim();

    if (message === '') return;

    // Add user message
    addMessage(message, 'user-message');
    input.value = '';

    // Show typing indicator
    showTyping();

    // Simulate AI response
    setTimeout(() => {
        hideTyping();
        const response = generateAIResponse(message);
        addMessage(response, 'bot-message');
    }, 1500 + Math.random() * 1000);
}

function addMessage(text, className) {
    const messagesContainer = document.getElementById('chatMessages');
    if (!messagesContainer) return;
    const messageDiv = document.createElement('div');
    // corrected class assignment
    messageDiv.className = `message ${className}`;
    messageDiv.textContent = text;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function showTyping() {
    const indicator = document.getElementById('typingIndicator');
    const messagesContainer = document.getElementById('chatMessages');
    if (indicator) indicator.style.display = 'block';
    if (messagesContainer) messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function hideTyping() {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) indicator.style.display = 'none';
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function generateAIResponse(userMessage) {
    const responses = {
        // Greetings
        'hi': "Hello! I'm here to support you. How can I help you today?",
        'hello': "Hi there! I'm your MindCare AI assistant. What's on your mind?",
        'hey': "Hey! I'm here to listen and help. How are you feeling?",

        // Mental health related
        'stress': "I understand you're feeling stressed. Here are some quick techniques: Try deep breathing (4 counts in, 4 counts out), take a 5-minute walk, or try our guided meditation. Would you like me to guide you through a breathing exercise?",
        'anxiety': "Anxiety can be overwhelming. Remember: you're safe right now. Try the 5-4-3-2-1 grounding technique: name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, 1 you can taste. Would you like to talk about what's making you anxious?",
        'depressed': "I'm sorry you're feeling this way. Your feelings are valid, and you're not alone. Consider reaching out to a counselor through our booking system. In the meantime, try small self-care activities like drinking water, getting some sunlight, or calling a friend.",
        'lonely': "Feeling lonely is tough, but you're not alone in this experience. Consider joining our peer support community or scheduling a session with a counselor. Sometimes just talking to someone can help a lot.",

        // Academic stress
        'exam': "Exam stress is very common! Try breaking your study into smaller chunks, take regular breaks, and don't forget to eat and sleep well. Remember, one exam doesn't define you. Would you like some specific study techniques?",
        'study': "Struggling with studies? Try the Pomodoro technique: 25 minutes focused study, 5-minute break. Make sure your study space is comfortable and free from distractions. What specific subject are you having trouble with?",

        // Sleep issues
        'sleep': "Good sleep is crucial for mental health. Try to maintain a regular sleep schedule, avoid screens 1 hour before bed, and create a relaxing bedtime routine. If sleep problems persist, consider talking to a counselor.",

        // Resources
        'help': "I'm here to help! I can provide coping strategies, direct you to resources, help you book counseling sessions, or just listen. What specific area would you like support with?",
        'resources': "We have many resources available: guided meditations, wellness videos, mental health articles, and crisis support. You can access these through our Resources section. What type of resource interests you most?",

        // Crisis situations
        'suicide': "I'm very concerned about you. Please reach out for immediate help: National Suicide Prevention Lifeline: 988, or our crisis helpline: +91-9152987821. You matter, and there are people who want to help you.",
        'crisis': "If you're in crisis, please call our emergency helpline: +91-9152987821 or the National Helpline: 1800-891-4416. You can also go to your nearest emergency room. You don't have to go through this alone.",

        // Default responses
        'default': [
            "I understand. Can you tell me more about what you're experiencing?",
            "That sounds challenging. How long have you been feeling this way?",
            "Thank you for sharing that with me. What would be most helpful for you right now?",
            "I hear you. Sometimes it helps to talk through these feelings. What's been on your mind lately?",
            "I'm here to listen and support you. Would you like to explore some coping strategies?"
        ]
    };

    const message = userMessage.toLowerCase();

    // Check for specific keywords (skip 'default')
    for (let keyword in responses) {
        if (keyword === 'default') continue;
        if (message.includes(keyword)) {
            return responses[keyword];
        }
    }

    // Return random default response
    const defaultResponses = responses.default;
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// Navigation functionality
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 100; // Account for fixed header
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Interactive functions with enhanced functionality
function startAssessment() {
    const assessmentQuestions = [
        "Over the last 2 weeks, how often have you been bothered by feeling down, depressed, or hopeless?",
        "How often have you been bothered by little interest or pleasure in doing things?",
        "How often have you been bothered by feeling nervous, anxious, or on edge?",
        "How often have you been bothered by not being able to stop or control worrying?"
    ];

    alert(`Mental Health Assessment

This assessment will help us understand your current mental health status. You'll be asked ${assessmentQuestions.length} questions based on standardized screening tools (PHQ-9/GAD-7).

Click OK to begin the assessment.`);

    // In a real implementation, this would open a proper assessment form
    setTimeout(() => {
        alert(`Assessment completed! Based on your responses, we recommend:

✓ Speaking with a counselor
✓ Practicing daily mindfulness
✓ Joining our peer support group

Would you like to book a counseling session?`);
    }, 2000);
}

function bookAppointment() {
    const availableTimes = [
        "Today 2:00 PM - Dr. Sarah Johnson",
        "Tomorrow 10:00 AM - Dr. Michael Chen",
        "Tomorrow 3:00 PM - Dr. Priya Sharma",
        "Friday 11:00 AM - Dr. Sarah Johnson"
    ];

    const timeSlots = availableTimes.join('\n');
    alert(`Book Counseling Session

Available appointments:

${timeSlots}

To book an appointment, please:
1. Choose your preferred time
2. Provide your student ID
3. Brief description of concerns

All sessions are completely confidential.`);
}

function openRelaxation() {
    const exercises = [
        "🌬 Breathing Exercise (5 minutes)",
        "🧘 Guided Meditation (10 minutes)",
        "🎵 Calming Nature Sounds",
        "💆 Progressive Muscle Relaxation"
    ];

    const exerciseList = exercises.join('\n');
    alert(`Relaxation Center

Choose an exercise:

${exerciseList}

All exercises are designed to help you relax and reduce stress. Find a quiet, comfortable space and let's begin your wellness journey.`);

    // Simulate starting an exercise
    setTimeout(() => {
        alert(`🌬 Breathing Exercise Started

Inhale slowly for 4 counts... Hold for 4 counts... Exhale slowly for 4 counts...

Repeat this cycle and focus on your breath. You're doing great`);
    }, 1500);
}

function joinCommunity() {
    alert(`Peer Support Community

🌟 Welcome to our safe space!

Features:
• Anonymous or verified posting
• Trained student moderators
• Topic-based discussion groups
• Weekly virtual meetups
• 24/7 peer support

Community Guidelines:
✓ Be respectful and kind
✓ Maintain confidentiality
✓ No personal information sharing
✓ Report any concerning content

Join thousands of students supporting each other!`);
}

function showProgress() {
    alert(`Progress Tracking Dashboard

📊 Your Mental Wellness Journey

Tracked Metrics:
• Mood patterns (7-day average: Good)
• Sleep quality (85% improvement)
• Stress levels (Decreasing trend)
• Coping strategy usage
• Session attendance

Insights:
✓ You're showing consistent improvement
✓ Regular meditation is helping your stress
✓ Consider maintaining your current routine

Goals for next week:
• Continue daily check-ins
• Try group therapy session`);
}

function showPrivacy() {
    alert(`Privacy & Security

🔒 Your privacy is our top priority

Protection Measures:
• End-to-end encryption
• HIPAA compliant systems
• No data sharing with third parties
• Anonymous usage options
• Secure server infrastructure
• Regular security audits

Your Rights:
✓ Data access and deletion
✓ Communication preferences
✓ Consent withdrawal anytime
✓ Transparent data usage

We never share your personal information without explicit consent.`);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = '0s';
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe elements if they exist
document.querySelectorAll('.feature-card, .hero > div > *').forEach(el => {
    observer.observe(el);
});

// Add floating animation to chat widget
setInterval(() => {
    const widget = document.querySelector('.chat-widget');
    if (!widget || chatOpen) return;
    widget.style.transform = 'scale(1.05)';
    setTimeout(() => {
        widget.style.transform = 'scale(1)';
    }, 300);
}, 3000);

// Header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (!header) return;
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Initialize welcome message in chat after page load
window.addEventListener('load', () => {
    setTimeout(() => {
        if (!chatOpen) {
            const widget = document.querySelector('.chat-widget');
            if (widget) widget.style.animation = 'pulse 1s ease-in-out';
        }
    }, 3000);
});

// Add pulse animation for chat widget
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);

// Close chat when clicking outside
document.addEventListener('click', (e) => {
    const chatModal = document.getElementById('chatModal');
    const chatWidget = document.querySelector('.chat-widget');

    if (chatOpen && chatModal && chatWidget && !chatModal.contains(e.target) && !chatWidget.contains(e.target)) {
        toggleChat();
    }
});

// Prevent chat modal from closing when clicking inside it (only add listener if element exists)
const chatModalEl = document.getElementById('chatModal');
if (chatModalEl) {
    chatModalEl.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

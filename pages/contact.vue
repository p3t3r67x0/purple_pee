<template>
  <div class="min-h-screen bg-gradient-to-br from-cosmic-haze via-[#1a1440] to-black text-white">
    <!-- Background Pattern -->
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900/10 to-transparent"></div>
    <div class="absolute inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>

    <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- Hero Section -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-3 mb-6">
          <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/25">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
        </div>
        <h1 class="text-4xl sm:text-5xl font-bold mb-6">
          <span class="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get in Touch
          </span>
        </h1>
        <p class="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Have questions about our network analysis tools? Need API support? Want to discuss partnerships? 
          We'd love to hear from you.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div class="space-y-8">
          <div class="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
            <h2 class="text-2xl font-bold mb-6 text-white">Contact Information</h2>
            
            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-white mb-1">Email</h3>
                  <p class="text-slate-300">hello@netscanner.io</p>
                  <p class="text-sm text-slate-400">We typically respond within 24 hours</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-white mb-1">Location</h3>
                  <p class="text-slate-300">Global Remote Team</p>
                  <p class="text-sm text-slate-400">Available across all time zones</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-white mb-1">GitHub</h3>
                  <a href="https://github.com/p3t3r67x0/purple_pee" target="_blank" class="text-purple-400 hover:text-purple-300 transition-colors">
                    github.com/p3t3r67x0/purple_pee
                  </a>
                  <p class="text-sm text-slate-400">Open source contributions welcome</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Response Times -->
          <div class="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/20 rounded-2xl p-6">
            <h3 class="font-semibold text-white mb-4">Response Times</h3>
            <div class="space-y-3 text-sm">
              <div class="flex justify-between items-center">
                <span class="text-slate-300">General Inquiries</span>
                <span class="text-emerald-400 font-medium">24 hours</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-slate-300">API Support</span>
                <span class="text-blue-400 font-medium">12 hours</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-slate-300">Critical Issues</span>
                <span class="text-red-400 font-medium">4 hours</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
          <h2 class="text-2xl font-bold mb-6 text-white">Send us a Message</h2>
          
          <form @submit.prevent="submitForm" class="space-y-6">
            <!-- Name Field -->
            <div>
              <label for="name" class="block text-sm font-medium text-slate-300 mb-2">
                Full Name *
              </label>
              <input
                v-model="form.name"
                type="text"
                id="name"
                required
                class="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="Your full name"
              />
            </div>

            <!-- Email Field -->
            <div>
              <label for="email" class="block text-sm font-medium text-slate-300 mb-2">
                Email Address *
              </label>
              <input
                v-model="form.email"
                type="email"
                id="email"
                required
                class="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <!-- Subject Field -->
            <div>
              <label for="subject" class="block text-sm font-medium text-slate-300 mb-2">
                Subject *
              </label>
              <select
                v-model="form.subject"
                id="subject"
                required
                class="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              >
                <option value="" disabled class="bg-slate-800">Select a subject</option>
                <option value="general" class="bg-slate-800">General Inquiry</option>
                <option value="api-support" class="bg-slate-800">API Support</option>
                <option value="bug-report" class="bg-slate-800">Bug Report</option>
                <option value="feature-request" class="bg-slate-800">Feature Request</option>
                <option value="partnership" class="bg-slate-800">Partnership</option>
                <option value="media" class="bg-slate-800">Media Inquiry</option>
                <option value="other" class="bg-slate-800">Other</option>
              </select>
            </div>

            <!-- Message Field -->
            <div>
              <label for="message" class="block text-sm font-medium text-slate-300 mb-2">
                Message *
              </label>
              <textarea
                v-model="form.message"
                id="message"
                required
                rows="6"
                class="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                placeholder="Tell us how we can help you..."
              ></textarea>
            </div>

            <!-- Human Verification -->
            <div class="bg-white/5 rounded-xl p-4 border border-white/10">
              <label class="block text-sm font-medium text-slate-300 mb-3">
                Verify you are human *
              </label>
              <div class="flex items-center gap-4">
                <span class="text-lg text-white font-medium">
                  {{ mathQuestion.question }}
                </span>
                <input
                  v-model.number="form.captchaAnswer"
                  type="number"
                  required
                  class="w-20 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white text-center focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="?"
                />
              </div>
              <p class="text-xs text-slate-400 mt-2">
                Please solve this simple math problem to prove you're human
              </p>
            </div>

            <!-- Submit Button -->
            <div>
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-purple-500/25 disabled:shadow-none"
              >
                <span v-if="isSubmitting" class="flex items-center justify-center gap-2">
                  <svg class="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                  </svg>
                  Sending Message...
                </span>
                <span v-else>Send Message</span>
              </button>
            </div>
          </form>

          <!-- Success/Error Messages -->
          <div v-if="showSuccess" class="mt-6 p-4 bg-emerald-500/20 border border-emerald-500/30 rounded-xl">
            <div class="flex items-center gap-2 text-emerald-400">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span class="font-medium">Message sent successfully!</span>
            </div>
            <p class="text-sm text-emerald-300 mt-1">
              Thank you for reaching out. We'll get back to you soon.
            </p>
          </div>

          <div v-if="showError" class="mt-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl">
            <div class="flex items-center gap-2 text-red-400">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
              <span class="font-medium">{{ errorMessage }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'

// SEO Meta Tags
useHead({
  title: 'Contact Us - NetScanner',
  meta: [
    {
      name: 'description',
      content: 'Get in touch with the NetScanner team. We\'re here to help with your network analysis needs, API questions, and partnership opportunities.'
    },
    {
      name: 'keywords',
      content: 'contact, support, NetScanner, network analysis, API help, partnerships'
    },
    // Open Graph
    {
      property: 'og:title',
      content: 'Contact Us - NetScanner'
    },
    {
      property: 'og:description',
      content: 'Get in touch with the NetScanner team. We\'re here to help with your network analysis needs, API questions, and partnership opportunities.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: 'https://netscanner.io/contact'
    },
    // Twitter Card
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Contact Us - NetScanner'
    },
    {
      name: 'twitter:description',
      content: 'Get in touch with the NetScanner team. We\'re here to help with your network analysis needs, API questions, and partnership opportunities.'
    }
  ]
})

// Form data
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
  captchaAnswer: null as number | null
})

// UI state
const isSubmitting = ref(false)
const showSuccess = ref(false)
const showError = ref(false)
const errorMessage = ref('')

// Math captcha
const mathQuestion = ref({
  question: '',
  answer: 0
})

// Generate random math question
const generateMathQuestion = () => {
  const num1 = Math.floor(Math.random() * 10) + 1
  const num2 = Math.floor(Math.random() * 10) + 1
  const operations = ['+', '-', '×']
  const operation = operations[Math.floor(Math.random() * operations.length)]
  
  let answer = 0
  let question = ''
  
  switch (operation) {
    case '+':
      answer = num1 + num2
      question = `${num1} + ${num2} = ?`
      break
    case '-':
      // Ensure positive result
      const larger = Math.max(num1, num2)
      const smaller = Math.min(num1, num2)
      answer = larger - smaller
      question = `${larger} - ${smaller} = ?`
      break
    case '×':
      answer = num1 * num2
      question = `${num1} × ${num2} = ?`
      break
  }
  
  mathQuestion.value = { question, answer }
}

// Form submission
const submitForm = async () => {
  // Reset messages
  showSuccess.value = false
  showError.value = false
  errorMessage.value = ''

  // Validate captcha
  if (form.captchaAnswer !== mathQuestion.value.answer) {
    showError.value = true
    errorMessage.value = 'Incorrect answer to the math question. Please try again.'
    generateMathQuestion() // Generate new question
    form.captchaAnswer = null
    return
  }

  // Validate required fields
  if (!form.name.trim() || !form.email.trim() || !form.subject || !form.message.trim()) {
    showError.value = true
    errorMessage.value = 'Please fill in all required fields.'
    return
  }

  isSubmitting.value = true

  try {
    // Simulate API call (replace with actual submission logic)
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form on success
    Object.assign(form, {
      name: '',
      email: '',
      subject: '',
      message: '',
      captchaAnswer: null
    })
    
    showSuccess.value = true
    generateMathQuestion() // Generate new question
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      showSuccess.value = false
    }, 5000)
    
  } catch (error) {
    showError.value = true
    errorMessage.value = 'Failed to send message. Please try again later.'
  } finally {
    isSubmitting.value = false
  }
}

// Initialize math question on component mount
onMounted(() => {
  generateMathQuestion()
})
</script>
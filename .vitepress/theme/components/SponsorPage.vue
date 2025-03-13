<template>
  <div class="sponsor-container">
    <div class="projects-section">
      <h2>开源项目</h2>
      <div class="project-list">
        <div v-for="project in projects" :key="project.name" class="project-card">
          <h3>{{ project.name }}</h3>
          <p>{{ project.description }}</p>
          <a :href="project.link" target="_blank" class="project-link">查看项目</a>
        </div>
      </div>
    </div>

    <div class="contact-section">
      <h2>联系方式</h2>
      <div class="contact-info">
        <div class="email-container">
          <span class="email">drl990114@gmail.com</span>
          <button class="copy-button" @click="copyEmail">复制</button>
        </div>
      </div>
    </div>

    <div class="payment-section">
      <h2>赞助方式</h2>
      <div class="qr-codes">
        <div class="qr-code-item">
          <h3>微信支付</h3>
          <div class="qr-code-placeholder">
            <img src="/images/wxpay.png"/>
          </div>
        </div>
        <div class="qr-code-item">
          <h3>支付宝</h3>
          <div class="qr-code-placeholder">
            <img src="/images/alipay.png"/>
          </div>
        </div>
      </div>
      <p class="thank-you-note">感谢您的支持，您的赞助将帮助我持续改进这些项目！</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const copySuccess = ref(false);

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText('drl990114@gmail.com');
    copySuccess.value = true;
    setTimeout(() => {
      copySuccess.value = false;
    }, 2000);
  } catch (err) {
    console.error('Failed to copy email:', err);
  }
};

const projects = [
  {
    name: 'MarkFlowy',
    description: '现代化的 Markdown 编辑器，支持 Windows、macOS和Linux。',
    link: 'https://github.com/drl990114/MarkFlowy'
  },
];

</script>

<style scoped>
.sponsor-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: var(--vp-font-family-base);
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: var(--vp-c-brand);
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 0.5rem;
}

.projects-section,
.payment-section {
  margin-bottom: 3rem;
}

.project-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.project-card {
  background-color: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid var(--vp-c-divider);
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.project-card h3 {
  font-size: 1.4rem;
  margin-top: 0;
  margin-bottom: 12px;
  color: var(--vp-c-brand);
}

.project-card p {
  margin-bottom: 15px;
  color: var(--vp-c-text);
  line-height: 1.5;
}

.project-link {
  display: inline-block;
  padding: 8px 16px;
  background-color: var(--vp-c-brand);
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
  transition: background-color 0.2s ease;
}

.project-link:hover {
  background-color: var(--vp-c-brand-dark);
}

.qr-codes {
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
}

.qr-code-item {
  text-align: center;
}

.qr-code-item h3 {
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: var(--vp-c-brand-dark);
}

.qr-code-placeholder {
  width: 220px;
  height: 220px;
  margin: 0 auto;
  border: 2px solid var(--vp-c-divider);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.qr-code-placeholder:hover {
  transform: scale(1.02);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
}

.qr-code-demo {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  color: var(--vp-c-text);
}

.qr-code-demo.wechat {
  background-color: #2aae67;
  color: white;
}

.qr-code-demo.alipay {
  background-color: #00a0e9;
  color: white;
}

.thank-you-note {
  text-align: center;
  margin-top: 30px;
  font-style: italic;
  color: var(--vp-c-text);
}

@media (max-width: 768px) {
  .project-list {
    grid-template-columns: 1fr;
  }
  
  .qr-codes {
    flex-direction: column;
    align-items: center;
  }
  
  .qr-code-item {
    margin-bottom: 30px;
  }
}

.contact-section {
  margin-bottom: 3rem;
}

.contact-info {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}

.email-container {
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: var(--vp-c-bg-soft);
  padding: 16px 24px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid var(--vp-c-divider);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.email-container:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
}

.email {
  font-size: 1.1rem;
  color: var(--vp-c-text);
}

.copy-button {
  padding: 6px 12px;
  background-color: var(--vp-c-brand);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.2s ease;
}

.copy-button:hover {
  background-color: var(--vp-c-brand-dark);
}
</style>

import type { Project } from '../types';

export const yookassaJavaSDK: Project = {
  id: 13,
  title: "YooKassa Java SDK",
  subtitle: "Open Source / Библиотека",
  slug: "yookassa-java-sdk",
  image: "./images/yookassa/cover.webp",
  category: ["opensource", "java", "code", "company"],
  starred: true,
  shortDesc: "Официально признанная SDK для интеграции",
  fullContent: `
    <div class="space-y-6">
      <h1 class="text-4xl font-bold">YooKassa Java SDK</h1>
      <p class="text-xl text-gray-300">Библиотека для создания умных платежей через сервис ЮKassa. Официально добавлена в <a href="https://yookassa.ru/developers/using-api/using-sdks#community" target="_blank" class="text-[#FF337D] hover:underline">список библиотек сообщества</a>.</p>

      <div class="bg-[#1f1f1f] rounded-2xl p-6">
        <div class="flex items-center gap-2 mb-3">
          <i class="ph-fill ph-check-circle text-[#FF337D] text-2xl"></i>
          <h2 class="text-2xl font-semibold">Официальное признание</h2>
        </div>
        <p class="text-gray-300 mb-4">Библиотека прошла проверку технических специалистов ЮKassa и была добавлена на <a href="https://yookassa.ru/developers/using-api/using-sdks#community" target="_blank" class="text-[#FF337D] hover:underline">страницу SDK сообщества</a>. Это подтверждает качество и безопасность кода, а также доверие со стороны платёжного сервиса.</p>
        <div class="carousel" data-carousel>
          <div class="carousel-slides">
            <div class="carousel-slide">
              <img src="./images/yookassa/official-2.webp" alt="Страница сообщества ЮKassa" class="w-full h-auto rounded-lg">
            </div>  
            <div class="carousel-slide">
              <img src="./images/yookassa/official-1.webp" alt="Письмо от ЮKassa" class="w-full h-auto rounded-lg">
            </div>
          </div>
          <button class="carousel-prev" aria-label="Назад"><i class="ph-bold ph-caret-left"></i></button>
          <button class="carousel-next" aria-label="Вперёд"><i class="ph-bold ph-caret-right"></i></button>
          <div class="carousel-dots"></div>
        </div>
        <p class="text-gray-400 text-sm text-center mt-2">Письмо от ЮKassa и страница со списком библиотек сообщества</p>
      </div>

      <div class="bg-[#1f1f1f] rounded-2xl p-6">
        <div class="flex items-center gap-2 mb-3">
          <i class="ph-fill ph-code text-[#FF337D] text-2xl"></i>
          <h2 class="text-2xl font-semibold">Пример использования</h2>
        </div>
        <p class="text-gray-300 mb-2"><strong>Инициализация API</strong></p>
        <pre class="bg-black/40 p-3 rounded-lg overflow-x-auto text-sm text-gray-300"><code>private static final YooKassa YOO_KASSA = YooKassa.create(
    10000,
    "yourTokenHere"
);</code></pre>
        <p class="text-gray-300 mt-4 mb-2"><strong>Создание платежа</strong></p>
        <pre class="bg-black/40 p-3 rounded-lg overflow-x-auto text-sm text-gray-300"><code>public static Payment createPayment() throws IOException {
    return YOO_KASSA.createPayment(PaymentCreateData.builder()
        .amount(Amount.from(100, Currency.RUB))
        .description("Buy a coffee")
        .redirect("https://github.com/deelter")
        .capture(true)
        .build()
    );
}</code></pre>
        <p class="text-gray-300 mt-4 mb-2"><strong>Получение информации о платеже</strong></p>
        <pre class="bg-black/40 p-3 rounded-lg overflow-x-auto text-sm text-gray-300"><code>public static Payment getPayment(UUID paymentId) throws IOException {
    return YOO_KASSA.getPayment(paymentId);
}</code></pre>
        <p class="text-gray-300 mt-4"><strong>Работа с чеками (receipts)</strong> и <strong>возвратами (refunds)</strong> также поддерживается.</p>
      </div>

      <div class="bg-[#1f1f1f] rounded-2xl p-6">
        <div class="flex items-center gap-2 mb-3">
          <i class="ph-fill ph-download text-[#FF337D] text-2xl"></i>
          <h2 class="text-2xl font-semibold">Установка</h2>
        </div>
        <p class="text-gray-300 mb-2"><strong>Maven</strong></p>
        <pre class="bg-black/40 p-3 rounded-lg overflow-x-auto text-sm text-gray-300"><code>&lt;repository&gt;
    &lt;id&gt;jitpack.io&lt;/id&gt;
    &lt;url&gt;https://jitpack.io&lt;/url&gt;
&lt;/repository&gt;

&lt;dependency&gt;
    &lt;groupId&gt;com.github.DeelTer&lt;/groupId&gt;
    &lt;artifactId&gt;YooKassaSDK&lt;/artifactId&gt;
    &lt;version&gt;1.0.5&lt;/version&gt;
&lt;/dependency&gt;</code></pre>
        <p class="text-gray-300 mt-4 mb-2"><strong>Gradle</strong></p>
        <pre class="bg-black/40 p-3 rounded-lg overflow-x-auto text-sm text-gray-300"><code>dependencyResolutionManagement {
    repositories {
        mavenCentral()
        maven { url 'https://jitpack.io' }
    }
}

dependencies {
    implementation 'com.github.DeelTer:YooKassaSDK:1.0.5'
}</code></pre>
      </div>

      <div class="bg-[#1f1f1f] rounded-2xl p-6">
        <a href="https://github.com/DeelTer/YooKassaSDK" target="_blank" 
          class="inline-flex items-center gap-2 bg-[#FF337D] px-6 py-3 rounded-xl font-medium hover:bg-[#e62e6e] transition">
          <i class="ph-fill ph-github-logo"></i> Перейти на GitHub
        </a>
      </div>
    </div>
  `
};
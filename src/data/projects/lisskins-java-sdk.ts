import type { Project } from '../types';

export const lisskinsJava: Project = {
  id: 15,
  title: "Lisskins Java Client",
  subtitle: "Open Source / Библиотека",
  slug: "lisskins-java",
  image: "./images/lisskins/cover.webp",
  category: ["opensource", "java", "code", "sdk", "company"],
  starred: true,
  shortDesc: "Неофициальный клиент для LIS-SKINS API",
  fullContent: `
    <div class="space-y-6">
      <h1 class="text-4xl font-bold">Lisskins Java Client</h1>
      <p class="text-xl text-gray-300">
        Типобезопасный клиент для автоматизации работы с маркетплейсом LIS-SKINS.
        Написан по <a href="https://lis-skins.stoplight.io/docs/lis-skins/dzq78x3edc19r-api-overview" target="_blank" class="text-[#FF337D] hover:underline">официальной документации API</a>, но не является официальным SDK.
      </p>

      <div class="bg-[#1f1f1f] rounded-2xl p-6">
        <div class="flex items-center gap-2 mb-3">
          <i class="ph-fill ph-star text-[#FF337D] text-2xl"></i>
          <h2 class="text-2xl font-semibold">Возможности</h2>
        </div>
        <ul class="space-y-2 text-gray-300">
          <li class="flex items-start gap-2"><i class="ph-fill ph-check-circle text-[#FF337D] mt-1 shrink-0"></i> Полное покрытие методов API v1 (баланс, покупка, поиск, вывод, возврат)</li>
          <li class="flex items-start gap-2"><i class="ph-fill ph-check-circle text-[#FF337D] mt-1 shrink-0"></i> Синхронные и асинхронные методы</li>
          <li class="flex items-start gap-2"><i class="ph-fill ph-check-circle text-[#FF337D] mt-1 shrink-0"></i> Автоматический ретрай при 429 Too Many Requests с учётом заголовка retry-after</li>
          <li class="flex items-start gap-2"><i class="ph-fill ph-check-circle text-[#FF337D] mt-1 shrink-0"></i> Опциональный WebSocket-клиент для событий в реальном времени</li>
          <li class="flex items-start gap-2"><i class="ph-fill ph-check-circle text-[#FF337D] mt-1 shrink-0"></i> Чистые DTO с Jackson</code></li>
          <li class="flex items-start gap-2"><i class="ph-fill ph-check-circle text-[#FF337D] mt-1 shrink-0"></i> Строковые константы для статусов, игр, ошибок и событий WebSocket</li>
        </ul>
      </div>

      <div class="bg-[#1f1f1f] rounded-2xl p-6">
        <div class="flex items-center gap-2 mb-3">
          <i class="ph-fill ph-code text-[#FF337D] text-2xl"></i>
          <h2 class="text-2xl font-semibold">Быстрый старт</h2>
        </div>
        <p class="text-gray-300 mb-2"><strong>Создание клиента</strong></p>
        <pre class="bg-black/40 p-3 rounded-lg overflow-x-auto text-sm text-gray-300"><code>LisskinsClient client = LisskinsClient.builder()
    .apiKey("your-api-key")
    .debug(true)          // логирование запросов
    .userId("12345")      // опционально, для WebSocket
    .build();</code></pre>
        <p class="text-gray-300 mt-4 mb-2"><strong>Поиск скинов</strong></p>
        <pre class="bg-black/40 p-3 rounded-lg overflow-x-auto text-sm text-gray-300"><code>SearchRequest request = SearchRequest.builder()
    .game("csgo")
    .priceFrom(1.0)
    .priceTo(100.0)
    .perPage(50)
    .sortBy("lowest_price")
    .build();
SearchResponse result = client.search(request);</code></pre>
        <p class="text-gray-300 mt-4 mb-2"><strong>Покупка скина и проверка баланса</strong></p>
        <pre class="bg-black/40 p-3 rounded-lg overflow-x-auto text-sm text-gray-300"><code>BuyResponse purchase = client.buy(BuyRequest.builder()
    .ids(List.of(125345))
    .partner("123456789")
    .token("abcdef")
    .maxPrice(2.50)
    .customId("order-123")
    .build());
BalanceResponse balance = client.getBalance();</code></pre>
        <p class="text-gray-300 mt-4"><strong>WebSocket (события рынка и статусы покупок)</strong></p>
        <pre class="bg-black/40 p-3 rounded-lg overflow-x-auto text-sm text-gray-300"><code>client.getWebSocketManager().setOnObtainedSkinListener(json -> {
    System.out.println("Market event: " + json);
});
client.getWebSocketManager().connect();</code></pre>
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
    &lt;artifactId&gt;lisskins-java&lt;/artifactId&gt;
    &lt;version&gt;1.0.3&lt;/version&gt;
&lt;/dependency&gt;</code></pre>
        <p class="text-gray-300 mt-4 mb-2"><strong>Gradle</strong></p>
        <pre class="bg-black/40 p-3 rounded-lg overflow-x-auto text-sm text-gray-300"><code>dependencyResolutionManagement {
    repositories {
        mavenCentral()
        maven { url 'https://jitpack.io' }
    }
}

dependencies {
    implementation 'com.github.DeelTer:lisskins-java:1.0.3'
}</code></pre>
      </div>

      <div class="bg-[#1f1f1f] rounded-2xl p-6">
        <a href="https://github.com/DeelTer/lisskins-java" target="_blank" 
          class="inline-flex items-center gap-2 bg-[#FF337D] px-6 py-3 rounded-xl font-medium hover:bg-[#e62e6e] transition">
          <i class="ph-fill ph-github-logo"></i> Перейти на GitHub
        </a>
      </div>
    </div>
  `
};
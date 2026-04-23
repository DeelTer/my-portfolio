import type { Project } from '../types';

export const cryptomusJavaSDK: Project = {
  id: 14,
  title: "Cryptomus Java SDK",
  subtitle: "Open Source / Библиотека",
  slug: "cryptomus-java-sdk",
  image: "./images/cryptomus/cover.webp",
  category: ["opensource", "java", "code", "sdk"],
  starred: false,
  shortDesc: "SDK для интеграции криптоплатежей",
  fullContent: `
    <div class="space-y-6">
      <h1 class="text-4xl font-bold">Cryptomus Java SDK</h1>
      <p class="text-xl text-gray-300">Библиотека для работы с платёжной системой Cryptomus. Позволяет создавать счета, проверять статусы платежей и интегрировать криптовалютные переводы в Java-приложения.</p>

      <div class="bg-[#1f1f1f] rounded-2xl p-6">
        <div class="flex items-center gap-2 mb-3">
          <i class="ph-fill ph-code text-[#FF337D] text-2xl"></i>
          <h2 class="text-2xl font-semibold">Реальное применение</h2>
        </div>
        <p class="text-gray-300 mb-4">Библиотека используется в боевом проекте <strong class="text-[#FF337D]">Milkshake</strong> для приёма донатов через криптовалюту. Вот фрагмент реального кода из модуля оплаты:</p>
        <pre class="bg-black/40 p-3 rounded-lg overflow-x-auto text-sm text-gray-300"><code>public class CryptomusManager extends AbstractManager {

  private Cryptomus cryptomus;

  @Nullable
  public CryptoPayment createPayment(@NotNull PaymentBill bill) {
    ShopCart cart = bill.getCart();
    try {
      return cryptomus.createPayment(
        PaymentCreateData.builder()
          .amount(BigDecimal.valueOf(cart.getPrice()))
          .currency(Currency.RUB.name())
          .redirectUrl("https://discord.gg/milkshake")
          .lifetime(30, TimeUnit.MINUTES)
          .build()
      );
    } catch (IOException e) {
      e.printStackTrace();
      return null;
    }
  }

  public void checkPayments() throws IOException {
    // Получаем все неоплаченные счета
    Set<PaymentBill> bills = billsManager.getBills(PaymentSystem.CRYPTOMUS);
    PaymentList payments = cryptomus.getPayments(null);
    
    for (PaymentBill bill : bills) {
      CryptoPayment payment = paymentsMap.get(bill.getPaymentId());
      if (payment.getPaymentStatus().isPaid()) {
        bill.complete(); // Выдача товара
      }
    }
  }

  @Override
  protected void onLoad() {
    cryptomus = Cryptomus.create(
      config.getCryptomusMerchantId(),
      config.getCryptomusToken()
    );
  }
}</code></pre>
      </div>

      <div class="bg-[#1f1f1f] rounded-2xl p-6">
        <div class="flex items-center gap-2 mb-3">
          <i class="ph-fill ph-rocket text-[#FF337D] text-2xl"></i>
          <h2 class="text-2xl font-semibold">Возможности SDK</h2>
        </div>
        <ul class="space-y-2 text-gray-300">
          <li class="flex gap-2"><span class="text-[#FF337D]">✓</span> Создание платежей с указанием суммы, валюты, времени жизни</li>
          <li class="flex gap-2"><span class="text-[#FF337D]">✓</span> Получение списка платежей с фильтрацией</li>
          <li class="flex gap-2"><span class="text-[#FF337D]">✓</span> Проверка статуса платежа (paid, error, waiting)</li>
          <li class="flex gap-2"><span class="text-[#FF337D]">✓</span> Автоматическое обновление статусов через API</li>
          <li class="flex gap-2"><span class="text-[#FF337D]">✓</span> Поддержка всех криптовалют, доступных в Cryptomus</li>
        </ul>
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
    &lt;artifactId&gt;CryptomusSDK&lt;/artifactId&gt;
    &lt;version&gt;1.0.0&lt;/version&gt;
&lt;/dependency&gt;</code></pre>
        <p class="text-gray-300 mt-4 mb-2"><strong>Gradle</strong></p>
        <pre class="bg-black/40 p-3 rounded-lg overflow-x-auto text-sm text-gray-300"><code>dependencyResolutionManagement {
    repositories {
        mavenCentral()
        maven { url 'https://jitpack.io' }
    }
}

dependencies {
    implementation 'com.github.DeelTer:CryptomusSDK:1.0.0'
}</code></pre>
      </div>

      <div class="bg-[#1f1f1f] rounded-2xl p-6">
        <a href="https://github.com/DeelTer/CryptomusSDK" target="_blank" 
          class="inline-flex items-center gap-2 bg-[#FF337D] px-6 py-3 rounded-xl font-medium hover:bg-[#e62e6e] transition">
          <i class="ph-fill ph-github-logo"></i> Перейти на GitHub
        </a>
      </div>
    </div>
  `
};
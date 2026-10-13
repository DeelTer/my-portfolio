import type { Project } from '../types';

export const yookassaJavaSDK: Project = {
  id: 13,
  title: 'YooKassa Java SDK',
  subtitle: 'Open Source / Библиотека',
  slug: 'yookassa-java-sdk',
  image: './images/yookassa/cover.webp',
  category: ['opensource', 'java', 'code', 'company'],
  starred: true,
  shortDesc: 'Моя Java-библиотека для платежей через ЮKassa',
  fullContent: `
    <div class="space-y-6">
      <h1 class="text-4xl font-bold">YooKassa Java SDK</h1>
      <p class="text-xl text-gray-300">Я разрабатываю неофициальную Java-библиотеку для ЮKassa. Она помогает принимать платежи, делать возвраты и работать с чеками без ручной сборки HTTP-запросов.</p>
      <p><a data-yookassa-release href="https://github.com/DeelTer/YooKassaSDK/releases/tag/2.1.0" target="_blank" rel="noopener noreferrer" class="underline">Версия 2.1.0 · GitHub Releases ↗</a></p>
      <section class="project-detail-block">
        <h2>Что умеет библиотека</h2>
        <p>Покрывает все 34 операции спецификации API v3: платежи, способы оплаты, счета, возвраты, чеки, выплаты, безопасные сделки и подписки на уведомления.</p>
        <ul>
          <li>230 моделей данных, сгенерированных по OpenAPI. Неизвестные поля сохраняются при чтении и отправке.</li>
          <li>Повторные запросы с тем же ключом идемпотентности, настройка таймаутов и обработка ошибок API.</li>
          <li>Разбор уведомлений, проверка адреса отправителя и кеш справочных данных.</li>
          <li>В версии 2.1.0 — проверка моделей, числовых ограничений, запросов и ответов.</li>
        </ul>
        <p class="text-sm">Java 8+ · OkHttp 4 · Gson. Возможности описаны по README версии 2.1.0.</p>
      </section>
      <section class="project-detail-block">
        <h2>В списке библиотек сообщества</h2>
        <p>ЮKassa добавила SDK на <a class="underline" href="https://yookassa.ru/developers/using-api/using-sdks#community" target="_blank" rel="noopener noreferrer">страницу библиотек сообщества</a>. Ниже — письмо и страница со списком. SDK остаётся независимым проектом.</p>
        <div class="carousel" data-carousel>
          <div class="carousel-slides">
            <div class="carousel-slide"><img src="./images/yookassa/official-2.webp" alt="Страница библиотек сообщества ЮKassa" width="1280" decoding="async"></div>
            <div class="carousel-slide"><img src="./images/yookassa/official-1.webp" alt="Письмо от ЮKassa о добавлении библиотеки" width="1280" decoding="async"></div>
          </div>
          <button class="carousel-prev" aria-label="Назад">‹</button>
          <button class="carousel-next" aria-label="Вперёд">›</button>
          <div class="carousel-dots"></div>
        </div>
      </section>
      <section class="project-detail-block">
        <h2>Подключение</h2>
        <p>Пример для версии 2.1.0 через JitPack (Gradle Kotlin DSL):</p>
        <pre><code>repositories {
    mavenCentral()
    maven("https://jitpack.io")
}

dependencies {
    implementation("com.github.DeelTer:YooKassaSDK:2.1.0")
}</code></pre>
        <p>Ветка 2.x переписана и несовместима с 1.x. Инструкции для Maven и перехода со старой версии есть в <a class="underline" href="https://github.com/DeelTer/YooKassaSDK#readme" target="_blank" rel="noopener noreferrer">README</a>.</p>
      </section>
      <section class="project-detail-block">
        <h2>Пример: получить платёж</h2>
        <pre><code>import ru.deelter.yookassa.YooKassa;
import ru.deelter.yookassa.model.Payment;

try (YooKassa api = YooKassa.create(
        System.getenv("YOOKASSA_SHOP_ID"),
        System.getenv("YOOKASSA_SECRET_KEY"))) {
    Payment payment = api.getPayment(paymentId);
    boolean paid = Payment.STATUS_SUCCEEDED.equals(payment.getStatus());
}</code></pre>
        <p>Клиент синхронный: запросы выполняют в рабочем потоке. Перед использованием в своём проекте платёжный сценарий нужно проверить в тестовом магазине ЮKassa.</p>
      </section>
      <a href="https://github.com/DeelTer/YooKassaSDK" target="_blank" rel="noopener noreferrer" class="primary-link inline-flex">Код и документация на GitHub ↗</a>
    </div>
  `,
};

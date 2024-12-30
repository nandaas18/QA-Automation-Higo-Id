import { $ } from "@wdio/globals";

class blog {
  // Elemen Selector
  get desBlog() {
    return $('//a[@aria-label="HIGO"]');
  }

  get artikelBaru() {
    return $('//h2[text()="Artikel Terbaru"]');
  }

  // Page Actions
  async deskripsi() {
    await this.desBlog.waitForExist({ timeout: 5000 });
  }

  async blogHigo() {
    await browser.url("https://blog.higo.id/");
  }
}

export default new blog();

import { $ } from "@wdio/globals";

class layarUtama {
  // Elemen Selector
  get judulHalamanUtama() {
    return $(
      '//h1[text()="Solusi Menyeluruh Pemasaran Digital dengan WiFi & Customer Insight"]'
    );
  }

  get judulProdukUtama() {
    return $(
      '//h2[contains(@class, "font-anek-malayalam") and contains(text(),"Bagaimana")]'
    );
  }

  get judulUlasanUtama() {
    return $('//h2[text()="Partner & klien"]');
  }

  get partner() {
    return $('//h2[text()="Apa kata mereka"]');
  }

  get qna() {
    return $('//h3[text()="Pertanyaan seputar HIGO"]');
  }

  get footer() {
    return $(
      '//p[contains(@class, "max-w-96") and contains(@class, "text-white")]'
    );
  }

  get linkedin() {
    return $('//a[@alt="Linkedin"]');
  }

  get facebook() {
    return $('//a[@alt="Facebook"]');
  }

  get xCom() {
    return $('//a[@alt="X"]');
  }

  get instagram() {
    return $('//a[@alt="Instagram"]');
  }

  get akunHigoLinkedin() {
    return $('//h1[text()="HIGO"]');
  }

  get jasaHigoLinkedin() {
    return $('//div[text()="Jasa TI dan Konsultan TI"]');
  }

  get alamatHigoLinkedin() {
    return $('//div[text()="Jakarta Barat, DKI Jakarta"]');
  }

  get descHigoLinkedin() {
    return $('//h2[text()="Gambaran Umum"]');
  }
  // Page Actions
  async bagianJudul() {
    await this.judulHalamanUtama.waitForExist({ timeout: 3000 });
  }

  async bagianProduk() {
    await this.judulProdukUtama.waitForExist({ timeout: 10000 });
    await this.judulProdukUtama.scrollIntoView({ behavior: "smooth" });
    await this.judulProdukUtama.waitForExist({ timeout: 3000 });
  }

  async bagianUlasan() {
    await this.judulUlasanUtama.waitForExist({ timeout: 5000 });
    await this.judulUlasanUtama.scrollIntoView({ behavior: "smooth" });
    await this.judulUlasanUtama.waitForExist({ timeout: 5000 });
  }

  async bagianPartner() {
    await this.partner.waitForExist({ timeout: 5000 });
    await this.partner.scrollIntoView({ behavior: "smooth" });
    await this.partner.waitForExist({ timeout: 5000 });
  }

  async bagianPertanyaan() {
    await this.qna.waitForExist({ timeout: 15000 });
    await this.qna.scrollIntoView({ behavior: "smooth" });
    await this.qna.waitForExist({ timeout: 15000 });
  }

  async bagianFooter() {
    await this.footer.waitForExist({ timeout: 5000 });
    await this.footer.scrollIntoView({ behavior: "smooth" });
    await this.footer.waitForExist({ timeout: 5000 });
  }

  async ln() {
    await this.linkedin.waitForExist({ timeout: 5000 });
    await this.linkedin.scrollIntoView({ behavior: "smooth" });
    await this.linkedin.waitForExist({ timeout: 5000 });
  }

  async fb() {
    await this.facebook.waitForExist({ timeout: 5000 });
    await this.facebook.scrollIntoView({ behavior: "smooth" });
    await this.facebook.waitForExist({ timeout: 5000 });
  }

  async x() {
    await this.xCom.waitForExist({ timeout: 5000 });
    await this.xCom.scrollIntoView({ behavior: "smooth" });
    await this.xCom.waitForExist({ timeout: 5000 });
  }

  async ig() {
    await this.instagram.waitForExist({ timeout: 5000 });
    await this.instagram.scrollIntoView({ behavior: "smooth" });
    await this.instagram.waitForExist({ timeout: 5000 });
  }

  async openPage() {
    await browser.url("https://higo.id/");
  }
}

export default new layarUtama();

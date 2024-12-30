import { $ } from "@wdio/globals";

class wifiAdv {
  // Elemen Selector
  get desWifi() {
    return $('//h1[text()="WiFi Advertising"]');
  }

  get desLayanan() {
    return $('//h2[text()="Footprint HIGO"]');
  }

  get produkLayanan1() {
    return $(
      '//li[1][contains(@class, "relative") and contains(@class, "grid") and contains(@class, "aspect-square")]'
    );
  }

  get kegunaan() {
    return $(
      '//h2[text()="Kenali pengguna melalui 4 langkah pendekatan yang lebih personal"]'
    );
  }

  get produkLayanan2() {
    return $(
      '//li[2][contains(@class, "relative") and contains(@class, "grid") and contains(@class, "aspect-square")]'
    );
  }

  get produkLayanan3() {
    return $(
      '//li[3][contains(@class, "relative") and contains(@class, "grid") and contains(@class, "aspect-square")]'
    );
  }

  get produkLayanan4() {
    return $(
      '//li[4][contains(@class, "relative") and contains(@class, "grid") and contains(@class, "aspect-square")]'
    );
  }

  get penayangan() {
    return $(
      '//span[contains(text(), "Ads berupa gambar statis selama 3 detik.")]'
    );
  }

  get pembuatanProfil() {
    return $('//h6[text()="Pembuatan profil"]');
  }

  get interaksi() {
    return $('//h6[text()="Interaksi"]');
  }

  get responsLangsung() {
    return $('//h6[text()="Respons langsung"]');
  }

  get desKeuntungan() {
    return $('//h2[text()="Keuntungan menggunakan WiFi ads"]');
  }

  get keuntungan1() {
    return $('//h6[text()="Menargetkan audiens secara terarah"]');
  }

  get keuntungan2() {
    return $('//h6[text()="Audiens berkualitas"]');
  }

  get keuntungan3() {
    return $('//h6[text()="Konten & tujuan terkustomisasi sepenuhnya"]');
  }

  get keuntungan4() {
    return $('//h6[text()="Konten & tujuan terkustomisasi sepenuhnya"]');
  }

  get daftarMitra() {
    return $('//h2[text()="Mitra kami"]');
  }

  get bca() {
    return $('//div[@class="grid w-20 place-items-center"]/img[@alt="Bca"]');
  }

  get bintangCrystal() {
    return $(
      '//div[@class="grid w-20 place-items-center"]/img[@alt="Bintang Crystal"]'
    );
  }

  get camel() {
    return $('//div[@class="grid w-20 place-items-center"]/img[@alt="Camel"]');
  }

  get carro() {
    return $('//div[@class="grid w-20 place-items-center"]/img[@alt="Carro"]');
  }

  get classMild() {
    return $(
      '//div[@class="grid w-20 place-items-center"]/img[@alt="Clasmild"]'
    );
  }

  get btnBeriklan() {
    return $('//a[span[text()="Beriklan sekarang"]]');
  }

  // Page Actions
  async wifiPage() {
    await browser.url("https://higo.id/wifi-advertising");
  }

  async deskripsi() {
    await this.desWifi.waitForExist({ timeout: 3000 });
  }

  async layananWifi() {
    await this.desLayanan.waitForExist({ timeout: 5000 });
    await this.desLayanan.scrollIntoView({ behavior: "smooth" });
    await this.desLayanan.waitForExist({ timeout: 3000 });
  }

  async penggunaan() {
    await this.kegunaan.waitForExist({ timeout: 5000 });
    await this.kegunaan.scrollIntoView({ behavior: "smooth" });
    await this.kegunaan.waitForExist({ timeout: 3000 });
  }

  async keuntungan() {
    await this.desKeuntungan.waitForExist({ timeout: 5000 });
    await this.desKeuntungan.scrollIntoView({ behavior: "smooth" });
    await this.desKeuntungan.waitForExist({ timeout: 3000 });
  }

  async mitra() {
    await this.daftarMitra.waitForExist({ timeout: 5000 });
    await this.daftarMitra.scrollIntoView({ behavior: "smooth" });
    await this.daftarMitra.waitForExist({ timeout: 3000 });
  }

  async openPage() {
    await browser.url("https://higo.id/");
  }
}

export default new wifiAdv();

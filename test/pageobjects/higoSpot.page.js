import { $ } from "@wdio/globals";

class higoSpot {
  // Elemen Selector
  get deshigo() {
    return $('//h1[text()="HIGOspot"]');
  }

  get desLokBagian() {
    return $(
      '//h2[text()="Lebih dari 2000 lokasi telah menjadi bagian HIGOspot"]'
    );
  }

  get caffeShop() {
    return $('//h6[text()="Cafe/Coffee Shop"]');
  }

  get compoundSpace() {
    return $('//h6[text()="Compound Space"]');
  }

  get office() {
    return $('//h6[text()="Office"]');
  }

  get restaurant() {
    return $('//h6[text()="Restaurant"]');
  }

  get transportation() {
    return $('//h6[text()="Transportation"]');
  }

  get educationCenter() {
    return $('//h6[text()="Education Center"]');
  }

  get desMaps() {
    return $('//h2[text()="Jelajahi lokasi HIGOspot"]');
  }

  get search() {
    return $('//button[span[text()="All"]]');
  }

  get provinsi() {
    return $('//div[@data-value="JAWA BARAT"]');
  }

  get kategori() {
    return $('//li[.//span[text()="Education Center"]]');
  }

  get sekolahBunda() {
    return $('//li[b[text()="Sekolah Bunda"]]');
  }

  get daftarMitra() {
    return $('//h2[text()="Mitra Kami"]');
  }

  get retail1() {
    return $('(//div[@class="grid w-20 place-items-center"]//img)[1]');
  }

  get retail2() {
    return $('(//div[@class="grid w-20 place-items-center"]//img)[2]');
  }

  get retail3() {
    return $('(//div[@class="grid w-20 place-items-center"]//img)[3]');
  }

  get retail4() {
    return $('(//div[@class="grid w-20 place-items-center"]//img)[4]');
  }

  get corporate() {
    return $('//label[text()="Corporate & ISP"]');
  }
  // Page Actions
  async deskripsi() {
    await this.deshigo.waitForExist({ timeout: 3000 });
  }

  async lokasiBagian() {
    await this.desLokBagian.waitForExist({ timeout: 5000 });
    await this.desLokBagian.scrollIntoView({ behavior: "smooth" });
    await this.desLokBagian.waitForExist({ timeout: 3000 });
  }

  async maps() {
    await this.desMaps.waitForExist({ timeout: 15000 });
    await this.desMaps.scrollIntoView({ behavior: "smooth" });

    await this.search.waitForClickable({ timeout: 15000 });
    await this.search.click();

    await this.provinsi.waitForClickable({ timeout: 15000 });
    await this.provinsi.click();

    await this.kategori.waitForClickable({ timeout: 15000 });
    await this.kategori.click();
  }

  async mitra() {
    await this.daftarMitra.waitForExist({ timeout: 15000 });
    await this.daftarMitra.scrollIntoView({ behavior: "smooth" });
    await browser.pause(1000); // Tunggu sebentar untuk memastikan elemen sepenuhnya terlihat
    await this.daftarMitra.waitForExist({ timeout: 13000 }); // Tunggu jika ada perubahan DOM
    await this.corporate.waitForClickable({ timeout: 25000 }); // Tunggu sampai elemen dapat diklik
    await this.corporate.click();
  }

  async higoSpot() {
    await browser.url("https://higo.id/higospot");
  }
}

export default new higoSpot();

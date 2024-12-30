import { browser, $, expect } from "@wdio/globals";
import layarUtamaPage from "../pageobjects/layarUtama.page.js";

describe("HALAMAN UTAMA", function () {
  it("Test Bagian Judul", async function () {
    await layarUtamaPage.openPage();
    await layarUtamaPage.bagianJudul();

    await expect(layarUtamaPage.judulHalamanUtama).toBeDisplayed();
  });

  it("Test Bagian Produk", async function () {
    await layarUtamaPage.openPage();
    await layarUtamaPage.bagianProduk();

    await expect(layarUtamaPage.judulProdukUtama).toBeDisplayed();
  });

  it("Test Bagian Ulasan", async function () {
    await layarUtamaPage.openPage();
    await layarUtamaPage.bagianUlasan();

    await expect(layarUtamaPage.judulUlasanUtama).toBeDisplayed();
  });

  it("Test Bagian Partner", async function () {
    await layarUtamaPage.openPage();
    await layarUtamaPage.bagianPartner();

    await expect(layarUtamaPage.partner).toBeDisplayed();
  });

  it("Test Bagian Pertanyaan", async function () {
    await layarUtamaPage.openPage();
    await layarUtamaPage.bagianPertanyaan();

    await expect(layarUtamaPage.qna).toBeDisplayed();
  });

  it("Test Bagian Footer", async function () {
    await layarUtamaPage.openPage();
    await layarUtamaPage.bagianFooter();

    await expect(layarUtamaPage.footer).toBeDisplayed();
  });

  it("Test Link Linkedin", async function () {
    await layarUtamaPage.openPage();
    await layarUtamaPage.ln();

    expect(browser).toHaveUrl(
      "https://www.linkedin.com/company/pt-higo-fitur-indonesia/"
    );
  });

  it("Test Link Facebook", async function () {
    await layarUtamaPage.openPage();
    await layarUtamaPage.fb();

    expect(browser).toHaveUrl("https://www.facebook.com/HIGOSPOTINDONESIA");
  });

  it("Test Link Instagram", async function () {
    await layarUtamaPage.openPage();
    await layarUtamaPage.ig();

    expect(browser).toHaveUrl("https://www.instagram.com/higo.id/#");
  });

  it("Test Link X.com", async function () {
    await layarUtamaPage.openPage();
    await layarUtamaPage.x();

    expect(browser).toHaveUrl("https://x.com/HIGO_spot");
  });
});

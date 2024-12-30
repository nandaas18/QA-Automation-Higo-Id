import { browser, $, expect } from "@wdio/globals";
import wifiAdvPage from "../pageobjects/wifiAdv.page.js";

describe("HALAMAN WIFI ADVERTISING", function () {
  before("Wifi Advertising", async function () {
    await wifiAdvPage.wifiPage();
  });

  it("Test Deskripsi", async function () {
    await wifiAdvPage.deskripsi();

    await expect(wifiAdvPage.desWifi).toBeDisplayed();
  });

  it("Test Layanan Wifi", async function () {
    await wifiAdvPage.layananWifi();

    await expect(wifiAdvPage.desLayanan).toBeDisplayed();
    await expect(wifiAdvPage.produkLayanan1).toBeDisplayed();
    await expect(wifiAdvPage.produkLayanan2).toBeDisplayed();
    await expect(wifiAdvPage.produkLayanan3).toBeDisplayed();
    await expect(wifiAdvPage.produkLayanan4).toBeDisplayed();
  });

  it("Test Penggunaan", async function () {
    await wifiAdvPage.penggunaan();

    await expect(wifiAdvPage.kegunaan).toBeDisplayed();
    // await expect(wifiAdvPage.penayangan).toBeDisplayed();
    await expect(wifiAdvPage.pembuatanProfil).toBeDisplayed();
    await expect(wifiAdvPage.interaksi).toBeDisplayed();
    await expect(wifiAdvPage.responsLangsung).toBeDisplayed();
  });

  it("Test Keuntungan", async function () {
    await wifiAdvPage.keuntungan();

    await expect(wifiAdvPage.keuntungan1).toBeDisplayed();
    await expect(wifiAdvPage.keuntungan2).toBeDisplayed();
    await expect(wifiAdvPage.keuntungan3).toBeDisplayed();
    await expect(wifiAdvPage.keuntungan4).toBeDisplayed();
  });

  it("Test Mitra", async function () {
    await wifiAdvPage.mitra();

    await expect(wifiAdvPage.bca).toBeDisplayed();
    await expect(wifiAdvPage.bintangCrystal).toBeDisplayed();
    await expect(wifiAdvPage.camel).toBeDisplayed();
    await expect(wifiAdvPage.carro).toBeDisplayed();
    await expect(wifiAdvPage.classMild).toBeDisplayed();
  });
});

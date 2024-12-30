import { browser, $, expect } from "@wdio/globals";
import higoSpotPage from "../pageobjects/higoSpot.page.js";

describe.only("HIGO SPOT", function () {
  before("Higo Spot", async function () {
    await higoSpotPage.higoSpot();
  });

  it("Test Deskripsi", async function () {
    await higoSpotPage.deskripsi();

    // await expect(higoSpotPage.deskripsi).toBeDisplayed();
  });

  it("Test Lokasi Bagian", async function () {
    await higoSpotPage.lokasiBagian();

    await expect(higoSpotPage.caffeShop).toBeDisplayed();
    await expect(higoSpotPage.compoundSpace).toBeDisplayed();
    await expect(higoSpotPage.office).toBeDisplayed();
    await expect(higoSpotPage.restaurant).toBeDisplayed();
    await expect(higoSpotPage.transportation).toBeDisplayed();
    await expect(higoSpotPage.educationCenter).toBeDisplayed();
  });

  it("Test Maps", async function () {
    await higoSpotPage.maps();

    await expect(higoSpotPage.desMaps).toBeDisplayed();
    await expect(higoSpotPage.sekolahBunda).toBeDisplayed();
  });

  it("Test Mitra", async function () {
    await higoSpotPage.mitra();

    await expect(higoSpotPage.retail1).toBeDisplayed();
    await expect(higoSpotPage.retail2).toBeDisplayed();
    await expect(higoSpotPage.retail3).toBeDisplayed();
    await expect(higoSpotPage.retail4).toBeDisplayed();
  });
});

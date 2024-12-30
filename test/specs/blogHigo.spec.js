import { browser, $, expect } from "@wdio/globals";
import blogPage from "../pageobjects/blogHigo.page";

describe.only("HALAMAN BLOG", function () {
  before("Blog", async function () {
    await blogPage.blogHigo();
  });

  it("Test Deskripsi", async function () {
    await blogPage.deskripsi();

    await expect(blogPage.desBlog).toBeDisplayed();
  });

  it("Test blog kategori HIGOes Update", async function () {});

  it("Test blog kategori Hangout", async function () {});

  it("Test blog kategori Lifestyle", async function () {});

  it("Test blog kategori Tech & Social Media", async function () {});

  it("Test blog kategori Business Tip", async function () {});

  it("Test Fitur Search", async function () {});

  it("Test halaman Artikel Terbaru", async function () {});

  it("Test halaman Artikel Terpopuler", async function () {});

  it("Test button Tips Bisnis di bagian Topik Populer", async function () {});

  it("Test button KKV di bagian Topik Populer", async function () {});

  it("Test button Sertifikat ISO di bagian Topik Populer", async function () {});
});

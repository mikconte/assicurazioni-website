import asyncio
from playwright.async_api import async_playwright
import os

async def run_tests():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        pages_to_test = ["index.html", "preventivo.html", "privacy.html", "grazie.html"]
        viewports = [
            {"width": 375, "height": 667, "name": "iPhone SE / Small Mobile"},
            {"width": 390, "height": 844, "name": "iPhone 12/13/14"},
            {"width": 768, "height": 1024, "name": "Tablet Portrait"},
            {"width": 1280, "height": 800, "name": "Desktop"}
        ]
        
        base_dir = os.path.abspath("/home/miche/project/mamma/website")
        all_passed = True
        
        for page_name in pages_to_test:
            file_url = f"file://{base_dir}/{page_name}"
            for vp in viewports:
                page = await browser.new_page(viewport={"width": vp["width"], "height": vp["height"]})
                await page.goto(file_url)
                
                # Check for horizontal scroll overflow
                scroll_width = await page.evaluate("document.documentElement.scrollWidth")
                client_width = await page.evaluate("document.documentElement.clientWidth")
                
                if scroll_width > client_width:
                    print(f"❌ Overflow detected on {page_name} at {vp['name']} ({vp['width']}px): scrollWidth={scroll_width}, clientWidth={client_width}")
                    all_passed = False
                else:
                    print(f"✅ PASS: {page_name} @ {vp['name']} ({vp['width']}px) — scrollWidth={scroll_width}")
                
                await page.close()
                
        await browser.close()
        if all_passed:
            print("\n🎉 100% RESPONSIVE VERIFIED! Zero horizontal overflow across all devices and pages.")

if __name__ == "__main__":
    asyncio.run(run_tests())

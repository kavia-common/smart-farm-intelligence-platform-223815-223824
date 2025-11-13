import '../theme/variables.css';
import '../assets-common.css';
import './home.css';

// PUBLIC_INTERFACE
export default function Home() {
  /** Home page converted to React from Figma assets; uses absolute positioning to maintain pixel parity at 1440px width while remaining responsive via container scaling. */
  return (
    <div className="home-wrapper" aria-label="Home Screen">
      <div id="home-189-2445" className="screen-container style-0" role="region" aria-label="Home screen design container">
        {/* Header */}
        <header className="style-54" style={{ position: 'absolute', left: 0, top: 0, width: 1440, height: 72 }}>
          <div className="style-55" style={{ position: 'absolute', left: 0, top: 0, width: 1440, height: 72 }} />
          <nav className="nav-items" style={{ position: 'absolute', left: 639, top: 16, width: 636, height: 40 }} aria-label="Primary">
            <span className="typo-43" style={{ position: 'absolute', left: 639, top: 26, width: 94, height: 20, color: 'var(--typo-43-color)', transform: 'translateX(-639px)' }} role="link" aria-label="How it works">How it works</span>
            <span className="typo-43" style={{ position: 'absolute', left: 765, top: 26, width: 66, height: 20 }} role="link" aria-label="About us">About us</span>
            <span className="typo-43" style={{ position: 'absolute', left: 863, top: 26, width: 63, height: 20 }} role="link" aria-label="Partners">Partners</span>
            <span className="typo-43" style={{ position: 'absolute', left: 958, top: 26, width: 94, height: 20 }} role="link" aria-label="How it works again">How it works</span>
            <span className="typo-43" style={{ position: 'absolute', left: 1084, top: 26, width: 59, height: 20 }} role="link" aria-label="Support">Support</span>
            <div className="style-2" style={{ position: 'absolute', left: 1175, top: 16, width: 100, height: 40, borderRadius: 0 }} role="button" aria-label="Buy now">
              <span className="typo-44" style={{ position: 'absolute', left: 23, top: 10, width: 55, height: 20 }}>Buy now</span>
            </div>
          </nav>
          <div className="logo-group" style={{ position: 'absolute', left: 184, top: 16, width: 172, height: 40 }} aria-label="Farmino Logo">
            <div className="style-8" style={{ position: 'absolute', left: 0, top: 0, width: 20, height: 20 }} aria-hidden="true" />
            <div className="style-8" style={{ position: 'absolute', left: 20, top: 20, width: 20, height: 20 }} aria-hidden="true" />
            <div className="style-2" style={{ position: 'absolute', left: 20, top: 0, width: 20, height: 20 }} aria-hidden="true" />
            <div className="style-2" style={{ position: 'absolute', left: 0, top: 20, width: 20, height: 20 }} aria-hidden="true" />
            <span className="typo-45" style={{ position: 'absolute', left: 49, top: 11, width: 111, height: 20 }}>Farmino</span>
          </div>
        </header>

        {/* Hero */}
        <section className="hero style-0" style={{ position: 'absolute', left: 0, top: 72, width: 1440, height: 907 }} aria-label="Hero">
          <div className="style-17" style={{ position: 'absolute', left: 0, top: 0, width: 1441, height: 736.683, overflow: 'hidden' }}>
            <div className="style-8" style={{ position: 'absolute', left: 0, top: 0, width: 1441, height: 736.683 }} />
          </div>
          <div className="hero-content" style={{ position: 'absolute', left: 233, top: 191.5, width: 974, height: 761 }}>
            <div style={{ position: 'absolute', left: 0, top: 0, width: 974, height: 282 }}>
              <div style={{ position: 'absolute', left: 0, top: 0, width: 974, height: 184 }}>
                <p className="typo-46" style={{ position: 'absolute', left: 0, top: 0, width: 974, height: 138, margin: 0, whiteSpace: 'pre-line' }}>
                  Organic farming reimagined

with farmino</p>
                <p className="typo-47" style={{ position: 'absolute', left: 120.5, top: 148, width: 733, height: 36, margin: 0, whiteSpace: 'pre-line' }}>
                  Luctus felis sit lectus tristique diam ornare bibendum. Arcu auctor
suspendisse luctus amet bibendum pellentesque lorem. Malesuada lobortis
tristique tortor,
                </p>
              </div>
              <div style={{ position: 'absolute', left: 258, top: 200, width: 458, height: 48 }}>
                <div className="style-19" style={{ position: 'absolute', left: 0, top: 0, width: 202, height: 48 }} role="button" aria-label="Get Started">
                  <span className="typo-48" style={{ position: 'absolute', left: 50, top: 15, width: 102, height: 18 }}>Get Started</span>
                </div>
                <div className="style-21" style={{ position: 'absolute', left: 232, top: 0, width: 226, height: 48 }} role="button" aria-label="Start free trial">
                  <span className="typo-49" style={{ position: 'absolute', left: 50, top: 15, width: 126, height: 18 }}>Start free trial</span>
                </div>
              </div>
            </div>
            <img src="/assets/figmaimages/figma_image_189_2457.png" alt="Fresh organic produce on table" className="style-56" style={{ position: 'absolute', left: 75.5, top: 342, width: 825, height: 419, objectFit: 'cover' }} />
          </div>
        </section>

        {/* Steps / Mission */}
        <section className="style-0" style={{ position: 'absolute', left: 0, top: 1043, width: 1440, height: 531 }} aria-label="Mission Section">
          <div className="style-24" style={{ position: 'absolute', left: 0, top: 0, width: 1440, height: 864 }} />
          <div style={{ position: 'absolute', left: 165, top: 58, width: 632, height: 448 }}>
            <div style={{ position: 'absolute', left: 0, top: 0, width: 632, height: 116 }}>
              <p className="typo-50" style={{ position: 'absolute', left: 0, top: 0, width: 445, height: 116, margin: 0, whiteSpace: 'pre-line' }}>Mission we

are working on</p>
            </div>
            <p className="typo-51" style={{ position: 'absolute', left: 0, top: 146, width: 632, height: 161, margin: 0, whiteSpace: 'pre-line' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut.

Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
sint occaecat cupidatat non proident,
            </p>
            <div style={{ position: 'absolute', left: 0, top: 337, width: 550, height: 46 }}>
              <div style={{ position: 'absolute', left: 0, top: 0, width: 243, height: 46 }}>
                <div className="style-25" style={{ position: 'absolute', left: 0, top: 0, width: 46, height: 46 }}>
                  <img src="/assets/figmaimages/figma_image_189_2540.png" alt="Leaf icon" style={{ position: 'absolute', left: 8, top: 8, width: 30, height: 30, objectFit: 'cover' }} />
                </div>
                <span className="typo-52" style={{ position: 'absolute', left: 76, top: 7, width: 167, height: 32 }}>Organic making</span>
              </div>
              <div style={{ position: 'absolute', left: 286, top: 0, width: 264, height: 46 }}>
                <div className="style-25" style={{ position: 'absolute', left: 0, top: 0, width: 46, height: 46 }}>
                  <img src="/assets/figmaimages/figma_image_189_2545.png" alt="Certificate icon" style={{ position: 'absolute', left: 8, top: 8, width: 30, height: 30, objectFit: 'cover' }} />
                </div>
                <span className="typo-52" style={{ position: 'absolute', left: 76, top: 7, width: 188, height: 32 }}>Certified products</span>
              </div>
            </div>
            <div style={{ position: 'absolute', left: 0, top: 402, width: 206, height: 46 }}>
              <div className="style-25" style={{ position: 'absolute', left: 0, top: 0, width: 46, height: 46 }}>
                <img src="/assets/figmaimages/figma_image_189_2550.png" alt="Rocket icon" style={{ position: 'absolute', left: 8, top: 8, width: 30, height: 30, objectFit: 'cover' }} />
              </div>
              <span className="typo-52" style={{ position: 'absolute', left: 76, top: 7, width: 130, height: 32 }}>Fast delivery</span>
            </div>
          </div>
          <div className="style-26" style={{ position: 'absolute', left: 830, top: 0, width: 445, height: 291, overflow: 'hidden' }}>
            <img src="/assets/figmaimages/figma_image_189_2554.png" alt="Field overview" style={{ position: 'absolute', left: 0, top: 0, width: 445, height: 291, objectFit: 'cover' }} />
          </div>
          <div style={{ position: 'absolute', left: 830, top: 323, width: 446, height: 208 }}>
            <div className="style-27" style={{ position: 'absolute', left: 0, top: 0, width: 208, height: 208, overflow: 'hidden' }}>
              <img src="/assets/figmaimages/figma_image_189_2557.png" alt="Harvesting" style={{ position: 'absolute', left: -44, top: -7, width: 348, height: 261, objectFit: 'cover' }} />
            </div>
            <div className="style-27" style={{ position: 'absolute', left: 238, top: 0, width: 208, height: 208, overflow: 'hidden' }}>
              <img src="/assets/figmaimages/figma_image_189_2559.png" alt="Produce" style={{ position: 'absolute', left: -94, top: 0, width: 398, height: 276, objectFit: 'cover' }} />
            </div>
          </div>
        </section>

        {/* Choose from the best */}
        <section style={{ position: 'absolute', left: 165, top: 1638, width: 1110, height: 450 }} aria-label="Choose from the best">
          <h2 className="typo-53" style={{ position: 'absolute', left: 180, top: 0, width: 540, height: 58, margin: 0 }}>Choose from the best</h2>
          <div style={{ position: 'absolute', left: 0, top: 88, width: 1110, height: 362 }}>
            <div className="style-28" style={{ position: 'absolute', left: 0, top: 0, width: 350, height: 362 }} role="group" aria-label="Agriculture Leader">
              <img src="/assets/figmaimages/figma_image_189_2461.png" alt="Agriculture Leader" style={{ position: 'absolute', left: -12, top: -114, width: 362, height: 496, objectFit: 'cover' }} />
              <div style={{ position: 'absolute', left: 0, top: 0, width: 350, height: 362 }} />
              <p className="typo-54" style={{ position: 'absolute', left: 16, top: 234, width: 324, height: 32, margin: 0 }}>Agriculture Leader</p>
              <p className="typo-55" style={{ position: 'absolute', left: 18, top: 274, width: 315, height: 64, margin: 0 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
            </div>
            <div className="style-28" style={{ position: 'absolute', left: 380, top: 0, width: 350, height: 362 }} role="group" aria-label="Quality Standards">
              <img src="/assets/figmaimages/figma_image_189_2467.png" alt="Quality Standards" style={{ position: 'absolute', left: 0, top: -71, width: 351, height: 471, objectFit: 'cover' }} />
              <div style={{ position: 'absolute', left: 0, top: 0, width: 350, height: 362 }} />
              <p className="typo-54" style={{ position: 'absolute', left: 13, top: 234, width: 324, height: 32, margin: 0 }}>Quality Standards</p>
              <p className="typo-55" style={{ position: 'absolute', left: 15, top: 274, width: 315, height: 64, margin: 0 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
            </div>
            <div className="style-28" style={{ position: 'absolute', left: 760, top: 0, width: 350, height: 362 }} role="group" aria-label="Organic Services">
              <img src="/assets/figmaimages/figma_image_189_2473.png" alt="Organic Services" style={{ position: 'absolute', left: -124, top: -19, width: 584, height: 390, objectFit: 'cover' }} />
              <div style={{ position: 'absolute', left: 0, top: 0, width: 350, height: 362 }} />
              <p className="typo-54" style={{ position: 'absolute', left: 13, top: 234, width: 324, height: 32, margin: 0 }}>Organic Services</p>
              <p className="typo-55" style={{ position: 'absolute', left: 15, top: 274, width: 315, height: 64, margin: 0 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="style-10" style={{ position: 'absolute', left: 0, top: 2152, width: 1440, height: 533 }} aria-label="Testimonials">
          <h2 className="typo-53" style={{ position: 'absolute', left: 452, top: 64, width: 326, height: 58, margin: 0 }}>Testimonials</h2>
          <div style={{ position: 'absolute', left: 64, top: 220, width: 1101, height: 222 }}>
            <div style={{ position: 'absolute', left: 0, top: 0, width: 347, height: 222 }}>
              <p className="typo-56" style={{ position: 'absolute', left: 0, top: 0, width: 347, height: 64, margin: 0 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
              <img src="/assets/figmaimages/figma_image_189_2487.png" alt="Portrait of Kyla Harmon" className="style-29" style={{ position: 'absolute', left: 137.5, top: 91, width: 72, height: 72, objectFit: 'cover' }} />
              <p className="typo-57" style={{ position: 'absolute', left: 11.5, top: 190, width: 324, height: 32, margin: 0 }}>Kyla Harmon</p>
            </div>
            <div style={{ position: 'absolute', left: 377, top: 0, width: 347, height: 222 }}>
              <p className="typo-56" style={{ position: 'absolute', left: 0, top: 0, width: 347, height: 64, margin: 0 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
              <div className="style-30" style={{ position: 'absolute', left: 137.5, top: 91, width: 72, height: 72 }}>
                <img src="/assets/figmaimages/figma_image_189_2492.png" alt="Portrait of Ryan Menzie" style={{ position: 'absolute', left: 0, top: 0, width: 72, height: 108, objectFit: 'cover' }} />
              </div>
              <p className="typo-57" style={{ position: 'absolute', left: 11.5, top: 190, width: 324, height: 32, margin: 0 }}>Ryan Menzie</p>
            </div>
            <div style={{ position: 'absolute', left: 754, top: 0, width: 347, height: 222 }}>
              <p className="typo-56" style={{ position: 'absolute', left: 0, top: 0, width: 347, height: 64, margin: 0 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
              <div className="style-30" style={{ position: 'absolute', left: 137.5, top: 91, width: 72, height: 72 }}>
                <img src="/assets/figmaimages/figma_image_189_2497.png" alt="Portrait of Aldrich Fowler" style={{ position: 'absolute', left: 0, top: -25, width: 73, height: 124, objectFit: 'cover' }} />
              </div>
              <p className="typo-57" style={{ position: 'absolute', left: 11.5, top: 190, width: 324, height: 32, margin: 0 }}>Aldrich Fowler</p>
            </div>
          </div>
          <div style={{ position: 'absolute', left: 574, top: 372.013671875, width: 82, height: 16 }} aria-hidden="true">
            <div className="style-2" style={{ position: 'absolute', left: 0, top: 0, width: 16, height: 16, borderRadius: '50%' }} />
            <div className="style-2" style={{ position: 'absolute', left: 28, top: 3, width: 10, height: 10, borderRadius: '50%' }} />
            <div className="style-2" style={{ position: 'absolute', left: 50, top: 3, width: 10, height: 10, borderRadius: '50%' }} />
            <div className="style-2" style={{ position: 'absolute', left: 72, top: 3, width: 10, height: 10, borderRadius: '50%' }} />
          </div>
        </section>

        {/* Rediscover the taste */}
        <section className="style-34" style={{ position: 'absolute', left: 0, top: 2749, width: 1440, height: 473.013671875 }} aria-label="Rediscover the taste">
          <h2 className="typo-53" style={{ position: 'absolute', left: 345, top: 0, width: 540, height: 58, margin: 0 }}>Rediscover the taste</h2>
          <div style={{ position: 'absolute', left: 60, top: 99, width: 1110, height: 317.013671875 }}>
            <div className="style-35" style={{ position: 'absolute', left: 0, top: 0, width: 255, height: 317.013671875, backgroundColor: 'transparent' }} role="group" aria-label="Tomatoes">
              <img src="/assets/figmaimages/figma_image_189_2518.png" alt="Tomatoes" className="style-35" style={{ position: 'absolute', left: 0, top: 0, width: 255, height: 275.6756896972656, objectFit: 'cover' }} />
              <p className="typo-58" style={{ position: 'absolute', left: 33, top: 287.013671875, width: 188, height: 28, margin: 0 }}>Tomatoes</p>
            </div>
            <div className="style-35" style={{ position: 'absolute', left: 285, top: 0, width: 255, height: 317.013671875 }} role="group" aria-label="Carrots">
              <img src="/assets/figmaimages/figma_image_189_2522.png" alt="Carrots" className="style-35" style={{ position: 'absolute', left: 0, top: 0, width: 255, height: 275.6756896972656, objectFit: 'cover' }} />
              <p className="typo-58" style={{ position: 'absolute', left: 33, top: 287.013671875, width: 188, height: 28, margin: 0 }}>Carrots</p>
            </div>
            <div className="style-35" style={{ position: 'absolute', left: 570, top: 0, width: 255, height: 317.013671875 }} role="group" aria-label="Potatoes">
              <img src="/assets/figmaimages/figma_image_189_2526.png" alt="Potatoes" className="style-35" style={{ position: 'absolute', left: 0, top: 0, width: 255, height: 275.6756896972656, objectFit: 'cover' }} />
              <p className="typo-58" style={{ position: 'absolute', left: 33, top: 287.013671875, width: 188, height: 28, margin: 0 }}>Potatoes</p>
            </div>
            <div className="style-35" style={{ position: 'absolute', left: 855, top: 0, width: 255, height: 317.013671875 }} role="group" aria-label="Ladyfingers">
              <img src="/assets/figmaimages/figma_image_189_2530.png" alt="Ladyfingers" className="style-35" style={{ position: 'absolute', left: 0, top: 0, width: 255, height: 275.6756896972656, objectFit: 'cover' }} />
              <p className="typo-58" style={{ position: 'absolute', left: 33, top: 287.013671875, width: 188, height: 28, margin: 0 }}>Ladyfingers</p>
            </div>
          </div>
          <div style={{ position: 'absolute', left: 574, top: 356.013671875, width: 82, height: 16 }} aria-hidden="true">
            <div className="style-2" style={{ position: 'absolute', left: 0, top: 0, width: 16, height: 16, borderRadius: '50%' }} />
            <div className="style-2" style={{ position: 'absolute', left: 28, top: 3, width: 10, height: 10, borderRadius: '50%' }} />
            <div className="style-2" style={{ position: 'absolute', left: 50, top: 3, width: 10, height: 10, borderRadius: '50%' }} />
            <div className="style-2" style={{ position: 'absolute', left: 72, top: 3, width: 10, height: 10, borderRadius: '50%' }} />
          </div>
        </section>

        {/* Nutritious Food */}
        <section className="style-10" style={{ position: 'absolute', left: 0, top: 3391.013671875, width: 1440, height: 491 }} aria-label="Nutritious Food">
          <div style={{ position: 'absolute', left: 60, top: 0, width: 1110, height: 491 }}>
            <div className="style-36" style={{ position: 'absolute', left: 0, top: 64, width: 540, height: 363 }}>
              <img src="/assets/figmaimages/figma_image_189_2479.png" alt="Video thumbnail" style={{ position: 'absolute', left: -17, top: -18, width: 589, height: 393, objectFit: 'cover' }} />
            </div>
            <div style={{ position: 'absolute', left: 665, top: 79, width: 445, height: 333 }}>
              <h3 className="typo-59" style={{ position: 'absolute', left: 0, top: 0, width: 445, height: 61, margin: 0 }}>Everyone should have access to nutritious food</h3>
              <p className="typo-51" style={{ position: 'absolute', left: 0, top: 85, width: 445, height: 184, margin: 0, whiteSpace: 'pre-line' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut.

Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <div className="style-8" style={{ position: 'absolute', left: 0, top: 293, width: 100, height: 40 }} role="button" aria-label="Buy now">
                <span className="typo-44" style={{ position: 'absolute', left: 23, top: 10, width: 55, height: 20 }}>Buy now</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section style={{ position: 'absolute', left: 0, top: 3941.013671875, width: 1440, height: 510 }} aria-label="Contact section">
          <div style={{ position: 'absolute', left: 61, top: 0, width: 1108, height: 510 }}>
            <div style={{ position: 'absolute', left: 61, top: 0, width: 261, height: 155 }}>
              <div style={{ position: 'absolute', left: 0, top: 0, width: 48, height: 48 }}>
                <div className="style-8" style={{ position: 'absolute', left: 0, top: 0, width: 48, height: 48, borderRadius: '50%' }} aria-hidden="true" />
              </div>
              <p className="typo-60" style={{ position: 'absolute', left: 1, top: 72, width: 260, height: 38, margin: 0 }}>Email</p>
              <p className="typo-61" style={{ position: 'absolute', left: 0, top: 126, width: 261, height: 29, margin: 0 }}>contact@flex.co</p>
            </div>

            <div style={{ position: 'absolute', left: 61, top: 194, width: 261, height: 185 }}>
              <div style={{ position: 'absolute', left: 0, top: 0, width: 48, height: 48 }}>
                <div className="style-8" style={{ position: 'absolute', left: 0, top: 0, width: 48, height: 48, borderRadius: '50%' }} aria-hidden="true" />
              </div>
              <p className="typo-60" style={{ position: 'absolute', left: 1, top: 72, width: 260, height: 38, margin: 0 }}>Office</p>
              <p className="typo-61" style={{ position: 'absolute', left: 0, top: 126, width: 261, height: 29, margin: 0 }}>1686, Geraldine Lane</p>
              <p className="typo-61" style={{ position: 'absolute', left: 0, top: 156, width: 261, height: 29, margin: 0 }}>New York, NY 10013</p>
            </div>

            <div style={{ position: 'absolute', left: 354, top: 0, width: 261, height: 155 }}>
              <div style={{ position: 'absolute', left: 0, top: 0, width: 48, height: 48 }}>
                <div className="style-8" style={{ position: 'absolute', left: 0, top: 0, width: 48, height: 48, borderRadius: '50%' }} aria-hidden="true" />
              </div>
              <p className="typo-60" style={{ position: 'absolute', left: 1, top: 72, width: 260, height: 38, margin: 0 }}>Phone</p>
              <p className="typo-61" style={{ position: 'absolute', left: 0, top: 126, width: 261, height: 29, margin: 0 }}>+7-843-672-431</p>
            </div>

            <div className="style-57" style={{ position: 'absolute', left: 554, top: 0, width: 554, height: 510 }} role="form" aria-label="Contact form">
              <div className="style-58" style={{ position: 'absolute', left: 0, top: 0, width: 554, height: 510 }} />
              <div style={{ position: 'absolute', left: 40, top: 40, width: 474, height: 76 }}>
                <label className="typo-62" style={{ position: 'absolute', left: 0, top: 0, width: 160, height: 24 }}>Email</label>
                <div className="style-59" style={{ position: 'absolute', left: 0, top: 30, width: 474, height: 46 }}>
                  <div style={{ position: 'absolute', left: 14, top: 11, width: 446, height: 24 }}>
                    <span className="typo-63" style={{ position: 'absolute', left: 0, top: 0, width: 446, height: 24 }}>pat@shuffle.dev</span>
                  </div>
                </div>
              </div>
              <div style={{ position: 'absolute', left: 40, top: 140, width: 474, height: 250 }}>
                <label className="typo-62" style={{ position: 'absolute', left: 0, top: 0, width: 160, height: 24 }}>Message</label>
                <div className="style-59" style={{ position: 'absolute', left: 0, top: 30, width: 474, height: 220 }}>
                  <div style={{ position: 'absolute', left: 14, top: 10, width: 446, height: 24 }}>
                    <span className="typo-63" style={{ position: 'absolute', left: 0, top: 0, width: 446, height: 24 }}>Your message...</span>
                  </div>
                </div>
              </div>
              <div className="style-60" style={{ position: 'absolute', left: 40, top: 414, width: 474, height: 56 }} role="button" aria-label="Send message">
                <span className="typo-64" style={{ position: 'absolute', left: 216.5, top: 14, width: 41, height: 28 }}>Send</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="style-9" style={{ position: 'absolute', left: 0, top: 4515.013671875, width: 1440, height: 527 }} aria-label="Footer">
          <div className="style-12" style={{ position: 'absolute', left: 0, top: 0, width: 1440, height: 527 }} />
          <div style={{ position: 'absolute', left: 78, top: 100, width: 1074, height: 323 }}>
            <div className="style-16" style={{ position: 'absolute', left: 1, top: 278, width: 1073, height: 1 }} aria-hidden="true" />
            <div style={{ position: 'absolute', left: 415, top: 0, width: 96, height: 223 }}>
              <p className="typo-66" style={{ position: 'absolute', left: 0, top: 0, width: 90, height: 18, margin: 0, color: 'var(--color-color_222222)' }}>Quick links</p>
              <p className="typo-67" style={{ position: 'absolute', left: 0, top: 43, width: 94, height: 180, margin: 0, color: 'rgba(34,34,34,0.8)', whiteSpace: 'pre-line' }}>Home

About

Contact

Why choose us

Privacy Policy

Team</p>
            </div>
            <div style={{ position: 'absolute', left: 576, top: 0, width: 78, height: 187 }}>
              <p className="typo-66" style={{ position: 'absolute', left: 0, top: 0, width: 71, height: 18, margin: 0 }}>Products</p>
              <p className="typo-67" style={{ position: 'absolute', left: 0, top: 43, width: 73, height: 150, margin: 0, whiteSpace: 'pre-line' }}>Tomatoes

Mangoes

Red cheries

Banana

Carrots</p>
            </div>
            <div style={{ position: 'absolute', left: 719, top: 0, width: 220, height: 100 }}>
              <p className="typo-66" style={{ position: 'absolute', left: 0, top: 0, width: 92, height: 18, margin: 0 }}>Contact Us</p>
              <div style={{ position: 'absolute', left: 0, top: 49, width: 220, height: 18 }}>
                <span className="typo-68" style={{ position: 'absolute', left: 0, top: 0, width: 102, height: 14 }}>Business inquiry:</span>
                <span className="typo-69" style={{ position: 'absolute', left: 117, top: 0, width: 82, height: 14 }}>123-456-7890</span>
              </div>
              <div style={{ position: 'absolute', left: 0, top: 82, width: 193, height: 18 }}>
                <span className="typo-68" style={{ position: 'absolute', left: 0, top: 0, width: 94, height: 14 }}>Customer care:</span>
                <span className="typo-69" style={{ position: 'absolute', left: 106, top: 0, width: 82, height: 14 }}>123-456-7890</span>
              </div>
            </div>
            <div style={{ position: 'absolute', left: 0, top: 6, width: 172, height: 40 }} aria-label="Farmino Logo">
              <div style={{ position: 'absolute', left: 0, top: 0, width: 172, height: 40 }}>
                <div className="style-8" style={{ position: 'absolute', left: 0, top: 0, width: 20, height: 20 }} aria-hidden="true" />
                <div className="style-8" style={{ position: 'absolute', left: 20, top: 20, width: 20, height: 20 }} aria-hidden="true" />
                <div className="style-2" style={{ position: 'absolute', left: 20, top: 0, width: 20, height: 20 }} aria-hidden="true" />
                <div className="style-2" style={{ position: 'absolute', left: 0, top: 20, width: 20, height: 20 }} aria-hidden="true" />
              </div>
              <span className="typo-45" style={{ position: 'absolute', left: 49, top: 11, width: 111, height: 20 }}>Farmino</span>
            </div>
            <p className="typo-65" style={{ position: 'absolute', left: 417, top: 231, width: 239, height: 14, margin: 0 }}>© 2022 Farmino | All Rights Reserved</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

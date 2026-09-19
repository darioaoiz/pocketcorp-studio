/** Branding and outbound links, kept in one place so they're easy to change. */

export const BRAND = {
  name: "PocketCorp Studio",
  short: "PocketCorp",
  tagline: "Pay-per-generation image and video studio",
};

/**
 * Where the home-page banner sends people to create a key.
 *
 * `console.higgsfield.ai` is the real API console — the authentication docs
 * point there, and `cloud.higgsfield.ai` redirects to it. No referral code
 * here: this fork isn't enrolled in Higgsfield's affiliate program.
 */
export const AFFILIATE = {
  label: "Grab Your API Keys",
  display: "higgsfield.ai",
  href: "https://higgsfield.ai/",
};

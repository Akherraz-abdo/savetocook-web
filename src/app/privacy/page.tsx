import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout from "@/components/LegalLayout";
import {
  APP_NAME,
  CONTACT_EMAIL,
  SUPPORT_EMAIL,
  TERMS_URL,
} from "@/lib/constants";
import { ACCOUNT_DELETION_TEXT } from "@/lib/plans";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${APP_NAME}.`,
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy">
      <p>
        Last updated: June 2024. This Privacy Policy describes how {APP_NAME} collects, uses,
        and protects your information when you use our mobile application and website.
      </p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li>
          <strong>Account information:</strong> email address and authentication data when you
          sign up (via our authentication provider).
        </li>
        <li>
          <strong>Recipe &amp; app data:</strong> recipes you save, collections, meal plans,
          grocery lists, preferences (diet, allergies, servings), and usage of premium features.
        </li>
        <li>
          <strong>Subscription data:</strong> subscription status synced from the App Store
          via our subscription provider.
        </li>
        <li>
          <strong>Support communications:</strong> messages you send to{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
        </li>
      </ul>

      <h2>2. How We Use Information</h2>
      <p>We use your information to:</p>
      <ul>
        <li>Provide and improve {APP_NAME} features</li>
        <li>Sync your recipes and lists across devices</li>
        <li>Process AI recipe generation and import requests you initiate</li>
        <li>Manage subscriptions and premium access</li>
        <li>Respond to support requests</li>
        <li>Send optional meal-plan reminders if you enable them</li>
      </ul>

      <h2>3. AI &amp; Third-Party Services</h2>
      <p>
        {APP_NAME} uses third-party services for authentication, cloud database hosting, AI
        processing, and subscription management. Content you submit for AI features (such as
        recipe text or images) is processed to generate results you request. We do not sell your
        personal data.
      </p>

      <h2>4. Data Storage &amp; Security</h2>
      <p>
        Your data is stored on secure cloud infrastructure with industry-standard protections.
        While we take reasonable measures to protect your information, no system is completely
        secure.
      </p>

      <h2>5. Your Choices</h2>
      <ul>
        <li>Update preferences and notification settings in the app</li>
        <li>Export or manage your data by contacting support</li>
        <li>
          Delete your account from Settings. {ACCOUNT_DELETION_TEXT}
        </li>
      </ul>

      <h2>6. Children</h2>
      <p>
        {APP_NAME} is not directed at children under 13. We do not knowingly collect personal
        information from children.
      </p>

      <h2>7. Changes</h2>
      <p>
        We may update this policy from time to time. Continued use of {APP_NAME} after changes
        constitutes acceptance of the updated policy.
      </p>

      <h2>8. Contact</h2>
      <p>
        Privacy questions: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. See our{" "}
        <Link href={TERMS_URL}>Terms of Service</Link> for subscription and usage terms.
      </p>
    </LegalLayout>
  );
}
